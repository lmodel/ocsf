"""Data tests: the examples, and a counter-example per constraint of every class.

The examples and counter-examples on disk go through the committed JSON Schema, which
is what a consumer without LinkML validates with, and the rules no generator carries.
The constraints repeat across hundreds of classes, so the systematic counter-examples
are made here from the schema: for each class, each required attribute taken away,
each listed value replaced and each constant changed must fail where it should.
"""

import copy
import json
from functools import cache
from pathlib import Path

import jsonschema
import pytest
import yaml
from linkml.validator import validate

from scripts import make_examples
from tests.ocsf_rules import class_of, findings, object_findings, view

ROOT = Path(__file__).parent.parent
SCHEMA = ROOT / "src" / "ocsf" / "schema" / "ocsf.yaml"
COMMITTED = ROOT / "project" / "jsonschema" / "ocsf.schema.json"
DATA = Path(__file__).parent / "data"
MINIMAL = sorted((DATA / "minimal").glob("*.yaml"))
VALID = sorted(
    [
        *(DATA / "valid").glob("*.yaml"),
        *(DATA / "problem" / "valid").glob("*.yaml"),
        *MINIMAL,
    ]
)
INVALID = sorted((DATA / "invalid").glob("*.yaml"))
PROBLEM_INVALID = sorted((DATA / "problem" / "invalid").glob("*.yaml"))
NOT_LISTED = 987654
# The one SchemaView of the session: its induced slots take seconds to compute.
VIEW = view()


@cache
def definitions():
    return json.loads(COMMITTED.read_text(encoding="utf-8"))["$defs"]


@cache
def checker(class_name):
    schema = {"$ref": f"#/$defs/{class_name}", "$defs": definitions()}
    return jsonschema.validators.validator_for(schema)(schema)


def errors(instance, class_name):
    return list(checker(class_name).iter_errors(instance))


def pointer(error):
    return "/" + "/".join(str(part) for part in error.absolute_path)


def class_name_of(path):
    return path.stem.split("-")[0]


def fails_at(path):
    first = path.read_text(encoding="utf-8").splitlines()[0]
    assert first.startswith("# Fails at: "), (
        f"{path.name}: the first line names where it fails"
    )
    return first.removeprefix("# Fails at: ").strip()


def places(error):
    """Where an error points: its own place, or, for an anyOf no branch met, the places
    inside the branch that could have been meant. An optional value's branches are the
    value and null, so its error points inside the value, and a list of constants stays
    at its own place."""
    if error.validator not in ("anyOf", "oneOf") or not error.context:
        return {pointer(error)}
    branches = {}
    for sub in error.context:
        branches.setdefault(sub.relative_schema_path[0], []).append(sub)
    real = [
        subs
        for subs in branches.values()
        if not any(s.validator == "type" and s.validator_value == "null" for s in subs)
    ]
    if len(real) != 1:
        return {pointer(error)}
    found = set()
    for sub in real[0]:
        found |= places(sub)
    return found or {pointer(error)}


def rule_findings(instance, class_name):
    return (
        findings(instance)
        if "class_uid" in instance
        else object_findings(instance, class_name)
    )


def concrete():
    return make_examples.concrete_classes(VIEW)


@cache
def minimal(class_name):
    path = DATA / "minimal" / f"{class_name}-minimal.yaml"
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def test_the_example_folders_hold_examples():
    """The parametrized tests below pass on an empty folder, so this one does not."""
    assert len(VALID) >= 270, len(VALID)
    assert len(INVALID) >= 25, len(INVALID)
    assert len(PROBLEM_INVALID) >= 10, len(PROBLEM_INVALID)


def test_every_concrete_class_has_an_example():
    assert {class_name_of(path) for path in VALID} == set(concrete())


def test_the_minimal_examples_are_what_the_script_writes():
    written = {path.name: path.read_text(encoding="utf-8") for path in MINIMAL}
    assert written == make_examples.documents(VIEW)


@pytest.mark.parametrize("path", VALID, ids=lambda p: p.stem)
def test_valid_examples_validate(path):
    """Every valid example passes the JSON Schema and the rules."""
    instance = yaml.safe_load(path.read_text(encoding="utf-8"))
    found = errors(instance, class_name_of(path))
    assert not found, [f"{pointer(e)}: {e.message[:200]}" for e in found]
    assert not rule_findings(instance, class_name_of(path))[0]


@pytest.mark.parametrize("path", INVALID, ids=lambda p: p.stem)
def test_counter_examples_fail_where_they_say(path):
    """Every counter-example fails at the place its first line names, and nowhere else
    but on the way to it, so a file that starts failing for another reason fails this."""
    where = fails_at(path)
    found = errors(
        yaml.safe_load(path.read_text(encoding="utf-8")), class_name_of(path)
    )
    assert found, "it validates"
    reached = set().union(*(places(e) for e in found))
    report = [f"{pointer(e)}: {e.message[:200]}" for e in found]
    assert where in reached, (sorted(reached), report)
    on_the_way = {
        p for p in reached if where == p or where.startswith(p.rstrip("/") + "/")
    }
    assert reached == on_the_way, (sorted(reached - on_the_way), report)


@pytest.mark.parametrize("path", PROBLEM_INVALID, ids=lambda p: p.stem)
def test_rule_counter_examples_fail_where_they_say(path):
    """A counter-example under problem/invalid/ passes the JSON Schema, which cannot
    state its rule, and fails only the rule its first line names, with OCSF's name."""
    where, code = fails_at(path).split()
    instance = yaml.safe_load(path.read_text(encoding="utf-8"))
    found = errors(instance, class_name_of(path))
    assert not found, [f"{pointer(e)}: {e.message[:200]}" for e in found]
    found_rules = rule_findings(instance, class_name_of(path))[0]
    assert [(place, name) for place, name, _ in found_rules] == [(where, code)]


# The same kinds of counter-example, made from the schema for every class.


def _required(name):
    return sorted(s.name for s in VIEW.class_induced_slots(name) if s.required)


REQUIRED = [(name, slot) for name in concrete() for slot in _required(name)]


@pytest.mark.parametrize(("name", "slot"), REQUIRED)
def test_each_required_attribute_is_required(name, slot):
    instance = copy.deepcopy(minimal(name))
    del instance[slot]
    assert errors(instance, name), f"{name} passes with no {slot}"


def _listed(name):
    return sorted(
        s.name
        for s in VIEW.class_induced_slots(name)
        if any(e.equals_number is not None for e in s.any_of)
    )


LISTED = [(name, slot) for name in concrete() for slot in _listed(name)]


@pytest.mark.parametrize(("name", "slot"), LISTED)
def test_each_list_refuses_a_number_it_does_not_hold(name, slot):
    """A number outside a list fails, as it does in OCSF's validator."""
    instance = copy.deepcopy(minimal(name))
    induced = VIEW.induced_slot(slot, name)
    instance[slot] = [NOT_LISTED] if induced.multivalued else NOT_LISTED
    reached = (
        set().union(*(places(e) for e in errors(instance, name)))
        if errors(instance, name)
        else set()
    )
    assert any(place.startswith(f"/{slot}") for place in reached), (
        f"{name}.{slot} takes {NOT_LISTED}"
    )


def _constants(name):
    return sorted(
        s.name for s in VIEW.class_induced_slots(name) if s.equals_number is not None
    )


CONSTANTS = [(name, slot) for name in concrete() for slot in _constants(name)]


def test_every_event_class_has_its_two_constants():
    assert len(CONSTANTS) == 2 * 87


@pytest.mark.parametrize(("name", "slot"), CONSTANTS)
def test_each_constant_is_held(name, slot):
    instance = copy.deepcopy(minimal(name))
    instance[slot] = NOT_LISTED
    reached = {pointer(e) for e in errors(instance, name)}
    assert f"/{slot}" in reached, f"{name} takes another {slot}"


def _constrained(name):
    cls = VIEW.get_class(name)
    return bool(cls.any_of or cls.exactly_one_of)


CONSTRAINED = [name for name in concrete() if _constrained(name)]


def test_the_constraints_are_there():
    """OCSF states 107 constraints, and two of them no slot condition can state."""
    assert len(CONSTRAINED) >= 100, len(CONSTRAINED)


@pytest.mark.parametrize("name", CONSTRAINED)
def test_each_constraint_needs_a_member(name):
    cls = VIEW.get_class(name)
    members = [
        slot
        for expression in [*cls.any_of, *cls.exactly_one_of]
        for slot in expression.slot_conditions
    ]
    instance = {
        key: value for key, value in minimal(name).items() if key not in members
    }
    assert errors(instance, name), f"{name} passes with none of {members}"


@pytest.mark.parametrize("name", concrete())
def test_each_class_refuses_a_key_it_does_not_define(name):
    instance = dict(minimal(name), no_such_key_in_ocsf=1)
    assert errors(instance, name), f"{name} takes an unknown key"


def _typed_examples():
    """A bad value for each data type that states a pattern or a bound, on a slot of it."""
    found = []
    for name, type_definition in sorted(VIEW.all_types().items()):
        if not name.startswith("ocsf_"):
            continue
        if type_definition.pattern or type_definition.maximum_value is not None:
            found.append(name)
    return found


@pytest.mark.parametrize("type_name", _typed_examples())
def test_each_data_type_refuses_a_value_outside_it(type_name):
    bad = (
        70000
        if VIEW.get_type(type_name).maximum_value is not None
        else "!! not this type !!"
    )
    for class_name in concrete():
        for slot in VIEW.class_induced_slots(class_name):
            if slot.range == type_name and not slot.multivalued and not slot.any_of:
                instance = dict(minimal(class_name), **{slot.name: bad})
                reached = {pointer(e) for e in errors(instance, class_name)}
                assert f"/{slot.name}" in reached, (
                    f"{class_name}.{slot.name} takes {bad!r}"
                )
                return
    pytest.fail(f"no slot ranges over {type_name}")


# What linkml-validate says, since the docs tell a user to run it.


def test_validator_agrees():
    """linkml-validate accepts a real-shaped event and rejects a name for a number."""
    good = DATA / "valid" / "OcsfAuthentication-logon.yaml"
    report = validate(
        yaml.safe_load(good.read_text(encoding="utf-8")), SCHEMA, "OcsfAuthentication"
    )
    assert not report.results, [r.message for r in report.results]
    bad = DATA / "invalid" / "OcsfAuthentication-activity-id-is-a-name.yaml"
    report = validate(
        yaml.safe_load(bad.read_text(encoding="utf-8")), SCHEMA, "OcsfAuthentication"
    )
    assert any("/activity_id" in r.message for r in report.results), [
        r.message for r in report.results
    ]


def test_a_class_is_found_from_its_uid():
    """An event names its own class, so validating takes no other argument."""
    for path in VALID:
        instance = yaml.safe_load(path.read_text(encoding="utf-8"))
        if "class_uid" in instance:
            assert class_of(instance) == class_name_of(path), path.name
