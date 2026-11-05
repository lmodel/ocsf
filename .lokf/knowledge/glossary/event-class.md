---
type: GlossaryTerm
id: https://w3id.org/lmodel/ocsf/knowledge/glossary/event-class
title: Event class
description: "An OCSF event class: the shape of one kind of event, named in an event by its `class_uid`. Every one descends from the base event, and there are 87 of them at OCSF 1.9.0."
relatedTo:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/event-modules
sources:
  - id: about.md
    resource: docs/about.md
    title: How an event is shaped
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Event class

An OCSF event is one JSON object of one event class. Every class descends from the base event, and the event names its class by `class_uid`.[^about.md]

[^about.md]: docs/about.md, How an event is shaped
