"""Walks OCSF's compiled schema beside the LinkML schema, in both directions.

`upstream/ocsf-compiled-1.9.0.json` is what OCSF's own compiler makes of the pinned
tag. Each class and object in it is compared with the class whose `ocsf_key`
annotation names it, as LinkML reads that class: its keys, then for each key the
caption, description, range, cardinality, requirement, value list, group, profiles,
sibling, observable, references and deprecation. The source files are then walked for
what the compiler folds away: the abstract parents, the profiles and the extensions.
A difference fails, so a fact of OCSF's cannot go missing and none can be added.
"""

import json
import re
from functools import cache
from pathlib import Path

import pytest

from tests.ocsf_rules import view

ROOT = Path(__file__).parent.parent
COMPILED = json.loads(
    (ROOT / "upstream" / "ocsf-compiled-1.9.0.json").read_text("utf-8")
)
SOURCE = ROOT / "upstream" / "ocsf-schema"
DICTIONARY = COMPILED["dictionary"]["attributes"]
TYPES = COMPILED["dictionary"]["types"]["attributes"]
VIEW = view()
PRIMITIVES = {
    "string_t": "string",
    "integer_t": "integer",
    "long_t": "integer",
    "float_t": "float",
    "boolean_t": "boolean",
}


def annotation(element, key):
    notes = element.annotations
    held = notes.get(key) if isinstance(notes, dict) else getattr(notes, key, None)
    return None if held is None else held.value


@cache
def classes_by_ocsf_key():
    found = {}
    for name, cls in VIEW.all_classes().items():
        key = annotation(cls, "ocsf_key")
        if key and not cls.mixin and not cls.abstract:
            found[key] = name
    return found


def urls(item):
    return [
        ref["url"].removeprefix("href='")
        for ref in item.get("references", [])
        if ref.get("url")
    ]


def expected_range(attribute):
    kind = attribute["type"]
    if kind == "object_t":
        return classes_by_ocsf_key()[attribute["object_type"]]
    if kind == "json_t":
        return "string"  # The default, so that the any_of alone says what it holds.
    return f"ocsf_{kind}"


def held_values(slot):
    """A slot's value list as OCSF writes one: number to caption, text and deprecation."""
    return {
        str(int(entry.equals_number)): {
            key: value
            for key, value in {
                "caption": entry.title,
                "description": entry.description,
                "deprecated": entry.deprecated,
            }.items()
            if value
        }
        for entry in slot.any_of
        if entry.equals_number is not None
    }


def stated_values(enum):
    return {
        key: {
            name: value
            for name, value in {
                "caption": entry.get("caption"),
                "description": (entry.get("description") or "").strip(),
                "deprecated": (entry.get("@deprecated") or {})
                .get("message", "")
                .strip(),
            }.items()
            if value
        }
        for key, entry in enum.items()
    }


def compare_attribute(class_key, name, attribute, slot):
    context = f"{class_key}.{name}"
    assert slot.title == attribute["caption"], context
    assert slot.description == attribute["description"].strip(), context
    if attribute["type"] == "string_t" and "enum" in attribute:
        assert slot.range == "Ocsf" + "".join(
            part.title() for part in name.split("_")
        ), context
    else:
        assert slot.range == expected_range(attribute), context
    assert bool(slot.multivalued) == bool(attribute.get("is_array")), context
    gated = attribute.get("profiles") or []
    requirement = attribute["requirement"]
    assert bool(slot.required) == (requirement == "required" and not gated), context
    assert bool(slot.recommended) == (requirement == "recommended"), context
    assert annotation(slot, "ocsf_requirement") == (
        "required" if gated and requirement == "required" else None
    ), context
    assert annotation(slot, "ocsf_group") == attribute.get("group"), context
    assert annotation(slot, "ocsf_profiles") == (" ".join(gated) or None), context
    assert annotation(slot, "ocsf_sibling") == attribute.get("sibling"), context
    observable = attribute.get("observable")
    assert annotation(slot, "ocsf_observable") == (
        None if observable is None else str(observable)
    ), context
    assert annotation(slot, "ocsf_source_note") == attribute.get("source"), context
    assert annotation(slot, "ocsf_extension") == attribute.get("extension"), context
    assert list(slot.see_also) == urls(attribute), context
    deprecated = attribute.get("@deprecated") or {}
    assert (slot.deprecated or "") == deprecated.get("message", "").strip(), context
    assert annotation(slot, "ocsf_deprecated_since") == deprecated.get("since"), context
    enum = attribute.get("enum")
    if name in ("class_uid", "category_uid") and enum:
        assert slot.equals_number == int(next(iter(enum))), context
    elif enum and attribute["type"] != "string_t":
        assert held_values(slot) == stated_values(enum), context
    elif attribute["type"] == "string_t" and enum:
        assert set(VIEW.get_enum(slot.range).permissible_values) == set(enum), context
    elif attribute["type"] == "json_t":
        assert [branch.range for branch in slot.any_of] == ["OcsfJsonValue"] * 2, (
            context
        )
    else:
        assert not held_values(slot), context


def compare_item(key, item):
    name = classes_by_ocsf_key()[key]
    cls = VIEW.get_class(name)
    assert cls.title == item["caption"], key
    assert cls.description == item["description"].strip(), key
    assert list(cls.see_also) == urls(item), key
    assert annotation(cls, "ocsf_profiles") == (
        " ".join(item.get("profiles", [])) or None
    ), key
    constraints = item.get("constraints")
    assert annotation(cls, "ocsf_constraints") == (
        json.dumps(constraints, sort_keys=True) if constraints else None
    ), key
    associations = item.get("associations")
    assert annotation(cls, "ocsf_associations") == (
        json.dumps(associations, sort_keys=True) if associations else None
    ), key
    deprecated = item.get("@deprecated") or {}
    assert (cls.deprecated or "") == deprecated.get("message", "").strip(), key
    induced = {slot.name: slot for slot in VIEW.class_induced_slots(name)}
    assert set(induced) == set(item["attributes"]), key
    for attribute_name, attribute in item["attributes"].items():
        compare_attribute(key, attribute_name, attribute, induced[attribute_name])


@pytest.mark.parametrize("key", sorted(COMPILED["classes"]))
def test_event_class(key):
    item = COMPILED["classes"][key]
    compare_item(key, item)
    name = classes_by_ocsf_key()[key]
    induced = {slot.name: slot for slot in VIEW.class_induced_slots(name)}
    assert induced["class_uid"].equals_number == item["uid"]
    assert induced["category_uid"].equals_number == item["category_uid"]


@pytest.mark.parametrize("key", sorted(set(COMPILED["objects"]) - {"object"}))
def test_object(key):
    compare_item(key, COMPILED["objects"][key])


# The other direction, and what the compiler folds away.


def _read(path):
    return json.loads(path.read_text("utf-8"))


def _source_items(folder):
    return [_read(path) for path in sorted((SOURCE / folder).rglob("*.json"))]


def _profile_files():
    found = {}
    for path in sorted((SOURCE / "profiles").glob("*.json")):
        found[_read(path)["name"]] = _read(path)
    for path in sorted((SOURCE / "extensions").glob("*/profiles/*.json")):
        extension = _read(path.parent.parent / "extension.json")["name"]
        found[f"{extension}/{_read(path)['name']}"] = _read(path)
    return found


def test_every_slot_is_a_dictionary_attribute_and_back():
    held = {name for name in VIEW.all_slots(attributes=False)}
    stated = {key.split("/")[-1] for key in DICTIONARY}
    assert held == stated


@pytest.mark.parametrize("key", sorted(DICTIONARY))
def test_dictionary_attribute(key):
    attribute = DICTIONARY[key]
    name = key.split("/")[-1]
    slot = VIEW.get_slot(name)
    assert slot.slot_uri == f"ocsf:{name}", key
    assert slot.title == attribute["caption"], key
    assert slot.description == attribute["description"].strip(), key
    assert bool(slot.multivalued) == bool(attribute.get("is_array")), key
    if attribute["type"] == "string_t" and "enum" in attribute:
        assert set(VIEW.get_enum(slot.range).permissible_values) == set(
            attribute["enum"]
        ), key
    else:
        assert slot.range == expected_range(attribute), key
    assert annotation(slot, "ocsf_sibling") == attribute.get("sibling"), key
    assert not slot.required, f"{key}: requirement belongs to a class"


def test_every_class_is_an_item_of_ocsf_or_says_why_not():
    """Each class renders a compiled item, a parent OCSF folds away or a profile, and
    the only others are the three this schema adds, which name what they are."""
    keys = {annotation(cls, "ocsf_key") for cls in VIEW.all_classes().values()}
    keys.discard(None)
    stated = set(COMPILED["classes"]) | set(COMPILED["objects"]) | set(_profile_files())
    hidden = {
        item["name"]
        for item in _source_items("events")
        if "uid" not in item and item["name"] != "base_event"
    }
    hidden |= {_read(path)["name"] for path in (SOURCE / "objects").glob("_*.json")}
    assert keys == stated | hidden | {"json_t"}
    unnamed = {
        name
        for name, cls in VIEW.all_classes().items()
        if annotation(cls, "ocsf_key") is None
    }
    assert unnamed == {"OcsfFacts"}


@pytest.mark.parametrize("key", sorted(COMPILED["classes"]))
def test_event_class_extends_what_ocsf_says(key):
    cls = VIEW.get_class(classes_by_ocsf_key()[key])
    parent = COMPILED["classes"][key].get("extends")
    if parent is None:
        assert cls.is_a is None
    else:
        assert annotation(VIEW.get_class(cls.is_a), "ocsf_key") == parent, key


@pytest.mark.parametrize("key", sorted(set(COMPILED["objects"]) - {"object"}))
def test_object_extends_what_ocsf_says(key):
    cls = VIEW.get_class(classes_by_ocsf_key()[key])
    parent = COMPILED["objects"][key].get("extends")
    if parent is None:
        assert cls.is_a is None
    elif parent == "object":
        assert cls.is_a == "OcsfObjectBase"
    else:
        assert annotation(VIEW.get_class(cls.is_a), "ocsf_key") in (
            parent,
            f"win/{parent}",
        ), key


def test_the_abstract_parents_stay_abstract():
    for name in (
        "OcsfIamEvent",
        "OcsfSystemEvent",
        "OcsfFindingEvent",
        "OcsfEntity",
        "OcsfResource",
    ):
        assert VIEW.get_class(name).abstract, name


@pytest.mark.parametrize("key", sorted(_profile_files()))
def test_profile(key):
    item = _profile_files()[key]
    name = next(
        name
        for name, cls in VIEW.all_classes().items()
        if cls.mixin and annotation(cls, "ocsf_key") == key
    )
    cls = VIEW.get_class(name)
    assert cls.title == item["caption"]
    assert cls.description == item["description"].strip()
    attributes = set(item.get("attributes", {})) - {"$include"}
    assert set(cls.slots) == attributes, key
    for slot in VIEW.class_induced_slots(name):
        assert not slot.required, (
            f"{key}.{slot.name}: only a listed profile requires it"
        )
        assert annotation(slot, "ocsf_profiles") == key, f"{key}.{slot.name}"
        wanted = item["attributes"][slot.name].get("requirement")
        assert annotation(slot, "ocsf_requirement") == (
            "required" if wanted == "required" else None
        )


def test_each_category_and_extension_is_a_subset():
    categories = COMPILED["categories"]["attributes"]
    for key, item in categories.items():
        subset = VIEW.get_subset(f"ocsf_category_{key}")
        assert subset.title == item["caption"], key
        assert subset.annotations["ocsf_category_uid"].value == str(item["uid"]), key
    for key, item in COMPILED["extensions"].items():
        subset = VIEW.get_subset(f"ocsf_extension_{key}")
        assert subset.title == item["caption"], key
        assert subset.annotations["ocsf_extension_uid"].value == str(item["uid"]), key


@pytest.mark.parametrize("key", sorted(set(TYPES) - {"json_t"}))
def test_data_type(key):
    item = TYPES[key]
    held = VIEW.get_type(f"ocsf_{key}")
    assert held.title == item["caption"], key
    assert held.description == item["description"].strip(), key
    assert held.pattern == item.get("regex"), key
    bounds = item.get("range") or [None, None]
    assert held.minimum_value == bounds[0], key
    assert held.maximum_value == bounds[1], key
    held_len = annotation(held, "ocsf_max_len")
    assert held_len == (
        None if item.get("max_len") is None else str(item["max_len"])
    ), key
    assert held.typeof == (
        PRIMITIVES[key] if key in PRIMITIVES else f"ocsf_{item['type']}"
    ), key


def test_only_ocsfs_string_lists_are_enums():
    """A list of integers stays an any_of, so an enum here is one of the lists OCSF writes
    as strings, and each holds OCSF's values."""
    assert set(VIEW.all_enums()) == {"OcsfDepth", "OcsfHttpMethod", "OcsfTlp"}


def test_every_data_type_is_rendered():
    held = {
        name.removeprefix("ocsf_")
        for name in VIEW.all_types()
        if name.startswith("ocsf_")
    }
    assert held | {"json_t"} == set(TYPES)
    assert annotation(VIEW.get_class("OcsfJsonValue"), "ocsf_key") == "json_t"


def test_the_one_bad_address_is_ocsfs():
    """OCSF 1.9.0 writes one reference address with a stray `href='`, which the
    converter leaves off. A second such address would need a look, not a strip."""
    found = set()

    def walk(node):
        if isinstance(node, dict):
            for key, value in node.items():
                if (
                    key == "url"
                    and isinstance(value, str)
                    and not value.startswith("http")
                ):
                    found.add(value)
                else:
                    walk(value)
        elif isinstance(node, list):
            for item in node:
                walk(item)

    walk(COMPILED)
    assert len(found) == 1
    assert next(iter(found)).startswith("href='https://learn.microsoft.com/")


def test_the_faults_this_schema_works_around_are_still_there():
    """Each is reported in docs/about.md, and a new edition should clear them."""
    classes = COMPILED["classes"]
    assert "event_log_actvity" in classes
    assert "log_file" in classes["event_log_actvity"]["constraints"]["at_least_one"]
    assert "log_file" not in classes["event_log_actvity"]["attributes"]
    assert "device.os.sp_name" in classes["patch_state"]["constraints"]["at_least_one"]
    datetime = TYPES["datetime_t"]
    assert "2024-09-10 23:20:50.520789Z" in datetime["description"]
    assert not re.search(datetime["regex"], "2024-09-10 23:20:50.520789Z")
