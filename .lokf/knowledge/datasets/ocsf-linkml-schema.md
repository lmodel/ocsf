---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
genre: reference
title: ocsf LinkML schema
description: "The LinkML model of the Open Cybersecurity Schema Framework 1.9.0, `src/ocsf/schema/ocsf.yaml` (schema id `https://w3id.org/lmodel/ocsf`): an umbrella over `ocsf_core`, `ocsf_objects` and a module of event classes per category, written by a script from OCSF's own files with OCSF's keys and integer values."
resource: src/ocsf/schema/ocsf.yaml
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-compiler
sources:
  - id: index.md
    resource: docs/index.md
  - id: test_upstream.py
    resource: tests/test_upstream.py
    title: test_each_module_is_what_the_converter_writes
  - id: test_coverage.py
    resource: tests/test_coverage.py
    title: the docstring
  - resource: src/ocsf/schema
  - resource: scripts/ocsf_mappings.yaml
  - resource: .linkmllint.yaml
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# ocsf LinkML schema

The schema renders OCSF 1.9.0 with OCSF's own keys and integer values, so a real event validates unchanged against the class its `class_uid` names.[^index.md]

`scripts/ocsf_to_linkml.py` writes it, and a test compares what the script writes with the committed files.[^test_upstream.py]

`tests/test_coverage.py` holds it to OCSF's compiled schema in both directions.[^test_coverage.py]

[^index.md]: docs/index.md
[^test_upstream.py]: tests/test_upstream.py, test_each_module_is_what_the_converter_writes
[^test_coverage.py]: tests/test_coverage.py, the docstring
