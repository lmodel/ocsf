---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/objects-module
genre: reference
title: Objects module
description: "`src/ocsf/schema/ocsf_objects.yaml`, the module with OCSF's objects, its profiles as mixins, the extensions' objects and the dictionary attributes whose value is an object, which sit together because they refer to each other."
resource: src/ocsf/schema/ocsf_objects.yaml
isPartOf:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
about:
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/profile
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/ocsf-object
sources:
  - id: about.md
    resource: docs/about.md
    title: Modules
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Objects module

`ocsf_objects` holds the objects, the profiles and the attributes whose value is an object, because an object's attribute ranges over an object, an object takes a profile, and a profile's attribute ranges over an object.[^about.md]

An extension patches a base object with attributes that range over its own, so the extensions' objects sit here too.[^about.md]

[^about.md]: docs/about.md, Modules
