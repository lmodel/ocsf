---
type: Dataset
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/generated-artefacts
genre: reference
title: Generated artefacts
description: "What `just gen-project` and `just gen-doc` generate from the ocsf schema: the projections in `project/`, the Python models in `src/ocsf/datamodel/`, and the merged schema in `docs/schema/`. None is edited by hand."
resource: project
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
sources:
  - id: justfile
    resource: justfile
    title: the gen-project and gen-doc recipes
  - id: test_generated_json_schema.py
    resource: tests/test_generated_json_schema.py
    title: the docstring
  - id: test_datamodel.py
    resource: tests/test_datamodel.py
    title: the docstring
  - resource: .linkml/generators.yaml
  - resource: project
  - resource: src/ocsf/datamodel
  - resource: docs/schema
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Generated artefacts

`just gen-project` writes the projections in `project/` and the Python models in `src/ocsf/datamodel/`. `just gen-doc` writes the merged schema to `docs/schema/ocsf.yaml` and the element pages to `docs/elements/`, which git ignores.[^justfile]

`project/jsonschema/ocsf.schema.json` is what a consumer without LinkML validates with. `tests/test_generated_json_schema.py` holds it to the generator's output.[^test_generated_json_schema.py]

The Pydantic models load every hand-written example. The dataclasses cannot take a key named after a Python keyword or a JSON value, which `tests/test_datamodel.py` pins.[^test_datamodel.py]

[^justfile]: justfile, the gen-project and gen-doc recipes
[^test_generated_json_schema.py]: tests/test_generated_json_schema.py, the docstring
[^test_datamodel.py]: tests/test_datamodel.py, the docstring
