---
type: GlossaryTerm
id: https://w3id.org/lmodel/ocsf/knowledge/glossary/category
title: Category
description: "An OCSF category: a group of event classes, such as Identity & Access Management, named in an event by its `category_uid`. Each is a subset here, and most have an abstract parent class."
relatedTo:
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/event-class
sources:
  - id: about.md
    resource: docs/about.md
    title: How an event is shaped
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Category

Most event classes sit under a parent for their category, such as `OcsfIamEvent` for Identity & Access Management. The event names its category by `category_uid`, and a class holds that number constant.[^about.md]

[^about.md]: docs/about.md, How an event is shaped
