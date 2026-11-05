---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/ocsf-faults
genre: explanation
title: What OCSF's files get wrong
description: "Five things in OCSF 1.9.0 that needed a decision: the misspelled class `event_log_actvity`, its constraint on an attribute it lacks, `patch_state`'s constraint on paths, which OCSF's validator fails on every such event, one reference address with a stray `href='`, and a `datetime_t` example its own regex refuses."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
sources:
  - id: about.md
    resource: docs/about.md
    title: What OCSF's files get wrong
  - id: test_coverage.py
    resource: tests/test_coverage.py
    title: test_the_faults_this_schema_works_around_are_still_there
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:27:06Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# What OCSF's files get wrong

Five things in OCSF 1.9.0 needed a decision, and `tests/test_coverage.py` holds each, so a new edition that clears one fails a test.[^test_coverage.py]

These are the five:[^about.md]

- `event_log_activity.json` spells its class's name `event_log_actvity`;
- that class's `at_least_one` names `log_file`, which it does not have;
- `patch_state`'s `at_least_one` names paths, which OCSF's validator looks up as one key, so it fails every such event;
- `email_activity.json` writes one reference address with a stray `href='`;
- `dictionary.json` gives a `datetime_t` example its regex refuses.

[^about.md]: docs/about.md, What OCSF's files get wrong
[^test_coverage.py]: tests/test_coverage.py, test_the_faults_this_schema_works_around_are_still_there
