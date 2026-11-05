---
type: Playbook
id: https://w3id.org/lmodel/ocsf/knowledge/playbooks/validate-an-event
genre: how-to
title: Validate an event
description: "How to validate a real OCSF event: read its `class_uid`, run `linkml-validate` against the class that names it, then run the rules in `tests/ocsf_rules.py`, which look at more than one object at a time."
references:
  - https://w3id.org/lmodel/ocsf/knowledge/explanations/rules-beyond-json-schema
sources:
  - id: index.md
    resource: docs/index.md
    title: Validating an event
  - id: ocsf_rules.py
    resource: tests/ocsf_rules.py
    title: findings
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Validate an event

1. Read the event's `class_uid`, and find the class that holds it, such as `OcsfAuthentication` for 3002.[^index.md]
2. Run `uv run linkml-validate -s src/ocsf/schema/ocsf.yaml -C OcsfAuthentication event.json`. Without LinkML, validate against `#/$defs/OcsfAuthentication` in `project/jsonschema/ocsf.schema.json`.[^index.md]
3. Call `findings(event)` from `tests/ocsf_rules.py`, which returns the errors and the warnings of the rules no validator checks.[^ocsf_rules.py]

[^index.md]: docs/index.md, Validating an event
[^ocsf_rules.py]: tests/ocsf_rules.py, findings
