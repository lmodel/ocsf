---
type: Playbook
id: https://w3id.org/lmodel/ocsf/knowledge/playbooks/check-real-events
genre: how-to
title: Check real events
description: "How to compare this schema's verdicts with OCSF's validator: `just test-real-events` fetches the events of ocsf/examples at a pinned commit, and `--refresh` asks OCSF's public validator again and rewrites the record."
references:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/real-event-verdicts
  - https://w3id.org/lmodel/ocsf/knowledge/explanations/data-type-regex
sources:
  - id: check_real_events.py
    resource: scripts/check_real_events.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Check real events

Run `just test-real-events`. It fetches ocsf/examples at the pinned commit, holds each file to its object hash, and compares each verdict and each finding both name.[^check_real_events.py]

An event OCSF's validator passes must pass here, unless its only failure is a value past its data type's regex. The run fails on any other result.[^check_real_events.py]

When the pin moves, run `uv run python scripts/check_real_events.py --refresh`.[^check_real_events.py]

[^check_real_events.py]: scripts/check_real_events.py, the docstring
