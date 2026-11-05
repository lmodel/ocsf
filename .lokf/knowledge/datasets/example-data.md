---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/example-data
genre: reference
title: Example data
description: "The examples `tests/test_data.py` checks: the least each class and object requires, hand-written events, a counter-example of each kind of constraint, and one of each rule the JSON Schema cannot state. The test also makes a counter-example of every list, constant and required attribute."
resource: tests/data
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
sources:
  - id: data-readme.md
    resource: tests/data/README.md
  - id: test_data.py
    resource: tests/test_data.py
    title: the docstring
  - resource: scripts/make_examples.py
  - resource: tests/ocsf_rules.py
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Example data

`tests/data/minimal/` holds the least each class and object requires, as `scripts/make_examples.py` writes it, and `tests/data/valid/` and `tests/data/problem/valid/` hold events written by hand. `tests/data/invalid/` holds a counter-example of each kind of constraint, whose first line names the one place it fails. `tests/data/problem/invalid/` holds a counter-example of each rule that `tests/ocsf_rules.py` checks.[^data-readme.md]

`tests/test_data.py` runs them all, and makes the same counter-examples from the schema for every class, list and required attribute.[^test_data.py]

[^data-readme.md]: tests/data/README.md
[^test_data.py]: tests/test_data.py, the docstring
