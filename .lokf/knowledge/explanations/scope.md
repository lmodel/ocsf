---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/scope
genre: explanation
title: What the schema does not cover
description: "What the schema leaves out: OCSF's other extension repositories, a source event's own class and the event bundle encoding. It says nothing about whether what an event claims is true."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
sources:
  - id: about.md
    resource: docs/about.md
    title: What is left out
  - id: index.md
    resource: docs/index.md
    title: What was checked
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# What the schema does not cover

OCSF's other extension repositories, such as its AWS and Splunk ones, are not in the tag and are not rendered. A source event's own class is not modelled. An event bundle, which OCSF's validator also takes, is an encoding.[^about.md]

The schema says nothing about whether what an event claims is true.[^index.md]

[^about.md]: docs/about.md, What is left out
[^index.md]: docs/index.md, What was checked
