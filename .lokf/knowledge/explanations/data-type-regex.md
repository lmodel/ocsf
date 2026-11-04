---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/data-type-regex
genre: explanation
title: A data type's regex
description: "Why the JSON Schema refuses a value past its data type's regex although OCSF's validator only warns: a LinkML pattern cannot warn. So 5 of the 93 events in ocsf/examples pass OCSF's validator and fail here."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/core-module
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-validator
sources:
  - id: about.md
    resource: docs/about.md
    title: A data type's regex
  - id: index.md
    resource: docs/index.md
    title: What was checked
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# A data type's regex

OCSF's dictionary says that implementers should abide by its constraints, and its validator reports a regex mismatch as a warning. A LinkML pattern cannot warn, so this schema keeps the stricter reading.[^about.md]

So 5 of the 93 events in ocsf/examples pass OCSF's validator and fail here.[^index.md]

[^about.md]: docs/about.md, A data type's regex
[^index.md]: docs/index.md, What was checked
