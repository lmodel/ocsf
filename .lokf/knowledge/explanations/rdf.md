---
type: Explanation
id: https://w3id.org/lmodel/ocsf/knowledge/explanations/rdf
genre: explanation
title: RDF
description: "How to get RDF from an event: apply the generated JSON-LD context, which gives each key its IRI under `https://w3id.org/lmodel/ocsf/`. Nothing in OCSF identifies an event, so it and its objects are blank nodes."
about:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/generated-artefacts
sources:
  - id: about.md
    resource: docs/about.md
    title: RDF
  - id: test_datamodel.py
    resource: tests/test_datamodel.py
    title: test_the_context_gives_each_key_its_iri
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:27:06Z"
status: draft
---

# RDF

`project/jsonld/ocsf.context.jsonld` gives each key its IRI, and applied to an event it gives each value as a triple. Nothing in OCSF identifies an event, so the event and its objects are blank nodes. OCSF publishes no RDF of its own, so these IRIs are this project's.[^about.md]

`tests/test_datamodel.py` applies the context to an event and reads the triples back.[^test_datamodel.py]

[^about.md]: docs/about.md, RDF
[^test_datamodel.py]: tests/test_datamodel.py, test_the_context_gives_each_key_its_iri
