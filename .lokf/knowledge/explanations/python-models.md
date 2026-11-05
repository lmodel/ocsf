---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/python-models
genre: explanation
title: Python models
description: "What the generated Python models do with an event: the Pydantic models load every example, and the dataclasses have two gaps in LinkML 1.12.1, a key named after a Python keyword and a JSON value."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/generated-artefacts
sources:
  - id: about.md
    resource: docs/about.md
    title: Python models
  - id: test_datamodel.py
    resource: tests/test_datamodel.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Python models

The Pydantic models load every example. A key named after a Python keyword, `from` or `class`, is refused by the dataclasses, and a `json_t` value raises a `TypeError` there, because the generated check calls `isinstance` against `typing.Any`.[^about.md]

`tests/test_datamodel.py` holds both, so a fix in LinkML fails the test.[^test_datamodel.py]

[^about.md]: docs/about.md, Python models
[^test_datamodel.py]: tests/test_datamodel.py, the docstring
