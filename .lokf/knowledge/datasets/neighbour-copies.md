---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/neighbour-copies
genre: reference
title: Neighbours' adapt copies
description: The adapt copies of thirteen released lmodel repositories in `tests/neighbours/`, among them cve, cwe, kev-catalog, nist-nvd, attack and stix. A test holds the names apart from them and pins the keys they share, and the mappings are held to them.
resource: tests/neighbours
references:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/adapt-copy
sources:
  - id: test_schema_rules.py
    resource: tests/test_schema_rules.py
    title: NEIGHBOURS and SHARED_WITH_NEIGHBOURS
  - id: test_mappings.py
    resource: tests/test_mappings.py
    title: neighbour_iris
  - resource: tests/upstream/shared-keys.json
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Neighbours' adapt copies

Each file is the schema asset of a lmodel release, pinned in `tests/test_schema_rules.py` by its checksum.[^test_schema_rules.py]

The test fails on any shared class, enum, type or subset, and on a shared key `tests/upstream/shared-keys.json` does not list. OCSF's plain words share many: 51 with lmodel/uco, and 40 each with lmodel/stix and lmodel/attack.[^test_schema_rules.py]

`tests/test_mappings.py` also reads these copies, to hold the mappings to them.[^test_mappings.py]

[^test_schema_rules.py]: tests/test_schema_rules.py, NEIGHBOURS and SHARED_WITH_NEIGHBOURS
[^test_mappings.py]: tests/test_mappings.py, neighbour_iris
