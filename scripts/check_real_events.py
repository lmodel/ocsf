#!/usr/bin/env python3
"""Validate the real events of ocsf/examples, which stay out of this repository.

ocsf/examples states no licence, so no event of it is copied here. This script fetches
the repository at a pinned commit, holds each file to its pinned git object hash, and
puts every event through the committed JSON Schema and the rules in tests/ocsf_rules.py.
It then compares the verdict with what OCSF's own validator found, as recorded in
tests/upstream/ocsf-examples-verdicts.json, which holds no text of the events.

- An event OCSF's validator passes must pass here, unless its only failure is a value
  that does not match its data type's regex, which that validator only warns about.
- An event OCSF's validator fails must fail here.
- Each finding both name must be counted alike, so a rule cannot drift from theirs.

It exits 1 on any other result. Because it fetches a live repository, it is a job of
its own outside the required checks. To record the verdicts again, which posts each
event's text, another repository's, to OCSF's public validator::

    uv run python scripts/check_real_events.py --refresh

Usage::

    uv run python scripts/check_real_events.py
"""

from __future__ import annotations

import argparse
import collections
import hashlib
import io
import json
import sys
import tarfile
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

import jsonschema  # noqa: E402

from tests.ocsf_rules import class_of, findings  # noqa: E402

COMMIT = "ce0589ece917e9b9c018b795c8979ffb42072cad"
TARBALL = f"https://codeload.github.com/ocsf/examples/tar.gz/{COMMIT}"
VALIDATOR = "https://schema.ocsf.io/api/1.9.0/v2/validate"
COMMITTED = ROOT / "project" / "jsonschema" / "ocsf.schema.json"
VERDICTS = ROOT / "tests" / "upstream" / "ocsf-examples-verdicts.json"
USER_AGENT = "lmodel-ocsf-real-events"
MAX_BYTES = 200_000_000
# No file of the pinned commit comes near this, and a tar entry claims its own size.
MAX_MEMBER_BYTES = 20_000_000
SUFFIXES = (".json", ".ocsf", ".jsonl")
MARKER = b'"class_uid"'
# A file that names class_uid to describe the protobuf encoding, and holds no event.
NOT_EVENTS = {"encodings/protobuf/control.json"}
# Findings the JSON Schema reports in its own terms, so only the verdict is compared.
SCHEMA_FINDINGS = {
    "attribute_unknown",
    "attribute_required_missing",
    "attribute_wrong_type",
    "attribute_enum_value_unknown",
    "attribute_enum_array_value_unknown",
    "constraint_failed",
}
REGEX_WARNINGS = {
    "attribute_value_regex_not_matched",
    "attribute_value_super_type_regex_not_matched",
}


def blob_sha(data: bytes) -> str:
    return hashlib.sha1(b"blob %d\0" % len(data) + data).hexdigest()


def fetch_files() -> dict[str, bytes]:
    """Each file of the pinned commit that may hold an event, by its path."""
    request = urllib.request.Request(TARBALL, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=120) as response:
        body = response.read(MAX_BYTES + 1)
    if len(body) > MAX_BYTES:
        raise SystemExit("the tarball is larger than expected")
    found = {}
    with tarfile.open(fileobj=io.BytesIO(body), mode="r:gz") as archive:
        for member in archive:
            if not member.isfile() or not member.name.endswith(SUFFIXES):
                continue
            if "/" not in member.name:
                continue
            if member.size > MAX_MEMBER_BYTES:
                raise SystemExit(f"{member.name} is larger than expected")
            path = member.name.split("/", 1)[1]
            data = archive.extractfile(member).read()
            if MARKER in data and path not in NOT_EVENTS:
                found[path] = data
    return found


def read_events(data: bytes) -> list[dict]:
    """A file holds one event, a list of them or one per line, and others hold none."""
    text = data.decode("utf-8", errors="replace")
    try:
        documents = json.loads(text)
    except json.JSONDecodeError:
        try:
            documents = [json.loads(line) for line in text.splitlines() if line.strip()]
        except json.JSONDecodeError:
            return []
    documents = [documents] if isinstance(documents, dict) else documents
    if not isinstance(documents, list):
        return []
    return [
        event for event in documents if isinstance(event, dict) and "class_uid" in event
    ]


def leaves(error):
    """The failures under an anyOf, leaving out the null branch of an optional value."""
    if not error.context:
        return [error]
    branches = collections.defaultdict(list)
    for sub in error.context:
        branches[sub.schema_path[0]].append(sub)
    found = []
    for subs in branches.values():
        if any(s.validator == "type" and s.validator_value == "null" for s in subs):
            continue
        for sub in subs:
            found += leaves(sub)
    return found or [error]


def our_verdict(event: dict, definitions: dict, checkers: dict) -> dict:
    class_name = class_of(event)
    schema_errors = []
    if class_name:
        if class_name not in checkers:
            checkers[class_name] = jsonschema.Draft202012Validator(
                {"$ref": f"#/$defs/{class_name}", "$defs": definitions}
            )
        schema_errors = list(checkers[class_name].iter_errors(event))
    errors, warnings = findings(event)
    return {
        "passes": not schema_errors and not errors,
        "regex_only": bool(schema_errors)
        and not errors
        and all(
            leaf.validator == "pattern" for e in schema_errors for leaf in leaves(e)
        ),
        "errors": collections.Counter(code for _, code, _ in errors),
        "warnings": collections.Counter(code for _, code, _ in warnings),
    }


def refresh(files: dict[str, bytes]) -> None:
    verdicts = {}
    for path, data in sorted(files.items()):
        events = []
        for event in read_events(data):
            request = urllib.request.Request(
                VALIDATOR,
                data=json.dumps(event).encode(),
                headers={"Content-Type": "application/json", "User-Agent": USER_AGENT},
            )
            with urllib.request.urlopen(request, timeout=60) as response:
                answer = json.load(response)
            events.append(
                {
                    "class_uid": event["class_uid"],
                    "errors": dict(
                        collections.Counter(
                            e["error"] for e in answer.get("errors", [])
                        )
                    ),
                    "warnings": dict(
                        collections.Counter(
                            w["warning"] for w in answer.get("warnings", [])
                        )
                    ),
                }
            )
        if events:
            verdicts[path] = {"blob": blob_sha(data), "events": events}
    VERDICTS.write_text(
        json.dumps(
            {"commit": COMMIT, "validator": VALIDATOR, "files": verdicts},
            indent=1,
            sort_keys=True,
        )
        + "\n",
        encoding="utf-8",
    )


def check(files: dict[str, bytes]) -> int:
    pinned = json.loads(VERDICTS.read_text(encoding="utf-8"))["files"]
    definitions = json.loads(COMMITTED.read_text(encoding="utf-8"))["$defs"]
    checkers: dict = {}
    problems = []
    tally: collections.Counter = collections.Counter()
    held = {path for path, data in files.items() if read_events(data)}
    if held != set(pinned):
        problems.append(f"the files differ: {sorted(held ^ set(pinned))}")
    for path in sorted(held & set(pinned)):
        if blob_sha(files[path]) != pinned[path]["blob"]:
            problems.append(f"{path} is not the pinned blob")
            continue
        for index, (event, theirs) in enumerate(
            zip(read_events(files[path]), pinned[path]["events"], strict=True)
        ):
            ours = our_verdict(event, definitions, checkers)
            tally["events"] += 1
            their_pass = not theirs["errors"]
            if ours["passes"] and their_pass:
                tally["both pass"] += 1
            elif not ours["passes"] and not their_pass:
                tally["both fail"] += 1
            elif ours["regex_only"] and their_pass:
                tally["fail here only on a regex OCSF warns about"] += 1
            else:
                problems.append(
                    f"{path}#{index}: here {ours['passes']}, OCSF {their_pass}"
                )
            for kind in ("errors", "warnings"):
                for code in set(ours[kind]) | set(theirs[kind]):
                    if code in SCHEMA_FINDINGS or code in REGEX_WARNINGS:
                        continue
                    if ours[kind][code] != theirs[kind].get(code, 0):
                        problems.append(
                            f"{path}#{index}: {code} {ours[kind][code]} here, {theirs[kind].get(code, 0)} at OCSF"
                        )
    for name, count in tally.most_common():
        print(f"{name}: {count}")
    for problem in problems:
        print(f"- {problem}")
    return 1 if problems or not tally["events"] else 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--refresh",
        action="store_true",
        help="Ask OCSF's validator again and rewrite the record",
    )
    args = parser.parse_args(argv)
    files = fetch_files()
    if args.refresh:
        refresh(files)
        return 0
    return check(files)


if __name__ == "__main__":
    sys.exit(main())
