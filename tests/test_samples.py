"""Holds the schema to what OCSF's own server generates for each event class.

https://schema.ocsf.io/sample/1.9.0/classes/<name> writes an event of a class from
OCSF's server, in the framework's shape with random words, so it touches keys no real
event may. tests/data/ocsf-server-samples-1.9.0.json.gz holds one per class, as answered
on 2026-11-04, and tests/upstream/ocsf-server-sample-verdicts.json holds what OCSF's
validator found in each that day.

A sample is no gold standard: the generator writes `favors` as a UUID and eight octets
as a MAC address, leaves profiles unlisted and invents observable names, and OCSF's own
validator flags each sample. So the proof is narrower, and each part below is stated:
every key the generator writes exists here, every number it writes is listed here, and
the rules find what OCSF's validator finds.
"""

import collections
import gzip
import json
from functools import cache
from pathlib import Path

import jsonschema
import pytest

from scripts.check_real_events import REGEX_WARNINGS, SCHEMA_FINDINGS, leaves
from tests.ocsf_rules import class_of, findings

ROOT = Path(__file__).parent.parent
SAMPLES = ROOT / "tests" / "data" / "ocsf-server-samples-1.9.0.json.gz"
VERDICTS = ROOT / "tests" / "upstream" / "ocsf-server-sample-verdicts.json"
COMMITTED = ROOT / "project" / "jsonschema" / "ocsf.schema.json"
SAMPLES_SHA_NAMES = 87


@cache
def samples():
    with gzip.open(SAMPLES, "rt", encoding="utf-8") as handle:
        return json.load(handle)


@cache
def verdicts():
    return json.loads(VERDICTS.read_text(encoding="utf-8"))


@cache
def definitions():
    return json.loads(COMMITTED.read_text(encoding="utf-8"))["$defs"]


def schema_leaves(sample):
    schema = {"$ref": f"#/$defs/{class_of(sample)}", "$defs": definitions()}
    checker = jsonschema.Draft202012Validator(schema)
    return [leaf for error in checker.iter_errors(sample) for leaf in leaves(error)]


def test_there_is_a_sample_of_each_class():
    assert len(samples()) == SAMPLES_SHA_NAMES
    assert set(samples()) == set(verdicts())


@pytest.mark.parametrize(
    "key", sorted(json.loads(VERDICTS.read_text(encoding="utf-8")))
)
def test_every_key_and_number_of_a_sample_is_known(key):
    """No sample holds a key this schema lacks or a listed number it does not list."""
    sample = samples()[key]
    assert class_of(sample), f"no class holds class_uid {sample.get('class_uid')}"
    kinds = {leaf.validator for leaf in schema_leaves(sample)}
    assert not kinds & {"additionalProperties", "const"}, kinds


@pytest.mark.parametrize(
    "key", sorted(json.loads(VERDICTS.read_text(encoding="utf-8")))
)
def test_the_rules_find_what_ocsf_validator_finds(key):
    """Each finding both name is counted alike, on samples that hold plenty of each."""
    errors, warnings = findings(samples()[key])
    ours = {
        "errors": collections.Counter(code for _, code, _ in errors),
        "warnings": collections.Counter(code for _, code, _ in warnings),
    }
    theirs = verdicts()[key]
    for kind in ("errors", "warnings"):
        for code in set(ours[kind]) | set(theirs[kind]):
            if code in SCHEMA_FINDINGS or code in REGEX_WARNINGS:
                continue
            assert ours[kind][code] == theirs[kind].get(code, 0), (kind, code)


def test_the_samples_fail_only_where_the_generator_is_at_fault():
    """What the JSON Schema refuses in the samples: a value past its data type's regex,
    which OCSF's validator warns about, and the shapes the generator gets wrong, which
    that validator also reports or leaves to the requirement the schema states."""
    kinds = collections.Counter()
    for sample in samples().values():
        kinds.update(leaf.validator for leaf in schema_leaves(sample))
    assert set(kinds) <= {"pattern", "type", "required"}, kinds
    assert kinds["pattern"] > kinds["type"] + kinds["required"], kinds
