---
type: Reference
id: https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-compiler
genre: reference
title: OCSF schema compiler
description: "`ocsf-schema-compiler`, the OCSF project's Python tool that resolves the framework's files into one compiled schema, under Apache-2.0. It needs Python 3.14, and this repository holds the output of version 1.1.1."
resource: https://github.com/ocsf/ocsf-schema-compiler
relatedTo:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
sources:
  - id: upstream-readme.md
    resource: upstream/README.md
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# OCSF schema compiler

The compiler resolves `extends`, `$include`, extension patches and the datetime siblings. `upstream/ocsf-compiled-1.9.0.json` is its output over the pinned tag, and `tests/test_upstream.py` compiles the folder again on Python 3.14 and compares the bytes.[^upstream-readme.md]

[^upstream-readme.md]: upstream/README.md
