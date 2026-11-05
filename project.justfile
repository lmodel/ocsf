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

# ============ Knowledge bundle: the adapted domain schema ============

# `.lokf/ocsf.yaml` is the copy `lokf adapt` writes from the schema so that it can
# sit beside `.lokf/lokf.yaml` (`lokf adapt --help` lists the moves). The one root is
# OcsfBaseEvent, the parent of every event class, so a concept may be an event of
# any class. An object has no root, since OCSF's objects are values inside an event,
# and a value class stays inlined. OCSF's schema carries no identifier, so adapt drops
# none and LOKF's `id` stands beside the event's keys. Adapt renames the keys LOKF also
# defines with the `ocsf` prefix, such as `name` and `type`, and keeps their IRIs. The
# recipes run the `lokf` the sidecar's floor pins (0.9.0 or later); LOKF_CMD runs
# another, such as a checkout:
# LOKF_CMD="uv run --project ../lokf lokf" just lokf-adapt
lokf_cmd := env_var_or_default("LOKF_CMD", "uv run --project .lokf lokf")
lokf_adapt_roots := "--root OcsfBaseEvent --prefix ocsf"

# Rewrite .lokf/ocsf.yaml from the schema (run after every schema change)
[group('knowledge bundle')]
lokf-adapt:
  {{lokf_cmd}} adapt {{source_schema_path}} {{lokf_adapt_roots}} --lokf .lokf/lokf.yaml -o .lokf/ocsf.yaml

# Fail when .lokf/ocsf.yaml is stale against the schema or .lokf/lokf.yaml
[group('knowledge bundle')]
lokf-adapt-check:
  {{lokf_cmd}} adapt {{source_schema_path}} {{lokf_adapt_roots}} --lokf .lokf/lokf.yaml -o .lokf/ocsf.yaml --check
