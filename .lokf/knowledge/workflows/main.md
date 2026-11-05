---
type: Service
id: https://w3id.org/lmodel/ocsf/knowledge/workflows/main
genre: reference
title: Build and test (main.yaml)
description: "The Build and test workflow: on every pull request and push to `main`, it runs `just test` on Python 3.10 to 3.14, lints the schema and checks the adapt copy on 3.13, and compares the verdicts on the events of ocsf/examples in a job of its own."
resource: .github/workflows/main.yaml
references:
  - https://w3id.org/lmodel/ocsf/knowledge/playbooks/regenerate-and-test
  - https://w3id.org/lmodel/ocsf/knowledge/playbooks/check-real-events
sources:
  - id: main.yaml
    resource: .github/workflows/main.yaml
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Build and test (main.yaml)

The `test` job runs on Python 3.10 to 3.14. It installs with `uv sync --locked`, and runs `just test`. On Python 3.13 it also runs `just lint` and `just lokf-adapt-check`.[^main.yaml]

The `real-events` job runs `just test-real-events`. It stays out of the required checks, because the files it fetches are another repository's.[^main.yaml]

[^main.yaml]: .github/workflows/main.yaml
