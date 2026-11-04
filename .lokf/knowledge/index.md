---
lokf_version: "0.2"
okf_version: "0.2"
base_iri: https://w3id.org/lmodel/ocsf/knowledge/
context: https://w3id.org/lokf/context.jsonld
title: ocsf Knowledge Bundle
description: Open Cybersecurity Schema Framework (OCSF) 1.9.0 (LinkML)
license: https://creativecommons.org/licenses/by/4.0/
publisher:
  type: Person
  id: https://w3id.org/lmodel/ocsf/knowledge/person/noel-mcloughlin
  name: Noel McLoughlin
---

# ocsf Knowledge Bundle

A [LOKF](https://lokf.nolan-nichols.com) knowledge base for ocsf. Every Markdown file under `knowledge/` is one concept; together they form a queryable knowledge graph, derived from this repository's code and docs.

# Services

* [Documentation site](services/documentation-site.md) - The knowledge website in `website/`, an Astro Starlight site that the Knowledge website workflow publishes to GitHub Pages at `https://lmodel.github.io/ocsf`, built from the README, `docs/`, the schema's pages and the bundle. It replaces the mkdocs site.

# Workflows

* [Knowledge librarian (knowledge-librarian.yaml)](workflows/knowledge-librarian.md) - The sidecar's scheduled agent run that keeps the bundle in step with the repository and opens a pull request for a person to review. It is inert until `KNOWLEDGE_LIBRARIAN_ENABLED` is `true`.
* [Knowledge registrar (knowledge-registrar.yaml)](workflows/knowledge-registrar.md) - The gate on the bundle: it validates the bundle on each pull request that touches it and weekly, and checks that each new `human:` event in a pull request is backed by an approval or a signature. It never judges whether content is true.
* [Knowledge release (knowledge-release.yaml)](workflows/knowledge-release.md) - The workflow that attaches the bundle, a Copilot skill and the schema's adapt copy to a GitHub release, each with a checksum. It starts by hand or, once `KNOWLEDGE_RELEASE_ENABLED` is `true`, on each published release.
* [Knowledge sync (knowledge-sync.yaml)](workflows/knowledge-sync.md) - The weekly workflow that keeps the sidecar's copies and the skills pin at the newest release of Knowledge Trust Ladder, by one pull request that a person merges.
* [Knowledge website (knowledge-website.yaml)](workflows/knowledge-website.md) - The workflow that builds `website/` on each pull request that touches its inputs, and deploys the default branch's build to GitHub Pages once `KNOWLEDGE_WEBSITE_ENABLED` is `true`.
* [Lint and docs (lint-and-docs.yaml)](workflows/lint-and-docs.md) - The static checks on pull requests, on `main` and every Monday: ShellCheck, actionlint, the word budgets of CONTRIBUTING.md and SECURITY.md, markdownlint, lychee and codespell.
* [Semantic release (semantic-release.yml)](workflows/semantic-release.md) - The workflow that computes the next version from Conventional Commits on `main`, promotes the changelog, tags and publishes a GitHub Release, and dispatches the knowledge release once `KNOWLEDGE_RELEASE_ENABLED` is `true`.
* [Build and test (main.yaml)](workflows/main.md) - The Build and test workflow: on every pull request and push to `main`, it runs `just test` on Python 3.10 to 3.14, lints the schema and checks the adapt copy on 3.13, and compares the verdicts on the events of ocsf/examples in a job of its own.
* [Upstream watch (upstream-watch.yaml)](workflows/upstream-watch.md) - The weekly check that `scripts/check_upstream_release.py` runs: a newer OCSF release, a moved tag or a copied file that differs fails the run and opens or updates an issue.

# Datasets

* [ocsf LinkML schema](datasets/ocsf-linkml-schema.md) - The LinkML model of the Open Cybersecurity Schema Framework 1.9.0, `src/ocsf/schema/ocsf.yaml` (schema id `https://w3id.org/lmodel/ocsf`): an umbrella over `ocsf_core`, `ocsf_objects` and a module of event classes per category, written by a script from OCSF's own files with OCSF's keys and integer values.
* [Core module](datasets/core-module.md) - `src/ocsf/schema/ocsf_core.yaml`, the module with OCSF's data types, the dictionary attributes whose value is not an object, the three lists OCSF writes as strings, and `OcsfFacts`, which declares the schema's annotation keys.
* [Objects module](datasets/objects-module.md) - `src/ocsf/schema/ocsf_objects.yaml`, the module with OCSF's objects, its profiles as mixins, the extensions' objects and the dictionary attributes whose value is an object, which sit together because they refer to each other.
* [Event class modules](datasets/event-modules.md) - The modules `src/ocsf/schema/ocsf_events_*.yaml`, which hold the base event, a module of event classes per OCSF category and the Windows extension's event classes: 87 classes a concept may name, and OCSF's abstract parents such as `OcsfIamEvent`.
* [Generated artefacts](datasets/generated-artefacts.md) - What `just gen-project` and `just gen-doc` generate from the ocsf schema: the projections in `project/`, the Python models in `src/ocsf/datamodel/`, and the merged schema in `docs/schema/`. None is edited by hand.
* [Example data](datasets/example-data.md) - The examples `tests/test_data.py` checks: the least each class and object requires, hand-written events, a counter-example of each kind of constraint, and one of each rule the JSON Schema cannot state. The test also makes a counter-example of every list, constant and required attribute.
* [Samples from OCSF's server](datasets/server-samples.md) - `tests/data/ocsf-server-samples-1.9.0.json.gz`, what OCSF's server generated for each event class on 2026-11-04, with what OCSF's validator found in each. They show that every key and listed number the generator writes exists here, and that the rules find what OCSF's validator finds.
* [Verdicts on real events](datasets/real-event-verdicts.md) - `tests/upstream/ocsf-examples-verdicts.json`, what OCSF's validator found in each of the 93 events of ocsf/examples at a pinned commit, with no text of the events. `scripts/check_real_events.py` compares this schema's verdict with it.
* [Copy of the upstream](datasets/upstream-copy.md) - `upstream/`: OCSF's files at the tag 1.9.0, unchanged, and what OCSF's compiler makes of them. `scripts/check_upstream_release.py` pins each copied file by its git object hash, and a test on Python 3.14 compiles the folder again and compares the bytes.
* [The schema's adapt copy](datasets/adapt-copy.md) - `.lokf/ocsf.yaml`, the copy `just lokf-adapt` writes from the schema so that it sits beside LOKF's `lokf.yaml`: rooted on `OcsfBaseEvent`, with the 20 keys LOKF also defines renamed with an `ocsf_` prefix and their IRIs kept.
* [Neighbours' adapt copies](datasets/neighbour-copies.md) - The adapt copies of thirteen released lmodel repositories in `tests/neighbours/`, among them cve, cwe, kev-catalog, nist-nvd, attack and stix. A test holds the names apart from them and pins the keys they share, and the mappings are held to them.
* [D3FEND term list](datasets/d3fend-term-list.md) - `tests/upstream/d3fend-terms.txt`, the names of the D3FEND 1.6.0 terms that OCSF's references name, each found in D3FEND's pinned file by `scripts/extract_d3fend_terms.py`.
* [A logon over SSH](datasets/example-authentication-event.md) - An authentication event written as a concept of type `OcsfAuthentication` in the adapt copy's keys. It shows that the domain schema admits an event as a concept, with its numbers as OCSF writes them.

# Explanations

* [Numbers stay numbers](explanations/numbers-stay-numbers.md) - Why an enumerated attribute is an integer with an `any_of` of `equals_number`, and not a LinkML enum: OCSF writes `activity_id: 1`, and a LinkML enum's values are strings, so no real event could satisfy one.
* [Profiles and what JSON Schema cannot see](explanations/profiles.md) - Why a profile's attribute is declared on a class and never required by LinkML: OCSF applies it only to an event that lists the profile in `metadata.profiles`, which JSON Schema cannot see from inside an object, so `tests/ocsf_rules.py` checks it.
* [A data type's regex](explanations/data-type-regex.md) - Why the JSON Schema refuses a value past its data type's regex although OCSF's validator only warns: a LinkML pattern cannot warn. So 5 of the 93 events in ocsf/examples pass OCSF's validator and fail here.
* [How the schema is written](explanations/how-the-schema-is-written.md) - Why a script writes the schema from two inputs: what OCSF's compiler makes of the tag, which resolves `extends`, `$include`, patches and the datetime siblings as OCSF means them, and the tag's source files, for what the compiler folds away.
* [What OCSF leaves open](explanations/what-ocsf-leaves-open.md) - Why `OcsfObject` and `OcsfJsonValue` have the class URI `linkml:Any`, what that admits beyond OCSF, and how a `json_t` slot takes an array, which LinkML's `Any` leaves out.
* [Rules beyond JSON Schema](explanations/rules-beyond-json-schema.md) - What `tests/ocsf_rules.py` checks because JSON Schema looks at one object at a time: profiles, `type_uid`, observable names, path constraints, enumerated array labels, data type lengths and `metadata.version`, each under the name OCSF's validator gives it.
* [Mappings](explanations/mappings.md) - How the schema crosses to other vocabularies: close mappings from the CVE, CWE and ATT&CK objects, exact mappings on keys that hold the same value in the same form, and related mappings to the D3FEND terms OCSF's references name. No SSSOM file sits beside the schema.
* [Python models](explanations/python-models.md) - What the generated Python models do with an event: the Pydantic models load every example, and the dataclasses have two gaps in LinkML 1.12.1, a key named after a Python keyword and a JSON value.
* [RDF](explanations/rdf.md) - How to get RDF from an event: apply the generated JSON-LD context, which gives each key its IRI under `https://w3id.org/lmodel/ocsf/`. Nothing in OCSF identifies an event, so it and its objects are blank nodes.
* [What OCSF's files get wrong](explanations/ocsf-faults.md) - Five things in OCSF 1.9.0 that needed a decision: the misspelled class `event_log_actvity`, its constraint on an attribute it lacks, `patch_state`'s constraint on paths, which OCSF's validator fails on every such event, one reference address with a stray `href='`, and a `datetime_t` example its own regex refuses.
* [What the schema does not cover](explanations/scope.md) - What the schema leaves out: OCSF's other extension repositories, a source event's own class and the event bundle encoding. It says nothing about whether what an event claims is true.

# Glossary

* [Adapt copy](glossary/adapt-copy.md) - An adapt copy: the copy of a published LinkML schema that `lokf adapt` writes so that it can sit beside LOKF's `lokf.yaml` in a domain schema, with its chosen roots on `Concept`.
* [Event class](glossary/event-class.md) - An OCSF event class: the shape of one kind of event, named in an event by its `class_uid`. Every one descends from the base event, and there are 87 of them at OCSF 1.9.0.
* [Category](glossary/category.md) - An OCSF category: a group of event classes, such as Identity & Access Management, named in an event by its `category_uid`. Each is a subset here, and most have an abstract parent class.
* [Object](glossary/ocsf-object.md) - An OCSF object: a value of an event's attribute, such as `OcsfUser` or `OcsfProcess`, which exists only inside an event. So an object is no concept type here.
* [Attribute dictionary](glossary/attribute-dictionary.md) - OCSF's one definition of each attribute, which a class or object then refines. Each dictionary attribute is a top-level slot here, and a class refines it through `slot_usage`.
* [Profile](glossary/profile.md) - An OCSF profile: a set of attributes an event opts into by listing it in `metadata.profiles`. Each is a mixin here, such as `OcsfCloudProfile`.
* [Sibling](glossary/sibling.md) - The string attribute that holds the label of an enumerated one, as `activity_name` does for `activity_id`. An `ocsf_sibling` annotation names it.
* [Extension](glossary/extension.md) - An OCSF extension: the Linux, macOS and Windows additions in the tag. Each extension element carries an `ocsf_extension` annotation and sits in a subset, and only the Windows extension adds event classes, which have a module of their own.

# Playbooks

* [Regenerate and test](playbooks/regenerate-and-test.md) - How to change the schema: edit `scripts/ocsf_to_linkml.py` or its mappings, run `just gen-schema`, `just gen-examples`, `just lint`, `just gen-project`, `just gen-doc`, `just lokf-adapt` and `just test`, and commit what they write. Generated files are never edited by hand.
* [Release](playbooks/release.md) - How a release happens: `semantic-release.yml` reads Conventional Commits on `main`, promotes the `## [Unreleased]` section, tags and publishes. The first release needs the `v0.0.0` baseline tag on `main`, and PyPI publishing stays off.
* [Move to another edition](playbooks/update-upstream-pins.md) - How to move the schema to another OCSF release when the watch reports one: read its changelog, replace the copy, compile it again, move the pins and regenerate.
* [Validate an event](playbooks/validate-an-event.md) - How to validate a real OCSF event: read its `class_uid`, run `linkml-validate` against the class that names it, then run the rules in `tests/ocsf_rules.py`, which look at more than one object at a time.
* [Check real events](playbooks/check-real-events.md) - How to compare this schema's verdicts with OCSF's validator: `just test-real-events` fetches the events of ocsf/examples at a pinned commit, and `--refresh` asks OCSF's public validator again and rewrites the record.
* [Knowledge sources map](playbooks/knowledge-sources.md) - The librarian's scrape map: every repository location and external source this bundle derives concepts from, how to re-check each, and the tracked paths left out with their reasons.

# Policies

* [AI covenant](policies/ai-covenant.md) - The rules for AI-assisted work here: whoever submits owns the contribution, an element says what OCSF says, a rule states only what the upstream states, a mapping is read at its source first, and a scheduled agent's change goes through a person's review.
* [Security policy](policies/security-policy.md) - How to report a vulnerability in this repository, by GitHub's private reporting, what executes here and what holds each surface. A problem in the CWE List or its XSD belongs with the CWE Program.
* [Licence and attribution](policies/license-and-attribution.md) - Whose work each part is: the code and the schema under Apache-2.0, the bundle under CC BY 4.0, OCSF's text under its own Apache-2.0 with its NOTICE kept, and no copy of ocsf/examples, which states no licence. No endorsement by the OCSF project is implied.

# References

* [OCSF schema repository](references/ocsf-schema.md) - The OCSF project's repository of the framework's dictionary, categories, events, objects, profiles and extensions, under Apache-2.0. The schema renders its tag 1.9.0 of 3 August 2026.
* [OCSF schema compiler](references/ocsf-compiler.md) - `ocsf-schema-compiler`, the OCSF project's Python tool that resolves the framework's files into one compiled schema, under Apache-2.0. It needs Python 3.14, and this repository holds the output of version 1.1.1.
* [OCSF's event validator](references/ocsf-validator.md) - The validator in ocsf-server, which schema.ocsf.io serves at `/api/1.9.0/v2/validate`. It reports errors and warnings by name, and `tests/ocsf_rules.py` uses those names.
* [OCSF examples repository](references/ocsf-examples.md) - The OCSF project's repository of sample mappings and events, which states no licence and says it is no gold standard. Nearly all its events name a version from 1.0.0-rc.2 to 1.5.0, and none is copied here.
* [MITRE D3FEND](references/d3fend.md) - MITRE's knowledge graph of cybersecurity countermeasures, whose terms OCSF's references name. The term list holds those names as D3FEND 1.6.0's file declares them.
