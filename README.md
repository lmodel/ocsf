<a href="https://github.com/linkml/linkml-project-copier"><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-grayscale-inverted-border-teal.json" alt="Copier Badge" style="max-width:100%;"/></a>

# ocsf

Open Cybersecurity Schema Framework - LinkML Schema

## Documentation Website

[https://lmodel.github.io/ocsf](https://lmodel.github.io/ocsf)

## Repository Structure

* [docs/](docs/) - mkdocs-managed documentation
  * [elements/](docs/elements/) - generated schema documentation
* [examples/](examples/) - Examples of using the schema
* [project/](project/) - project files (these files are auto-generated, do not edit)
* [src/](src/) - source files (edit these)
  * [ocsf](src/ocsf)
    * [schema/](src/ocsf/schema) -- LinkML schema
      (edit this)
    * [datamodel/](src/ocsf/datamodel) -- generated
      Python datamodel
* [tests/](tests/) - Python tests
  * [data/](tests/data) - Example data

## Developer Tools

There are several pre-defined command-recipes available.
They are written for the command runner [just](https://github.com/casey/just/). To list all pre-defined commands, run `just` or `just --list`.

## Schema Generation Notes

The LinkML schema under [src/ocsf/schema/](src/ocsf/schema/) is generated from the
upstream OCSF JSON sources at [upstream/ocsf-schema/](upstream/ocsf-schema/) by
[tools/generate_ocsf_schema.py](tools/generate_ocsf_schema.py).

### Class-scoped enum overrides extend (rather than replace) the dictionary base

OCSF semantically inherits the implicit `0/Unknown` and `99/Other` codes from
`base_event.activity_id` (and similar slots) into every event subclass that
declares its own activity values. The upstream JSON only stores the new values
explicitly (e.g. `Authentication.activity_id` declares `1..7`), expecting
consumers to merge the base codes back in.

The generator merges `base_event` / dictionary-level enum codes into each
class-scoped override, so that `AuthenticationActivityIdEnum`,
`DnsActivityActivityIdEnum`, etc. include `UNKNOWN` and `OTHER` alongside their
class-specific values. Without this merge, valid OCSF data using `activity_id:
UNKNOWN` would be rejected by the generated validator. See `_extract_enum` and
its `base_values` parameter in [tools/generate_ocsf_schema.py](tools/generate_ocsf_schema.py).

### Known upstream LinkML issues

A small number of generator/runtime bugs in upstream LinkML currently affect
the Python datamodel produced from this schema. They are tracked in
[ISSUE.md](ISSUE.md) with a workaround sketch.

## Credits

This project uses the template [linkml-project-copier](https://github.com/linkml/linkml-project-copier).
