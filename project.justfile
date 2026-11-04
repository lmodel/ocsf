## Add your own just recipes here. This is imported by the main justfile.

# Overriding recipes from the root justfile by adding a recipe with the same
# name in this file is not possible until a known issue in just is fixed,
# https://github.com/casey/just/issues/2540

# ============ The schema, from OCSF's own files ============

# Write src/ocsf/schema/ from upstream/ and scripts/ocsf_mappings.yaml
[group('model development')]
gen-schema:
  uv run python scripts/ocsf_to_linkml.py

# Write the smallest valid example of each class into tests/data/valid/
[group('model development')]
gen-examples:
  uv run python scripts/make_examples.py

# Validate the events of ocsf/examples at its pinned commit, which stay out of git. The
# files are live data of no stated licence, and this fails when a verdict moves.
[group('model development')]
test-real-events:
  uv run python scripts/check_real_events.py
