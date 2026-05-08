# Schema Directory

This folder contains the LinkML schema for OCSF.

The contents are **generated** by `tools/generate_ocsf_schema.py` from
`upstream/ocsf-schema/` and SSSOM TSVs in `../mappings/`. Do not hand-edit
the YAML files — re-run the generator after updating either source:

    python -m tools.generate_ocsf_schema

## Layout

Nine modules, one per concern:

    ocsf.yaml          root entrypoint, imports every module
    types.yaml         scalar types (from upstream dictionary.json/types)
    dictionary.yaml    909 slot definitions (from upstream dictionary.json)
    enums.yaml         enums extracted from dictionary + class definitions
    categories.yaml    CategoryUidEnum (from upstream categories.json)
    objects.yaml       178 object classes (from upstream objects/*.json)
    profiles.yaml      12 profile mixins (from upstream profiles/*.json)
    events.yaml        BaseEvent + 84 event classes (from upstream events/)
    extensions.yaml    linux/macos/windows classes + extension-only slots

## Cross-schema mappings (SSSOM)

Class-level `*_mappings:` fields are applied from SSSOM TSV files in
[`../mappings/`](../mappings/). The generator treats those TSVs as inputs
only — it does not author them. Each TSV is expected to be produced by an
upstream curation process and committed alongside the schema:

| File | Target schema | Prefix | Classes mapped | Assertions |
|------|--------------|--------|---------------|------------|
| `ocsf-attack.sssom.tsv` | MITRE ATT&CK | `attack:` | 9 | 9 |
| `ocsf-stix.sssom.tsv` | STIX 2.1 | `stix:` | 18 | 18 |
| `ocsf-uco.sssom.tsv` | UCO master | `uco_master:` | 29 | 31 |
| `ocsf-capec.sssom.tsv` | CAPEC | `capec:` | 7 | 8 |
| `ocsf-cve.sssom.tsv` | CVE Record Format v5 | `cve:` | 5 | 6 |
| `ocsf-cwe.sssom.tsv` | MITRE CWE | `cwe:` | 3 | 4 |
| `ocsf-iso27001.sssom.tsv` | ISO/IEC 27001:2022 | `iso27001:` | 6 | 7 |
| `ocsf-kev-catalog.sssom.tsv` | CISA KEV Catalog | `kev_catalog:` | 4 | 5 |
| `ocsf-nist-nvd.sssom.tsv` | NIST NVD | `nvd:` | 6 | 7 |
| `ocsf-vulnerability-core.sssom.tsv` | vulnerability-core | `core:` | 8 | 9 |

**Total (as of OCSF v1.9.0-dev): 116 assertions across 67 classes.**

The SKOS predicate column on each row picks the LinkML mapping slot
(`skos:exactMatch` → `exact_mappings`, `skos:closeMatch` → `close_mappings`,
etc.). Multiple mapping sets stack on the same OCSF class — for example,
`Vulnerability` accumulates `exact_mappings` from STIX and vulnerability-core,
`close_mappings` from CVE, KEV, and NVD, and `related_mappings` from CAPEC and
CWE, all applied in a single generation pass.

## Known upstream LinkML issues affecting this schema

Three upstream bugs in `linkml` / `linkml-runtime` 1.10.0 affect generators
run against this schema. All have local workarounds wired into the
`just`-based build; the workarounds have upstream issues open.

| # | Affected generator | Workaround | Upstream |
|---|---|---|---|
| 1 | `gen-python` (`TypeError` on enum casts) | [`tools/strip_redundant_enum_casts.py`](../../../tools/strip_redundant_enum_casts.py), invoked from `_test-python` |raised upstream |
| 2 | `gen-yaml` (`RepresenterError` on `JsonObj`) | [`tools/gen_yaml_jsonobj_safe.py`](../../../tools/gen_yaml_jsonobj_safe.py), invoked from `_gen-yaml` | [linkml/linkml#3423](https://github.com/linkml/linkml/pull/3423) |
| 3 | `gen-doc` (`TypeError: 'NoneType' object is not iterable`) | [`tools/gen_doc_template_safe.py`](../../../tools/gen_doc_template_safe.py) + [`docs/templates-linkml/class.md.jinja2`](../../../docs/templates-linkml/class.md.jinja2), invoked from `gen-doc` | raised upstream` |

All workarounds are idempotent and wired into the standard `just test`
and `just gen-doc` flows — no manual steps required. Remove them as the
upstream fixes land.
