"""Generate the OCSF LinkML schema from the upstream OCSF JSON sources.

Reads ``upstream/ocsf-schema/`` and emits a modular LinkML schema under
``src/ocsf/schema/`` that mirrors the upstream module layout one-for-one:

    src/ocsf/schema/
    ├── ocsf.yaml            (root entrypoint)
    ├── types.yaml           (from dictionary.json/types)
    ├── dictionary.yaml      (slots from dictionary.json/attributes)
    ├── enums.yaml           (enums extracted from dictionary + classes)
    ├── categories.yaml      (CategoryUidEnum + abstract category classes)
    ├── objects.yaml         (177 object classes)
    ├── profiles/            (one file per upstream profile)
    │   └── <name>.yaml
    ├── events/              (one file per upstream category)
    │   ├── base_event.yaml
    │   └── <category>.yaml
    └── extensions/          (one file per upstream extension)
        └── <name>.yaml

Usage:
    python -m tools.generate_ocsf_schema \\
        --upstream upstream/ocsf-schema \\
        --out src/ocsf/schema
"""
from __future__ import annotations

import argparse
import json
import re
import textwrap
from collections import OrderedDict
from pathlib import Path
from typing import Any

import yaml

# ---------------------------------------------------------------------------
# YAML emission: keep insertion order, indent block lists, wrap long strings.
# ---------------------------------------------------------------------------


class _OrderedDumper(yaml.SafeDumper):
    def increase_indent(self, flow=False, indentless=False):
        return super().increase_indent(flow=flow, indentless=False)


def _dict_representer(dumper, data):
    return dumper.represent_mapping("tag:yaml.org,2002:map", data.items())


def _str_representer(dumper, data):
    if len(data) > 60 and "\n" not in data:
        data = textwrap.fill(data, width=79, break_on_hyphens=False, break_long_words=False)
    if "\n" in data:
        return dumper.represent_scalar("tag:yaml.org,2002:str", data, style="|")
    return dumper.represent_scalar("tag:yaml.org,2002:str", data)


_OrderedDumper.add_representer(OrderedDict, _dict_representer)
_OrderedDumper.add_representer(dict, _dict_representer)
_OrderedDumper.add_representer(str, _str_representer)


def yaml_dump(obj: Any) -> str:
    return yaml.dump(
        obj,
        Dumper=_OrderedDumper,
        default_flow_style=False,
        sort_keys=False,
        width=10000,
        allow_unicode=True,
    )


# Top-level keys that should be preceded by a blank line (standalone blocks).
_STANDALONE_TOP_KEYS = frozenset({
    "annotations",
    "prefixes",
    "see_also",
    "imports",
    "types",
    "subsets",
    "enums",
    "slots",
    "classes",
})

# Blocks where a blank line should also appear before each first-level item.
_ITEM_SEPARATOR_BLOCKS = frozenset({
    "types", "subsets", "enums", "slots", "classes",
})


def _format_yaml(raw: str) -> str:
    """Format raw YAML for readability.

    Inserts a blank line before each top-level standalone block key and
    between first-level items in separator blocks (types, enums, classes,
    slots, subsets).
    """
    lines = raw.splitlines()
    out: list[str] = []
    in_item_block = False

    for line in lines:
        if not line:
            out.append(line)
            continue

        indent = len(line) - len(line.lstrip())

        if indent == 0 and ":" in line:
            key = line.split(":")[0].rstrip()
            # Blank line before every top-level standalone block.
            if key in _STANDALONE_TOP_KEYS and out and out[-1].strip() != "":
                out.append("")
            in_item_block = key in _ITEM_SEPARATOR_BLOCKS
        elif in_item_block and indent == 2 and not line.lstrip().startswith("- "):
            # First-level named item within a separator block (class, slot, …).
            if out and out[-1].strip() != "":
                out.append("")

        out.append(line)

    result = "\n".join(out)
    return result if result.endswith("\n") else result + "\n"


# ---------------------------------------------------------------------------
# Naming helpers.
# ---------------------------------------------------------------------------

# Upstream attribute names that overlap with Python keywords and would cause
# ``gen-python`` to emit invalid syntax (``class: Optional[str]``). We rename
# them at the schema layer so every generator sees a consistent identifier.
_SLOT_RENAMES: dict[str, str] = {
    "class": "class_",
    "from": "from_",
}


def _strip_leading_underscore(name: str) -> str:
    return name.lstrip("_") or name


def to_pascal(name: str) -> str:
    """Convert ``snake_case_name`` → ``SnakeCaseName``."""
    name = _strip_leading_underscore(name)
    return "".join(p.capitalize() for p in re.split(r"[_/]+", name) if p)


def to_class_name(name: str) -> str:
    """Convert an OCSF class name (snake_case) to LinkML PascalCase."""
    return to_pascal(name)


def to_slot_name(name: str) -> str:
    """Slot names are kept snake_case but stripped of any leading underscore."""
    return _SLOT_RENAMES.get(name, _strip_leading_underscore(name))


def to_enum_name(slot: str, *, scope: str | None = None) -> str:
    """Build a LinkML enum class name.

    ``slot`` is the OCSF attribute name, e.g. ``severity_id``.
    ``scope`` (optional) is the class name when the enum is class-scoped, e.g.
    ``Finding`` → ``FindingActivityIdEnum``.
    """
    base = to_pascal(slot)
    return f"{scope}{base}Enum" if scope else f"{base}Enum"


def to_perm_value(caption: str) -> str:
    """Convert an OCSF enum caption (e.g. "In Progress") to UPPER_SNAKE."""
    cleaned = re.sub(r"[^A-Za-z0-9]+", "_", caption).strip("_").upper()
    return cleaned or "UNKNOWN"


def to_subset_name(name: str) -> str:
    """Normalize any identifier to snake_case with a ``_subset`` suffix.

    Handles PascalCase, camelCase, spaces, and hyphens. The ``_subset`` suffix
    guarantees that subset names never collide with PascalCase class names or
    plain snake_case slot names, even under case-folding generators.
    """
    s = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1_\2", name)
    s = re.sub(r"([a-z\d])([A-Z])", r"\1_\2", s)
    base = re.sub(r"[^a-z0-9]+", "_", s.lower()).strip("_")
    return base if base.endswith("_subset") else f"{base}_subset"


# ---------------------------------------------------------------------------
# OCSF type → LinkML range.
# ---------------------------------------------------------------------------

# Map base OCSF scalar types to LinkML built-ins. Anything not in this map is
# either a custom type defined in types.yaml or a reference to an OCSF object
# class (resolved later).
_SCALAR_TO_LINKML: dict[str, str] = {
    "string_t": "string",
    "integer_t": "integer",
    "long_t": "integer",
    "float_t": "float",
    "boolean_t": "boolean",
    "json_t": "string",
    "bytestring_t": "string",
    "datetime_t": "string",
    "timestamp_t": "TimestampT",
    "url_t": "UrlT",
    "ip_t": "IpT",
    "mac_t": "MacT",
    "email_t": "EmailT",
    "hostname_t": "HostnameT",
    "username_t": "UsernameT",
    "file_name_t": "FileNameT",
    "file_path_t": "FilePathT",
    "process_name_t": "string",
    "resource_uid_t": "string",
    "port_t": "PortT",
    "uuid_t": "UuidT",
    "subnet_t": "SubnetT",
    "file_hash_t": "string",
}


# ---------------------------------------------------------------------------
# Header / prefix helpers.
# ---------------------------------------------------------------------------

_PREFIXES: "OrderedDict[str, str]" = OrderedDict(
    [
        ("ocsf", "https://w3id.org/lmodel/ocsf/"),
        ("linkml", "https://w3id.org/linkml/"),
        ("schema", "http://schema.org/"),
        ("xsd", "http://www.w3.org/2001/XMLSchema#"),
        ("rdfs", "http://www.w3.org/2000/01/rdf-schema#"),
        ("dcterms", "http://purl.org/dc/terms/"),
        ("skos", "http://www.w3.org/2004/02/skos/core#"),
        # External vocabularies referenced by SSSOM cross-schema mappings.
        ("attack", "https://lmodel.github.io/attack/"),
        ("stix", "https://lmodel.github.io/stix/"),
        ("uco_master", "https://lmodel.github.io/uco-master/"),
        # Vulnerability/weakness/compliance domain schemas (ocsf-*.sssom.tsv).
        ("capec", "https://w3id.org/lmodel/capec/"),
        ("cve", "https://w3id.org/lmodel/cve/"),
        ("cwe", "https://w3id.org/lmodel/cwe/"),
        ("iso27001", "https://w3id.org/lmodel/iso27001/"),
        ("kev_catalog", "https://w3id.org/lmodel/kev-catalog/"),
        ("nvd", "https://w3id.org/lmodel/nist-nvd/"),
        ("core", "https://w3id.org/lmodel/vulnerability-core/"),
    ]
)


def _module_header(
    *,
    name: str,
    description: str,
    version: str,
    extra_imports: list[str] | None = None,
    id_suffix: str | None = None,
    source_dir: str | None = None,
) -> "OrderedDict[str, Any]":
    """Build a LinkML module header (id, prefixes, imports, ...)."""
    h: "OrderedDict[str, Any]" = OrderedDict()
    h["id"] = f"https://w3id.org/lmodel/ocsf/{id_suffix or name}"
    h["name"] = name
    h["description"] = description
    h["license"] = "Apache-2.0"
    _source_base = "https://github.com/ocsf/ocsf-schema/tree/main"
    h["source"] = f"{_source_base}/{source_dir}" if source_dir else _source_base
    h["version"] = version
    h["annotations"] = OrderedDict(copyright="Source schema \u00a9 OCSF a Series of LF Projects, LLC")
    h["prefixes"] = OrderedDict(_PREFIXES)
    h["default_prefix"] = "ocsf"
    h["default_range"] = "string"
    imports = ["linkml:types"]
    if extra_imports:
        imports.extend(extra_imports)
    h["imports"] = imports
    return h


# ---------------------------------------------------------------------------
# Upstream loader.
# ---------------------------------------------------------------------------


class Upstream:
    """In-memory view of the upstream OCSF JSON sources."""

    def __init__(self, root: Path):
        self.root = root
        self.version = self._read_json(root / "version.json")["version"]
        self.dictionary = self._read_json(root / "dictionary.json")
        self.categories = self._read_json(root / "categories.json")
        self.events = self._load_tree(root / "events")
        self.objects = self._load_dir(root / "objects")
        self.profiles = self._load_dir(root / "profiles")
        self.extensions = self._load_extensions(root / "extensions")

    @staticmethod
    def _read_json(path: Path) -> dict[str, Any]:
        return json.loads(path.read_text())

    def _load_dir(self, d: Path) -> dict[str, dict[str, Any]]:
        out: dict[str, dict[str, Any]] = {}
        if not d.is_dir():
            return out
        for f in sorted(d.iterdir()):
            if f.suffix == ".json":
                payload = self._read_json(f)
                # name field may use a different stem than filename (e.g.
                # "_dns.json" with name "_dns"). Prefer the explicit name.
                key = payload.get("name", f.stem)
                out[key] = payload
        return out

    def _load_tree(self, d: Path) -> dict[str, dict[str, Any]]:
        """Load events into a flat ``{name: payload}`` mapping.

        Each payload gets a synthetic ``__category__`` key derived from the
        immediate parent directory (e.g. ``events/findings/finding.json`` →
        category ``findings``). OCSF only records ``category`` on the
        category root; descendant events inherit it from the directory.
        """
        out: dict[str, dict[str, Any]] = {}
        if not d.is_dir():
            return out
        for f in sorted(d.rglob("*.json")):
            payload = self._read_json(f)
            # The base_event sits directly in events/ — assign category 'base'.
            cat = f.parent.name if f.parent != d else (payload.get("category") or "base")
            payload["__category__"] = cat
            key = payload.get("name", f.stem)
            out[key] = payload
        return out

    def _load_extensions(self, d: Path) -> dict[str, dict[str, Any]]:
        out: dict[str, dict[str, Any]] = {}
        if not d.is_dir():
            return out
        for ext_dir in sorted(d.iterdir()):
            if not ext_dir.is_dir():
                continue
            manifest_p = ext_dir / "extension.json"
            if not manifest_p.exists():
                continue
            ext = {
                "manifest": self._read_json(manifest_p),
                "objects": self._load_dir(ext_dir / "objects"),
                "events": self._load_tree(ext_dir / "events"),
                "profiles": self._load_dir(ext_dir / "profiles"),
            }
            dictionary_p = ext_dir / "dictionary.json"
            if dictionary_p.exists():
                ext["dictionary"] = self._read_json(dictionary_p)
            out[ext_dir.name] = ext
        return out


# ---------------------------------------------------------------------------
# Enum extraction from inline ``enum`` blocks.
# ---------------------------------------------------------------------------


def _extract_enum(
    values: dict[str, Any],
    description: str | None,
    *,
    base_values: dict[str, Any] | None = None,
) -> "OrderedDict[str, Any]":
    """Convert an OCSF inline ``enum`` block to a LinkML EnumDefinition body.

    When ``base_values`` is provided, codes present in the base but not in the
    class-scoped ``values`` are merged in. This implements the OCSF semantic
    that class-scoped enum overrides EXTEND (rather than replace) the
    dictionary-level base — most notably the ``0/Unknown`` and ``99/Other``
    values inherited from ``base_event.activity_id`` (and similar slots).
    Without the merge, child events would reject ``UNKNOWN`` even though OCSF
    treats it as universally available.
    """
    # Merge order: emit the local (class-scoped) codes first to preserve their
    # source order, then append any base-only codes not redefined locally.
    ordered: "OrderedDict[str, dict[str, Any]]" = OrderedDict()
    for code, body in values.items():
        ordered[str(code)] = body
    if base_values:
        for code, body in base_values.items():
            if str(code) not in ordered:
                ordered[str(code)] = body

    pvs: "OrderedDict[str, Any]" = OrderedDict()
    for code, body in ordered.items():
        caption = body.get("caption", code)
        sym = to_perm_value(caption)
        # Disambiguate symbol collisions by appending the code.
        if sym in pvs:
            sym = f"{sym}_{code}"
        entry: "OrderedDict[str, Any]" = OrderedDict()
        if body.get("description"):
            entry["description"] = body["description"]
        else:
            entry["description"] = caption
        entry["annotations"] = {"ocsf_uid": code, "caption": caption}
        pvs[sym] = entry
    out: "OrderedDict[str, Any]" = OrderedDict()
    if description:
        out["description"] = description
    out["permissible_values"] = pvs
    return out


# ---------------------------------------------------------------------------
# SSSOM mappings loader — bring class-level *_mappings into the schema.
# ---------------------------------------------------------------------------

# SKOS predicate (from the SSSOM `predicate_id` column) → LinkML mapping slot.
_PREDICATE_TO_MAPPING_SLOT = {
    "skos:exactMatch":   "exact_mappings",
    "skos:closeMatch":   "close_mappings",
    "skos:narrowMatch":  "narrow_mappings",
    "skos:broadMatch":   "broad_mappings",
    "skos:relatedMatch": "related_mappings",
}


def load_sssom_mappings(mappings_dir: Path) -> dict[str, dict[str, list[str]]]:
    """Read every ``*.sssom.tsv`` under ``mappings_dir`` and aggregate per-class.

    Returns a mapping ``{ocsf_class_name: {linkml_mapping_slot: [object_curies]}}``.
    Lines starting with ``#`` are SSSOM YAML metadata and are skipped here —
    we only need the rows. The first non-comment line is the column header.
    """
    out: dict[str, dict[str, list[str]]] = {}
    if not mappings_dir.is_dir():
        return out
    for f in sorted(mappings_dir.glob("*.sssom.tsv")):
        header: list[str] | None = None
        for raw in f.read_text().splitlines():
            line = raw.rstrip("\n")
            if not line or line.startswith("#"):
                continue
            cols = line.split("\t")
            if header is None:
                header = cols
                continue
            row = dict(zip(header, cols))
            subj = row.get("subject_id", "")
            if not subj.startswith("ocsf:"):
                continue
            cls = subj.split(":", 1)[1]
            slot = _PREDICATE_TO_MAPPING_SLOT.get(row.get("predicate_id", ""))
            if not slot:
                continue
            obj = row.get("object_id", "").strip()
            if not obj:
                continue
            out.setdefault(cls, {}).setdefault(slot, []).append(obj)
    return out


# ---------------------------------------------------------------------------
# Enrichment helpers — convert OCSF metaschema features into LinkML idioms.
# ---------------------------------------------------------------------------


_URI_UNSAFE = re.compile(r"[ \t]")  # rare but seen in OCSF doc anchors
_URI_VALID = re.compile(r"^[a-zA-Z][a-zA-Z0-9+.\-]*:[^\s'\"<>{}|\\^`]+$")


def _safe_url(url: str) -> str | None:
    """Return a LinkML-safe URL or ``None`` if it can't be reasonably cleaned.

    Some OCSF reference entries contain HTML fragments (e.g. ``href='https://…``)
    or stray characters — those are dropped rather than smuggled into
    ``see_also`` lists where LinkML's URIorCURIE validator would reject the
    schema.
    """
    cleaned = _URI_UNSAFE.sub("%20", url.strip())
    if _URI_VALID.match(cleaned):
        return cleaned
    return None


def _references_to_see_also(refs: list[dict[str, Any]] | None) -> list[str]:
    """Convert OCSF ``references: [{description, url}, ...]`` to LinkML ``see_also`` URLs."""
    out: list[str] = []
    for r in refs or []:
        url = r.get("url") if isinstance(r, dict) else None
        if url:
            safe = _safe_url(url)
            if safe is not None:
                out.append(safe)
    return out


def _references_to_notes(refs: list[dict[str, Any]] | None) -> list[str]:
    """Capture the human-readable description from each reference as a note."""
    out: list[str] = []
    for r in refs or []:
        if not isinstance(r, dict):
            continue
        desc = r.get("description")
        url = r.get("url")
        if desc and url:
            out.append(f"{desc} — {url}")
        elif desc:
            out.append(desc)
        elif url:
            out.append(url)
    return out


def _apply_deprecated(target: dict[str, Any], dep: dict[str, Any] | None) -> None:
    """Translate OCSF ``@deprecated`` to LinkML ``deprecated`` + version note."""
    if not dep:
        return
    msg = dep.get("message", "")
    since = dep.get("since")
    if msg and since:
        target["deprecated"] = f"{msg} (since {since})"
    elif msg:
        target["deprecated"] = msg
    elif since:
        target["deprecated"] = f"deprecated since {since}"


def _constraints_to_rules(
    constraints: dict[str, Any] | None,
) -> list[dict[str, Any]]:
    """Convert OCSF ``constraints`` to LinkML class-level rules.

    OCSF supports two forms:

    * ``at_least_one: [a, b, c]`` — at least one of the named slots must be set
    * ``just_one:     [a, b, c]`` — exactly one of the named slots must be set

    LinkML expresses both via ``rules`` with ``any_of`` / ``exactly_one_of``
    over slot ``conditions: {required: true}``. This is the closest LinkML
    idiom; ``just_one`` is approximated by ``exactly_one_of`` with the same
    shape.
    """
    rules: list[dict[str, Any]] = []
    for kind, slots in (constraints or {}).items():
        if not slots:
            continue
        slot_names = [to_slot_name(s) for s in slots]
        if kind == "at_least_one":
            postconds = OrderedDict(any_of=[
                OrderedDict(slot_conditions=OrderedDict({sn: OrderedDict(required=True)}))
                for sn in slot_names
            ])
            rules.append(OrderedDict(
                postconditions=postconds,
                description=f"OCSF at_least_one: at least one of {slot_names} must be set.",
            ))
        elif kind == "just_one":
            postconds = OrderedDict(exactly_one_of=[
                OrderedDict(slot_conditions=OrderedDict({sn: OrderedDict(required=True)}))
                for sn in slot_names
            ])
            rules.append(OrderedDict(
                postconditions=postconds,
                description=f"OCSF just_one: exactly one of {slot_names} must be set.",
            ))
        else:
            # Unknown constraint kind — preserve as annotation by the caller.
            continue
    return rules


# ---------------------------------------------------------------------------
# Subset helpers.
# ---------------------------------------------------------------------------

# Keys that mark where the "structural" body of a class begins; in_subset is
# inserted just before the first of these that appears in the OrderedDict.
_STRUCTURAL_KEYS = frozenset({
    "slots", "slot_usage", "rules", "see_also", "notes",
    "exact_mappings", "close_mappings", "broad_mappings",
    "narrow_mappings", "related_mappings", "annotations",
    "unique_keys", "defining_slots",
})


def _with_in_subset(
    cls: "OrderedDict[str, Any]", subsets: list[str]
) -> "OrderedDict[str, Any]":
    """Return *cls* rebuilt with ``in_subset`` inserted before structural keys."""
    subsets = [to_subset_name(s) for s in subsets]
    new: "OrderedDict[str, Any]" = OrderedDict()
    inserted = False
    for k, v in cls.items():
        if not inserted and k in _STRUCTURAL_KEYS:
            new["in_subset"] = subsets
            inserted = True
        new[k] = v
    if not inserted:
        new["in_subset"] = subsets
    return new


# ---------------------------------------------------------------------------
# Builders — emit individual LinkML modules.
# ---------------------------------------------------------------------------


def build_types(upstream: Upstream) -> str:
    """Emit ``types.yaml`` (custom scalar types from dictionary.json/types)."""
    header = _module_header(
        name="ocsf-types",
        description="Scalar type definitions derived from the OCSF Attribute Dictionary types section.",
        version=upstream.version,
        id_suffix="types",
        source_dir="",
    )
    types: "OrderedDict[str, Any]" = OrderedDict()

    # Hand-authored complement to the upstream type table so we can map type-
    # names directly to LinkML ranges. These are referenced from
    # ``_SCALAR_TO_LINKML`` above.
    types["TimestampT"] = OrderedDict(
        typeof="integer",
        uri="xsd:long",
        base="int",
        description="A UNIX timestamp, in milliseconds since the Unix Epoch (1 Jan 1970 00:00:00 UTC).",
    )
    types["UrlT"] = OrderedDict(uri="xsd:anyURI", base="str", description="A Uniform Resource Locator (URL).")
    types["IpT"] = OrderedDict(
        uri="xsd:string",
        base="str",
        pattern=r"^((\d{1,3}\.){3}\d{1,3}|[0-9a-fA-F:]{2,39})$",
        description="An IP address, in either IPv4 or IPv6 format.",
    )
    types["MacT"] = OrderedDict(
        uri="xsd:string",
        base="str",
        pattern=r"^([0-9a-fA-F]{2}[:\-]){5}[0-9a-fA-F]{2}$",
        description="A MAC (Media Access Control) address.",
    )
    types["EmailT"] = OrderedDict(
        uri="xsd:string",
        base="str",
        pattern=r"^[\w.+\-]+@[\w\-]+(\.[\w\-]+)+$",
        description="An email address.",
    )
    types["HostnameT"] = OrderedDict(uri="xsd:string", base="str", description="A fully qualified domain name (FQDN).")
    types["UsernameT"] = OrderedDict(uri="xsd:string", base="str", description="A user name.")
    types["FileNameT"] = OrderedDict(uri="xsd:string", base="str", description="A file name.")
    types["FilePathT"] = OrderedDict(uri="xsd:string", base="str", description="A file path.")
    types["PortT"] = OrderedDict(
        uri="xsd:integer",
        base="int",
        minimum_value=0,
        maximum_value=65535,
        description="A TCP/UDP port number (0-65535).",
    )
    types["UuidT"] = OrderedDict(
        uri="xsd:string",
        base="str",
        pattern=r"^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
        description="A Universally Unique Identifier (UUID).",
    )
    types["SubnetT"] = OrderedDict(
        uri="xsd:string",
        base="str",
        pattern=r"^((\d{1,3}\.){3}\d{1,3}|[0-9a-fA-F:]{2,39})/(\d|[1-9]\d|1[0-1]\d|12[0-8])$",
        description="An IP subnet in CIDR notation.",
    )

    out = OrderedDict(header)
    out["types"] = types
    return _format_yaml(yaml_dump(out))


# Identifier-like slot names that should map to ``identifier: true`` on the
# class. OCSF treats ``uid`` as a primary key conceptually, but doesn't enforce
# its presence — so we don't promote any slot to LinkML ``identifier`` here.
# (LinkML's ``identifier: true`` requires ``required: true``, which OCSF
# generally doesn't.) See: https://linkml.io/linkml/schemas/identifiers.html.
_IDENTIFIER_SLOTS: set[str] = set()


def _resolve_range(
    type_name: str,
    *,
    object_names: set[str],
    obj_rename: dict[str, str] | None = None,
) -> str:
    """Map an OCSF attribute ``type`` to a LinkML ``range`` value."""
    if type_name in _SCALAR_TO_LINKML:
        return _SCALAR_TO_LINKML[type_name]
    if type_name in object_names:
        if obj_rename and type_name in obj_rename:
            return obj_rename[type_name]
        return to_class_name(type_name)
    # Fallback to string for unknown / extension-only types.
    return "string"


def build_dictionary_and_enums(
    upstream: Upstream,
    *,
    obj_rename: dict[str, str] | None = None,
) -> tuple[str, str, dict[str, str]]:
    """Emit ``dictionary.yaml`` (slots) and ``enums.yaml``.

    Returns a tuple ``(dictionary_yaml, enums_yaml, slot_enum_map)`` where
    ``slot_enum_map`` is a mapping from slot name → enum class name when an
    inline enum was extracted at the dictionary layer.
    """
    object_names = set(upstream.objects.keys())
    obj_rename = obj_rename or {}

    # -- enums.yaml -------------------------------------------------------
    enums: "OrderedDict[str, Any]" = OrderedDict()
    slot_enum_map: dict[str, str] = {}

    # Slots (dictionary attributes) ---------------------------------------
    slots: "OrderedDict[str, Any]" = OrderedDict()
    for slot_name, body in upstream.dictionary["attributes"].items():
        sname = to_slot_name(slot_name)
        slot_def: "OrderedDict[str, Any]" = OrderedDict()
        if body.get("description"):
            slot_def["description"] = body["description"]
        # Extract any inline enum first so we can use the enum as the range.
        if "enum" in body:
            ename = to_enum_name(slot_name)
            enums[ename] = _extract_enum(body["enum"], body.get("description"))
            slot_enum_map[sname] = ename
            slot_def["range"] = ename
        else:
            slot_def["range"] = _resolve_range(
                body.get("type", "string_t"),
                object_names=object_names,
                obj_rename=obj_rename,
            )
        if body.get("is_array"):
            slot_def["multivalued"] = True
        if sname in _IDENTIFIER_SLOTS:
            slot_def["identifier"] = True
        # Aliases — the upstream caption is the human-readable display name.
        if body.get("caption"):
            slot_def["aliases"] = [body["caption"]]
        # See-also URLs from the upstream `references` list.
        see_also = _references_to_see_also(body.get("references"))
        if see_also:
            slot_def["see_also"] = see_also
        notes = _references_to_notes(body.get("references"))
        if notes:
            slot_def["notes"] = notes
        # Deprecation marker.
        _apply_deprecated(slot_def, body.get("@deprecated"))
        # Observable id (only present on a handful of slots).
        if "observable" in body:
            slot_def.setdefault("annotations", OrderedDict())["observable_id"] = body["observable"]
        # Sibling pairing (e.g. ``severity_id`` ↔ ``severity``) — preserved
        # so downstream tooling can re-establish the enum/string twin pattern.
        if body.get("sibling"):
            slot_def.setdefault("annotations", OrderedDict())["sibling"] = body["sibling"]
        # Origin extension and validation suppression flags.
        if body.get("source"):
            slot_def.setdefault("annotations", OrderedDict())["ocsf_source"] = body["source"]
        if body.get("suppress_checks"):
            slot_def.setdefault("annotations", OrderedDict())["suppress_checks"] = ",".join(body["suppress_checks"])
        slots[sname] = slot_def

    # Add a synthetic "id" identifier slot so every class has one. The
    # OCSF dictionary uses ``uid`` (already marked above) as primary key, but
    # LinkML wants a single ``identifier`` slot that we can also reference
    # for stable routing in JSON-LD.
    # (Already covered by ``uid`` so we just leave a comment.)

    dict_header = _module_header(
        name="ocsf-dictionary",
        description="Slot definitions derived from the OCSF Attribute Dictionary (dictionary.json).",
        version=upstream.version,
        extra_imports=["./types", "./enums"],
        id_suffix="dictionary",
        source_dir="",
    )
    dict_out = OrderedDict(dict_header)
    dict_out["slots"] = slots

    enums_header = _module_header(
        name="ocsf-enums",
        description="Enumeration types extracted from the OCSF Attribute Dictionary and class definitions.",
        version=upstream.version,
        id_suffix="enums",
        source_dir="",
    )
    enums_out = OrderedDict(enums_header)
    enums_out["enums"] = enums

    return _format_yaml(yaml_dump(dict_out)), _format_yaml(yaml_dump(enums_out)), slot_enum_map


def build_categories(upstream: Upstream) -> str:
    """Emit ``categories.yaml`` (CategoryUidEnum + abstract category classes)."""
    header = _module_header(
        name="ocsf-categories",
        description="Event category enumeration and abstract per-category base classes.",
        version=upstream.version,
        id_suffix="categories",
        source_dir="",
    )
    cat_pvs: "OrderedDict[str, Any]" = OrderedDict()
    for cname, body in upstream.categories["attributes"].items():
        sym = to_perm_value(body.get("caption", cname))
        cat_pvs[sym] = OrderedDict(
            description=body.get("description", body.get("caption", cname)),
            annotations=OrderedDict(ocsf_uid=body["uid"], category=cname),
        )

    enums = OrderedDict(
        CategoryUidEnum=OrderedDict(
            description="The normalized OCSF event category (see categories.json).",
            permissible_values=cat_pvs,
        )
    )
    out = OrderedDict(header)
    out["enums"] = enums
    return _format_yaml(yaml_dump(out))


# ---------------------------------------------------------------------------
# Class emission (events/objects/profiles/extensions).
# ---------------------------------------------------------------------------


def _profile_class_name(profile_ref: str) -> str:
    """Map an OCSF profile reference (``cloud``, ``macos/macos_users``, …) to
    the canonical LinkML class name.

    The basename is used so that ``$include: profiles/linux_users.json`` and
    ``profiles: ["linux/linux_users"]`` both resolve to ``LinuxUsersProfile``.
    """
    base = profile_ref.rsplit("/", 1)[-1]
    return f"{to_class_name(base)}Profile"


def _resolve_includes(attrs: dict[str, Any], _upstream: Upstream) -> tuple[dict[str, Any], list[str]]:
    """Pop the ``$include`` directive and return the cleaned attrs + profile names.

    The OCSF ``$include`` mechanism references profile JSON files whose
    attributes should logically be part of this class. In LinkML we model
    those as profile mixins, so we just collect the profile names here.
    """
    profiles_via_include: list[str] = []
    cleaned = {k: v for k, v in attrs.items() if k != "$include"}
    for ref in attrs.get("$include", []) or []:
        # ref looks like "profiles/cloud.json" or "profiles/<ext>/<name>.json".
        m = re.match(r"profiles/(.+?)\.json$", ref)
        if m:
            profiles_via_include.append(m.group(1))
    return cleaned, profiles_via_include


def _build_class(
    name: str,
    body: dict[str, Any],
    *,
    upstream: Upstream,
    is_event: bool,
    object_names: set[str],
    extracted_enums: "OrderedDict[str, Any]",
    slot_enum_map: dict[str, str],
    rename_map: dict[str, str] | None = None,
    sssom_mappings: dict[str, dict[str, list[str]]] | None = None,
    cls_name_override: str | None = None,
) -> "OrderedDict[str, Any]":
    """Convert one OCSF event/object payload into a LinkML class definition.

    ``rename_map`` lets the caller override the LinkML class name produced for
    a given OCSF parent name (e.g. ``system`` → ``SystemEvent``).
    ``sssom_mappings`` is the aggregate of all loaded SSSOM TSVs; the lookup
    key is the final LinkML class name (so mapping curators can target
    renamed classes like ``FindingObject`` directly).
    """
    cls_name = cls_name_override or to_class_name(name)
    rename_map = rename_map or {}
    sssom_mappings = sssom_mappings or {}
    cls: "OrderedDict[str, Any]" = OrderedDict()
    if body.get("description"):
        cls["description"] = body["description"]
    # Caption → alias (human-readable display name).
    if body.get("caption"):
        cls["aliases"] = [body["caption"]]
    # Deprecation marker.
    _apply_deprecated(cls, body.get("@deprecated"))

    # Inheritance.
    parent = body.get("extends")
    if parent:
        cls["is_a"] = rename_map.get(parent, to_class_name(parent))
    elif is_event and name != "base_event":
        cls["is_a"] = "BaseEvent"

    # Profile mixins (named in profiles[] OR via $include). Different profile
    # references can resolve to the same LinkML class (e.g. ``linux/linux_users``
    # and ``linux_users`` both → ``LinuxUsersProfile``); de-dup by class name.
    attrs, includes = _resolve_includes(body.get("attributes", {}) or {}, upstream)
    declared_profiles = list(body.get("profiles", []) or [])
    seen: set[str] = set()
    mixins: list[str] = []
    for ref in declared_profiles + includes:
        cn = _profile_class_name(ref)
        if cn not in seen:
            seen.add(cn)
            mixins.append(cn)
    if mixins:
        cls["mixins"] = mixins

    # Slots referenced by this class. We list every attribute name; refinement
    # happens through ``slot_usage``.
    referenced_slots: list[str] = []
    slot_usage: "OrderedDict[str, Any]" = OrderedDict()
    for attr_name, attr_body in attrs.items():
        sname = to_slot_name(attr_name)
        referenced_slots.append(sname)
        if not isinstance(attr_body, dict):
            continue
        usage: "OrderedDict[str, Any]" = OrderedDict()
        if attr_body.get("description"):
            usage["description"] = attr_body["description"]
        req = attr_body.get("requirement")
        if req == "required":
            usage["required"] = True
        elif req == "recommended":
            usage["recommended"] = True
        # Class-scoped enum override. Merge in any dictionary-level base values
        # (e.g. activity_id's 0/Unknown + 99/Other) so the override extends
        # rather than replaces the base — matching OCSF semantics.
        if "enum" in attr_body:
            ename = to_enum_name(attr_name, scope=cls_name)
            base_enum = (
                upstream.dictionary.get("attributes", {})
                .get(attr_name, {})
                .get("enum")
            )
            extracted_enums[ename] = _extract_enum(
                attr_body["enum"],
                attr_body.get("description") or f"{cls_name} {attr_name} values.",
                base_values=base_enum,
            )
            usage["range"] = ename
        if attr_body.get("group"):
            usage.setdefault("annotations", OrderedDict())["group"] = attr_body["group"]
        if attr_body.get("@deprecated"):
            usage["deprecated"] = attr_body["@deprecated"].get("message", "deprecated")
        if usage:
            slot_usage[sname] = usage

    if referenced_slots:
        cls["slots"] = referenced_slots
    if slot_usage:
        cls["slot_usage"] = slot_usage

    # Constraints — translate ``at_least_one`` and ``just_one`` into LinkML
    # rules. Anything else (or the original raw payload) is stashed as an
    # annotation for round-tripping.
    constraints = body.get("constraints") or {}
    if constraints:
        rules = _constraints_to_rules(constraints)
        if rules:
            cls["rules"] = rules
        cls.setdefault("annotations", OrderedDict())["ocsf_constraints"] = json.dumps(constraints)

    # See_also from references; keep notes alongside.
    see_also = _references_to_see_also(body.get("references"))
    if see_also:
        cls["see_also"] = see_also
    notes = _references_to_notes(body.get("references"))
    if notes:
        cls["notes"] = notes

    # Observable id (used by the OCSF observable framework).
    if "observable" in body:
        cls.setdefault("annotations", OrderedDict())["observable_id"] = body["observable"]

    # Event-specific metadata: numeric uid (per-category), category, and
    # event/entity ``associations`` (kept as a structured annotation).
    if is_event and "uid" in body:
        cls.setdefault("annotations", OrderedDict())["ocsf_event_uid"] = body["uid"]
    if is_event and body.get("category"):
        cls.setdefault("annotations", OrderedDict())["category"] = body["category"]
    if is_event and body.get("associations"):
        cls.setdefault("annotations", OrderedDict())["associations"] = json.dumps(body["associations"])

    # SSSOM cross-schema mappings (ATT&CK, STIX, …) — keyed by the final
    # LinkML class name so curators can target renamed classes directly.
    cls_mappings = sssom_mappings.get(cls_name) or {}
    for mapping_slot in (
        "exact_mappings",
        "close_mappings",
        "narrow_mappings",
        "broad_mappings",
        "related_mappings",
    ):
        if mapping_slot in cls_mappings:
            cls[mapping_slot] = cls_mappings[mapping_slot]

    return cls


def compute_object_rename_map(upstream: Upstream) -> dict[str, str]:
    """Disambiguate objects whose name collides with an event class.

    OCSF allows an event and an object to share a name (``finding``,
    ``application``). LinkML does not. We suffix the object class with
    ``Object`` to break the tie; the event class keeps the bare name.
    """
    event_names = {n for n in upstream.events.keys()}
    out: dict[str, str] = {}
    for n in upstream.objects.keys():
        if n in event_names:
            out[n] = f"{to_class_name(n)}Object"
    return out


def build_objects(
    upstream: Upstream,
    slot_enum_map: dict[str, str],
    *,
    rename_map: dict[str, str] | None = None,
    sssom_mappings: dict[str, dict[str, list[str]]] | None = None,
) -> tuple[str, "OrderedDict[str, Any]"]:
    """Emit ``objects.yaml``. Returns (yaml_text, newly_extracted_enums)."""
    rename_map = rename_map or {}
    sssom_mappings = sssom_mappings or {}
    obj_rename = compute_object_rename_map(upstream)
    header = _module_header(
        name="ocsf-objects",
        description="OCSF object class definitions (177 reusable objects from upstream/objects/).",
        version=upstream.version,
        extra_imports=["./types", "./dictionary", "./enums"],
        id_suffix="objects",
        source_dir="objects",
    )
    object_names = set(upstream.objects.keys())
    extracted: "OrderedDict[str, Any]" = OrderedDict()

    # Synthetic root for every concrete object class. Provides the canonical
    # `id` identifier that LinkML expects.
    classes: "OrderedDict[str, Any]" = OrderedDict()
    classes["OcsfObject"] = _with_in_subset(
        OrderedDict(description="Abstract root for every OCSF object class.", abstract=True),
        ["objects"],
    )

    # Emit objects in dependency order: objects whose ``extends`` parent is
    # already declared come first. Two passes is sufficient for OCSF.
    pending = dict(upstream.objects)
    emitted = {"OcsfObject"}
    while pending:
        progressed = False
        for name in list(pending):
            body = pending[name]
            parent = body.get("extends")
            if parent and to_class_name(parent) not in emitted and parent in pending:
                continue
            cls_name = obj_rename.get(name, to_class_name(name))
            cls = _build_class(
                name,
                body,
                upstream=upstream,
                is_event=False,
                object_names=object_names,
                extracted_enums=extracted,
                slot_enum_map=slot_enum_map,
                rename_map={**rename_map, **obj_rename},
                sssom_mappings=sssom_mappings,
                cls_name_override=cls_name,
            )
            # If no parent declared, root under OcsfObject.
            if "is_a" not in cls:
                cls["is_a"] = "OcsfObject"
            classes[cls_name] = _with_in_subset(cls, ["objects"])
            emitted.add(cls_name)
            del pending[name]
            progressed = True
        if not progressed:  # cycle / unknown parent — emit remainder anyway
            for name, body in pending.items():
                cls_name = obj_rename.get(name, to_class_name(name))
                cls = _build_class(
                    name,
                    body,
                    upstream=upstream,
                    is_event=False,
                    object_names=object_names,
                    extracted_enums=extracted,
                    slot_enum_map=slot_enum_map,
                    rename_map={**rename_map, **obj_rename},
                    sssom_mappings=sssom_mappings,
                    cls_name_override=cls_name,
                )
                if "is_a" not in cls:
                    cls["is_a"] = "OcsfObject"
                classes[cls_name] = _with_in_subset(cls, ["objects"])
            break

    out = OrderedDict(header)
    out["classes"] = classes
    return _format_yaml(yaml_dump(out)), extracted


def _profile_class_def(name: str, body: dict[str, Any], *, ocsf_id: str | None = None) -> "OrderedDict[str, Any]":
    """Build a single LinkML mixin class from one OCSF profile JSON payload."""
    cls_name = _profile_class_name(name)  # noqa: F841 - returned via caller
    slot_usage: "OrderedDict[str, Any]" = OrderedDict()
    slot_list: list[str] = []
    for attr_name, attr_body in (body.get("attributes") or {}).items():
        if attr_name == "$include":
            continue
        sname = to_slot_name(attr_name)
        slot_list.append(sname)
        if isinstance(attr_body, dict):
            usage: "OrderedDict[str, Any]" = OrderedDict()
            req = attr_body.get("requirement")
            if req == "required":
                usage["required"] = True
            elif req == "recommended":
                usage["recommended"] = True
            if attr_body.get("description"):
                usage["description"] = attr_body["description"]
            if attr_body.get("group"):
                usage.setdefault("annotations", OrderedDict())["group"] = attr_body["group"]
            if usage:
                slot_usage[sname] = usage
    cls_def: "OrderedDict[str, Any]" = OrderedDict(
        description=body.get("description") or f"OCSF '{name}' profile.",
    )
    if body.get("caption"):
        cls_def["aliases"] = [body["caption"]]
    cls_def["mixin"] = True
    if slot_list:
        cls_def["slots"] = slot_list
    if slot_usage:
        cls_def["slot_usage"] = slot_usage
    annot: "OrderedDict[str, Any]" = OrderedDict()
    annot["ocsf_profile"] = ocsf_id or name
    # Pass-through any profile-level annotations (e.g. ``group: primary``).
    for k, v in (body.get("annotations") or {}).items():
        annot[k] = v
    cls_def["annotations"] = annot
    return cls_def


def build_profiles(upstream: Upstream) -> str:
    """Emit a single ``profiles.yaml`` containing every base-schema profile mixin."""
    header = _module_header(
        name="ocsf-profiles",
        description=(
            "OCSF profiles, expressed as LinkML mixins. Each upstream "
            "profile JSON (``profiles/<name>.json``) becomes one mixin class. "
            "Events and objects pick up profile slots via the ``mixins:`` list."
        ),
        version=upstream.version,
        extra_imports=["./dictionary", "./enums"],
        id_suffix="profiles",
        source_dir="profiles",
    )
    classes: "OrderedDict[str, Any]" = OrderedDict()
    for name, body in upstream.profiles.items():
        cls_name = _profile_class_name(name)
        cls_def = _profile_class_def(name, body, ocsf_id=name)
        classes[cls_name] = _with_in_subset(cls_def, [f"{name}_profile"])
    out = OrderedDict(header)
    out["classes"] = classes
    return _format_yaml(yaml_dump(out))


def compute_event_rename_map(upstream: Upstream) -> dict[str, str]:
    """Map OCSF event names that need an "Event" suffix to avoid collisions.

    Each category root file (e.g. ``system/system.json``) becomes
    ``SystemEvent`` in LinkML; descendants reference it via ``extends:
    system``, so we need the rename map at every emission site (events,
    objects, extensions).
    """
    by_cat: dict[str, list[str]] = {}
    for name, body in upstream.events.items():
        if name == "base_event":
            continue
        cat = body.get("__category__") or body.get("category") or "other"
        by_cat.setdefault(cat, []).append(name)
    rename_map: dict[str, str] = {}
    for cat, names in by_cat.items():
        for n in names:
            cls_name = to_class_name(n)
            if n == cat and not cls_name.endswith("Event"):
                rename_map[n] = f"{cls_name}Event"
    return rename_map


def build_events(
    upstream: Upstream,
    slot_enum_map: dict[str, str],
    *,
    rename_map: dict[str, str] | None = None,
    sssom_mappings: dict[str, dict[str, list[str]]] | None = None,
) -> tuple[str, "OrderedDict[str, Any]"]:
    """Emit a single ``events.yaml`` with every event class.

    Order: ``BaseEvent`` first, then one block per OCSF category (the root
    of each category, e.g. ``SystemEvent``, comes first in its block, then
    the descendants alphabetically). Categories are emitted in the upstream
    ordering recorded in ``categories.json``.
    """
    object_names = set(upstream.objects.keys())
    rename_map = rename_map or {}
    sssom_mappings = sssom_mappings or {}
    extracted: "OrderedDict[str, Any]" = OrderedDict()
    by_cat: dict[str, list[tuple[str, dict[str, Any]]]] = {}
    base_event = None

    for name, body in upstream.events.items():
        if name == "base_event":
            base_event = body
            continue
        cat = body.get("__category__") or body.get("category") or "other"
        by_cat.setdefault(cat, []).append((name, body))

    classes: "OrderedDict[str, Any]" = OrderedDict()

    # BaseEvent first.
    if base_event is not None:
        cls = _build_class(
            "base_event",
            base_event,
            upstream=upstream,
            is_event=True,
            object_names=object_names,
            extracted_enums=extracted,
            slot_enum_map=slot_enum_map,
            sssom_mappings=sssom_mappings,
            cls_name_override="BaseEvent",
        )
        cls.pop("is_a", None)
        classes["BaseEvent"] = cls

    # Then each category, in upstream `categories.json` order (so the file
    # diff is stable across regenerations).
    cat_order = list(upstream.categories.get("attributes", {}).keys())
    cat_order.extend(c for c in by_cat.keys() if c not in cat_order)
    for cat in cat_order:
        items = by_cat.get(cat) or []
        if not items:
            continue
        items_sorted = sorted(items, key=lambda kv: (kv[0] != cat, kv[0]))
        for name, body in items_sorted:
            cls_name = rename_map.get(name, to_class_name(name))
            cls = _build_class(
                name,
                body,
                upstream=upstream,
                is_event=True,
                object_names=object_names,
                extracted_enums=extracted,
                slot_enum_map=slot_enum_map,
                rename_map=rename_map,
                sssom_mappings=sssom_mappings,
                cls_name_override=cls_name,
            )
            if cat not in ("base", "other"):
                cls = _with_in_subset(cls, [cat])
            classes[cls_name] = cls

    header = _module_header(
        name="ocsf-events",
        description=(
            "OCSF event class definitions across every category. "
            "BaseEvent is the abstract root; each category root (e.g. "
            "SystemEvent, NetworkEvent) extends BaseEvent and is itself "
            "extended by concrete event classes."
        ),
        version=upstream.version,
        extra_imports=["./dictionary", "./enums", "./categories", "./profiles", "./objects"],
        id_suffix="events",
        source_dir="events",
    )
    doc = OrderedDict(header)
    doc["classes"] = classes
    return _format_yaml(yaml_dump(doc)), extracted


def build_extensions(
    upstream: Upstream,
    slot_enum_map: dict[str, str],
    *,
    rename_map: dict[str, str] | None = None,
    sssom_mappings: dict[str, dict[str, list[str]]] | None = None,
) -> tuple[str, "OrderedDict[str, Any]"]:
    """Emit a single ``extensions.yaml`` covering every platform extension.

    Slot definitions from each extension's ``dictionary.json`` are merged
    into a single ``slots:`` block. Classes are grouped by extension and
    prefixed with the extension name only when their bare name would
    collide with a base class (``windows/process`` → ``WindowsProcess``;
    ``windows/win_service`` stays ``WinService``).
    """
    # The full set of object names, including extension-defined ones, so range
    # resolution works for slots that point at extension objects.
    object_names = set(upstream.objects.keys())
    for ext in upstream.extensions.values():
        object_names |= set((ext.get("objects") or {}).keys())
    base_class_names = {to_class_name(n) for n in upstream.objects.keys()}
    base_class_names |= {to_class_name(n) for n in upstream.events.keys()}
    base_class_names |= set(rename_map.values() if rename_map else [])
    rename_map = rename_map or {}
    sssom_mappings = sssom_mappings or {}
    extracted: "OrderedDict[str, Any]" = OrderedDict()
    all_slots: "OrderedDict[str, Any]" = OrderedDict()
    all_classes: "OrderedDict[str, Any]" = OrderedDict()

    for ext_name, ext in upstream.extensions.items():
        ext_prefix = to_class_name(ext_name)

        def _ext_class_name(name: str, _prefix=ext_prefix) -> str:
            bare = to_class_name(name)
            if bare in base_class_names:
                return f"{_prefix}{bare}"
            return bare

        # Per-extension dictionary slots merged into the single slot map.
        ext_dict = ext.get("dictionary") or {}
        for slot_name, body in (ext_dict.get("attributes") or {}).items():
            sname = to_slot_name(slot_name)
            slot_def: "OrderedDict[str, Any]" = OrderedDict()
            if body.get("description"):
                slot_def["description"] = body["description"]
            if "enum" in body:
                ename = to_enum_name(slot_name, scope=to_class_name(ext_name))
                extracted[ename] = _extract_enum(body["enum"], body.get("description"))
                slot_def["range"] = ename
            else:
                slot_def["range"] = _resolve_range(body.get("type", "string_t"), object_names=object_names)
            if body.get("is_array"):
                slot_def["multivalued"] = True
            if body.get("caption"):
                slot_def["aliases"] = [body["caption"]]
            see_also = _references_to_see_also(body.get("references"))
            if see_also:
                slot_def["see_also"] = see_also
            _apply_deprecated(slot_def, body.get("@deprecated"))
            slot_def.setdefault("annotations", OrderedDict())["ocsf_extension"] = ext_name
            if slot_name in all_slots:
                # Two extensions defined the same slot name — keep the first
                # and stash the conflict on the existing entry's annotations.
                all_slots[slot_name].setdefault("annotations", OrderedDict())[
                    f"ocsf_extension_conflict_{ext_name}"
                ] = "duplicate slot definition"
            else:
                all_slots[sname] = slot_def

        # Profiles inside the extension.
        for pname, body in (ext.get("profiles") or {}).items():
            cls_name = _profile_class_name(pname)
            cls_def = _profile_class_def(pname, body, ocsf_id=f"{ext_name}/{pname}")
            cls_def["annotations"]["ocsf_extension"] = ext_name
            all_classes[cls_name] = _with_in_subset(cls_def, [f"{ext_name}_extension"])

        # Objects inside the extension.
        for oname, body in (ext.get("objects") or {}).items():
            cls_name = _ext_class_name(oname)
            cls = _build_class(
                oname,
                body,
                upstream=upstream,
                is_event=False,
                object_names=object_names,
                extracted_enums=extracted,
                slot_enum_map=slot_enum_map,
                rename_map=rename_map,
                sssom_mappings=sssom_mappings,
                cls_name_override=cls_name,
            )
            if "is_a" not in cls:
                cls["is_a"] = "OcsfObject"
            cls.setdefault("annotations", OrderedDict())["ocsf_extension"] = ext_name
            all_classes[cls_name] = _with_in_subset(cls, [f"{ext_name}_extension"])

        # Events inside the extension.
        for ename, body in (ext.get("events") or {}).items():
            cls_name = _ext_class_name(ename)
            cls = _build_class(
                ename,
                body,
                upstream=upstream,
                is_event=True,
                object_names=object_names,
                extracted_enums=extracted,
                slot_enum_map=slot_enum_map,
                rename_map=rename_map,
                sssom_mappings=sssom_mappings,
                cls_name_override=cls_name,
            )
            cls.setdefault("annotations", OrderedDict())["ocsf_extension"] = ext_name
            all_classes[cls_name] = _with_in_subset(cls, [f"{ext_name}_extension"])

    header = _module_header(
        name="ocsf-extensions",
        description=(
            "OCSF platform extensions (linux, macos, windows). Each class "
            "is annotated with the originating extension name and only "
            "prefixed with the extension when its bare class name would "
            "collide with a base-schema class."
        ),
        version=upstream.version,
        extra_imports=["./dictionary", "./enums", "./objects", "./profiles", "./events"],
        id_suffix="extensions",
        source_dir="extensions",
    )
    doc = OrderedDict(header)
    if all_slots:
        doc["slots"] = all_slots
    if all_classes:
        doc["classes"] = all_classes
    return _format_yaml(yaml_dump(doc)), extracted


def build_root(upstream: Upstream) -> str:
    version = upstream.version
    doc: "OrderedDict[str, Any]" = OrderedDict()

    # ── Scalar metadata (canonical order from the LinkML schema template) ────
    doc["id"] = "https://w3id.org/lmodel/ocsf"
    doc["name"] = "ocsf"
    doc["title"] = "Open Cybersecurity Schema Framework (OCSF) — LinkML Schema"
    doc["description"] = (
        "Open Cybersecurity Schema Framework (OCSF) — LinkML schema. "
        f"Generated from upstream OCSF JSON at version {version}. "
        "Each top-level concern is one module: types, dictionary (slots), "
        "enums, categories, objects, profiles, events, extensions."
    )
    doc["license"] = "Apache-2.0"
    doc["source"] = "https://github.com/ocsf/ocsf-schema/tree/main"
    doc["version"] = version

    # ── Standalone blocks ────────────────────────────────────────────────────
    doc["see_also"] = [
        "https://lmodel.github.io/ocsf",
        "https://schema.ocsf.io/",
        "https://github.com/ocsf/ocsf-schema",
    ]
    doc["annotations"] = OrderedDict(copyright="Source schema © OCSF a Series of LF Projects, LLC")
    doc["prefixes"] = OrderedDict(_PREFIXES)

    # ── Scalar config ────────────────────────────────────────────────────────
    doc["default_prefix"] = "ocsf"
    doc["default_range"] = "string"

    # ── Standalone block: imports ────────────────────────────────────────────
    doc["imports"] = [
        "linkml:types",
        "./types",
        "./enums",
        "./dictionary",
        "./categories",
        "./objects",
        "./profiles",
        "./events",
        "./extensions",
    ]

    # ── Subsets — derived from upstream directory structure ──────────────────
    subsets: "OrderedDict[str, Any]" = OrderedDict()
    for cat_name, cat_body in upstream.categories["attributes"].items():
        desc = cat_body.get("description") or cat_body.get("caption", cat_name)
        subsets[to_subset_name(cat_name)] = OrderedDict(description=desc)
    subsets[to_subset_name("objects")] = OrderedDict(
        description="Reusable OCSF object definitions (mirrors upstream objects/ directory)."
    )
    for pname, pbody in upstream.profiles.items():
        key = to_subset_name(f"{pname}_profile")
        desc = pbody.get("description") or pbody.get("caption") or f"OCSF '{pname}' profile."
        subsets[key] = OrderedDict(description=desc)
    for ext_name, ext in upstream.extensions.items():
        key = to_subset_name(f"{ext_name}_extension")
        manifest = ext.get("manifest") or {}
        desc = manifest.get("description") or manifest.get("caption") or f"OCSF '{ext_name}' extension."
        subsets[key] = OrderedDict(description=desc)
    doc["subsets"] = subsets

    return _format_yaml(yaml_dump(doc))


# ---------------------------------------------------------------------------
# Driver.
# ---------------------------------------------------------------------------


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)


def merge_enums(*sources: "OrderedDict[str, Any]") -> "OrderedDict[str, Any]":
    out: "OrderedDict[str, Any]" = OrderedDict()
    for src in sources:
        for k, v in src.items():
            if k not in out:
                out[k] = v
    return out


def main() -> int:
    p = argparse.ArgumentParser(description="Generate the OCSF LinkML schema from upstream OCSF JSON.")
    p.add_argument("--upstream", default="upstream/ocsf-schema", help="Path to upstream/ocsf-schema/ root.")
    p.add_argument("--out", default="src/ocsf/schema", help="Path to LinkML schema output directory.")
    p.add_argument(
        "--mappings",
        default="src/ocsf/mappings",
        help="Directory of SSSOM TSVs (*.sssom.tsv) to apply as class *_mappings.",
    )
    args = p.parse_args()

    upstream_root = Path(args.upstream).resolve()
    out_root = Path(args.out).resolve()
    mappings_root = Path(args.mappings).resolve()
    out_root.mkdir(parents=True, exist_ok=True)

    upstream = Upstream(upstream_root)

    # Pre-compute rename maps used across emitters to disambiguate names.
    obj_rename = compute_object_rename_map(upstream)
    rename_map = compute_event_rename_map(upstream)

    # Load SSSOM cross-schema mappings (ATT&CK, STIX, …). Empty dict if dir
    # missing — mappings are optional.
    sssom_mappings = load_sssom_mappings(mappings_root)

    # 1. types.yaml
    write(out_root / "types.yaml", build_types(upstream))

    # 2. dictionary.yaml + first batch of enums
    dict_yaml, enums_yaml_initial, slot_enum_map = build_dictionary_and_enums(upstream, obj_rename=obj_rename)
    write(out_root / "dictionary.yaml", dict_yaml)

    # 3. categories.yaml
    write(out_root / "categories.yaml", build_categories(upstream))

    # 4. objects.yaml (collects more inline enums into ``object_enums``)
    objects_yaml, object_enums = build_objects(
        upstream, slot_enum_map, rename_map=rename_map, sssom_mappings=sssom_mappings
    )
    write(out_root / "objects.yaml", objects_yaml)

    # 5. profiles.yaml — every base-schema profile in one file.
    write(out_root / "profiles.yaml", build_profiles(upstream))

    # 6. events.yaml — every event class in one file (BaseEvent + categories).
    events_yaml, event_enums = build_events(
        upstream, slot_enum_map, rename_map=rename_map, sssom_mappings=sssom_mappings
    )
    write(out_root / "events.yaml", events_yaml)

    # 7. extensions.yaml — every platform extension in one file.
    extensions_yaml, ext_enums = build_extensions(
        upstream, slot_enum_map, rename_map=rename_map, sssom_mappings=sssom_mappings
    )
    write(out_root / "extensions.yaml", extensions_yaml)

    # 8. enums.yaml — combine dictionary enums with class-extracted ones.
    initial = yaml.safe_load(enums_yaml_initial) or {}
    initial_enums: "OrderedDict[str, Any]" = OrderedDict(initial.get("enums") or {})
    all_enums = merge_enums(initial_enums, object_enums, event_enums, ext_enums)
    enums_header = _module_header(
        name="ocsf-enums",
        description="Enumeration types extracted from the OCSF Attribute Dictionary and class definitions.",
        version=upstream.version,
        id_suffix="enums",
        source_dir="",
    )
    enums_doc = OrderedDict(enums_header)
    enums_doc["enums"] = all_enums
    write(out_root / "enums.yaml", _format_yaml(yaml_dump(enums_doc)))

    # 9. ocsf.yaml (root)
    write(out_root / "ocsf.yaml", build_root(upstream))

    n_files = len(list(out_root.rglob("*.yaml")))
    n_classes_with_mappings = sum(1 for v in sssom_mappings.values() if v)
    n_mapping_assertions = sum(
        len(slots) for slots in (s.values() for s in sssom_mappings.values()) for slots in slots
    )
    print(
        f"Generated {n_files} LinkML modules under {out_root} "
        f"from upstream OCSF v{upstream.version}."
    )
    if sssom_mappings:
        print(
            f"Applied {n_mapping_assertions} SSSOM mapping assertions across "
            f"{n_classes_with_mappings} classes (loaded from {mappings_root})."
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
