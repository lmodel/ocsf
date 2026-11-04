# The OCSF files this schema renders

This folder holds the Open Cybersecurity Schema Framework (OCSF) at its tag `1.9.0`, unchanged. `scripts/check_upstream_release.py` compares it with the tag each week. `ocsf-schema.blobs.tsv` lists each file's git object hash, and `tests/test_upstream.py` holds the folder to that list.

| Path | What it is | Read from |
| --- | --- | --- |
| `ocsf-schema/` | The tag's dictionary, categories, events, objects, profiles, extensions, metaschema and templates, with its `LICENSE`, `NOTICE`, `README.md` and `CHANGELOG.md` | <https://github.com/ocsf/ocsf-schema/tree/1.9.0> |
| `ocsf-compiled-1.9.0.json` | What OCSF's own compiler makes of that folder | `ocsf-schema-compiler` 1.1.1, as below |

The copy leaves out the tag's workflow and editor settings, its contributing guide and its logo, since nothing here reads them.

To compile the folder again, with the Python 3.14 the compiler asks for:

```bash
uvx --python 3.14 --from ocsf-schema-compiler==1.1.1 ocsf-schema-compiler upstream/ocsf-schema > upstream/ocsf-compiled-1.9.0.json
```

`tests/test_upstream.py` does this on Python 3.14 and compares the bytes. `scripts/ocsf_to_linkml.py` writes the LinkML schema from both paths.

OCSF is under the Apache License 2.0 and its copyright is held by OCSF a Series of LF Projects, LLC. `ocsf-schema/LICENSE` and `ocsf-schema/NOTICE` are its own, and [NOTICE](../NOTICE) says more. The OCSF project has not endorsed this project.
