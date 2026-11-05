---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/profiles
genre: explanation
title: Profiles and what JSON Schema cannot see
description: "Why a profile's attribute is declared on a class and never required by LinkML: OCSF applies it only to an event that lists the profile in `metadata.profiles`, which JSON Schema cannot see from inside an object, so `tests/ocsf_rules.py` checks it."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/glossary/profile
references:
  - https://w3id.org/lmodel/ocsf/knowledge/explanations/rules-beyond-json-schema
sources:
  - id: about.md
    resource: docs/about.md
    title: Profiles
  - id: ocsf_rules.py
    resource: tests/ocsf_rules.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:27:06Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Profiles and what JSON Schema cannot see

OCSF's validator treats a profile's attribute as unknown unless the event lists that profile, and requires what the profile requires only then.[^about.md]

JSON Schema cannot see `metadata.profiles` from inside an object. So the schema declares such an attribute on the class, never requires it, and records its profiles in an `ocsf_profiles` annotation. The JSON Schema alone is looser than OCSF on this one point.[^about.md]

`tests/ocsf_rules.py` reads the annotation, and reports `attribute_unknown` and `attribute_required_missing` as OCSF's validator does.[^ocsf_rules.py]

[^about.md]: docs/about.md, Profiles
[^ocsf_rules.py]: tests/ocsf_rules.py, the docstring
