---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/mappings
genre: explanation
title: Mappings
description: "How the schema crosses to other vocabularies: close mappings from the CVE, CWE and ATT&CK objects, exact mappings on keys that hold the same value in the same form, and related mappings to the D3FEND terms OCSF's references or D3FEND's own links name. No SSSOM file sits beside the schema."
references:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/neighbour-copies
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/d3fend-term-list
sources:
  - id: readme.md
    resource: README.md
    title: Mappings
  - id: ocsf_mappings.yaml
    resource: scripts/ocsf_mappings.yaml
    title: the header comment
  - resource: tests/test_mappings.py
generated:
  by: process:ktl-librarian
  at: "2026-11-05T00:11:19Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Mappings

The schema is the one home for mappings, and `tests/test_mappings.py` holds each to a released neighbour copy or to D3FEND's pinned file. The hand-kept SSSOM files are gone, since no source confirmed their rows.[^readme.md]

OCSF names no KEV field, so a KEV entry is only related to the CVE object, by the CVE id it is keyed by. A D3FEND term is related to an element when OCSF's references name the term, or when D3FEND's own file names the element's address under `rdfs:seeAlso`.[^ocsf_mappings.yaml]

[^readme.md]: README.md, Mappings
[^ocsf_mappings.yaml]: scripts/ocsf_mappings.yaml, the header comment
