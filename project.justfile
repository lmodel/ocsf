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
