# Playbooks

* [Regenerate and test](regenerate-and-test.md) - How to change the schema: edit `scripts/ocsf_to_linkml.py` or its mappings, run `just gen-schema`, `just gen-examples`, `just lint`, `just gen-project`, `just gen-doc`, `just lokf-adapt` and `just test`, and commit what they write. Generated files are never edited by hand.
* [Release](release.md) - How a release happens: `semantic-release.yml` reads Conventional Commits on `main`, promotes the `## [Unreleased]` section, tags and publishes. The first release needs the `v0.0.0` baseline tag on `main`, and PyPI publishing stays off.
* [Move to another edition](update-upstream-pins.md) - How to move the schema to another OCSF release when the watch reports one: read its changelog, replace the copy, compile it again, move the pins and regenerate.
* [Validate an event](validate-an-event.md) - How to validate a real OCSF event: read its `class_uid`, run `linkml-validate` against the class that names it, then run the rules in `tests/ocsf_rules.py`, which look at more than one object at a time.
* [Check real events](check-real-events.md) - How to compare this schema's verdicts with OCSF's validator: `just test-real-events` fetches the events of ocsf/examples at a pinned commit, and `--refresh` asks OCSF's public validator again and rewrites the record.
* [Knowledge sources map](knowledge-sources.md) - The librarian's scrape map: every repository location and external source this bundle derives concepts from, how to re-check each, and the tracked paths left out with their reasons.
