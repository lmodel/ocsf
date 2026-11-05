---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/server-samples
genre: reference
title: Samples from OCSF's server
description: "`tests/data/ocsf-server-samples-1.9.0.json.gz`, what OCSF's server generated for each event class on 2026-11-04, with what OCSF's validator found in each. They show that every key and listed number the generator writes exists here, and that the rules find what OCSF's validator finds."
resource: tests/data/ocsf-server-samples-1.9.0.json.gz
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-validator
sources:
  - id: test_samples.py
    resource: tests/test_samples.py
    title: the docstring
  - resource: tests/upstream/ocsf-server-sample-verdicts.json
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Samples from OCSF's server

A sample is an event in the framework's shape with random words, so it touches keys no real event may. It is no gold standard: OCSF's own validator flags each one. The proof is narrower, and the test's docstring says what it covers.[^test_samples.py]

[^test_samples.py]: tests/test_samples.py, the docstring
