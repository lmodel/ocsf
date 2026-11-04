---
type: Policy
id: https://w3id.org/lmodel/ocsf/knowledge/policies/security-policy
genre: reference
title: Security policy
description: How to report a vulnerability in this repository, by GitHub's private reporting, what executes here and what holds each surface. A problem in the CWE List or its XSD belongs with the CWE Program.
resource: SECURITY.md
references:
  - https://w3id.org/lmodel/ocsf/knowledge/workflows/upstream-watch
sources:
  - id: security.md
    resource: SECURITY.md
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
---

# Security policy

Report a vulnerability through GitHub's private vulnerability reporting. Only the latest release receives fixes.[^security.md]

The release carries the adapt copy, the bundle as a zip and a Copilot skill zip, each with a checksum and a build-provenance attestation.[^security.md]

An event holds whatever a product logged, attack strings included, and this repository treats it all as data. A consumer that displays one, or one of OCSF's descriptions with their HTML, must sanitize it first.[^security.md]

The watch asks GitHub's API about `ocsf/ocsf-schema`, and sends its token to that address alone.[^security.md]

[^security.md]: SECURITY.md
