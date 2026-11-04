---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/upstream-copy
genre: reference
title: Copy of the upstream
description: "`upstream/`: OCSF's files at the tag 1.9.0, unchanged, and what OCSF's compiler makes of them. `scripts/check_upstream_release.py` pins each copied file by its git object hash, and a test on Python 3.14 compiles the folder again and compares the bytes."
resource: upstream
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-compiler
sources:
  - id: upstream-readme.md
    resource: upstream/README.md
  - resource: upstream/ocsf-schema.blobs.tsv
  - resource: tests/test_upstream.py
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Copy of the upstream

`upstream/ocsf-schema/` holds the tag's dictionary, categories, events, objects, profiles, extensions, metaschema and templates. It leaves out the tag's workflow and editor settings, its contributing guide and its logo, since nothing here reads them.[^upstream-readme.md]

`upstream/ocsf-compiled-1.9.0.json` is the output of `ocsf-schema-compiler` 1.1.1 over that folder.[^upstream-readme.md]

[^upstream-readme.md]: upstream/README.md
