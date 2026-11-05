---
type: Playbook
id: https://w3id.org/lmodel/ocsf/knowledge/playbooks/knowledge-sources
genre: reference
title: Knowledge sources map
description: "The librarian's scrape map: every repository location and external source this bundle derives concepts from, how to re-check each, and the tracked paths left out with their reasons."
resource: .
references:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/ocsf-linkml-schema
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
exclusions:
  - resource: .github/ISSUE_TEMPLATE
    reason: Issue forms, which are governance text and state nothing about the schema.
  - resource: .github/pull_request_template.md
    reason: The pull request checklist, which repeats CONTRIBUTING.md.
  - resource: CODE_OF_CONDUCT.md
    reason: The Contributor Covenant, governance text with nothing about the schema.
  - resource: uv.lock
    reason: The package's lock file, tooling that pins versions.
  - resource: pyproject.toml
    reason: Package metadata and the spell checkers' settings; the changelog states the Python project's name.
  - resource: .gitignore
    reason: "Tooling: the files git ignores."
  - resource: .editorconfig
    reason: "Tooling: editor settings."
  - resource: .yamllint.yaml
    reason: "Tooling: the YAML linter's settings."
  - resource: .pre-commit-config.yaml
    reason: "Tooling: the hooks and the files they leave alone."
  - resource: .markdownlint-cli2.jsonc
    reason: "Tooling: the Markdown linter's settings."
  - resource: lychee.toml
    reason: "Tooling: the link checker's settings."
  - resource: config.public.mk
    reason: "Tooling: the variables the justfile loads."
  - resource: .copier-answers.yml
    reason: The copier template's answers, which `just update` reads.
  - resource: src/README.md
    reason: Text from the project template.
  - resource: docs/templates-linkml
    reason: The template's placeholders for gen-doc, not pages.
  - resource: docs/elements
    reason: Generated pages that git ignores, apart from a placeholder.
  - resource: examples/README.md
    reason: Text from the project template about generated example output.
  - resource: src/ocsf/__init__.py
    reason: Package plumbing.
  - resource: src/ocsf/_version.py
    reason: Package plumbing.
  - resource: llms.txt
    reason: The pointer that sends agents to this bundle.
  - resource: knowledge_bundle
    reason: The sidecar's link to the bundle.
  - resource: .github/PULL_REQUEST_TEMPLATE
    reason: The sidecar sync's pull request template.
  - resource: .lokf/lokf.yaml
    reason: LOKF's schema, pinned by the sidecar.
  - resource: .lokf/scripts
    reason: The sidecar's scripts, which the weekly sync replaces.
  - resource: .lokf/m365
    reason: The sidecar's Copilot skill builder and its instructions.
  - resource: .lokf/README.md
    reason: The sidecar's own README.
  - resource: .lokf/queries.http
    reason: The sidecar's sample queries.
  - resource: .lokf/ingest.yaml.sample
    reason: The sidecar's unused example; this host has no outside sources.
  - resource: .lokf/uv.lock
    reason: The sidecar's lock file, tooling that pins versions.
  - resource: .lokf/.gitignore
    reason: "Tooling: what the sidecar keeps out of git."
  - resource: .lokf/.gitattributes
    reason: "Tooling: line endings in the bundle."
  - resource: .github/release
    reason: The release job's pinned tools.
sources:
  - resource: README.md
  - resource: docs/about.md
  - resource: docs/index.md
  - resource: src/ocsf/schema
  - resource: src/ocsf/datamodel
  - resource: project.justfile
  - resource: .lokf/ocsf.yaml
  - resource: .lokf/justfile
  - resource: .lokf/pyproject.toml
  - resource: NOTICE
  - resource: LICENSE
  - resource: scripts
  - resource: .github/scripts
  - resource: .github/workflows
  - resource: .github/dependabot.yml
  - resource: justfile
  - resource: .linkml/generators.yaml
  - resource: .linkmllint.yaml
  - resource: project
  - resource: docs/schema
  - resource: tests
  - resource: upstream
  - resource: CONTRIBUTING.md
  - resource: .releaserc.json
  - resource: CHANGELOG.md
  - resource: SECURITY.md
  - resource: AI_COVENANT.md
  - resource: website
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Knowledge sources map

The schema and what it is written from: `scripts/`, `upstream/`, `src/ocsf/schema/` and `docs/`. Re-check with `just test`, which holds the schema to the upstream's files.

The tests and their pinned lists: `tests/`. Each test's docstring says what it holds.

The automation: `.github/workflows/`, one concept per workflow. Re-check by reading the workflow's header comment.

The governance files: `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, `AI_COVENANT.md`, `NOTICE` and `CHANGELOG.md`.

The external sources: the concepts under `references/`. Re-check each at its address; the upstream watch reports when OCSF's tag or files move.

The frontmatter's `exclusions` list what was looked at and left out, each with its reason.
