"""OCSF's rules that the generated JSON Schema does not check.

LinkML 1.12.1 cannot state these, since each looks at more of the event than one
object at a time, and OCSF's reference validator (ocsf-server's validator2) applies
them to a whole event. The checks read the LinkML schema's annotations, not OCSF's
files. Each returns a list of ``(pointer, code, message)``, with OCSF's own name for
the finding as its code, and none changes the data it reads.

Errors, where OCSF's validator reports an error:

- ``attribute_unknown``: an attribute a profile brings, in an event whose
  ``metadata.profiles`` lists none of the profiles that bring it. The JSON Schema
  declares such an attribute on the class and cannot see the list.
- ``attribute_required_missing``: an attribute a listed profile requires.
- ``profile_unknown``: a listed profile OCSF does not define.
- ``type_uid_incorrect``: ``type_uid`` is not ``class_uid * 100 + activity_id``.
- ``observable_name_invalid_reference``: an observable's ``name`` names no attribute.
- ``constraint_failed``: an ``at_least_one`` that a slot condition cannot state, since
  a member is a path, such as ``device.os.sp_name``, or no attribute of the class, as
  ``log_file`` is of ``event_log_actvity``. OCSF's validator looks a path up as one key,
  so it fails every such event; this check follows the path, which is what the
  constraint says.
- ``attribute_enum_array_sibling_missing`` and ``..._incorrect``: a label of an
  enumerated array that is absent or differs from its caption, other than for 99.
- ``attribute_wrong_type``: a value of OCSF's open ``object`` that is not an object.
  LinkML's ``Any`` admits a scalar.
- ``attribute_value_exceeds_max_len``: a value past its data type's ``max_len``.
  LinkML has one ``pattern`` per type and no length.
- ``version_incompatible_*``: a ``metadata.version`` that is a prerelease, an initial
  development version or later than this schema's edition.

Warnings, where OCSF's validator reports a warning:

- ``attribute_enum_sibling_incorrect``: a scalar enumerated attribute's label differs
  from its caption. OCSF says matching is recommended, not required.
- ``attribute_enum_sibling_suspicious_other``: the label of 99 equals its caption.
- ``version_earlier``: an event of an earlier released edition.
- ``attribute_deprecated``, ``class_deprecated``, ``object_deprecated`` and
  ``attribute_enum_value_deprecated``: the schema's ``deprecated`` metaslot.

OCSF's validator also warns when a value fails its data type's regex. Here the regex
is the type's ``pattern``, so the JSON Schema rejects it. docs/index.md says so.
"""

import json
import re
from dataclasses import dataclass, field
from functools import cache
from pathlib import Path

from linkml_runtime import SchemaView

SCHEMA = Path(__file__).parent.parent / "src" / "ocsf" / "schema" / "ocsf.yaml"
EDITION = (1, 9, 0)
VERSION = re.compile(r"^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$")
OTHER = 99
UNCATEGORIZED = "Uncategorized"


@cache
def view() -> SchemaView:
    return SchemaView(str(SCHEMA))


def annotation(element, key):
    notes = element.annotations
    held = notes.get(key) if isinstance(notes, dict) else getattr(notes, key, None)
    return None if held is None else held.value


@dataclass(frozen=True)
class Attribute:
    range: str
    multivalued: bool
    profiles: frozenset
    gated_required: bool
    sibling: str | None
    captions: dict = field(hash=False)
    deprecated_values: frozenset
    deprecated: bool
    max_len: int | None
    is_object: bool


def _max_len(range_name: str) -> int | None:
    """The nearest `ocsf_max_len` on a data type and the types it derives from."""
    types = view().all_types()
    current = range_name
    while current in types:
        held = annotation(types[current], "ocsf_max_len")
        if held is not None:
            return int(held)
        current = types[current].typeof
    return None


def _constant_caption(class_name: str, slot_name: str) -> str:
    """The caption of a value a class holds constant: its own title for `class_uid`,
    and its category's for `category_uid`, which the base event has none of."""
    cls = view().get_class(class_name)
    if slot_name == "class_uid":
        return cls.title
    for subset in cls.in_subset:
        if view().get_subset(subset).annotations.get("ocsf_category_uid"):
            return view().get_subset(subset).title
    return UNCATEGORIZED


@cache
def attributes(class_name: str) -> dict:
    table = {}
    for slot in view().class_induced_slots(class_name):
        gated = annotation(slot, "ocsf_profiles")
        entries = [entry for entry in slot.any_of if entry.equals_number is not None]
        captions = {int(entry.equals_number): entry.title for entry in entries}
        if slot.equals_number is not None:
            captions[int(slot.equals_number)] = _constant_caption(class_name, slot.name)
        table[slot.name] = Attribute(
            range=slot.range,
            multivalued=bool(slot.multivalued),
            profiles=frozenset(gated.split()) if gated else frozenset(),
            gated_required=annotation(slot, "ocsf_requirement") == "required",
            sibling=annotation(slot, "ocsf_sibling"),
            captions=captions,
            deprecated_values=frozenset(
                int(entry.equals_number) for entry in entries if entry.deprecated
            ),
            deprecated=bool(slot.deprecated),
            max_len=_max_len(slot.range),
            is_object=slot.range in view().all_classes(),
        )
    return table


@cache
def classes_by_uid() -> dict:
    """Each event class by the `class_uid` it holds constant."""
    found = {}
    for name, cls in view().all_classes().items():
        if cls.abstract or cls.mixin or "class_uid" not in attributes_or_empty(name):
            continue
        slot = view().induced_slot("class_uid", name)
        if slot.equals_number is not None:
            found[int(slot.equals_number)] = name
    return found


def attributes_or_empty(name: str) -> dict:
    cls = view().get_class(name)
    if str(cls.class_uri) == "linkml:Any":
        return {}
    return attributes(name)


@cache
def known_profiles() -> frozenset:
    return frozenset(
        annotation(cls, "ocsf_key") for cls in view().all_classes().values() if cls.mixin
    )


def class_of(event: dict) -> str | None:
    """The class an event's `class_uid` names, which is the one to validate it against."""
    uid = event.get("class_uid") if isinstance(event, dict) else None
    return classes_by_uid().get(uid) if isinstance(uid, int) else None


def _listed_profiles(event: dict) -> frozenset:
    metadata = event.get("metadata")
    listed = metadata.get("profiles") if isinstance(metadata, dict) else None
    return frozenset(p for p in listed if isinstance(p, str)) if isinstance(listed, list) else frozenset()


def _path_present(item, parts) -> bool:
    if not isinstance(item, dict) or parts[0] not in item:
        return False
    return len(parts) == 1 or _path_present(item[parts[0]], parts[1:])


def _check_unstated_constraint(item, class_name, table, pointer, errors):
    """The `at_least_one` a class's any_of cannot state: a member is a path, or is no
    attribute of the class, so the slot conditions leave the rule to this check."""
    constraints = annotation(view().get_class(class_name), "ocsf_constraints")
    names = json.loads(constraints).get("at_least_one", []) if constraints else []
    if not names or all(name in table for name in names):
        return
    if not any(_path_present(item, name.split(".")) for name in names):
        errors.append((pointer or "/", "constraint_failed", f"at least one of {names} is needed"))


def _walk(item, class_name, pointer, profiles, errors, warnings):
    table = attributes_or_empty(class_name)
    if not table:
        return
    _check_unstated_constraint(item, class_name, table, pointer, errors)
    for name, attribute in table.items():
        if name in item:
            continue
        if attribute.gated_required and attribute.profiles & profiles:
            errors.append((f"{pointer}/{name}", "attribute_required_missing", "a listed profile requires it"))
    for name, value in item.items():
        attribute = table.get(name)
        if attribute is None:
            continue  # An unknown key is the JSON Schema's to report.
        here = f"{pointer}/{name}"
        if attribute.profiles and not attribute.profiles & profiles:
            errors.append(
                (here, "attribute_unknown", f"needs one of the profiles {sorted(attribute.profiles)} listed")
            )
            continue
        if value is None:
            continue
        if attribute.deprecated:
            warnings.append((here, "attribute_deprecated", "the attribute is deprecated"))
        values = value if attribute.multivalued and isinstance(value, list) else [value]
        for index, one in enumerate(values):
            place = f"{here}/{index}" if attribute.multivalued else here
            if attribute.range == "OcsfObject" and not isinstance(one, dict):
                errors.append((place, "attribute_wrong_type", "OCSF's object holds an object"))
            elif attribute.is_object and isinstance(one, dict):
                if view().get_class(attribute.range).deprecated:
                    warnings.append((place, "object_deprecated", "the object is deprecated"))
                _walk(one, attribute.range, place, profiles, errors, warnings)
            elif attribute.max_len is not None and isinstance(one, str):
                if len(one) > attribute.max_len:
                    errors.append(
                        (place, "attribute_value_exceeds_max_len", f"longer than {attribute.max_len}")
                    )
            if attribute.captions and isinstance(one, int) and one in attribute.captions:
                _check_sibling(item, here, attribute, name, index, one, errors, warnings)
                if one in attribute.deprecated_values:
                    warnings.append((place, "attribute_enum_value_deprecated", "the value is deprecated"))


def _check_sibling(item, here, attribute, name, index, value, errors, warnings):
    caption = attribute.captions[value]
    sibling = attribute.sibling
    if not sibling or sibling not in item:
        return
    held = item[sibling]
    if attribute.multivalued:
        if value == OTHER:
            return
        label = held[index] if isinstance(held, list) and index < len(held) else None
        if label is None:
            errors.append((f"{here}/{index}", "attribute_enum_array_sibling_missing", f"{sibling} has no label"))
        elif label != caption:
            errors.append(
                (f"{here}/{index}", "attribute_enum_array_sibling_incorrect", f"expected {caption!r}, got {label!r}")
            )
    elif value == OTHER:
        if held == caption:
            warnings.append((here, "attribute_enum_sibling_suspicious_other", f"{sibling} repeats the caption of 99"))
    elif held != caption:
        warnings.append((here, "attribute_enum_sibling_incorrect", f"expected {caption!r}, got {held!r}"))


def _check_version(event, errors, warnings):
    metadata = event.get("metadata")
    version = metadata.get("version") if isinstance(metadata, dict) else None
    if not isinstance(version, str):
        return
    match = VERSION.match(version)
    if not match:
        return
    numbers = tuple(int(part) for part in match.group(1, 2, 3))
    prerelease = match.group(4)
    if numbers == EDITION and not prerelease:
        return
    if numbers > EDITION:
        errors.append(("/metadata/version", "version_incompatible_later", version))
    elif numbers[0] == 0:
        errors.append(("/metadata/version", "version_incompatible_initial_development", version))
    elif prerelease:
        errors.append(("/metadata/version", "version_incompatible_prerelease", version))
    else:
        warnings.append(("/metadata/version", "version_earlier", version))


def _observable_resolves(class_name, parts, profiles) -> bool:
    table = attributes_or_empty(class_name)
    head = parts[0]
    bracketed = re.fullmatch(r"([^\[]+)\[.*\]", head)
    key = bracketed.group(1) if bracketed else head
    attribute = table.get(key)
    if attribute is None or (attribute.profiles and not attribute.profiles & profiles):
        return False
    if len(parts) == 1:
        return True
    if (bracketed and not attribute.multivalued) or not attribute.is_object:
        return False
    return _observable_resolves(attribute.range, parts[1:], profiles)


def object_findings(item: dict, class_name: str, profiles: frozenset = frozenset()) -> tuple[list, list]:
    """The same rules for an object on its own, as an event holding it would apply them."""
    errors: list = []
    warnings: list = []
    _walk(item, class_name, "", profiles, errors, warnings)
    return errors, warnings


def findings(event: dict) -> tuple[list, list]:
    """The errors and warnings of the rules above, for one event."""
    errors: list = []
    warnings: list = []
    class_name = class_of(event)
    if class_name is None:
        errors.append(("/class_uid", "class_uid_unknown", f"no class holds {event.get('class_uid')!r}"))
        return errors, warnings
    profiles = _listed_profiles(event)
    for index, profile in enumerate(sorted(profiles)):
        if profile not in known_profiles():
            errors.append((f"/metadata/profiles/{index}", "profile_unknown", profile))
    class_uid, activity_id, type_uid = (event.get(key) for key in ("class_uid", "activity_id", "type_uid"))
    if all(isinstance(value, int) for value in (class_uid, activity_id, type_uid)):
        if type_uid != class_uid * 100 + activity_id:
            errors.append(("/type_uid", "type_uid_incorrect", f"expected {class_uid * 100 + activity_id}"))
    if view().get_class(class_name).deprecated:
        warnings.append(("", "class_deprecated", class_name))
    _check_version(event, errors, warnings)
    for index, observable in enumerate(event.get("observables") or []):
        name = observable.get("name") if isinstance(observable, dict) else None
        if isinstance(name, str):
            parts = re.split(r"\.(?![^\[]*\])", name)
            if not _observable_resolves(class_name, parts, profiles):
                errors.append((f"/observables/{index}/name", "observable_name_invalid_reference", name))
    _walk(event, class_name, "", profiles, errors, warnings)
    return errors, warnings


def rule_errors(event: dict) -> list:
    return findings(event)[0]


def rule_warnings(event: dict) -> list:
    return findings(event)[1]
