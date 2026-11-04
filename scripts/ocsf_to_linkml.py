#!/usr/bin/env python3
"""Write the LinkML schema of OCSF from OCSF's own files.

The schema renders what OCSF's compiler makes of the pinned tag, because that is
what the framework means: `extends`, `$include`, extension patches, profiles and
the datetime siblings all resolve there. So the facts about each class and object
come from `upstream/ocsf-compiled-1.9.0.json`, the compiler's unchanged output. The
compiler leaves out what it folds away, and only OCSF's source files say that: the
abstract parents such as `iam` and `_entity`, and which attributes each profile
brings. Those come from `upstream/ocsf-schema/`.

The rules, each held by `tests/test_coverage.py`:

- A dictionary attribute becomes a top-level slot with OCSF's key as its name, and
  one class's refinement of it becomes `slot_usage`, written only where the class
  differs from what it inherits.
- An enumerated integer stays an integer. Its list is `any_of` over `equals_number`,
  each entry keeping OCSF's caption as `title` and its text as `description`, since
  a LinkML enum's values are strings and a real event's are numbers.
- `class_uid` and `category_uid`, which one class holds constant, use `equals_number`.
- A profile becomes a mixin. Its attributes are declared but never required by
  LinkML, since OCSF asks for them only of an event that lists the profile in
  `metadata.profiles`. `tests/ocsf_rules.py` checks that, from the annotations.
- Facts with no metaslot are annotations, which the `Ocsf*Facts` classes declare.

The output is deterministic, and a test compares it with the committed files.

Usage::

    uv run python scripts/ocsf_to_linkml.py
"""

from __future__ import annotations

import json
import re
from collections import OrderedDict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "upstream" / "ocsf-schema"
COMPILED = ROOT / "upstream" / "ocsf-compiled-1.9.0.json"
MAPPINGS = ROOT / "scripts" / "ocsf_mappings.yaml"
OUT = ROOT / "src" / "ocsf" / "schema"

VERSION = "1.9.0"
SOURCE_URL = f"https://github.com/ocsf/ocsf-schema/tree/{VERSION}"
UMBRELLA_ID = "https://w3id.org/lmodel/ocsf"
SEE_ALSO = ["https://lmodel.github.io/ocsf", "https://schema.ocsf.io/1.9.0/"]
OBJECT_ROOT = "OcsfObjectBase"
FACTS = "ocsf:OcsfFacts"

# The primitive types OCSF's dictionary names: the LinkML type behind each, with the
# base and URI it derives from, which some generators do not follow through `typeof`.
PRIMITIVES = {
    "string_t": ("string", "str", "xsd:string"),
    "integer_t": ("integer", "int", "xsd:integer"),
    "long_t": ("integer", "int", "xsd:integer"),
    "float_t": ("float", "float", "xsd:float"),
    "boolean_t": ("boolean", "Bool", "xsd:boolean"),
}
D3FEND_REFERENCE = re.compile(r"D3FEND\S* Ontology d3f:([A-Za-z0-9_-]+)")


# ---------------------------------------------------------------------------
# YAML: keep insertion order, indent lists and wrap the long text.
# ---------------------------------------------------------------------------


class Dumper(yaml.SafeDumper):
    def increase_indent(self, flow=False, indentless=False):
        return super().increase_indent(flow, False)

    def ignore_aliases(self, data):
        return True


Dumper.add_representer(
    OrderedDict, lambda d, v: d.represent_mapping("tag:yaml.org,2002:map", v.items())
)


def dump(document: dict) -> str:
    return yaml.dump(
        document,
        Dumper=Dumper,
        sort_keys=False,
        allow_unicode=True,
        width=88,
        default_flow_style=False,
    )


# ---------------------------------------------------------------------------
# Names
# ---------------------------------------------------------------------------


def pascal(name: str) -> str:
    return "".join(part[:1].upper() + part[1:] for part in re.split(r"[_/]", name) if part)


def event_class_name(key: str, hidden: bool) -> str:
    """`authentication` is OcsfAuthentication, and `win/windows_service_activity`
    OcsfWinServiceActivity. OCSF's abstract parents take `Event`, since an object has
    the name `application` or `finding` too."""
    if key.startswith("win/windows_"):
        key = "win/" + key.removeprefix("win/windows_")
    return f"Ocsf{pascal(key)}Event" if hidden else f"Ocsf{pascal(key)}"


def object_class_name(key: str) -> str:
    """`process` is OcsfProcess and `_entity` OcsfEntity. `win/win_service` is
    OcsfWinService rather than OcsfWinWinService."""
    if key.startswith("win/win_"):
        key = "win/" + key.removeprefix("win/win_")
    return f"Ocsf{pascal(key.lstrip('_'))}"


def profile_class_name(key: str) -> str:
    """`cloud` is OcsfCloudProfile, and `linux/linux_users` OcsfLinuxUsersProfile."""
    return f"Ocsf{pascal(key.split('/')[-1])}Profile"


def type_name(key: str) -> str:
    return f"ocsf_{key}"


def scope(extension: str | None, name: str) -> str:
    return f"{extension}/{name}" if extension else name


def text(value: str) -> str:
    return value.strip()


# ---------------------------------------------------------------------------
# Reading OCSF's files
# ---------------------------------------------------------------------------


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def extension_dirs() -> dict[str, Path]:
    """Each extension's name, as `extension.json` gives it, and its folder."""
    found = {}
    for path in sorted((SOURCE / "extensions").glob("*/extension.json")):
        found[read_json(path)["name"]] = path.parent
    return found


def includes(item: dict, extension: str | None, ext_dirs: dict[str, Path]) -> list[str]:
    """The profiles an item's `$include` brings in, by their compiled key."""
    keys = []
    for path in item.get("attributes", {}).get("$include", []):
        if not path.startswith("profiles/"):
            raise ValueError(f"an include other than a profile: {path}")
        stem = Path(path).stem
        own = extension and (ext_dirs[extension] / path).exists()
        keys.append(scope(extension, stem) if own else stem)
    return keys


def read_profiles(ext_dirs: dict[str, Path]) -> dict[str, dict]:
    profiles = {}
    for path in sorted((SOURCE / "profiles").glob("*.json")):
        item = read_json(path)
        profiles[item["name"]] = item
    for extension, folder in ext_dirs.items():
        for path in sorted((folder / "profiles").glob("*.json")):
            item = read_json(path)
            profiles[scope(extension, item["name"])] = item
    return profiles


def read_hidden_events() -> dict[str, dict]:
    """The event classes the compiler folds away: those with no `uid` of their own,
    other than the base event."""
    hidden = {}
    for path in sorted((SOURCE / "events").rglob("*.json")):
        item = read_json(path)
        if "uid" not in item and item["name"] != "base_event":
            hidden[item["name"]] = item
    return hidden


def read_hidden_objects() -> dict[str, dict]:
    return {
        item["name"]: item
        for item in map(read_json, sorted((SOURCE / "objects").glob("_*.json")))
    }


def read_source_items(folder: str) -> dict[str, dict]:
    """Every event or object source file of the base schema, by name."""
    items = {}
    for path in sorted((SOURCE / folder).rglob("*.json")):
        item = read_json(path)
        items[item["name"]] = item
    return items


def read_extension_items(ext_dirs: dict[str, Path], folder: str) -> dict[str, list]:
    """Extension files by the name they define, and the patches they make on a base
    item: a file with no `name` of its own patches the item it `extends`."""
    defined: dict[str, dict] = {}
    patches: dict[str, list] = {}
    for extension, directory in ext_dirs.items():
        for path in sorted((directory / folder).glob("*.json")):
            item = read_json(path)
            name = item.get("name")
            if name is None or name == item.get("extends"):
                patches.setdefault(item["extends"], []).append((extension, item))
            else:
                defined[scope(extension, name)] = (extension, item)
    return defined, patches


# ---------------------------------------------------------------------------
# From an OCSF attribute to LinkML's facets
# ---------------------------------------------------------------------------


def references(item: dict) -> list[str]:
    """A reference's address. OCSF 1.9.0's email_activity writes one with a stray
    `href='` in front, which LinkML refuses as a URI, so the address alone is kept."""
    return [
        ref["url"].removeprefix("href='") for ref in item.get("references", []) if ref.get("url")
    ]


def deprecation(item: dict) -> dict:
    deprecated = item.get("@deprecated")
    if not deprecated:
        return {}
    return {"deprecated": text(deprecated["message"])}


def deprecation_annotations(item: dict) -> dict:
    deprecated = item.get("@deprecated")
    if not deprecated:
        return {}
    notes = {"ocsf_deprecated_since": deprecated["since"]}
    if deprecated.get("superseded_by"):
        notes["ocsf_superseded_by"] = " ".join(deprecated["superseded_by"])
    return notes


def enum_entry(key: str, entry: dict) -> dict:
    out = OrderedDict(equals_number=int(key))
    if entry.get("caption"):
        out["title"] = entry["caption"]
    if entry.get("description"):
        out["description"] = text(entry["description"])
    out.update(deprecation(entry))
    if references(entry):
        out["see_also"] = references(entry)
    notes = deprecation_annotations(entry)
    if entry.get("source"):
        notes["ocsf_source_note"] = entry["source"]
    if notes:
        out["annotations"] = OrderedDict(notes)
    return out


def enum_any_of(enum: dict) -> list:
    return [enum_entry(key, enum[key]) for key in sorted(enum, key=int)]


class Model:
    """The classes as LinkML will read them, so that a class writes only what it does
    not inherit. `effective` follows SchemaView's order: a far ancestor first, then
    the is_a parent, then the mixins, and the class's own usage last."""

    def __init__(self, compiled: dict):
        self.compiled = compiled
        self.dictionary = compiled["dictionary"]["attributes"]
        self.types = compiled["dictionary"]["types"]["attributes"]
        self.objects = compiled["objects"]
        self.slots: dict[str, dict] = OrderedDict()
        self.classes: dict[str, dict] = OrderedDict()
        self.string_enums: dict[str, dict] = OrderedDict()
        self.object_names: dict[str, str] = {}
        self._ancestors: dict[str, list] = {}

    # -- the dictionary -----------------------------------------------------

    def attribute_range(self, attribute: dict) -> str:
        kind = attribute["type"]
        if kind == "object_t":
            return self.object_names[attribute["object_type"]]
        if kind == "json_t":
            # The any_of below says what a JSON value is. gen-json-schema writes a required
            # slot's range beside its any_of unless the range is the default, and that
            # $ref would refuse an array, since LinkML's Any leaves arrays out.
            return "string"
        return type_name(kind)

    def string_enum(self, name: str, attribute: dict) -> str:
        """A list of strings is what a LinkML enum is, so it renders as one."""
        enum_name = f"Ocsf{pascal(name)}"
        values = OrderedDict()
        for key in sorted(attribute["enum"]):
            entry = attribute["enum"][key]
            value = OrderedDict()
            if entry.get("caption"):
                value["title"] = entry["caption"]
            if entry.get("description"):
                value["description"] = text(entry["description"])
            values[key] = value
        self.string_enums[enum_name] = OrderedDict(
            title=attribute["caption"],
            description=f"The values OCSF lists for {name}.",
            permissible_values=values,
        )
        return enum_name

    def facets(self, name: str, attribute: dict) -> dict:
        """What one attribute means in LinkML's terms, whichever level states it."""
        out: dict = {}
        out["title"] = attribute["caption"]
        out["description"] = text(attribute["description"])
        out["range"] = self.attribute_range(attribute)
        if "enum" in attribute:
            if attribute["type"] == "string_t":
                out["range"] = self.string_enum(name, attribute)
            else:
                out["any_of"] = enum_any_of(attribute["enum"])
        elif attribute["type"] == "json_t" and not attribute.get("is_array"):
            # A JSON value may be an array, which LinkML's Any leaves out.
            out["any_of"] = [
                OrderedDict(range="OcsfJsonValue"),
                OrderedDict(range="OcsfJsonValue", multivalued=True),
            ]
        out.update(deprecation(attribute))
        if references(attribute):
            out["see_also"] = references(attribute)

        gated = bool(attribute.get("profiles"))
        requirement = attribute.get("requirement")
        out["required"] = requirement == "required" and not gated
        out["recommended"] = requirement == "recommended"

        notes = OrderedDict()
        if attribute.get("group"):
            notes["ocsf_group"] = attribute["group"]
        if gated:
            notes["ocsf_profiles"] = " ".join(attribute["profiles"])
            if requirement == "required":
                notes["ocsf_requirement"] = requirement
        if attribute.get("sibling"):
            notes["ocsf_sibling"] = attribute["sibling"]
        if attribute.get("observable") is not None:
            notes["ocsf_observable"] = str(attribute["observable"])
        if attribute.get("source"):
            notes["ocsf_source_note"] = attribute["source"]
        if attribute.get("suppress_checks"):
            notes["ocsf_suppress_checks"] = " ".join(attribute["suppress_checks"])
        if attribute.get("extension"):
            notes["ocsf_extension"] = attribute["extension"]
        notes.update(deprecation_annotations(attribute))
        out["annotations"] = notes
        return out

    def build_slots(self) -> None:
        for key in sorted(self.dictionary, key=lambda k: k.split("/")[-1]):
            attribute = self.dictionary[key]
            name = key.split("/")[-1]
            if name in self.slots:
                raise ValueError(f"two dictionary attributes share the key {name}")
            facets = self.facets(name, attribute)
            slot = OrderedDict()
            slot["title"] = facets["title"]
            slot["description"] = facets["description"]
            slot["slot_uri"] = f"ocsf:{name}"
            if "deprecated" in facets:
                slot["deprecated"] = facets["deprecated"]
            slot["range"] = facets["range"]
            if attribute.get("is_array"):
                slot["multivalued"] = True
                if attribute["type"] == "object_t":
                    slot["inlined_as_list"] = True
            elif attribute["type"] == "object_t":
                slot["inlined"] = True
            if "any_of" in facets:
                slot["any_of"] = facets["any_of"]
            if "see_also" in facets:
                slot["see_also"] = facets["see_also"]
            if facets["annotations"]:
                slot["instantiates"] = [FACTS]
                slot["annotations"] = facets["annotations"]
            self.slots[name] = slot

    # -- what a class inherits ---------------------------------------------

    def parents(self, name: str) -> list[str]:
        cls = self.classes[name]
        return list(cls.get("mixins", [])) + ([cls["is_a"]] if cls.get("is_a") else [])

    def ancestors(self, name: str) -> list[str]:
        """SchemaView._closure, reflexive and depth first."""
        if name in self._ancestors:
            return self._ancestors[name]
        found = [name]
        seen = {name}
        visited = set()
        todo = [name]
        while todo:
            current = todo.pop()
            visited.add(current)
            for parent in self.parents(current):
                if parent not in visited and parent not in seen:
                    todo.append(parent)
                    found.append(parent)
                    seen.add(parent)
        self._ancestors[name] = found
        return found

    def inherited_slots(self, name: str) -> set[str]:
        slots = set()
        for ancestor in self.ancestors(name):
            if ancestor != name:
                slots.update(self.classes[ancestor].get("slots", []))
        return slots

    def effective_base(self, slot: str) -> dict:
        have = {
            key: value
            for key, value in self.slots[slot].items()
            if key in ("title", "description", "range", "any_of", "deprecated", "see_also")
        }
        have["annotations"] = self.slots[slot].get("annotations", {})
        have["required"] = False
        have["recommended"] = False
        return have

    def effective(self, class_name: str, slot: str) -> dict:
        have = self.effective_base(slot)
        for ancestor in reversed(self.ancestors(class_name)):
            have.update(self.classes[ancestor].get("slot_usage", {}).get(slot, {}))
        return have

    def refine(self, class_name: str, attributes: dict) -> None:
        """Declare the attributes a class does not inherit, and write its usage."""
        cls = self.classes[class_name]
        inherited = self.inherited_slots(class_name)
        own = [slot for slot in attributes if slot not in inherited]
        if own:
            cls["slots"] = sorted(own)
        usage = OrderedDict()
        # The ancestors' usage must be read before this class adds its own.
        for slot in sorted(attributes):
            want = attributes[slot]
            have = self.effective(class_name, slot)
            changes = OrderedDict()
            for key in (
                "title",
                "description",
                "range",
                "any_of",
                "equals_number",
                "deprecated",
                "see_also",
                "required",
                "recommended",
                "annotations",
            ):
                if key in want and want[key] != have.get(key):
                    changes[key] = want[key]
                elif key not in want and have.get(key) and key != "equals_number":
                    if key in ("any_of", "deprecated", "see_also"):
                        raise ValueError(
                            f"{class_name}.{slot} clears {key}, which LinkML cannot do"
                        )
            if not want.get("annotations") and have.get("annotations"):
                raise ValueError(f"{class_name}.{slot} clears its annotations")
            if changes:
                usage[slot] = changes
        if usage:
            cls["slot_usage"] = usage


# ---------------------------------------------------------------------------
# Elements
# ---------------------------------------------------------------------------


def class_header(item: dict, name: str, abstract: bool = False) -> dict:
    cls = OrderedDict()
    cls["title"] = item["caption"]
    # OCSF's abstract application event alone has no description of its own.
    cls["description"] = text(
        item.get("description") or f"The abstract parent of OCSF's {item['caption']} event classes."
    )
    cls["class_uri"] = f"ocsf:{name}"
    if abstract:
        cls["abstract"] = True
    cls.update(deprecation(item))
    if references(item):
        cls["see_also"] = references(item)
    return cls


def d3fend_terms(item: dict) -> list[str]:
    """The D3FEND terms a reference of OCSF's names, as `d3f:` CURIEs."""
    terms = []
    for ref in item.get("references", []):
        match = D3FEND_REFERENCE.search(ref.get("description", ""))
        if match:
            terms.append(f"d3f:{match.group(1)}")
    return sorted(set(terms))


def class_annotations(item: dict, key: str) -> dict:
    notes = OrderedDict(ocsf_key=key)
    if item.get("category"):
        notes["ocsf_category"] = item["category"]
    if item.get("profiles"):
        notes["ocsf_profiles"] = " ".join(item["profiles"])
    if item.get("constraints"):
        notes["ocsf_constraints"] = json.dumps(item["constraints"], sort_keys=True)
    if item.get("associations"):
        notes["ocsf_associations"] = json.dumps(item["associations"], sort_keys=True)
    if item.get("observable") is not None:
        notes["ocsf_observable"] = str(item["observable"])
    if item.get("extension"):
        notes["ocsf_extension"] = item["extension"]
    notes.update(deprecation_annotations(item))
    return notes


def constraint_expressions(constraints: dict, attributes: dict) -> dict:
    """OCSF's two constraints in LinkML's terms. A path such as `device.os.sp_name`
    has no slot condition, so that rule stays in tests/ocsf_rules.py alone."""
    out = OrderedDict()
    for constraint, keyword in (("at_least_one", "any_of"), ("just_one", "exactly_one_of")):
        names = constraints.get(constraint)
        if not names or not all(name in attributes for name in names):
            continue
        out[keyword] = [
            OrderedDict(slot_conditions={name: OrderedDict(required=True)}) for name in names
        ]
    return out


def apply_mappings(element: dict, mappings: dict) -> None:
    for kind in ("exact_mappings", "close_mappings", "related_mappings", "broad_mappings", "narrow_mappings"):
        if mappings.get(kind):
            element[kind] = sorted(set(element.get(kind, [])) | set(mappings[kind]))


def build(compiled: dict) -> tuple[Model, dict]:
    model = Model(compiled)
    ext_dirs = extension_dirs()
    source_events = read_source_items("events")
    source_objects = read_source_items("objects")
    ext_events, _ = read_extension_items(ext_dirs, "events")
    ext_objects, object_patches = read_extension_items(ext_dirs, "objects")
    profiles = read_profiles(ext_dirs)
    hidden_events = read_hidden_events()
    hidden_objects = read_hidden_objects()

    # Names first, since a slot's range names an object.
    for key in list(compiled["objects"]) + list(hidden_objects):
        model.object_names[key] = object_class_name(key)
    model.object_names["object"] = "OcsfObject"
    model.build_slots()

    classes = model.classes
    placed: dict[str, str] = {}

    # The classes outside OCSF's items: the open object and JSON value, and the
    # abstract root of the objects that `extends: object`.
    classes["OcsfJsonValue"] = OrderedDict(
        title="JSON",
        description=text(model.types["json_t"]["description"]),
        class_uri="linkml:Any",
        annotations=OrderedDict(ocsf_key="json_t"),
        instantiates=[FACTS],
    )
    placed["OcsfJsonValue"] = "ocsf_core"
    open_object = compiled["objects"]["object"]
    classes["OcsfObject"] = OrderedDict(
        title=open_object["caption"],
        description=text(open_object["description"]),
        class_uri="linkml:Any",
        annotations=OrderedDict(ocsf_key="object"),
        instantiates=[FACTS],
    )
    placed["OcsfObject"] = "ocsf_core"
    classes[OBJECT_ROOT] = OrderedDict(
        title=open_object["caption"],
        description=(
            "The abstract parent of the objects that extend OCSF's object, which adds no "
            "attribute of its own. OCSF's object itself is OcsfObject, which stays open."
        ),
        class_uri=f"ocsf:{OBJECT_ROOT}",
        abstract=True,
        annotations=OrderedDict(ocsf_key="object"),
        instantiates=[FACTS],
    )
    placed[OBJECT_ROOT] = "ocsf_objects"

    # Profiles, as mixins.
    for key in sorted(profiles):
        item = profiles[key]
        name = profile_class_name(key)
        cls = OrderedDict()
        cls["title"] = item["caption"]
        cls["description"] = text(item["description"])
        cls["class_uri"] = f"ocsf:{name}"
        cls["mixin"] = True
        if references(item):
            cls["see_also"] = references(item)
        cls["instantiates"] = [FACTS]
        notes = OrderedDict(ocsf_key=key)
        cls["annotations"] = notes
        if "/" in key:
            cls["in_subset"] = [f"ocsf_extension_{key.split('/')[0]}"]
        classes[name] = cls
        placed[name] = "ocsf_objects"
        attributes = {}
        for slot, entry in item.get("attributes", {}).items():
            attributes[slot] = model.facets(slot, source_attribute(model, slot, entry, profile=key))
        model.refine(name, attributes)

    # Objects, parents before children.
    def object_source(key: str):
        if key in ext_objects:
            return ext_objects[key][1]
        if key in hidden_objects:
            return hidden_objects[key]
        return source_objects.get(key, {})

    def object_extension(key: str):
        return key.split("/")[0] if "/" in key else None

    def object_parent(key: str, item: dict):
        parent = item.get("extends")
        extension = object_extension(key)
        if parent is None:
            return None
        if parent == "object":
            return OBJECT_ROOT
        if extension and scope(extension, parent) in compiled["objects"]:
            return model.object_names[scope(extension, parent)]
        return model.object_names[parent]

    def object_mixins(key: str):
        extension = object_extension(key)
        keys = includes(object_source(key), extension, ext_dirs)
        for patch_extension, patch in object_patches.get(key, []):
            keys += includes(patch, patch_extension, ext_dirs)
        return [profile_class_name(profile) for profile in keys]

    done: set[str] = set()

    def build_object(key: str) -> None:
        if key in done or key == "object":
            return
        done.add(key)
        hidden = key in hidden_objects
        item = hidden_objects[key] if hidden else compiled["objects"][key]
        parent = item.get("extends")
        if parent and parent != "object":
            extension = object_extension(key)
            scoped = scope(extension, parent) if extension else parent
            build_object(scoped if scoped in compiled["objects"] else parent)
        name = model.object_names[key]
        cls = class_header(item, name, abstract=hidden)
        is_a = object_parent(key, item)
        if is_a:
            cls["is_a"] = is_a
        mixins = object_mixins(key)
        if mixins:
            cls["mixins"] = mixins
        if object_extension(key):
            cls["in_subset"] = [f"ocsf_extension_{object_extension(key)}"]
        cls["instantiates"] = [FACTS]
        cls["annotations"] = class_annotations(item, key)
        terms = d3fend_terms(item)
        if terms:
            cls["related_mappings"] = terms
        classes[name] = cls
        placed[name] = "ocsf_objects"
        if hidden:
            attributes = {
                slot: hidden_facets(model, name, slot, entry)
                for slot, entry in item["attributes"].items()
                if slot != "$include"
            }
        else:
            attributes = {
                slot: model.facets(slot, entry) for slot, entry in item["attributes"].items()
            }
            cls.update(constraint_expressions(item.get("constraints", {}), item["attributes"]))
        model.refine(name, attributes)

    for key in sorted(hidden_objects):
        build_object(key)
    for key in sorted(compiled["objects"]):
        build_object(key)

    # Events, parents before children.
    def event_extension(key: str):
        return key.split("/")[0] if "/" in key else None

    def event_source(key: str):
        if key in ext_events:
            return ext_events[key][1]
        return source_events.get(key, {})

    event_done: set[str] = set()

    def event_name(key: str) -> str:
        return event_class_name(key, key in hidden_events)

    def category_uid(category: str | None) -> int | None:
        table = compiled["categories"]["attributes"]
        if category in table:
            return table[category]["uid"]
        return None

    def event_module(key: str, item: dict) -> str:
        if event_extension(key):
            return f"ocsf_events_{event_extension(key)}"
        if key == "base_event":
            return "ocsf_events_base"
        return f"ocsf_events_{item['category']}"

    def build_event(key: str) -> None:
        if key in event_done:
            return
        event_done.add(key)
        hidden = key in hidden_events
        item = hidden_events[key] if hidden else compiled["classes"][key]
        parent = item.get("extends")
        if parent:
            extension = event_extension(key)
            scoped = scope(extension, parent) if extension else parent
            parent_key = scoped if scoped in compiled["classes"] else parent
            build_event(parent_key)
        name = event_name(key)
        cls = class_header(item, name, abstract=hidden)
        if parent:
            cls["is_a"] = event_name(parent_key)
        if key == "base_event":
            cls["tree_root"] = True
        keys = includes(event_source(key), event_extension(key), ext_dirs)
        if keys:
            cls["mixins"] = [profile_class_name(profile) for profile in keys]
        category = item.get("category")
        if category in compiled["categories"]["attributes"]:
            cls["in_subset"] = [f"ocsf_category_{category}"]
        if event_extension(key):
            cls.setdefault("in_subset", []).append(f"ocsf_extension_{event_extension(key)}")
        cls["instantiates"] = [FACTS]
        cls["annotations"] = class_annotations(item, key)
        terms = d3fend_terms(item)
        if terms:
            cls["related_mappings"] = terms
        classes[name] = cls
        placed[name] = event_module(key, item)
        if hidden:
            attributes = {
                slot: hidden_facets(model, name, slot, entry)
                for slot, entry in item["attributes"].items()
                if slot != "$include"
            }
            uid = category_uid(category)
            if uid is not None:
                attributes["category_uid"] = dict(
                    model.effective(name, "category_uid"), equals_number=uid
                )
        else:
            attributes = {}
            for slot, entry in item["attributes"].items():
                facets = model.facets(slot, entry)
                if slot in ("class_uid", "category_uid"):
                    # One value for the class, whose caption and text are the class's
                    # or the category's own.
                    values = entry["enum"]
                    facets.pop("any_of")
                    facets["equals_number"] = int(next(iter(values)))
                attributes[slot] = facets
            cls.update(constraint_expressions(item.get("constraints", {}), item["attributes"]))
        model.refine(name, attributes)

    for key in sorted(hidden_events):
        build_event(key)
    for key in sorted(compiled["classes"]):
        build_event(key)

    return model, placed


def source_attribute(model: Model, slot: str, entry: dict, profile: str | None = None) -> dict:
    """An attribute of a profile's file, merged over its dictionary entry."""
    base = model.dictionary.get(slot)
    if base is None:
        base = next(value for key, value in model.dictionary.items() if key.endswith(f"/{slot}"))
    merged = dict(base)
    for key in ("caption", "description", "requirement", "group", "references", "@deprecated"):
        if key in entry:
            merged[key] = entry[key]
    merged.setdefault("requirement", "optional")
    gate = entry.get("profile", profile)
    if gate:
        merged["profiles"] = [gate]
    return merged


def hidden_facets(model: Model, class_name: str, slot: str, entry: dict) -> dict:
    """An attribute of an abstract parent the compiler folds away: what the class
    inherits, with what its source file states laid over it."""
    if slot in model.inherited_slots(class_name):
        want = model.effective(class_name, slot)
    else:
        want = model.effective_base(slot)
    want = dict(want)
    notes = dict(want.get("annotations", {}))
    if "caption" in entry:
        want["title"] = entry["caption"]
    if "description" in entry:
        want["description"] = text(entry["description"])
    if "group" in entry:
        notes["ocsf_group"] = entry["group"]
    if "profile" in entry:
        if entry["profile"]:
            notes["ocsf_profiles"] = entry["profile"]
        else:
            notes.pop("ocsf_profiles", None)
            notes.pop("ocsf_requirement", None)
    if "requirement" in entry:
        requirement = entry["requirement"]
        gated = "ocsf_profiles" in notes
        want["required"] = requirement == "required" and not gated
        want["recommended"] = requirement == "recommended"
        notes.pop("ocsf_requirement", None)
        if gated and requirement == "required":
            notes["ocsf_requirement"] = requirement
    if references(entry):
        want["see_also"] = references(entry)
    want["annotations"] = OrderedDict(sorted(notes.items()))
    return want


# ---------------------------------------------------------------------------
# Modules
# ---------------------------------------------------------------------------


PREFIXES = OrderedDict(
    ocsf="https://w3id.org/lmodel/ocsf/",
    linkml="https://w3id.org/linkml/",
    xsd="http://www.w3.org/2001/XMLSchema#",
    attack="https://w3id.org/lmodel/attack/",
    cve="https://w3id.org/lmodel/cve/",
    cwe="https://w3id.org/lmodel/cwe/",
    d3f="http://d3fend.mitre.org/ontologies/d3fend.owl#",
    kev_catalog="https://w3id.org/lmodel/kev-catalog/",
    nist_nvd="https://w3id.org/lmodel/nist-nvd/",
    stix="https://w3id.org/lmodel/stix/",
)


def header(name: str, title: str, description: str, imports: list[str]) -> dict:
    document = OrderedDict()
    document["id"] = UMBRELLA_ID if name == "ocsf" else f"{UMBRELLA_ID}/{name}"
    document["name"] = name
    document["title"] = title
    document["description"] = description
    document["version"] = VERSION
    document["source"] = SOURCE_URL
    document["license"] = "Apache-2.0"
    document["see_also"] = list(SEE_ALSO)
    document["prefixes"] = OrderedDict(PREFIXES)
    document["default_prefix"] = "ocsf"
    document["default_range"] = "string"
    document["imports"] = imports
    return document


def type_definitions(types: dict) -> dict:
    out = OrderedDict()
    for key in sorted(types):
        if key == "json_t":
            continue
        item = types[key]
        definition = OrderedDict()
        definition["title"] = item["caption"]
        definition["description"] = text(item["description"])
        primitive = key
        while primitive not in PRIMITIVES:
            primitive = types[primitive]["type"]
        typeof, base, uri = PRIMITIVES[primitive]
        definition["typeof"] = typeof if key in PRIMITIVES else type_name(item["type"])
        definition["base"] = base
        definition["uri"] = uri
        if item.get("regex"):
            definition["pattern"] = item["regex"]
        if item.get("range"):
            definition["minimum_value"] = item["range"][0]
            definition["maximum_value"] = item["range"][1]
        if references(item):
            definition["see_also"] = references(item)
        definition["instantiates"] = [FACTS]
        notes = OrderedDict(ocsf_key=key)
        if item.get("max_len") is not None:
            notes["ocsf_max_len"] = str(item["max_len"])
        if item.get("observable") is not None:
            notes["ocsf_observable"] = str(item["observable"])
        if item.get("extension"):
            notes["ocsf_extension"] = item["extension"]
        definition["annotations"] = notes
        out[type_name(key)] = definition
    return out


def facts_classes() -> dict:
    """The annotation keys this schema uses, declared as a metamodel extension."""

    def attribute(description: str) -> dict:
        return OrderedDict(description=description)

    return OrderedDict(
        OcsfFacts=OrderedDict(
            description=(
                "What an annotation states about an OCSF element where the metamodel has no "
                "slot for it. No data holds this class: it declares the annotation keys, and "
                "each annotated element names it through instantiates."
            ),
            class_uri=FACTS,
            abstract=True,
            attributes=OrderedDict(
                ocsf_key=attribute("The item's key in OCSF, scoped by its extension where it has one."),
                ocsf_category=attribute("The event class's category, by OCSF's key."),
                ocsf_category_uid=attribute("The category's number, on the subset that stands for it."),
                ocsf_extension=attribute("The extension that defines the element."),
                ocsf_extension_uid=attribute("The extension's number, on the subset that stands for it."),
                ocsf_group=attribute("An attribute's group: classification, context, occurrence or primary."),
                ocsf_profiles=attribute(
                    "The profiles behind an element, by OCSF's key and space separated. An event holds "
                    "an attribute that names any only if metadata.profiles lists one of them. On a "
                    "class, they are every profile OCSF lists for it, its nested objects' included."
                ),
                ocsf_requirement=attribute(
                    "OCSF's requirement on an attribute a profile brings, which applies only when "
                    "the event lists the profile."
                ),
                ocsf_sibling=attribute("The string attribute that holds the label of an enumerated one."),
                ocsf_observable=attribute("OCSF's observable type id for the element."),
                ocsf_source_note=attribute("OCSF's note on where an attribute comes from."),
                ocsf_suppress_checks=attribute("The convention checks OCSF turns off for an attribute."),
                ocsf_max_len=attribute("OCSF's longest allowed value of a data type, in characters."),
                ocsf_constraints=attribute("A class's at_least_one and just_one constraints, as JSON."),
                ocsf_associations=attribute("A class's associations between attributes, as JSON."),
                ocsf_deprecated_since=attribute("The OCSF version that deprecated the element."),
                ocsf_superseded_by=attribute("What OCSF names as the replacement, space separated."),
            ),
        ),
    )


MODULE_TITLES = {
    "ocsf_events_base": ("OCSF base event", "The base event, the parent of every OCSF event class."),
    "ocsf_events_win": (
        "OCSF Windows event classes",
        "The event classes of OCSF's Windows extension. The extension's objects sit in "
        "ocsf_objects, because it patches base objects with attributes that range over them.",
    ),
}


def write(compiled: dict) -> None:
    model, placed = build(compiled)
    mappings = {}
    if MAPPINGS.exists():
        mappings = yaml.safe_load(MAPPINGS.read_text(encoding="utf-8")) or {}
    for name, entries in mappings.get("classes", {}).items():
        apply_mappings(model.classes[name], entries)
    for name, entries in mappings.get("slots", {}).items():
        apply_mappings(model.slots[name], entries)
    for class_name, usages in mappings.get("slot_usage", {}).items():
        for slot, entries in usages.items():
            usage = model.classes[class_name].setdefault("slot_usage", OrderedDict())
            apply_mappings(usage.setdefault(slot, OrderedDict()), entries)

    categories = compiled["categories"]["attributes"]
    extensions = compiled["extensions"]

    subsets = OrderedDict()
    for key in sorted(categories):
        item = categories[key]
        subsets[f"ocsf_category_{key}"] = OrderedDict(
            title=item["caption"],
            description=text(item["description"]),
            annotations=OrderedDict(ocsf_category_uid=str(item["uid"])),
        )
    for key in sorted(extensions):
        item = extensions[key]
        subsets[f"ocsf_extension_{key}"] = OrderedDict(
            title=item["caption"],
            description=text(item["description"]),
            annotations=OrderedDict(ocsf_extension_uid=str(item["uid"])),
        )

    object_valued = {
        key.split("/")[-1]
        for key, attribute in model.dictionary.items()
        if attribute["type"] == "object_t"
    }

    def select_classes(module: str) -> dict:
        return OrderedDict(
            (name, cls) for name, cls in model.classes.items() if placed[name] == module
        )

    documents = OrderedDict()

    core = header(
        "ocsf_core",
        "OCSF data types and scalar dictionary attributes",
        "The data types of OCSF's attribute dictionary, and every attribute whose value is "
        "not an object. Each slot keeps OCSF's key, so a real event validates unchanged.",
        ["linkml:types"],
    )
    core["subsets"] = subsets
    core["types"] = type_definitions(model.types)
    if model.string_enums:
        core["enums"] = OrderedDict(sorted(model.string_enums.items()))
    core["slots"] = OrderedDict(
        (name, slot) for name, slot in model.slots.items() if name not in object_valued
    )
    core["classes"] = OrderedDict(list(facts_classes().items()) + list(select_classes("ocsf_core").items()))
    documents["ocsf_core"] = core

    objects = header(
        "ocsf_objects",
        "OCSF objects, profiles and object-valued attributes",
        "OCSF's objects, its profiles as mixins, and the dictionary attributes whose value is "
        "an object. They sit in one module because they refer to each other: an object's "
        "attribute ranges over an object, an object takes a profile, and a profile's "
        "attribute ranges over an object. The extensions' objects sit here too, since an "
        "extension patches a base object with attributes that range over its own.",
        ["linkml:types", "ocsf_core"],
    )
    objects["slots"] = OrderedDict(
        (name, slot) for name, slot in model.slots.items() if name in object_valued
    )
    objects["classes"] = select_classes("ocsf_objects")
    documents["ocsf_objects"] = objects

    event_modules = sorted({m for m in placed.values() if m.startswith("ocsf_events_")})
    for module in event_modules:
        if module in MODULE_TITLES:
            title, description = MODULE_TITLES[module]
        else:
            category = module.removeprefix("ocsf_events_")
            title = f"OCSF event classes: {categories[category]['caption']}"
            description = text(categories[category]["description"])
        imports = ["linkml:types", "ocsf_core", "ocsf_objects"]
        if module == "ocsf_events_base":
            pass
        elif module == "ocsf_events_win":
            imports += ["ocsf_events_base", "ocsf_events_discovery", "ocsf_events_system"]
        else:
            imports += ["ocsf_events_base"]
        document = header(module, title, description, imports)
        document["classes"] = select_classes(module)
        documents[module] = document

    umbrella = header(
        "ocsf",
        "Open Cybersecurity Schema Framework (OCSF)",
        "A LinkML model of the Open Cybersecurity Schema Framework, the open standard for "
        "normalising security events that the OCSF project publishes. It renders OCSF 1.9.0 "
        "with OCSF's own keys and integer values, so a real event validates unchanged "
        "against the class its class_uid names.",
        ["linkml:types", "ocsf_core", "ocsf_objects"] + event_modules,
    )
    umbrella["keywords"] = [
        "security events",
        "OCSF",
        "event normalisation",
        "security telemetry",
        "observability",
    ]
    umbrella["comments"] = [
        "The version is OCSF's own. upstream/ holds the tag's files and the compiler's output, "
        "scripts/ocsf_to_linkml.py writes these modules from them, tests/test_coverage.py "
        "holds the schema to them both ways, and scripts/check_upstream_release.py reports "
        "when the tag moves.",
    ]
    documents["ocsf"] = umbrella

    OUT.mkdir(parents=True, exist_ok=True)
    for path in OUT.glob("*.yaml"):
        path.unlink()
    for name, document in documents.items():
        (OUT / f"{name}.yaml").write_text("---\n" + dump(document), encoding="utf-8")


def main() -> None:
    write(read_json(COMPILED))


if __name__ == "__main__":
    main()
