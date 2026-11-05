<a href="https://github.com/linkml/linkml-project-copier"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-grayscale-inverted-border-teal.json" alt="Copier Badge" style="max-width:100%;"/></a>

# ocsf

Open Cybersecurity Schema Framework (OCSF) 1.9.0 (LinkML)

> **Only want to ask?** Install `ktl-docent` into any agent you use, by a route from [the install page](https://w3id.org/ktl/docs/install/), and ask it about this project. It answers from the bundle and says how far each answer has been checked.
>
> **Agents:** if `.lokf/knowledge/index.md` exists, read it first. `llms.txt` says how to weigh it.

## Documentation Website

[https://lmodel.github.io/ocsf](https://lmodel.github.io/ocsf)

## What it models

The schema renders the [Open Cybersecurity Schema Framework](https://schema.ocsf.io/), version 1.9.0 of 3 August 2026: the event classes, the objects they hold, the attribute dictionary, the profiles and the Linux, macOS and Windows extensions. It keeps OCSF's own keys and integer values, so a real event validates unchanged against the class its `class_uid` names.

A script writes the schema from `upstream/`, which holds the tag's files and what OCSF's own compiler makes of them. `tests/test_coverage.py` holds the schema to the compiled form in both directions, and `just test-real-events` compares the verdict on each event of [ocsf/examples](https://github.com/ocsf/examples) with what OCSF's validator found. A weekly workflow opens an issue when a new release appears or a pinned file moves.

To validate an event, name the class its `class_uid` names, then run the rules [docs/index.md](docs/index.md) lists:

```bash
uv run linkml-validate -s src/ocsf/schema/ocsf.yaml -C OcsfAuthentication event.json
```

## Mappings

The schema is the one home for mappings. The hand-kept SSSOM files that sat under `src/ocsf/mappings/` are gone, since no source confirmed their rows.

* **[lmodel/cve](https://github.com/lmodel/cve) and [lmodel/nist-nvd](https://github.com/lmodel/nist-nvd)**: `close_mappings` from the CVE object, `narrow_mappings` from the CVSS object, and `exact_mappings` on the CVE number, base score and vector string. `tests/test_mappings.py` checks each against the released copy.
* **[lmodel/cwe](https://github.com/lmodel/cwe)**: `close_mappings` from the CWE object, and `related_mappings` on its number, which lmodel/cwe writes with no `CWE-`. Checked the same way.
* **[lmodel/attack](https://github.com/lmodel/attack)**: `close_mappings` from the tactic, technique and mitigation objects, and `broad_mappings` from the sub-technique. Checked the same way.
* **[lmodel/kev-catalog](https://github.com/lmodel/kev-catalog) and [lmodel/stix](https://github.com/lmodel/stix)**: `related_mappings` from the CVE and vulnerability objects, since OCSF names no KEV field. Checked the same way.
* **[MITRE D3FEND](https://d3fend.mitre.org/)**: `related_mappings` on each class or object whose references name a D3FEND term, or whose address D3FEND's own file names under `rdfs:seeAlso`, and `close_mappings` from OCSF's two D3FEND objects. `tests/test_mappings.py` checks each against the lists from D3FEND 1.6.0's pinned file.

## Repository Structure

* [docs/](docs/): the website's own pages
* [project/](project/): generated project files (do not edit them)
* [scripts/](scripts/): the converter and its mappings, the example writer, the upstream watch and the real-event check
* [src/ocsf/schema/](src/ocsf/schema): the LinkML schema the converter writes (do not edit it)
* [src/ocsf/datamodel/](src/ocsf/datamodel): the generated Python datamodel
* [tests/](tests/): Python tests, with example data in [data/](tests/data), pinned lists in [upstream/](tests/upstream) and the neighbours' adapt copies in [neighbours/](tests/neighbours)
* [upstream/](upstream/): OCSF's files at the pinned tag and their compiled form, unchanged
* [website/](website/): the Astro Starlight site built from the README, `docs/`, the schema's pages and the knowledge bundle

## Developer Tools

Run `just` to list the project's [just](https://github.com/casey/just/) recipes.

## Knowledge Trust Ladder (KTL)

`.lokf/` holds this project's [KTL](https://w3id.org/ktl/) knowledge bundle. Its domain schema, `.lokf/ocsf.yaml`, is the copy `just lokf-adapt` writes from `src/ocsf/schema/ocsf.yaml`, and `just lokf-adapt-check` says when it is stale. Edit the source, never the copy. A release carries the copy as `schema-<tag>-ocsf.yaml`.

The copy roots `OcsfBaseEvent` on `Concept`, so a concept may be an event of any class. OCSF's objects stay values inside an event. In Obsidian, add the classes to the *Known LOKF types* setting of the KTL Registrar and KTL Curator plugins:

```text
OcsfAccountChange, OcsfAdminGroupQuery, OcsfAirborneBroadcastActivity, OcsfApiActivity,
OcsfApplicationError, OcsfApplicationLifecycle, OcsfApplicationSecurityPostureFinding,
OcsfAuthentication, OcsfAuthorizeSession, OcsfBaseEvent, OcsfClipboardActivity,
OcsfCloudResourcesInventoryInfo, OcsfComplianceFinding, OcsfConfigState,
OcsfDataSecurityFinding, OcsfDatastoreActivity, OcsfDetectionFinding,
OcsfDeviceConfigStateChange, OcsfDevicePowerStateActivity, OcsfDhcpActivity,
OcsfDnsActivity, OcsfDroneFlightsActivity, OcsfEmailActivity, OcsfEmailFileActivity,
OcsfEmailUrlActivity, OcsfEntityManagement, OcsfEventLogActvity, OcsfEvidenceInfo,
OcsfFileActivity, OcsfFileHosting, OcsfFileQuery, OcsfFileRemediationActivity,
OcsfFolderQuery, OcsfFtpActivity, OcsfGroupManagement, OcsfHttpActivity,
OcsfIamAnalysisFinding, OcsfIncidentFinding, OcsfInventoryInfo, OcsfJobQuery,
OcsfKernelActivity, OcsfKernelExtensionActivity, OcsfKernelObjectQuery,
OcsfMemoryActivity, OcsfModuleActivity, OcsfModuleQuery, OcsfNetworkActivity,
OcsfNetworkConnectionQuery, OcsfNetworkFileActivity, OcsfNetworkRemediationActivity,
OcsfNetworksQuery, OcsfNtpActivity, OcsfOsintInventoryInfo, OcsfPatchState,
OcsfPeripheralActivity, OcsfPeripheralDeviceQuery, OcsfProcessActivity,
OcsfProcessQuery, OcsfProcessRemediationActivity, OcsfRdpActivity,
OcsfRemediationActivity, OcsfRoleManagement, OcsfScanActivity, OcsfScheduledJobActivity,
OcsfScriptActivity, OcsfSecurityFinding, OcsfServiceQuery, OcsfSessionQuery,
OcsfSmbActivity, OcsfSoftwareInfo, OcsfSshActivity, OcsfStartupItemQuery,
OcsfTunnelActivity, OcsfUserAccess, OcsfUserInventory, OcsfUserManagement,
OcsfUserQuery, OcsfVulnerabilityFinding, OcsfWebResourceAccessActivity,
OcsfWebResourcesActivity, OcsfWinPrefetchQuery, OcsfWinRegistryKeyActivity,
OcsfWinRegistryKeyQuery, OcsfWinRegistryValueActivity, OcsfWinRegistryValueQuery,
OcsfWinResourceActivity, OcsfWinServiceActivity
```

OCSF has no identifier, so the copy drops none, and a concept writes LOKF's `id`, `title` and `description` beside the event's keys. It renames the 20 keys LOKF also defines with an `ocsf_` prefix, such as `ocsf_name`, `ocsf_type` and `ocsf_status`, keeping their IRIs. `tests/test_schema_rules.py` holds all this, and the keys OCSF's plain words share with other released copies: 51 with lmodel/uco and 40 with lmodel/stix and lmodel/attack among them. A host importing this copy beside another writes each shared key under one IRI, until `lokf adapt` can rename what a neighbour copy defines (lokf #169).

## License

The schema and the code are under the Apache License 2.0 ([LICENSE](LICENSE)), and the knowledge bundle in [.lokf/knowledge/](.lokf/knowledge) is under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

OCSF is under the Apache License 2.0, and `upstream/` keeps its LICENSE and NOTICE: see [NOTICE](NOTICE). This is not a project of OCSF a Series of LF Projects, LLC, and its use implies no endorsement by the OCSF project.

## Contributing and security

[CONTRIBUTING.md](CONTRIBUTING.md) is the checklist for pull requests and
releases, [AI_COVENANT.md](AI_COVENANT.md) sets the rules for AI-assisted work,
[SECURITY.md](SECURITY.md) says how to report a vulnerability, and
[CHANGELOG.md](CHANGELOG.md) records the changes.

## Credits

Built from the [linkml-project-copier](https://github.com/linkml/linkml-project-copier) template ([doi:10.5281/zenodo.15163584](https://doi.org/10.5281/zenodo.15163584)).
