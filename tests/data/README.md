# Example data for ocsf

- `minimal/` holds the least each class and object requires, as `scripts/make_examples.py` writes it. `tests/test_data.py` reads this folder. The example runner does not, since it generates a JSON Schema for each file it reads, which takes seconds a file on a schema of this size.
- `valid/` holds events written by hand, to show what real events hold: labels beside numbers, profiles, a Windows class. `linkml-run-examples` and `tests/test_data.py` read this folder.
- `problem/valid/` holds valid events the generated dataclasses cannot load, and so the example runner cannot, since they hold the key `from` or `class` or a JSON value. `tests/test_data.py` and `tests/test_datamodel.py` read this folder.
- `invalid/` holds a counter-example for each kind of constraint the validator can state. Each file's first line, `# Fails at: <JSON pointer>`, names its one failing place, and `tests/test_data.py` holds it there. That file also generates the same counter-examples for every class, list and required attribute, so they need no file each.
- `problem/invalid/` holds a counter-example for each rule the generated JSON Schema cannot state, which `tests/ocsf_rules.py` checks over a whole event. The first line also names the finding, in the words of OCSF's own validator.
- `ocsf-server-samples-1.9.0.json.gz` holds what OCSF's server generated for each event class, which `tests/test_samples.py` reads.

A file name is `ClassName-anything.yaml`, and the class is the part before the first hyphen. In `problem/invalid/`, the first line gives the pointer and then OCSF's name for the finding. Real events stay out of this repository, since ocsf/examples states no licence. `scripts/check_real_events.py` reads them where they are, and [NOTICE](../../NOTICE) says more.
