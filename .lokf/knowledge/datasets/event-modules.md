---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/event-modules
genre: reference
title: Event class modules
description: "The modules `src/ocsf/schema/ocsf_events_*.yaml`, which hold the base event, a module of event classes per OCSF category and the Windows extension's event classes: 87 classes a concept may name, and OCSF's abstract parents such as `OcsfIamEvent`."
resource: src/ocsf/schema
isPartOf:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
about:
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/event-class
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/category
sources:
  - id: about.md
    resource: docs/about.md
    title: How an event is shaped
  - id: test_schema_rules.py
    resource: tests/test_schema_rules.py
    title: test_there_is_a_concept_type_per_event_class
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Event class modules

Every event class descends from `OcsfBaseEvent`, and most sit under a parent for their category. The event classes have a module per category, and `ocsf_events_win` holds the Windows extension's.[^about.md]

There are 87 concrete event classes.[^test_schema_rules.py]

[^about.md]: docs/about.md, How an event is shaped
[^test_schema_rules.py]: tests/test_schema_rules.py, test_there_is_a_concept_type_per_event_class
