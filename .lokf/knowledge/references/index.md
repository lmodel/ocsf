# References

* [OCSF schema repository](ocsf-schema.md) - The OCSF project's repository of the framework's dictionary, categories, events, objects, profiles and extensions, under Apache-2.0. The schema renders its tag 1.9.0 of 3 August 2026.
* [OCSF schema compiler](ocsf-compiler.md) - `ocsf-schema-compiler`, the OCSF project's Python tool that resolves the framework's files into one compiled schema, under Apache-2.0. It needs Python 3.14, and this repository holds the output of version 1.1.1.
* [OCSF's event validator](ocsf-validator.md) - The validator in ocsf-server, which schema.ocsf.io serves at `/api/1.9.0/v2/validate`. It reports errors and warnings by name, and `tests/ocsf_rules.py` uses those names.
* [OCSF examples repository](ocsf-examples.md) - The OCSF project's repository of sample mappings and events, which states no licence and says it is no gold standard. Nearly all its events name a version from 1.0.0-rc.2 to 1.5.0, and none is copied here.
* [MITRE D3FEND](d3fend.md) - MITRE's knowledge graph of cybersecurity countermeasures, whose terms OCSF's references name. The term list holds those names as D3FEND 1.6.0's file declares them.
