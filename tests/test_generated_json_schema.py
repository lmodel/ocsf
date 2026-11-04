"""Checks the JSON Schema this project commits, as a user of it would read it.

project/jsonschema/ocsf.schema.json is what a consumer without LinkML validates with.
It is read here under the draft it declares, and held to the generator's output.
"""

import json
from functools import cache
from pathlib import Path

import jsonschema
import pytest
from linkml.generators.jsonschemagen import JsonSchemaGenerator

ROOT = Path(__file__).parent.parent
COMMITTED = ROOT / "project" / "jsonschema" / "ocsf.schema.json"
SCHEMA = ROOT / "src" / "ocsf" / "schema" / "ocsf.yaml"
OPEN = {"OcsfObject", "OcsfJsonValue"}


@cache
def schema():
    return json.loads(COMMITTED.read_text(encoding="utf-8"))


def test_the_schema_is_valid_under_the_draft_it_declares():
    jsonschema.validators.validator_for(schema()).check_schema(schema())


def test_the_committed_file_is_the_generators_output():
    generated = json.loads(JsonSchemaGenerator(str(SCHEMA), mergeimports=True).serialize())
    assert generated == schema()


def test_the_root_is_the_base_event():
    """A file with no named class is read as the base event, the one class no event of
    another class fits. docs/about.md says to name the class an event's class_uid names."""
    assert schema()["title"] == "ocsf"
    assert set(schema()["required"]) == {
        "activity_id",
        "category_uid",
        "class_uid",
        "metadata",
        "severity_id",
        "time",
        "type_uid",
    }


def test_every_class_is_closed_but_the_two_ocsf_leaves_open():
    """A key OCSF does not define is refused, as its validator refuses it. Only its
    open object and a JSON value take any key."""
    for name, definition in schema()["$defs"].items():
        if name in OPEN:
            assert definition["additionalProperties"] is True, name
        elif definition.get("type") == "object":
            assert definition["additionalProperties"] is False, name


@pytest.mark.parametrize(
    ("data_type", "keyword", "value"),
    [
        ("ip", "pattern", None),
        ("mac", "pattern", None),
        ("port", "maximum", 65535),
    ],
)
def test_a_data_type_carries_its_bound(data_type, keyword, value):
    held = schema()["$defs"]["OcsfNetworkEndpoint"]["properties"][data_type]
    assert keyword in held, data_type
    if value is not None:
        assert held[keyword] == value


def test_an_enumerated_attribute_holds_integers():
    activity = schema()["$defs"]["OcsfAuthentication"]["properties"]["activity_id"]
    assert activity["type"] == "integer"
    assert {"const": 1, "description": "A new logon session was requested."} in activity["anyOf"]


def test_a_uid_is_constant_for_its_class():
    properties = schema()["$defs"]["OcsfAuthentication"]["properties"]
    assert properties["class_uid"]["const"] == 3002
    assert properties["category_uid"]["const"] == 3
