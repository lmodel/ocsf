---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/what-ocsf-leaves-open
genre: explanation
title: What OCSF leaves open
description: Why `OcsfObject` and `OcsfJsonValue` have the class URI `linkml:Any`, what that admits beyond OCSF, and how a `json_t` slot takes an array, which LinkML's `Any` leaves out.
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/core-module
sources:
  - id: about.md
    resource: docs/about.md
    title: What OCSF leaves open
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# What OCSF leaves open

OCSF's `object`, which `unmapped` and `xattributes` hold, takes any keys, and so does a `json_t`. Every other class is closed, as OCSF's validator closes it.[^about.md]

LinkML's `Any` admits a scalar and leaves out an array. So a `json_t` slot says `any_of` a value or a list of values, and `tests/ocsf_rules.py` checks that an `object` holds an object.[^about.md]

[^about.md]: docs/about.md, What OCSF leaves open
