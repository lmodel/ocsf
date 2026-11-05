#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["rdflib>=7.1", "pyyaml>=6"]
# ///
"""List the D3FEND terms the schema's mappings name, each found at D3FEND's own file.

OCSF's references name D3FEND terms, and the converter relates an element to each. So
that none is taken on trust, this script downloads D3FEND 1.6.0's Turtle file into
memory, refuses it unless its SHA-256 is the pinned one, and writes the sorted list of
the names the schema uses that the file declares. A name it does not declare stops the
script. It also writes each OCSF address the file names under rdfs:seeAlso, beside the
term that names it. tests/test_mappings.py holds each mapping to these lists. Usage::

    uv run scripts/extract_d3fend_terms.py

When the pin moves, move it here, rerun this script, and move the lists' checksums in
tests/test_mappings.py.
"""

from __future__ import annotations

import hashlib
import re
import urllib.request
from pathlib import Path

from rdflib import OWL, RDF, RDFS, Graph, Namespace

ROOT = Path(__file__).resolve().parent.parent
SCHEMA_DIR = ROOT / "src" / "ocsf" / "schema"
OUTPUT = ROOT / "tests" / "upstream" / "d3fend-terms.txt"
LINKS_OUTPUT = ROOT / "tests" / "upstream" / "d3fend-ocsf-links.txt"
OCSF_SITE = "https://schema.ocsf.io/"
ADDRESS = "https://d3fend.mitre.org/ontologies/d3fend/1.6.0/d3fend.ttl"
SHA256 = "4909a5bb66b75d2c359624398848936fb56a6b246bcd5cfcd277977a1277753a"
D3F = Namespace("http://d3fend.mitre.org/ontologies/d3fend.owl#")
USER_AGENT = "lmodel-ocsf-terms"
MAX_BYTES = 10_000_000
HEADER = "# The D3FEND 1.6.0 terms OCSF 1.9.0 names. scripts/extract_d3fend_terms.py writes this.\n"
LINKS_HEADER = "# The OCSF addresses D3FEND 1.6.0 names under rdfs:seeAlso, each beside its term. scripts/extract_d3fend_terms.py writes this.\n"


def main() -> None:
    request = urllib.request.Request(ADDRESS, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=60) as response:
        data = response.read(MAX_BYTES + 1)
    if len(data) > MAX_BYTES:
        raise SystemExit("the file is larger than expected")
    digest = hashlib.sha256(data).hexdigest()
    if digest != SHA256:
        raise SystemExit(f"{ADDRESS} has moved: its SHA-256 is {digest}")
    graph = Graph()
    graph.parse(data=data, format="turtle")
    declared = {
        str(subject).removeprefix(str(D3F))
        for kind in (OWL.Class, OWL.NamedIndividual)
        for subject in graph.subjects(RDF.type, kind)
        if str(subject).startswith(str(D3F))
    }
    used = set()
    for path in SCHEMA_DIR.glob("*.yaml"):
        used |= set(
            re.findall(r"^\s*- d3f:(\S+)$", path.read_text(encoding="utf-8"), re.M)
        )
    missing = sorted(used - declared)
    if missing:
        raise SystemExit(f"D3FEND 1.6.0 does not declare: {missing}")
    OUTPUT.write_text(
        HEADER + "".join(f"{name}\n" for name in sorted(used)), encoding="utf-8"
    )
    links = sorted(
        f"{str(subject).removeprefix(str(D3F))} {str(target).removeprefix(OCSF_SITE)}\n"
        for subject, target in graph.subject_objects(RDFS.seeAlso)
        if str(target).startswith(OCSF_SITE)
    )
    LINKS_OUTPUT.write_text(LINKS_HEADER + "".join(links), encoding="utf-8")


if __name__ == "__main__":
    main()
