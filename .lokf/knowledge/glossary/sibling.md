---
type: GlossaryTerm
id: https://w3id.org/lmodel/ocsf/knowledge/glossary/sibling
title: Sibling
description: The string attribute that holds the label of an enumerated one, as `activity_name` does for `activity_id`. An `ocsf_sibling` annotation names it.
relatedTo:
  - https://w3id.org/lmodel/ocsf/knowledge/explanations/numbers-stay-numbers
sources:
  - id: about.md
    resource: docs/about.md
    title: Numbers stay numbers
  - id: ocsf_rules.py
    resource: tests/ocsf_rules.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Sibling

OCSF writes a list as integers, with the label in a sibling, as `activity_name` is for `activity_id`.[^about.md]

OCSF's validator warns when a scalar's label differs from its caption and reports an error for an array's, which `tests/ocsf_rules.py` follows.[^ocsf_rules.py]

[^about.md]: docs/about.md, Numbers stay numbers
[^ocsf_rules.py]: tests/ocsf_rules.py, the docstring
