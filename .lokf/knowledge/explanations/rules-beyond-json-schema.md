---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/rules-beyond-json-schema
genre: explanation
title: Rules beyond JSON Schema
description: "What `tests/ocsf_rules.py` checks because JSON Schema looks at one object at a time: profiles, `type_uid`, observable names, path constraints, enumerated array labels, data type lengths and `metadata.version`, each under the name OCSF's validator gives it."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-validator
sources:
  - id: index.md
    resource: docs/index.md
    title: What no validator checks
  - id: ocsf_rules.py
    resource: tests/ocsf_rules.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:27:06Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Rules beyond JSON Schema

JSON Schema looks at one object at a time and cannot see the rest of the event, so these rules stay in `tests/ocsf_rules.py`, each finding with the name OCSF's own validator gives it.[^index.md]

The same file reports what OCSF's validator only warns about: a label that differs from its caption, an earlier released version, and anything deprecated.[^ocsf_rules.py]

[^index.md]: docs/index.md, What no validator checks
[^ocsf_rules.py]: tests/ocsf_rules.py, the docstring
