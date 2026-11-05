# Changelog

All notable changes to this project are documented here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The `v0.0.0` tag is a baseline, not a release: it marks where versioning starts so the first real release is `0.1.0` rather than `1.0.0`. The schema stays below 1.0.0 until its shape settles, so a breaking change bumps the minor version. See [CONTRIBUTING.md](CONTRIBUTING.md#releasing-maintainers).

## [Unreleased]

### Added

- **A LinkML rendering of the Open Cybersecurity Schema Framework (OCSF) 1.9.0**, written by `scripts/ocsf_to_linkml.py` from the tag's files and OCSF's compiled form of them. Every key is OCSF's own, so a real event validates unchanged against the class its `class_uid` names.
- **`tests/ocsf_rules.py`**, which checks what JSON Schema cannot, in the terms of OCSF's own validator: profiles and what they require, `type_uid`, observable names, path constraints, enumerated array labels, data type lengths and `metadata.version`.
- **A test that walks OCSF's compiled schema beside the classes in both directions**, and a counter-example of each list, constant, required attribute, constraint and data type bound.
- **`just test-real-events`**, a job outside the required checks, which compares the verdict on each of the 93 events of ocsf/examples with what OCSF's validator found.
- **A weekly upstream watch** that reports a new OCSF release, a moved tag or a changed file.
- **Mappings to lmodel/cve, lmodel/cwe, lmodel/nist-nvd, lmodel/kev-catalog, lmodel/attack and lmodel/stix**, each held by a test to a released copy, and to the D3FEND terms OCSF's own references name or D3FEND's own file ties to OCSF's addresses, held to D3FEND 1.6.0's file.
- **`.lokf/ocsf.yaml`, the schema's `lokf adapt` copy, rooted on `OcsfBaseEvent`.** The knowledge release attaches it as `schema-<tag>-ocsf.yaml`.
- **The repository's Knowledge Trust Ladder (KTL) knowledge bundle and its sidecar automation**, from the KTL v0.61.0 templates with the lokf floor at 0.9.0, and a knowledge website that replaces the mkdocs site.

### Changed

- **The schema pins the OCSF 1.9.0 tag**, where it held a copy of `main` at 1.9.0-dev and named 1.8.0.
- **An enumerated attribute holds OCSF's integer**, such as `activity_id: 1`, in place of a name the converter invented, such as `activity_id: UNKNOWN`, which no real event holds. A class's list is OCSF's compiled one, and `class_uid` and `category_uid` are constants.
- **A profile's attributes are optional to the JSON Schema**, since OCSF asks for them only of an event that lists the profile. `cloud` and `osint` were required on every event.
- **The classes take the `Ocsf` prefix**, data types the `ocsf_` prefix, and the modules are `ocsf_core`, `ocsf_objects` and an `ocsf_events_*` per category.
- **The template moves to linkml-project-copier v0.5.0**, linkml and linkml-runtime are locked at 1.12.1, and the Python project is named `ocsf-linkml`. PyPI publishing stays off.

### Removed

- **The ten hand-kept SSSOM files**, with their invented confidences and creator, and the prefixes behind them, among them the deleted lmodel/vulnerability-core.
- **The four scripts under `tools/` that worked around LinkML**: linkml 1.12.1 and the integer lists need none of them.
- **The mkdocs site**, which the knowledge website replaces.
