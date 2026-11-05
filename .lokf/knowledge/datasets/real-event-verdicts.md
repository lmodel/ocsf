---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/real-event-verdicts
genre: reference
title: Verdicts on real events
description: "`tests/upstream/ocsf-examples-verdicts.json`, what OCSF's validator found in each of the 93 events of ocsf/examples at a pinned commit, with no text of the events. `scripts/check_real_events.py` compares this schema's verdict with it."
resource: tests/upstream/ocsf-examples-verdicts.json
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-examples
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-validator
sources:
  - id: notice
    resource: NOTICE
  - id: check_real_events.py
    resource: scripts/check_real_events.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Verdicts on real events

The file holds each event's path, git object hash and the findings of OCSF's validator, since ocsf/examples states no licence and no event of it is copied here.[^notice]

`scripts/check_real_events.py` fetches the events at the pinned commit and fails when a verdict moves.[^check_real_events.py]

[^notice]: NOTICE
[^check_real_events.py]: scripts/check_real_events.py, the docstring
