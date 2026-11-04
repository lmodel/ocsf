---
type: Playbook
id: https://w3id.org/lmodel/ocsf/knowledge/playbooks/regenerate-and-test
genre: how-to
title: Regenerate and test
description: "How to change the schema: edit `scripts/ocsf_to_linkml.py` or its mappings, run `just gen-schema`, `just gen-examples`, `just lint`, `just gen-project`, `just gen-doc`, `just lokf-adapt` and `just test`, and commit what they write. Generated files are never edited by hand."
references:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/generated-artefacts
sources:
  - id: contributing.md
    resource: CONTRIBUTING.md
    title: Before opening a pull request
  - id: main.yaml
    resource: .github/workflows/main.yaml
    title: the lint step
  - id: justfile
    resource: justfile
    title: the test recipe
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Regenerate and test

1. Change `scripts/ocsf_to_linkml.py` or its pin.[^contributing.md]
2. Run `just gen-schema` and `just gen-examples`.[^contributing.md]
3. Run `just lint`. A warning fails it.[^main.yaml]
4. Run `just gen-project` and `just gen-doc`, then `just lokf-adapt`.[^contributing.md]
5. Run `just test`, which generates into `tmp/`, runs `pytest` and runs the example runner.[^justfile]
6. Commit what they write. Restore `project/sqlschema/` and the Excel file unless the schema changed them.[^contributing.md]

[^contributing.md]: CONTRIBUTING.md, Before opening a pull request
[^main.yaml]: .github/workflows/main.yaml, the lint step
[^justfile]: justfile, the test recipe
