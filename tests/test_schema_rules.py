"""Checks that the adapt copy can sit beside LOKF and the neighbours' copies."""

import hashlib
import json
import keyword
from functools import cache
from pathlib import Path

import jsonschema
import pytest
import yaml
from linkml.generators.jsonschemagen import JsonSchemaGenerator

ROOT = Path(__file__).parent.parent

# What a host may import beside this schema's adapt copy: LOKF's schema, pinned by the
# sidecar, and the adapt copies other lmodel repositories release. Each neighbour is the
# schema asset of a release, downloaded and checked against the release's .sha256 and
# its build-provenance attestation, and pinned here by that checksum.
SOURCE_DIR = ROOT / "src" / "ocsf" / "schema"
COPY = ROOT / ".lokf" / "ocsf.yaml"
LOKF = ROOT / ".lokf" / "lokf.yaml"
MINIMAL = ROOT / "tests" / "data" / "minimal"
NEIGHBOUR_DIR = ROOT / "tests" / "neighbours"
NEIGHBOURS = {
    # lmodel/slsa v0.10.0, schema-v0.10.0-slsa.yaml
    "slsa.yaml": "9eeb68decc918565886794fe4eb6e32e1fee0620688cc699961c227242a2f4c2",
    # lmodel/github-actions v0.5.0, schema-v0.5.0-github-actions.yaml
    "github-actions.yaml": "375794f7343936ae8c555e8c060c2790346661e7d81fa84d15a761fd5a329969",
    # lmodel/in-toto v0.3.0, schema-v0.3.0-in-toto.yaml
    "in-toto.yaml": "b1d15be557adfbcd538ab75ec9d43f558027d4bcbd150d72d370e83c9602f25b",
    # lmodel/oscal v0.1.2, schema-v0.1.2-oscal.yaml
    "oscal.yaml": "4eb56d7d1106463ed0a2255a29af14b8d619741acc29863d1e86eb3f8923c710",
    # lmodel/spdx v0.1.1, schema-v0.1.1-spdx.yaml
    "spdx.yaml": "3411cf5d19b1955f0362988c542984e4c817417c7b7b7892647aba1adf1ddd4a",
    # lmodel/stix v0.1.0, schema-v0.1.0-stix.yaml
    "stix.yaml": "3837d097c0cd48e0d2a98d118003c099d1290333f5b973aee85a7017bae344c9",
    # lmodel/attack v0.1.1, schema-v0.1.1-attack.yaml
    "attack.yaml": "c2e436b0d8ab0e60a8d6557b3ba32894e0b0d23b866f1e0c0d608a97e9f5f08e",
    # lmodel/uco v0.3.0, schema-v0.3.0-uco.yaml
    "uco.yaml": "78bc3a266fa463ba380da7290adcbdfb1b8e1b7cef1ceb992bf8b1bed9b7b758",
    # lmodel/cve v0.1.0, schema-v0.1.0-cve.yaml
    "cve.yaml": "33e6086a81ac8e4cdc1e6143598cfcc961cbc1864ad9268773da9e863c652a73",
    # lmodel/kev-catalog v0.1.0, schema-v0.1.0-kev-catalog.yaml
    "kev-catalog.yaml": "76bdff7d02cc34ac6a14314692e316b005649a34f442eaf54c2846b1dac5396c",
    # lmodel/nist-nvd v0.1.0, schema-v0.1.0-nist-nvd.yaml
    "nist-nvd.yaml": "69dc8a9b34cc6646cf44515c121c8924c4e07232a9699e31065fb8930ed8be40",
    # lmodel/cwe v0.1.0, schema-v0.1.0-cwe.yaml
    "cwe.yaml": "1b2bb4c1beb089f031adc8861572b98ddf0b42f0ed3c6e5c3bfbc0f767b032cd",
    # lmodel/capec v0.1.0, schema-v0.1.0-capec.yaml
    "capec.yaml": "613164c0520384919de7d353ff87debb4e82938cec861158d151b41edd506d46",
}
ELEMENT_KINDS = ("classes", "enums", "types", "subsets")

# The keys the copy shares with each neighbour, which OCSF's plain words make many: a
# composite of two copies would write each one under a single IRI, until lokf's adapt can
# rename what a neighbour copy defines (lokf #169). A new overlap fails this test. No
# class, enum, type or subset is shared, since each carries the Ocsf or ocsf prefix.
SHARED_WITH_NEIGHBOURS = json.loads((ROOT / "tests" / "upstream" / "shared-keys.json").read_text("utf-8"))

# The class `just lokf-adapt` re-roots on Concept. OCSF's objects are values inside an
# event, so an event class alone is what a concept may name.
ROOTS = {"OcsfBaseEvent"}
# The keys the copy renames with the prefix, because LOKF defines each. An attribute of
# OcsfFacts could not be renamed, so none of those keys may be one of these.
RENAMED = {
    "algorithm",
    "author",
    "email",
    "from",
    "http_method",
    "license",
    "name",
    "parameters",
    "references",
    "resource",
    "runtime",
    "source",
    "status",
    "tags",
    "target",
    "title",
    "to",
    "type",
    "url",
    "version",
}
MAPPING_KEYS = ("mappings", "exact_mappings", "close_mappings", "related_mappings", "narrow_mappings", "broad_mappings")


def _load(path):
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def _names(path):
    """Each kind of element a schema file declares, and every slot and attribute name
    with the IRI it expands to."""
    doc = _load(path)
    prefixes = doc.get("prefixes") or {}
    default = doc.get("default_prefix")

    def expand(curie):
        prefix, _, local = curie.partition(":")
        return prefixes[prefix] + local if prefix in prefixes else curie

    elements = {kind: set(doc.get(kind) or {}) for kind in ELEMENT_KINDS}
    slots = {}
    owners = [doc.get("slots") or {}]
    owners += [(cls or {}).get("attributes") or {} for cls in (doc.get("classes") or {}).values()]
    for owner in owners:
        for name, slot in owner.items():
            uri = (slot or {}).get("slot_uri") or f"{default}:{name}"
            slots.setdefault(name, set()).add(expand(uri))
    return elements, slots


def _mappings(node):
    if isinstance(node, dict):
        for key, value in node.items():
            if key in MAPPING_KEYS:
                yield from value if isinstance(value, list) else [value]
            else:
                yield from _mappings(value)
    elif isinstance(node, list):
        for item in node:
            yield from _mappings(item)


def _source():
    merged = {"classes": {}, "slots": {}, "prefixes": {}, "enums": {}, "types": {}}
    for path in sorted(SOURCE_DIR.glob("*.yaml")):
        doc = _load(path)
        for kind, elements in merged.items():
            elements.update(doc.get(kind) or {})
    return merged


def test_neighbours_are_the_released_assets():
    """Each neighbour copy is byte for byte the file pinned above."""
    assert {p.name for p in NEIGHBOUR_DIR.iterdir()} == set(NEIGHBOURS)
    for name, sha256 in NEIGHBOURS.items():
        assert hashlib.sha256((NEIGHBOUR_DIR / name).read_bytes()).hexdigest() == sha256, name


def test_names_apart_from_lokf():
    """No class, enum, type or subset name of the copy is LOKF's, and a slot name the two
    share carries LOKF's IRI."""
    elements, slots = _names(COPY)
    their_elements, their_slots = _names(LOKF)
    for kind in ELEMENT_KINDS:
        assert not elements[kind] & their_elements[kind], kind
    for name in slots.keys() & their_slots.keys():
        assert slots[name] == their_slots[name], name


@pytest.mark.parametrize("name", sorted(NEIGHBOURS))
def test_names_apart_from_a_neighbour(name):
    """A class, enum, type or subset name is the copy's alone, and the only keys it
    shares with a neighbour are the listed ones."""
    elements, slots = _names(COPY)
    their_elements, their_slots = _names(NEIGHBOUR_DIR / name)
    for kind in ELEMENT_KINDS:
        assert not elements[kind] & their_elements[kind], kind
    assert sorted(slots.keys() & their_slots.keys()) == SHARED_WITH_NEIGHBOURS[name]


def test_the_copy_keeps_every_class_and_slot():
    source, copy = _source(), _load(COPY)
    assert set(copy["classes"]) == set(source["classes"])
    renamed = {f"ocsf_{name}" if name in RENAMED else name for name in source["slots"]}
    assert set(copy["slots"]) == renamed


def test_the_renamed_keys_keep_their_iris():
    copy = _load(COPY)
    for name in RENAMED:
        assert copy["slots"][f"ocsf_{name}"]["slot_uri"] == f"ocsf:{name}", name


def test_no_annotation_key_is_a_renamed_slot():
    """Adapt never renames an attribute, so a key the facts class declares could clash
    with a slot the copy renames with the same prefix."""
    facts = _source()["classes"]["OcsfFacts"]["attributes"]
    assert not set(facts) & {f"ocsf_{name}" for name in RENAMED}


def test_every_annotation_key_is_declared():
    """Generators ignore annotations and no validator enforces `instantiates`, so this
    test is what holds them to the declaration."""
    declared = set(_source()["classes"]["OcsfFacts"]["attributes"])

    def walk(node):
        if isinstance(node, dict):
            for key, value in node.items():
                if key == "annotations" and isinstance(value, dict):
                    yield from value
                else:
                    yield from walk(value)
        elif isinstance(node, list):
            for item in node:
                yield from walk(item)

    used = set()
    for path in SOURCE_DIR.glob("*.yaml"):
        used |= set(walk(_load(path)))
    assert used == declared


def test_the_copy_roots_the_base_event():
    doc = _load(COPY)
    rooted = {name for name, cls in doc["classes"].items() if cls.get("is_a") == "Concept"}
    assert rooted == ROOTS
    assert doc["imports"] == ["linkml:types", "lokf"]
    assert not doc["classes"]["OcsfBaseEvent"].get("tree_root")


@cache
def concept_definitions():
    """The JSON Schema of the adapt copy, as `lokf validate` reads it beside LOKF."""
    return json.loads(JsonSchemaGenerator(str(COPY), mergeimports=True).serialize())["$defs"]


def _concept_types():
    source = _source()["classes"]
    return sorted(
        name
        for name, cls in source.items()
        if not cls.get("abstract") and not cls.get("mixin") and _reaches_root(name, source)
    )


def _reaches_root(name, classes):
    while name:
        if name in ROOTS:
            return True
        name = classes[name].get("is_a")
    return False


def _as_concept(value):
    """An example in the copy's keys: what LOKF defines takes the prefix, at any depth."""
    if isinstance(value, dict):
        return {(f"ocsf_{k}" if k in RENAMED else k): _as_concept(v) for k, v in value.items()}
    if isinstance(value, list):
        return [_as_concept(v) for v in value]
    return value


def test_there_is_a_concept_type_per_event_class():
    assert len(_concept_types()) == 87


@pytest.mark.parametrize("class_name", _concept_types())
def test_a_concept_of_each_type_validates_against_the_copy(class_name):
    """Each class a concept may name admits its example, in the copy's keys."""
    data = _load(MINIMAL / f"{class_name}-minimal.yaml")
    concept = _as_concept(data)
    concept.update(
        type=class_name,
        id=f"https://example.org/knowledge/{class_name}",
        title="A title",
        description="A description.",
    )
    schema = {"$ref": f"#/$defs/{class_name}", "$defs": concept_definitions()}
    checker = jsonschema.validators.validator_for(schema)(schema)
    errors = [f"{list(e.absolute_path)} {e.message[:160]}" for e in checker.iter_errors(concept)]
    assert not errors, errors
    concept["no_such_key_in_ocsf"] = 1
    assert list(checker.iter_errors(concept)), "it takes a key the class does not define"


def test_the_readme_lists_the_concept_types():
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    for name in _concept_types():
        assert name in readme, name


def test_mappings_use_a_bound_prefix():
    """Every mapping in the copy is a CURIE whose prefix the copy binds. A full address
    that no prefix covers makes every `lokf convert --schema` over the copy warn."""
    doc = _load(COPY)
    prefixes = doc.get("prefixes") or {}
    mappings = list(_mappings(doc))
    assert mappings
    for mapping in mappings:
        prefix, sep, _ = mapping.partition(":")
        assert sep and prefix in prefixes, mapping


def _page_names(source):
    """The name of each page gen-doc writes. It camel-cases a type or a subset, so a
    subset named `ocsf_application` would overwrite the class OcsfApplication's page."""
    subsets = yaml.safe_load((SOURCE_DIR / "ocsf_core.yaml").read_text(encoding="utf-8"))["subsets"]
    names = set(source["classes"]) | set(source["enums"]) | set(source["slots"])
    names |= {"".join(part.title() for part in name.split("_")) for name in [*source["types"], *subsets]}
    return names


def test_no_two_pages_collide():
    """gen-doc writes a page per element, and two names that are the same, or differ only
    by case, are one file on a case-insensitive disk."""
    source = _source()
    subsets = yaml.safe_load((SOURCE_DIR / "ocsf_core.yaml").read_text(encoding="utf-8"))["subsets"]
    pages = list(_page_names(source))
    lowered = {}
    for name in pages:
        lowered.setdefault(name.lower(), set()).add(name)
    assert not {key: found for key, found in lowered.items() if len(found) > 1}
    camel = {"".join(part.title() for part in name.split("_")) for name in subsets}
    assert not camel & set(source["classes"])


def test_no_page_overwrites_the_index():
    assert "index" not in {name.lower() for name in _page_names(_source())}


def test_the_python_keywords_are_ocsfs_two():
    """OCSF names two keys after Python keywords, and a real event holds them. The
    generated dataclasses rename them, and tests/test_datamodel.py says what that costs."""
    assert {name for name in _source()["slots"] if keyword.iskeyword(name)} == {"class", "from"}
