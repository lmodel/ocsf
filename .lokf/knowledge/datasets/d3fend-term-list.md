---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/d3fend-term-list
genre: reference
title: D3FEND term list
description: "`tests/upstream/d3fend-terms.txt`, the names of the D3FEND 1.6.0 terms the schema's mappings name, and `tests/upstream/d3fend-ocsf-links.txt`, the OCSF addresses D3FEND's file names, both read from D3FEND's pinned file by `scripts/extract_d3fend_terms.py`."
resource: tests/upstream/d3fend-terms.txt
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/references/d3fend
sources:
  - id: extract_d3fend_terms.py
    resource: scripts/extract_d3fend_terms.py
    title: the docstring
  - resource: tests/upstream/d3fend-ocsf-links.txt
  - resource: tests/test_mappings.py
generated:
  by: process:ktl-librarian
  at: "2026-11-05T00:11:19Z"
status: draft
---

# D3FEND term list

OCSF's references name D3FEND terms, and the converter relates an element to each. D3FEND's own file also names OCSF's addresses under `rdfs:seeAlso`, and `tests/upstream/d3fend-ocsf-links.txt` lists each beside its term. `tests/test_mappings.py` holds every such link to a mapping, other than the two that name a category. The script downloads D3FEND 1.6.0's Turtle file, refuses it unless its SHA-256 is the pinned one, and stops on a name the file does not declare.[^extract_d3fend_terms.py]

[^extract_d3fend_terms.py]: scripts/extract_d3fend_terms.py, the docstring
