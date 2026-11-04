---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/how-the-schema-is-written
genre: explanation
title: How the schema is written
description: "Why a script writes the schema from two inputs: what OCSF's compiler makes of the tag, which resolves `extends`, `$include`, patches and the datetime siblings as OCSF means them, and the tag's source files, for what the compiler folds away."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
references:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/upstream-copy
sources:
  - id: about.md
    resource: docs/about.md
    title: How the schema is written
  - id: ocsf_to_linkml.py
    resource: scripts/ocsf_to_linkml.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# How the schema is written

`scripts/ocsf_to_linkml.py` writes `src/ocsf/schema/`, and nobody edits those files. It reads what OCSF's compiler makes of the tag, and the tag's source files for the abstract parents and each profile's attributes.[^about.md]

A dictionary attribute becomes a top-level slot, and a class's refinement of it becomes `slot_usage`, written only where the class differs from what it inherits.[^ocsf_to_linkml.py]

[^about.md]: docs/about.md, How the schema is written
[^ocsf_to_linkml.py]: scripts/ocsf_to_linkml.py, the docstring
