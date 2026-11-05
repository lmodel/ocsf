---
type: GlossaryTerm
id: https://w3id.org/lmodel/ocsf/knowledge/glossary/extension
title: Extension
description: "An OCSF extension: the Linux, macOS and Windows additions in the tag. Each extension element carries an `ocsf_extension` annotation and sits in a subset, and only the Windows extension adds event classes, which have a module of their own."
relatedTo:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/objects-module
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/event-modules
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

# Extension

OCSF's three extensions cannot have modules of their own for their objects, since an extension patches a base object with attributes that range over its own. So each extension element carries an `ocsf_extension` annotation and sits in a subset. `ocsf_events_win` holds the Windows extension's event classes.[^about.md]

[^about.md]: docs/about.md, Modules
