# About ocsf

This page is for anyone reading the schema's elements. It says how the classes fit together, how the schema is written and what the model leaves out.

## How an event is shaped

An OCSF event is one JSON object of one event class. Every class descends from the base event, and most sit under a parent for their category, such as `OcsfIamEvent` for Identity & Access Management. The event names its class by `class_uid`, its category by `category_uid` and what happened by `activity_id`. Its attributes hold plain values or objects, such as `OcsfUser` or `OcsfProcess`, which exist only inside an event.

OCSF defines each attribute once, in its attribute dictionary, and a class or object then refines it. So each dictionary attribute is a top-level slot, and a class refines it through `slot_usage`: whether it is required or recommended, its description, its value list and its group. A class writes only what it does not inherit.

## Numbers stay numbers

OCSF writes a list as integers: `activity_id: 1`, with the label `Logon` in its sibling `activity_name`. A LinkML enum's values are strings, so no real event could satisfy one. Each list is therefore an `any_of` of `equals_number`, with OCSF's caption as the entry's `title` and its text as its `description`, and the JSON Schema gets one `const` per number. A class's list is OCSF's compiled one: the base values merged with the class's own. `class_uid` and `category_uid`, which one class holds constant, use `equals_number` directly. A number outside the list is an error, as it is in OCSF's validator. The three lists OCSF writes as strings, `depth`, `http_method` and `tlp`, are ordinary enums.

The generated pages show a list under each class's YAML, not as a table. The JSON Schema shows an entry's `description` and leaves out its `title`.

## Profiles

A profile is a set of attributes an event opts into by listing it in `metadata.profiles`, and each is a mixin here, such as `OcsfCloudProfile`. OCSF's validator treats a profile's attribute as unknown unless the event lists that profile, and requires what the profile requires only then. JSON Schema cannot see `metadata.profiles` from inside an object. So the schema declares such an attribute on the class, never requires it, and records its profiles in an `ocsf_profiles` annotation that `tests/ocsf_rules.py` reads. On this one point the JSON Schema alone is looser than OCSF.

## What OCSF leaves open

OCSF's `object`, which `unmapped` and `xattributes` hold, takes any keys, so `OcsfObject` has the class URI `linkml:Any`. So does `OcsfJsonValue`, for a `json_t`. Every other class is closed, as OCSF's validator closes it. LinkML's `Any` admits a scalar and leaves out an array, so a `json_t` slot says `any_of` a value or a list of values, and `tests/ocsf_rules.py` checks that an `object` holds an object.

## A data type's regex

Each data type carries OCSF's regex as its `pattern` and OCSF's bounds as `minimum_value` and `maximum_value`, so the JSON Schema refuses a value outside them. OCSF's dictionary says that implementers should abide by these constraints, and its validator reports a regex mismatch as a warning. A LinkML pattern cannot warn, so this schema keeps the stricter reading. So 5 of the 93 events in ocsf/examples pass OCSF's validator and fail here: an `ip` of `12.000.22.33`, and a `*_dt` value with a space in place of the `T`. The `datetime_t` description gives that last form as an example, although its regex refuses it.

## Modules

`ocsf_core` holds the data types and the attributes whose value is not an object, and imports only the LinkML types. `ocsf_objects` holds the objects, the profiles and the attributes whose value is an object, because those refer to each other: an object's attribute ranges over an object, an object takes a profile, and a profile's attribute ranges over an object. OCSF's three extensions cannot have modules of their own for the same reason, since an extension patches a base object with attributes that range over its own. So each extension element carries an `ocsf_extension` annotation and sits in a subset. The event classes have a module per category, and `ocsf_events_win` holds the Windows extension's.

A fact the metamodel has no slot for is an annotation with the `ocsf_` prefix, and `OcsfFacts` declares each key.

## How the schema is written

`scripts/ocsf_to_linkml.py` writes `src/ocsf/schema/`, and nobody edits those files. It reads two things under `upstream/`. The first is what OCSF's compiler makes of the tag, which resolves `extends`, `$include`, extension patches and the datetime siblings as OCSF means them. The second is the tag's source files, for what the compiler folds away: the abstract parents and each profile's attributes. A test compares what the script writes with the committed files.

Descriptions and captions are OCSF's, copied under its Apache License 2.0, HTML included. The text this project adds is small: the descriptions of `OcsfFacts` and `OcsfObjectBase`, which OCSF has no item for, of `OcsfApplicationEvent`, since OCSF's file gives none, and of the three string enums.

## Python models

The Pydantic models load every valid example. The dataclasses have two gaps in LinkML 1.12.1, which `tests/test_datamodel.py` holds. A key named after a Python keyword, `from` or `class`, becomes `from_` or `class_`, so they refuse the key as an event writes it. And a `json_t` value raises a `TypeError`, because the generated check calls `isinstance` against `typing.Any`.

## RDF

`project/jsonld/ocsf.context.jsonld` gives each key its IRI under `https://w3id.org/lmodel/ocsf/`, and applied to an event it gives each value as a triple. Nothing in OCSF identifies an event, so the event and its objects are blank nodes. OCSF publishes no RDF of its own, so these IRIs are this project's.

## What OCSF's files get wrong

Five things in OCSF 1.9.0 needed a decision, and `tests/test_coverage.py` holds each, so a new edition that clears one fails a test:

- `event_log_activity.json` spells its class's name `event_log_actvity`, so the class is `OcsfEventLogActvity`.
- That class's `at_least_one` names `log_file`, which it does not have. The rule stays in `tests/ocsf_rules.py`, with the attributes it does have.
- `patch_state`'s `at_least_one` names paths, such as `device.os.sp_name`. OCSF's validator looks each up as one key, so it fails every such event. The rule here follows the path.
- `email_activity.json` writes one reference address with a stray `href='`, which the converter leaves off.
- `dictionary.json` gives `2024-09-10 23:20:50.520789Z` as an example of a `datetime_t`, and that type's regex refuses it. The schema keeps the regex.

## What is left out

OCSF's other extension repositories, such as its AWS and Splunk ones, are not in the tag and are not rendered. A source event's own class is not modelled. An event bundle, which OCSF's validator also takes, is an encoding, not part of the schema.
