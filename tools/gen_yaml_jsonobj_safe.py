#!/usr/bin/env python3
"""Wrapper around ``linkml gen-yaml`` that registers a missing PyYAML representer
for ``jsonasobj2.JsonObj``.

Workaround for an upstream LinkML serialisation bug. When a class uses
``slot_usage`` to refine an inherited slot, ``SchemaLoader`` merges the
parent's annotations into the synthesised class-scoped slot — but the merged
``slot.annotations`` collection lands as a bare ``jsonasobj2.JsonObj`` rather
than the typed ``Annotations`` (``YAMLRoot``) wrapper.

``linkml_runtime/utils/yamlutils.py`` registers
``yaml.SafeDumper.add_multi_representer(YAMLRoot, root_representer)`` but
NOT one for the parent ``JsonObj``, so ``gen-yaml`` aborts with::

    yaml.representer.RepresenterError: ('cannot represent an object',
        JsonObj(sibling=Annotation({'tag': 'sibling', 'value': 'type'})))

OCSF is exposed because its dictionary slots (``activity_id``, ``type_id``, …)
carry both ``sibling:`` and ``suppress_checks:`` annotations that get inherited
through deep ``slot_usage`` chains.

Upstream fix: https://github.com/linkml/linkml/pull/3423

This wrapper applies the same ``root_representer`` used for ``YAMLRoot`` to
the bare ``JsonObj`` and then delegates to the standard ``gen-yaml`` CLI.
Drop the wrapper once that PR (or a release containing it) is on the path.
"""
from __future__ import annotations

import sys

import yaml
from jsonasobj2 import JsonObj
from linkml.generators.yamlgen import cli
from linkml_runtime.utils.yamlutils import root_representer

# Register the missing representer. This MUST happen before ``cli`` runs so
# that any ``yaml.safe_dump`` call inside the generator can resolve a
# ``JsonObj`` instance (e.g. ``slot.annotations``).
yaml.SafeDumper.add_multi_representer(JsonObj, root_representer)


if __name__ == "__main__":
    sys.exit(cli(sys.argv[1:]) or 0)
