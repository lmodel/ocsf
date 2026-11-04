---
type: Playbook
id: https://w3id.org/lmodel/ocsf/knowledge/playbooks/update-upstream-pins
genre: how-to
title: Move to another edition
description: "How to move the schema to another OCSF release when the watch reports one: read its changelog, replace the copy, compile it again, move the pins and regenerate."
references:
  - https://w3id.org/lmodel/ocsf/knowledge/workflows/upstream-watch
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/upstream-copy
  - https://w3id.org/lmodel/ocsf/knowledge/playbooks/regenerate-and-test
sources:
  - id: check_upstream_release.py
    resource: scripts/check_upstream_release.py
    title: the docstring
  - id: upstream-readme.md
    resource: upstream/README.md
  - id: test_coverage.py
    resource: tests/test_coverage.py
    title: the docstring
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Move to another edition

1. Read the watch's report and OCSF's changelog. A person decides whether the schema moves.[^check_upstream_release.py]
2. Replace `upstream/ocsf-schema/` with the tag's files, and compile them as `upstream/README.md` says.[^upstream-readme.md]
3. Move the pins in `scripts/check_upstream_release.py` and `upstream/ocsf-schema.blobs.tsv`, and the version in `scripts/ocsf_to_linkml.py`.[^check_upstream_release.py]
4. Follow the regenerate playbook. `tests/test_coverage.py` fails on anything the converter does not yet render, and a fault OCSF has cleared fails its test.[^test_coverage.py]

[^check_upstream_release.py]: scripts/check_upstream_release.py, the docstring
[^upstream-readme.md]: upstream/README.md
[^test_coverage.py]: tests/test_coverage.py, the docstring
