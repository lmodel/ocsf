#!/usr/bin/env python3
"""Wrapper around ``gen-doc`` that loads templates from a ChoiceLoader so
local overrides in ``docs/templates-linkml/`` take precedence while Jinja2
``{% include %}`` calls still resolve sibling templates from the built-in
``linkml/generators/docgen/`` folder.

Workaround for an upstream LinkML documentation-generator bug. When a class
rule has only ``postconditions`` (no ``preconditions``), ``classrule_to_dict_view``
returns ``{"preconditions": None, ...}`` and the default ``class.md.jinja2``
template crashes with::

    TypeError: 'NoneType' object is not iterable

at line 227 (``{% for key in rule.preconditions %}``) because the None guard
is absent.

The local fix lives in ``docs/templates-linkml/class.md.jinja2``: it collects
all keys from preconditions, postconditions, and elseconditions before
iterating, so rules with only postconditions render correctly.

Using ``--template-directory`` alone is not sufficient: that option passes a
single-folder ``FileSystemLoader`` to Jinja2, so ``{% include %}`` calls for
sibling templates (``class_diagram.md.jinja2``, ``common_metadata.md.jinja2``)
cannot find their targets and crash. This wrapper patches ``_get_template`` to
use a ``ChoiceLoader`` that searches the local override directory first, then
falls back to the built-in docgen directory, so all includes resolve.

Drop this wrapper once the upstream template ships the None guard.

Workaround 2 — subset filename collision
-----------------------------------------
``DocGenerator.name()`` applies ``camelcase()`` to *all* non-class/non-slot
elements (including subsets). A snake_case subset such as
``ai_operation_profile`` is therefore mapped to the filename
``AiOperationProfile.md``, which overwrites the class page for
``AiOperationProfile`` that was written earlier in the same ``generate_all``
call.

The local fix patches ``name()`` to return ``underscore(element.name)`` for
``SubsetDefinition`` elements, keeping subset files as e.g.
``ai_operation_profile.md`` and leaving class files untouched.

Drop this patch once upstream ``DocGenerator.name()`` preserves snake_case for
subsets.
"""
from __future__ import annotations

import importlib.util
import os
import sys
from pathlib import Path

from jinja2 import ChoiceLoader, Environment, FileSystemLoader
from linkml.generators.docgen import DocGenerator, cli
from linkml_runtime.utils.formatutils import camelcase, underscore

_REPO_ROOT = Path(__file__).resolve().parent.parent
_LOCAL_TEMPLATES = _REPO_ROOT / "docs" / "templates-linkml"
_PKG_ORIGIN = importlib.util.find_spec("linkml.generators.docgen").origin
_BUILTIN_TEMPLATES = Path(os.path.dirname(_PKG_ORIGIN)) / "docgen"

_original_get_template = DocGenerator._get_template


def _patched_get_template(self, element_type: str):
    if self.template_mappings and element_type in self.template_mappings:
        return _original_get_template(self, element_type)
    base_file_name = f"{element_type}.{self._file_suffix()}.jinja2"
    loader = ChoiceLoader([
        FileSystemLoader(str(_LOCAL_TEMPLATES)),
        FileSystemLoader(str(_BUILTIN_TEMPLATES)),
    ])
    env = Environment(loader=loader)
    self.customize_environment(env)
    return env.get_template(base_file_name)


DocGenerator._get_template = _patched_get_template

_original_name = DocGenerator.name


def _patched_name(self, element):
    if element is not None and type(element).class_name == "subset_definition":
        return underscore(element.name)
    return _original_name(self, element)


DocGenerator.name = _patched_name


if __name__ == "__main__":
    sys.exit(cli(sys.argv[1:]) or 0)
