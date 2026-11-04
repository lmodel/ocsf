---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/core-module
genre: reference
title: Core module
description: "`src/ocsf/schema/ocsf_core.yaml`, the module with OCSF's data types, the dictionary attributes whose value is not an object, the three lists OCSF writes as strings, and `OcsfFacts`, which declares the schema's annotation keys."
resource: src/ocsf/schema/ocsf_core.yaml
isPartOf:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
sources:
  - id: about.md
    resource: docs/about.md
    title: Modules
  - id: test_coverage.py
    resource: tests/test_coverage.py
    title: test_data_type
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Core module

`ocsf_core` holds the data types and the attributes whose value is not an object, and imports only the LinkML types.[^about.md]

A data type carries OCSF's regex as its `pattern` and OCSF's bounds as `minimum_value` and `maximum_value`.[^test_coverage.py]

[^about.md]: docs/about.md, Modules
[^test_coverage.py]: tests/test_coverage.py, test_data_type
