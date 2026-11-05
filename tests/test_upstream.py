"""Checks that the schema renders the OCSF release its copy pins.

upstream/ocsf-schema/ holds the tag's files, which scripts/check_upstream_release.py
pins. These tests read the copy offline, hold it to the pins, hold the compiled form to
the copy, and hold the schema's files and header to what the converter writes from them.
"""

import hashlib
import importlib.util
import json
import sys
from pathlib import Path

import pytest
import yaml

ROOT = Path(__file__).parent.parent
COPY = ROOT / "upstream" / "ocsf-schema"
COMPILED = ROOT / "upstream" / "ocsf-compiled-1.9.0.json"
SCHEMA_DIR = ROOT / "src" / "ocsf" / "schema"
WATCH_SCRIPT = ROOT / "scripts" / "check_upstream_release.py"
EDITION = "1.9.0"
COMPILER = "ocsf-schema-compiler"
COMPILER_VERSION = "1.1.1"


def _watch():
    spec = importlib.util.spec_from_file_location("watch_pins", WATCH_SCRIPT)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


WATCH = _watch()


def _blob_sha(path):
    data = path.read_bytes()
    return hashlib.sha1(b"blob %d\0" % len(data) + data).hexdigest()


def test_the_copy_is_the_pinned_files():
    """Every copied file is the blob the watch pins, and nothing else is there."""
    held = {
        p.relative_to(COPY).as_posix(): _blob_sha(p)
        for p in COPY.rglob("*")
        if p.is_file()
    }
    assert held == WATCH.PINNED_BLOBS


def test_the_watch_hashes_files_as_git_does():
    assert WATCH._blob_sha(COPY / "LICENSE") == WATCH.PINNED_BLOBS["LICENSE"]


def test_the_copy_says_it_is_the_pinned_edition():
    assert (
        json.loads((COPY / "version.json").read_text(encoding="utf-8"))["version"]
        == EDITION
    )
    assert WATCH.PINNED_TAG == EDITION


def test_the_copy_keeps_its_licence_and_notice():
    assert "Apache License" in (COPY / "LICENSE").read_text(encoding="utf-8")
    assert "OCSF a Series of LF Projects" in (COPY / "NOTICE").read_text(
        encoding="utf-8"
    )


def test_the_compiled_form_is_of_this_edition():
    compiled = json.loads(COMPILED.read_text(encoding="utf-8"))
    assert compiled["version"] == EDITION
    assert compiled["compile_version"] == 1


@pytest.mark.skipif(
    sys.version_info < (3, 14), reason="OCSF's compiler needs Python 3.14"
)
def test_the_compiled_form_is_what_the_compiler_writes():
    """The compiler, at the pinned version, makes the same data from the copy.

    The compiler's key order follows the directory listing, so its bytes differ
    from one checkout to the next. The test compares digests of the sorted form,
    because pytest's diff of two 4 MB lines does not finish under CI.
    """
    from importlib.metadata import version

    from ocsf_schema_compiler.compiler import SchemaCompiler

    assert version(COMPILER.replace("-", "_")) == COMPILER_VERSION

    def digest(data):
        return hashlib.sha256(json.dumps(data, sort_keys=True).encode()).hexdigest()

    committed = json.loads(COMPILED.read_text(encoding="utf-8"))
    assert digest(SchemaCompiler(COPY).compile()) == digest(committed)


def test_each_module_is_what_the_converter_writes(tmp_path, monkeypatch):
    """The schema comes from the pinned files alone, so nobody edits it by hand."""
    spec = importlib.util.spec_from_file_location(
        "converter", ROOT / "scripts" / "ocsf_to_linkml.py"
    )
    converter = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(converter)
    monkeypatch.setattr(converter, "OUT", tmp_path)
    converter.main()
    written = {
        path.name: path.read_text(encoding="utf-8") for path in tmp_path.glob("*.yaml")
    }
    committed = {
        path.name: path.read_text(encoding="utf-8")
        for path in SCHEMA_DIR.glob("*.yaml")
    }
    assert written == committed


def test_every_module_states_the_edition_and_its_source():
    for path in SCHEMA_DIR.glob("*.yaml"):
        header = yaml.safe_load(path.read_text(encoding="utf-8"))
        assert header["version"] == EDITION, path.name
        assert (
            header["source"] == f"https://github.com/ocsf/ocsf-schema/tree/{EDITION}"
        ), path.name
        assert header["license"] == "Apache-2.0", path.name
