#!/usr/bin/env python3
"""Write the smallest valid example of each OCSF class and object.

Each file holds only what the class requires, with a plain value of the right data
type. A class's `at_least_one` or `just_one` constraint takes its first member, and an
event's `type_uid` is computed, as OCSF says. So the folder shows what each class
needs, and every class has an example. The richer examples are written by hand, under
tests/data/valid/. `tests/test_data.py` checks that these are what this script writes.
They sit in a folder of their own because the example runner generates a JSON Schema
for each file it reads, which takes seconds a file on a schema of this size.

Usage::

    uv run python scripts/make_examples.py
"""

from __future__ import annotations

import json
from pathlib import Path

import yaml
from linkml_runtime import SchemaView

ROOT = Path(__file__).resolve().parent.parent
SCHEMA = ROOT / "src" / "ocsf" / "schema" / "ocsf.yaml"
OUT = ROOT / "tests" / "data" / "minimal"
SUFFIX = "-minimal.yaml"
HEADER = (
    "# The least that {name} requires. scripts/make_examples.py writes this file.\n"
)
EDITION = "1.9.0"

SCALARS = {
    "ocsf_boolean_t": True,
    "ocsf_bytestring_t": "b2NzZg==",
    "ocsf_datetime_t": "2026-11-04T12:00:00Z",
    "ocsf_email_t": "analyst@example.com",
    "ocsf_file_hash_t": "9f86d081884c7d659a2feaa0c55ad015",
    "ocsf_file_name_t": "example.txt",
    "ocsf_file_path_t": "/tmp/example.txt",
    "ocsf_float_t": 1.5,
    "ocsf_hostname_t": "host.example.com",
    "ocsf_integer_t": 1,
    "ocsf_ip_t": "192.0.2.1",
    "ocsf_long_t": 1,
    "ocsf_mac_t": "00:00:5E:00:53:01",
    "ocsf_port_t": 443,
    "ocsf_process_name_t": "example",
    "ocsf_reg_key_path_t": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Example",
    "ocsf_resource_uid_t": "example-resource",
    "ocsf_string_t": "example",
    "ocsf_subnet_t": "192.0.2.0/24",
    "ocsf_timestamp_t": 1793793600000,
    "ocsf_url_t": "https://example.com/",
    "ocsf_username_t": "analyst",
    "ocsf_uuid_t": "123e4567-e89b-12d3-a456-426614174000",
}


def annotation(element, key):
    notes = element.annotations
    held = notes.get(key) if isinstance(notes, dict) else getattr(notes, key, None)
    return None if held is None else held.value


class Maker:
    def __init__(self, view: SchemaView):
        self.view = view

    def value(self, slot, path: tuple) -> object:
        if slot.equals_number is not None:
            one = int(slot.equals_number)
        elif any(entry.equals_number is not None for entry in slot.any_of):
            numbers = [
                int(e.equals_number) for e in slot.any_of if e.equals_number is not None
            ]
            ordinary = [n for n in numbers if n not in (0, 99)]
            one = ordinary[0] if ordinary else numbers[0]
        elif slot.range == "OcsfObject" or any(
            e.range == "OcsfJsonValue" for e in slot.any_of
        ):
            one = {"example": "value"}
        elif slot.range in self.view.all_classes():
            one = self.instance(slot.range, path)
        elif slot.range in self.view.all_enums():
            one = next(iter(self.view.get_enum(slot.range).permissible_values))
        else:
            one = SCALARS[slot.range]
        return [one] if slot.multivalued else one

    def instance(self, class_name: str, path: tuple = ()) -> dict:
        if class_name in path:
            raise ValueError(f"{class_name} requires itself through {path}")
        path = (*path, class_name)
        cls = self.view.get_class(class_name)
        slots = {slot.name: slot for slot in self.view.class_induced_slots(class_name)}
        out = {
            name: self.value(slot, path)
            for name, slot in sorted(slots.items())
            if slot.required
        }
        constraints = json.loads(annotation(cls, "ocsf_constraints") or "{}")
        for names in (constraints.get("at_least_one"), constraints.get("just_one")):
            if names and not any(name in out for name in names):
                self.fill(out, names, slots, path)
        if class_name == "OcsfMetadata":
            out["version"] = EDITION
        if {"class_uid", "activity_id", "type_uid"} <= out.keys():
            out["type_uid"] = out["class_uid"] * 100 + out["activity_id"]
        return out

    def fill(self, out: dict, names: list, slots: dict, path: tuple) -> None:
        """Satisfy a constraint with its first member that needs nothing a profile
        gates, following a dotted member down through the objects it names."""
        for name in names:
            head, _, rest = name.partition(".")
            slot = slots.get(head)
            if slot is None or annotation(slot, "ocsf_profiles"):
                continue
            if not rest:
                out[name] = self.value(slot, path)
                return
            held = self.instance(slot.range, path)
            current = held
            for part in rest.split("."):
                inner = {s.name: s for s in self.view.class_induced_slots(slot.range)}[
                    part
                ]
                current[part] = self.value(inner, path)
                current = current[part]
                slot = inner
            out[head] = held
            return
        raise ValueError(f"no member of {names} can be filled")


def concrete_classes(view: SchemaView) -> list[str]:
    return sorted(
        name
        for name, cls in view.all_classes().items()
        if not cls.abstract and not cls.mixin and str(cls.class_uri) != "linkml:Any"
    )


def documents() -> dict[str, str]:
    view = SchemaView(str(SCHEMA))
    maker = Maker(view)
    return {
        f"{name}{SUFFIX}": HEADER.format(name=name)
        + yaml.safe_dump(
            maker.instance(name),
            sort_keys=True,
            allow_unicode=True,
            default_flow_style=False,
        )
        for name in concrete_classes(view)
    }


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for path in OUT.glob(f"*{SUFFIX}"):
        path.unlink()
    for name, text in documents().items():
        (OUT / name).write_text(text, encoding="utf-8")


if __name__ == "__main__":
    main()
