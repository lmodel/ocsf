# ocsf

This project is a LinkML model of the Open Cybersecurity Schema Framework (OCSF), version 1.9.0. It keeps OCSF's own keys and its integer values, so a real event validates unchanged against the class its `class_uid` names.

- [Schema documentation](elements/index.md), generated from the schema
- [About](about.md): how the classes fit together, how the schema is written and what the model leaves out
- [`ocsf.yaml`](schema/ocsf.yaml): the schema, with its modules merged

## Validating an event

An OCSF event says which class it is by its `class_uid`, so name that class:

```bash
uv run linkml-validate -s src/ocsf/schema/ocsf.yaml -C OcsfAuthentication event.json
```

`project/jsonschema/ocsf.schema.json` is the same schema for anyone without LinkML: validate against `#/$defs/OcsfAuthentication`. Then run the rules below, which `tests/ocsf_rules.py` holds as `findings(event)`, because they look at more than one object at a time.

## What no validator checks

JSON Schema looks at one object at a time and cannot see the rest of the event, so these OCSF rules stay in `tests/ocsf_rules.py`. Each finding has the name OCSF's own validator gives it.

| Rule | Finding |
| --- | --- |
| An attribute a profile brings needs that profile in `metadata.profiles` | `attribute_unknown` |
| A listed profile's required attribute is there, as `cloud` is for the `cloud` profile | `attribute_required_missing` |
| A listed profile is one OCSF defines | `profile_unknown` |
| `type_uid` is `class_uid * 100 + activity_id` | `type_uid_incorrect` |
| An observable's `name` is a path to an attribute of the class | `observable_name_invalid_reference` |
| An `at_least_one` whose member is a path or no attribute of the class, which a slot condition cannot state | `constraint_failed` |
| An enumerated array's labels follow its numbers, in order, other than for 99 | `attribute_enum_array_sibling_missing`, `attribute_enum_array_sibling_incorrect` |
| OCSF's open `object` holds an object | `attribute_wrong_type` |
| A value is no longer than its data type's `max_len` | `attribute_value_exceeds_max_len` |
| `metadata.version` is not a prerelease, an initial development version or later than 1.9.0 | `version_incompatible_prerelease`, `version_incompatible_initial_development`, `version_incompatible_later` |

The same file reports what OCSF's validator only warns about: a label that differs from its caption, an earlier released version, and anything deprecated.

## What was checked

`tests/test_coverage.py` walks what OCSF's own compiler makes of the pinned tag and compares it with the schema as LinkML reads it, in both directions. That covers all 87 event classes and 193 objects, each of their 7,904 attributes and each value list, with the captions, descriptions, requirements, groups, profiles and references. `tests/test_data.py` holds an example of each class, and a counter-example of each list, constant, required attribute, constraint and data type bound.

`just test-real-events` reads the 93 events of [ocsf/examples](https://github.com/ocsf/examples) at a pinned commit and compares each verdict with OCSF's validator. The events stay out of this repository, because that repository states no licence. The two validators agree on 88 events. On the other 5, OCSF's validator passes an event and this schema refuses it, because a value does not match its data type's regex, such as an `ip` of `12.000.22.33`. OCSF's validator only warns about those, and [about.md](about.md#a-data-types-regex) says why this schema keeps them. Nearly all of the 93 name an OCSF version from 1.0.0-rc.2 to 1.5.0, so none shows what 1.9.0 added. A sample from OCSF's server for each class covers that shape, and `tests/test_samples.py` says how far that goes.

The schema says nothing about whether what an event claims is true.
