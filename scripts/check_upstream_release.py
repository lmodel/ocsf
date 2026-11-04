#!/usr/bin/env python3
"""Check the OCSF copy against ocsf/ocsf-schema's releases.

Three things can go wrong with ``upstream/ocsf-schema/`` without any change in this
repository:

- the OCSF project releases a newer version of the framework, so the schema falls
  behind;
- the pinned tag is moved to another commit;
- the copied files drift from the files they were taken from.

The release, the commit its tag names and each copied file's git object hash are
pinned below and in ``upstream/ocsf-schema.blobs.tsv``. This script asks the GitHub
API for the latest release, the commit the pinned tag names and the repository's file
tree at the pinned commit and at the latest release, one listing each. It compares
every copied file with its blob by git object hash, so nothing is downloaded but
listings. It prints a Markdown report and exits 1 when a newer release is out, a
pinned file changed or is gone, a file differs, the pinned tag moved, or a check could
not finish. A file the OCSF project adds beside the pinned ones in the folders the
schema is written from is reported for information.

Set ``GITHUB_TOKEN`` to raise the API rate limit. Usage::

    python scripts/check_upstream_release.py [--report FILE]
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import urllib.error
import urllib.request
from functools import cache
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COPY = ROOT / "upstream" / "ocsf-schema"
BLOBS = ROOT / "upstream" / "ocsf-schema.blobs.tsv"
API = "https://api.github.com/repos/ocsf/ocsf-schema"
USER_AGENT = "lmodel-ocsf-upstream-check"

# The release and the commit its tag names. Move them together when the copy is
# replaced from a newer release, with the blob list and the schema header.
PINNED_TAG = "1.9.0"
PINNED_COMMIT = "856d462bd20dc46cc1ffed2dfffe3b91ef0fbeba"

# Each copied file, by its path in ocsf/ocsf-schema and in the copy, and its git object
# hash at PINNED_COMMIT. tests/test_upstream.py checks the hashes offline.
PINNED_BLOBS = dict(
    reversed(line.split()) for line in BLOBS.read_text(encoding="utf-8").splitlines()
)

# The folders whose new files are worth a reader's look.
WATCHED = ("events/", "objects/", "profiles/", "extensions/", "metaschema/")

# Files of those folders the copy leaves out on purpose: none. The tag's other files
# stay out of the copy because nothing reads them: the repository's workflow and editor
# settings, its contributing guide and its logo.
LEFT_OUT = re.compile(r"^$")


def _get(url: str) -> bytes:
    req = urllib.request.Request(
        url,
        headers={"Accept": "application/vnd.github+json", "User-Agent": USER_AGENT},
    )
    token = os.environ.get("GITHUB_TOKEN")
    if token and url.startswith(API):
        # urllib copies ordinary headers onto a redirect, so the token goes in
        # an unredirected one and reaches api.github.com alone.
        req.add_unredirected_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def _version_key(tag: str) -> tuple[int, ...]:
    """Numeric parts of a tag, padded so that v1.2 and v1.2.0 order alike."""
    parts = [int(x) for x in re.findall(r"\d+", tag)]
    return tuple(parts + [0] * (4 - len(parts)))


def _blob_sha(path: Path) -> str:
    """The git object hash of a file, as the trees API reports it."""
    data = path.read_bytes()
    return hashlib.sha1(b"blob %d\0" % len(data) + data).hexdigest()


@cache
def _tree(ref: str) -> dict[str, str]:
    """Every file of the repository at a ref, by path, with its object hash.
    A ref the repository does not hold gives an empty mapping. Each tree is
    asked for once, and no caller changes what it returns."""
    try:
        body = json.loads(_get(f"{API}/git/trees/{ref}?recursive=1"))
    except urllib.error.HTTPError as err:
        if err.code == 404:
            return {}
        raise
    if body.get("truncated"):
        raise OSError(f"the tree at {ref} is too large for one listing")
    return {e["path"]: e["sha"] for e in body.get("tree", []) if e["type"] == "blob"}


def _tag_commit(tag: str) -> str | None:
    """The commit a tag names, read through the tag object when the tag is an
    annotated one, or None when the repository has no such tag."""
    try:
        target = json.loads(_get(f"{API}/git/ref/tags/{tag}"))["object"]
    except urllib.error.HTTPError as err:
        if err.code == 404:
            return None
        raise
    while target["type"] == "tag":
        target = json.loads(_get(f"{API}/git/tags/{target['sha']}"))["object"]
    return target["sha"]


@cache
def _latest() -> str:
    """The tag of ocsf/ocsf-schema's latest release, asked once."""
    return json.loads(_get(f"{API}/releases/latest"))["tag_name"]


def _newer(tag: str) -> bool:
    return _version_key(tag) > _version_key(PINNED_TAG)


def _added(tree: dict[str, str]) -> list[str]:
    """The files of the watched folders that are neither copied nor left out
    on purpose."""
    return sorted(
        path
        for path in tree
        if path.startswith(WATCHED)
        and path not in PINNED_BLOBS
        and not LEFT_OUT.match(path)
    )


def check_release() -> tuple[list[str], bool]:
    """Report whether ocsf/ocsf-schema has a newer release than the pin."""
    latest = _latest()
    if _newer(latest):
        return [
            f"- **ocsf/ocsf-schema {latest} is out; the schema renders "
            f"{PINNED_TAG}.** Read its changelog, decide whether the schema moves to it, "
            "and replace the copy from that release."
        ], True
    return [f"- Latest release: {latest}, the pinned one."], False


def check_copy() -> tuple[list[str], bool]:
    """Report whether the pinned tag still names the pinned commit, whether
    the copy is the files pinned there, and whether a newer release changes
    or drops any of them."""
    report = [
        f"- Pinned release: ocsf/ocsf-schema {PINNED_TAG}, commit "
        f"`{PINNED_COMMIT[:12]}`, copied to `upstream/ocsf-schema/`.",
    ]
    attention = False

    commit = _tag_commit(PINNED_TAG)
    if commit != PINNED_COMMIT:
        attention = True
        named = f"commit `{commit[:12]}`" if commit else "nothing"
        report.append(
            f"- **The tag {PINNED_TAG} now names {named}, not the pinned commit "
            f"`{PINNED_COMMIT[:12]}`.** Find out why it moved before trusting either."
        )

    pinned_tree = _tree(PINNED_COMMIT)
    matching, differing = 0, []
    for name, pinned_sha in sorted(PINNED_BLOBS.items()):
        path = COPY / name
        if not path.is_file():
            differing.append(f"`{name}` is missing from the copy")
        elif pinned_tree.get(name) != pinned_sha:
            differing.append(
                f"`{name}` at commit `{PINNED_COMMIT[:12]}` is not the pinned blob"
            )
        elif _blob_sha(path) != pinned_sha:
            differing.append(f"`{name}` differs from its file at {PINNED_TAG}")
        else:
            matching += 1
    extra = sorted(
        p.relative_to(COPY).as_posix()
        for p in COPY.rglob("*")
        if p.is_file() and p.relative_to(COPY).as_posix() not in PINNED_BLOBS
    )
    differing += [f"`{name}` is in the copy but not pinned" for name in extra]
    report.append(
        f"- {matching} of {len(PINNED_BLOBS)} copied files match the pinned commit byte for byte."
    )
    if differing:
        attention = True
        report.append(f"- **{len(differing)} problem(s) with the copy:**")
        report += [f"  - {d}" for d in differing]
    added = {PINNED_TAG: _added(pinned_tree)}

    latest = _latest()
    if _newer(latest):
        latest_tree = _tree(latest)
        dropped = sorted(n for n in PINNED_BLOBS if n not in latest_tree)
        changed = sorted(
            n
            for n, sha in PINNED_BLOBS.items()
            if n in latest_tree and latest_tree[n] != sha
        )
        for name in dropped:
            attention = True
            report.append(
                f"- **ocsf/ocsf-schema {latest} no longer holds `{name}`.** Find "
                "where the OCSF project now publishes it, and move the pins."
            )
        for name in changed:
            attention = True
            report.append(
                f"- **ocsf/ocsf-schema {latest} changes `{name}`.** Replace "
                f"`upstream/ocsf-schema/{name}` with the file at that "
                f"tag (https://github.com/ocsf/ocsf-schema/blob/{latest}/{name}), "
                "move the pins, recompile, run `scripts/ocsf_to_linkml.py` and `just test`."
            )
        if not dropped and not changed:
            report.append(
                f"- Latest release: {latest}, which holds the pinned files unchanged."
            )
        added[latest] = _added(latest_tree)

    for ref, names in added.items():
        if names:
            report.append(
                f"- For information, ocsf/ocsf-schema at {ref} also holds "
                + ", ".join(f"`{n}`" for n in names)
                + ", which the copy neither holds nor leaves out on purpose."
            )
    return report, attention


# Each check, by the name the report gives it when it cannot finish.
CHECKS = (("release", check_release), ("copy", check_copy))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--report", type=Path, help="Also write the Markdown report to this file"
    )
    args = parser.parse_args(argv)
    lines, attention = [], False
    for label, check in CHECKS:
        try:
            found, needs = check()
        except (urllib.error.URLError, TimeoutError, OSError) as err:
            found, needs = [f"- **The {label} check could not finish: {err}.**"], True
        lines += found
        attention = attention or needs
    text = "\n".join(lines) + "\n"
    print(text, end="")
    if args.report:
        args.report.write_text(text, encoding="utf-8")
    return 1 if attention else 0


if __name__ == "__main__":
    sys.exit(main())
