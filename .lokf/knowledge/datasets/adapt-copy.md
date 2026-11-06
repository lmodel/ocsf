---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/adapt-copy
genre: reference
title: The schema's adapt copy
description: "`.lokf/schema/ocsf.yaml`, the copy `just lokf-adapt` writes from the schema so that it sits beside LOKF's `lokf.yaml`: rooted on `OcsfBaseEvent`, with the 20 keys LOKF also defines renamed with an `ocsf_` prefix and their IRIs kept."
resource: .lokf/schema/ocsf.yaml
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
about:
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/adapt-copy
sources:
  - id: project.justfile
    resource: project.justfile
    title: the comment above the recipes
  - id: readme.md
    resource: README.md
    title: the Knowledge Trust Ladder (KTL) section
  - resource: .lokf/schema/ocsf.yaml
  - resource: .lokf/justfile
  - resource: .lokf/pyproject.toml
generated:
  by: process:ktl-librarian
  at: "2026-11-06T21:23:27Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# The schema's adapt copy

`just lokf-adapt` writes `.lokf/schema/ocsf.yaml` from `src/ocsf/schema/ocsf.yaml`, and `just lokf-adapt-check` fails when it is stale. CI runs the check.[^project.justfile]

The one root is `OcsfBaseEvent`, so a concept may be an event of any class. OCSF's objects stay values inside an event.[^project.justfile]

A concept writes LOKF's `id`, `title` and `description` beside the event's keys. The keys LOKF also defines take the `ocsf_` prefix, such as `ocsf_name`.[^readme.md]

A release attaches the copy as `schema-<tag>-ocsf.yaml`.[^readme.md]

[^project.justfile]: project.justfile, the comment above the recipes
[^readme.md]: README.md, the Knowledge Trust Ladder (KTL) section
