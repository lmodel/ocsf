---
type: Reference
id: https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-validator
genre: reference
title: OCSF's event validator
description: The validator in ocsf-server, which schema.ocsf.io serves at `/api/1.9.0/v2/validate`. It reports errors and warnings by name, and `tests/ocsf_rules.py` uses those names.
resource: https://github.com/ocsf/ocsf-server
sources:
  - id: ocsf_rules.py
    resource: tests/ocsf_rules.py
    title: the docstring
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

# OCSF's event validator

The validator closes every object but OCSF's open `object`, refuses a value outside a list, applies a profile's attributes only when an event lists it, and only warns on a regex mismatch.[^ocsf_rules.py]

`scripts/check_real_events.py` records what it found in each event of ocsf/examples.[^check_real_events.py]

[^ocsf_rules.py]: tests/ocsf_rules.py, the docstring
[^check_real_events.py]: scripts/check_real_events.py, the docstring
