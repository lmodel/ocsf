"""Checks each mapping against its source, and the prefixes it needs.

Each mapping names its target by a CURIE whose prefix the schema binds. A target in an
lmodel neighbour's namespace is held to that neighbour's released copy under
tests/neighbours/. A D3FEND target is held to tests/upstream/d3fend-terms.txt, which
scripts/extract_d3fend_terms.py writes from D3FEND's pinned file, and to the reference
of OCSF's that names it, or to the link D3FEND's own file states in
tests/upstream/d3fend-ocsf-links.txt. The schema is the one home for mappings: no SSSOM
file sits beside it.
"""

import hashlib
import json
import re
from functools import cache
from pathlib import Path

import pytest
import yaml

ROOT = Path(__file__).parent.parent
SCHEMA_DIR = ROOT / "src" / "ocsf" / "schema"
NEIGHBOURS = ROOT / "tests" / "neighbours"
TERMS = ROOT / "tests" / "upstream" / "d3fend-terms.txt"
TERMS_SHA256 = "fdfe185fc01ed26db49fc853f615eadbc8d7e27dc2b29fae9e6144b2c3123719"
LINKS = ROOT / "tests" / "upstream" / "d3fend-ocsf-links.txt"
LINKS_SHA256 = "644736639587c530b7a1e9efcbabb859e703d07cb4ff0eb4f632fa6ee08c3606"
COMPILED = json.loads(
    (ROOT / "upstream" / "ocsf-compiled-1.9.0.json").read_text("utf-8")
)
MAPPING_KEYS = (
    "exact_mappings",
    "close_mappings",
    "narrow_mappings",
    "broad_mappings",
    "related_mappings",
    "mappings",
)
# Terms D3FEND defines that the mapping table names by hand, as OCSF's d3f objects do.
D3FEND_BY_HAND = {"DefensiveTactic", "DefensiveTechnique"}
# D3FEND's links to an address OCSF 1.9.0 spells otherwise, with the key it holds there.
# The first is OCSF's own misspelling, and the others are in the Windows extension.
LINK_SPELLINGS = {
    "classes/event_log_activity": "classes/event_log_actvity",
    "objects/registry_key": "objects/win/reg_key",
    "objects/registry_value": "objects/win/reg_value",
}


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


MODULES = {
    path.name: yaml.safe_load(path.read_text(encoding="utf-8"))
    for path in sorted(SCHEMA_DIR.glob("*.yaml"))
}
TARGETS = sorted(
    {(name, curie) for name, doc in MODULES.items() for curie in _mappings(doc)}
)


@cache
def neighbour_iris():
    """Each IRI the neighbours' released copies declare."""
    found = set()
    for path in NEIGHBOURS.glob("*.yaml"):
        doc = yaml.safe_load(path.read_text(encoding="utf-8"))
        prefixes = doc.get("prefixes") or {}
        default = doc.get("default_prefix")

        def expand(curie):
            prefix, _, local = curie.partition(":")
            return prefixes[prefix] + local if prefix in prefixes else curie

        for kind, uri_key in (
            ("classes", "class_uri"),
            ("slots", "slot_uri"),
            ("enums", "enum_uri"),
        ):
            for name, element in (doc.get(kind) or {}).items():
                found.add(expand((element or {}).get(uri_key) or f"{default}:{name}"))
        for cls in (doc.get("classes") or {}).values():
            for name, slot in ((cls or {}).get("attributes") or {}).items():
                found.add(expand((slot or {}).get("slot_uri") or f"{default}:{name}"))
    return found


@cache
def d3fend_terms():
    lines = TERMS.read_text(encoding="utf-8").splitlines()
    return {line for line in lines if line and not line.startswith("#")}


def expand(module, curie):
    prefix, _, local = curie.partition(":")
    return MODULES[module]["prefixes"][prefix] + local


@cache
def d3fend_links():
    lines = LINKS.read_text(encoding="utf-8").splitlines()
    return [tuple(line.split()) for line in lines if line and not line.startswith("#")]


def test_the_term_list_is_the_pinned_one():
    """The list is byte for byte what the script wrote from D3FEND's pinned file."""
    assert hashlib.sha256(TERMS.read_bytes()).hexdigest() == TERMS_SHA256
    assert hashlib.sha256(LINKS.read_bytes()).hexdigest() == LINKS_SHA256


def test_mappings_exist():
    """The parametrized tests below pass on an empty list, so this one does not."""
    assert len(TARGETS) >= 80, len(TARGETS)


@pytest.mark.parametrize(("module", "curie"), TARGETS)
def test_each_target_has_a_bound_prefix(module, curie):
    """Every mapping names its target by a CURIE whose prefix its module binds, so a
    projection of the adapt copy raises no warning."""
    prefix, separator, _ = curie.partition(":")
    assert separator and prefix in MODULES[module]["prefixes"], curie


@pytest.mark.parametrize(("module", "curie"), TARGETS)
def test_each_target_is_read_at_its_source(module, curie):
    """Every target is a term a released neighbour copy or D3FEND's pinned file declares."""
    if curie.startswith("d3f:"):
        assert curie.removeprefix("d3f:") in d3fend_terms(), curie
    else:
        assert expand(module, curie) in neighbour_iris(), curie


def test_each_d3fend_relation_is_what_ocsf_references_name():
    """A D3FEND term other than the two by hand comes from a reference of OCSF's, on a
    class, an object or a dictionary attribute, and no such reference is left out."""
    named = set()
    for items in (
        COMPILED["classes"],
        COMPILED["objects"],
        COMPILED["dictionary"]["attributes"],
    ):
        for item in items.values():
            for reference in item.get("references", []):
                match = re.search(
                    r"D3FEND\S* Ontology d3f:([A-Za-z0-9_-]+)",
                    reference.get("description", ""),
                )
                if match:
                    named.add(match.group(1))
    mapped = {
        curie.removeprefix("d3f:") for _, curie in TARGETS if curie.startswith("d3f:")
    }
    linked = {term for term, _ in d3fend_links()}
    assert mapped - D3FEND_BY_HAND - linked <= named
    assert named <= mapped


def test_each_link_d3fend_states_is_a_mapping():
    """Each OCSF element D3FEND's file names is related to the term that names it."""
    elements = {}
    for name, doc in MODULES.items():
        kind = "objects" if name == "ocsf_objects.yaml" else "classes"
        for element in (doc.get("classes") or {}).values():
            key = (element.get("annotations") or {}).get("ocsf_key")
            if key:
                elements[f"{kind}/{key}"] = element
    assert d3fend_links()
    for term, address in d3fend_links():
        if address.startswith("categories/"):
            continue  # No class of this schema renders a category.
        element = elements[LINK_SPELLINGS.get(address, address)]
        assert f"d3f:{term}" in element.get("related_mappings", []), (term, address)


def test_the_old_prefixes_are_gone():
    """The prefixes behind the SSSOM files named sites and a deleted schema."""
    for doc in MODULES.values():
        prefixes = doc["prefixes"]
        assert "core" not in prefixes
        assert "uco_master" not in prefixes
        assert not [iri for iri in prefixes.values() if "lmodel.github.io" in iri]
