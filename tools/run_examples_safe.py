#!/usr/bin/env python3
"""Wrapper around ``linkml-run-examples`` that uses the pre-patched Python
datamodel instead of generating a fresh one in memory.

Root cause: ``ExampleRunner.python_module`` calls
``PythonGenerator.compile_module()`` which regenerates the Python datamodel
from the schema in memory, bypassing the ``strip_redundant_enum_casts.py``
post-processing workaround (upstream bug).  The freshly generated
code still contains the redundant enum-cast blocks that crash for OCSF classes
that use ``slot_usage`` to narrow an inherited slot's enum range.

This wrapper monkey-patches ``ExampleRunner.python_module`` to return the
already-patched ``ocsf.datamodel.ocsf`` module (generated and post-processed
by ``just _test-python``) instead of regenerating it.

Prerequisite: ``gen-python`` + ``_apply-codegen-workaround`` must have run to
produce ``src/ocsf/datamodel/ocsf.py`` before this script is called.  The
``just test`` recipe guarantees this — ``_test-python`` runs before
``_test-examples``.
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

import ocsf.datamodel.ocsf as _patched_ocsf  # noqa: E402
from linkml.workspaces.example_runner import ExampleRunner, cli  # noqa: E402


ExampleRunner.python_module = property(lambda self: _patched_ocsf)

if __name__ == "__main__":
    sys.exit(cli() or 0)
