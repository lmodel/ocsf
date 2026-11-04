---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/numbers-stay-numbers
genre: explanation
title: Numbers stay numbers
description: "Why an enumerated attribute is an integer with an `any_of` of `equals_number`, and not a LinkML enum: OCSF writes `activity_id: 1`, and a LinkML enum's values are strings, so no real event could satisfy one."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/sibling
sources:
  - id: about.md
    resource: docs/about.md
    title: Numbers stay numbers
  - id: changelog.md
    resource: CHANGELOG.md
    title: Changed
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Numbers stay numbers

OCSF writes a list as integers, with the label in a sibling attribute. A LinkML enum's values are strings, so a real event could not satisfy one.[^about.md]

Each list is an `any_of` of `equals_number`, with OCSF's caption as the entry's `title` and its text as `description`. A class's list is OCSF's compiled one. `class_uid` and `category_uid`, which one class holds constant, use `equals_number` directly.[^about.md]

A number outside the list is an error, as it is in OCSF's validator. The schema's first form held names such as `UNKNOWN`, which no real event holds.[^changelog.md]

[^about.md]: docs/about.md, Numbers stay numbers
[^changelog.md]: CHANGELOG.md, Changed
