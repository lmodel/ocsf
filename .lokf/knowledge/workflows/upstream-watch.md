---
type: Service
id: https://w3id.org/lmodel/ocsf/knowledge/workflows/upstream-watch
genre: reference
title: Upstream watch (upstream-watch.yaml)
description: "The weekly check that `scripts/check_upstream_release.py` runs: a newer OCSF release, a moved tag or a copied file that differs fails the run and opens or updates an issue."
resource: .github/workflows/upstream-watch.yaml
about:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
sources:
  - id: upstream-watch.yaml
    resource: .github/workflows/upstream-watch.yaml
  - id: check_upstream_release.py
    resource: scripts/check_upstream_release.py
    title: the docstring
  - id: test_watch.py
    resource: tests/test_watch.py
    title: the docstring
  - resource: .github/scripts/report-issue.sh
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Upstream watch (upstream-watch.yaml)

The workflow runs every Monday, and a failing check opens an issue or comments on the one already open.[^upstream-watch.yaml]

The script asks GitHub's API for the latest release, the commit the pinned tag names and the repository's file tree, and compares every copied file with its blob by git object hash. It sends its token to the API's address alone and never on to a redirect.[^check_upstream_release.py]

`tests/test_watch.py` runs it against stubbed answers.[^test_watch.py]

[^upstream-watch.yaml]: .github/workflows/upstream-watch.yaml
[^check_upstream_release.py]: scripts/check_upstream_release.py, the docstring
[^test_watch.py]: tests/test_watch.py, the docstring
