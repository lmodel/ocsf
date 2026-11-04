"""Checks what the generated Python models do with real-shaped events.

The Pydantic models load an event with every key OCSF writes. The dataclasses have two
gaps in LinkML 1.12.1, which docs/about.md states: a key named after a Python keyword,
which they rename, and a JSON value, on which their `isinstance` check against
`typing.Any` raises. These tests hold both sentences, so a fix in LinkML fails them
and the note can go.
"""

import json
from pathlib import Path

import pytest
import rdflib
import yaml

from ocsf.datamodel import ocsf as dataclasses_module
from ocsf.datamodel import ocsf_pydantic

ROOT = Path(__file__).parent.parent
CONTEXT = ROOT / "project" / "jsonld" / "ocsf.context.jsonld"
VALID = ROOT / "tests" / "data" / "valid"
PROBLEM = ROOT / "tests" / "data" / "problem" / "valid"
HAND_WRITTEN = sorted([*VALID.glob("*.yaml"), *PROBLEM.glob("*.yaml")])


def _load(path):
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def _class_name(path):
    return path.stem.split("-")[0]


@pytest.mark.parametrize("path", HAND_WRITTEN, ids=lambda p: p.stem)
def test_an_event_loads_into_the_pydantic_models(path):
    model = getattr(ocsf_pydantic, _class_name(path)).model_validate(_load(path))
    assert model is not None


def test_a_pydantic_model_keeps_a_keyword_key():
    event = _load(PROBLEM / "OcsfEmailActivity-delivered.yaml")
    model = ocsf_pydantic.OcsfEmailActivity.model_validate(event)
    assert model.email.from_ == "sender@example.com"
    assert (
        model.model_dump(by_alias=True, exclude_none=True)["email"]["from"]
        == "sender@example.com"
    )


def test_a_pydantic_model_keeps_what_ocsf_leaves_open():
    event = _load(PROBLEM / "OcsfApiActivity-unmapped.yaml")
    model = ocsf_pydantic.OcsfApiActivity.model_validate(event)
    assert model.unmapped["source_specific"]["nested"] == [1, "two"]
    assert model.enrichments[0].data == [{"reputation": 90}]


@pytest.mark.parametrize("path", sorted(VALID.glob("*.yaml")), ids=lambda p: p.stem)
def test_an_event_loads_into_the_dataclasses(path):
    assert getattr(dataclasses_module, _class_name(path))(**_load(path)) is not None


def test_the_dataclasses_cannot_take_a_keyword_key():
    with pytest.raises(TypeError, match="from"):
        dataclasses_module.OcsfEmail(**{"from": "sender@example.com"})


def test_the_dataclasses_cannot_take_a_json_value():
    with pytest.raises(TypeError, match="isinstance"):
        dataclasses_module.OcsfResponse(data={"anything": 1})


def test_the_context_gives_each_key_its_iri():
    """Applied to an event, the JSON-LD context gives each value as a triple under this
    schema's namespace, and nothing identifies the event, so it is a blank node."""
    context = json.loads(CONTEXT.read_text(encoding="utf-8"))["@context"]
    event = dict(
        _load(VALID / "OcsfAuthentication-logon.yaml"), **{"@context": context}
    )
    graph = rdflib.Graph()
    graph.parse(data=json.dumps(event), format="json-ld")
    namespace = rdflib.Namespace("https://w3id.org/lmodel/ocsf/")
    subjects = list(graph.subjects(namespace.class_uid, rdflib.Literal(3002)))
    assert len(subjects) == 1
    assert isinstance(subjects[0], rdflib.BNode)
    assert (subjects[0], namespace.is_mfa, rdflib.Literal(True)) in graph
