## Add your own just recipes here. This is imported by the main justfile.

# Overriding recipes from the root justfile by adding a recipe with the same
# name in this file is not possible until a known issue in just is fixed,
# https://github.com/casey/just/issues/2540

# Reads upstream/ocsf-schema/ + src/ocsf/mappings/*.sssom.tsv; writes src/ocsf/schema/.
# Run `just gen-python` afterwards to refresh the Python datamodel.
# Rebuild the LinkML schema YAMLs from upstream OCSF JSON + SSSOM mappings
[group('model development')]
gen-schema:
  uv run python tools/generate_ocsf_schema.py

# Workaround for upstream LinkML codegen bugs: strips redundant
# base-enum cast blocks from the generated datamodel. Idempotent. Wired into
# `just test` via the root justfile's `_test-python` recipe.
_apply-codegen-workaround:
  uv run python tools/strip_redundant_enum_casts.py {{pymodel}}/{{schema_name}}.py

# Workaround for an upstream LinkML serialisation bug where slot_usage merges
# leave a bare jsonasobj2.JsonObj as `slot.annotations`, which has no PyYAML
# representer registered (only its YAMLRoot subclass does). The wrapper
# registers the same representer used for YAMLRoot, then delegates to the
# standard `gen-yaml` CLI. Replaces the body of `_gen-yaml` in the root
# justfile. Upstream fix: https://github.com/linkml/linkml/pull/3423
_gen-yaml-jsonobj-safe:
  -mkdir -p {{distrib_schema_path}}
  uv run python tools/gen_yaml_jsonobj_safe.py {{source_schema_path}} > {{distrib_schema_path}}/{{schema_name}}.yaml

# Workaround for an upstream LinkML gen-doc bug where rules with only
# postconditions (preconditions=None) crash class.md.jinja2 line 227
# ({% for key in rule.preconditions %}). The wrapper patches _get_template to
# use a ChoiceLoader so docs/templates-linkml/class.md.jinja2 (the fixed
# override) takes precedence while {% include %} for sibling templates still
# resolves from the built-in docgen folder. Replaces the gen-doc call in the
# root justfile's gen-doc recipe.
_gen-doc-template-safe:
  uv run python tools/gen_doc_template_safe.py {{gen_doc_args}} -d {{docdir}} {{source_schema_path}}

# Workaround for upstream LinkML example-runner bug: ExampleRunner regenerates
# the Python datamodel in memory via PythonGenerator.compile_module(), bypassing
# strip_redundant_enum_casts.py (upstream bug). The wrapper monkey-patches
# ExampleRunner.python_module to return the already-patched ocsf.datamodel.ocsf
# module. Must run after _test-python (which generates + patches the module).
_run-examples-safe: _ensure_examples_output
  uv run python tools/run_examples_safe.py \
    --input-formats json \
    --input-formats yaml \
    --output-formats json \
    --output-formats yaml \
    --counter-example-input-directory tests/data/invalid \
    --input-directory tests/data/valid \
    --output-directory examples/output \
    --schema {{source_schema_path}} > examples/output/README.md
