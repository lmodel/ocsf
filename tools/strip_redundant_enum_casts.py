#!/usr/bin/env python3
"""Repair LinkML-generated enum casts in the OCSF Python datamodel.

Workaround for the upstream LinkML bugs raised upstream. Two distinct breakages need fixing:

1. **Same-method duplicate** — when ``slot_usage`` refines an inherited slot's
   range to a more specific enum, ``gen-python`` emits TWO cast blocks in the
   leaf class's ``__post_init__`` (one to the bare base enum like
   ``StatusIdEnum``, one to the class-scoped one like ``FindingStatusIdEnum``).
   The bare base enum lacks the value, so its cast crashes with
   ``ValueError`` before the class-scoped cast can run.

2. **Inheritance-chain duplicate** — every class in the inheritance chain
   emits its own cast on the same attribute. Leaf → parent runs via
   ``super().__post_init__``; whichever block runs second receives a typed
   enum instance from the leaf and crashes inside ``EnumDefinitionImpl``
   with ``TypeError: cannot use ... as a dict key (unhashable type: ...)``.

This script applies two repairs in one pass:

A. Within each ``__post_init__``, when the same attribute is cast to multiple
   different enum classes, keep ONLY the most-specific cast (the class-scoped
   one, identifiable as not equal to ``<PascalSlotName>Enum``).
B. Rewrite the surviving cast guard to fire only on raw ``str`` input::

       if not isinstance(self.X, FooEnum):       →   if isinstance(self.X, str):
       if self.X is not None and ...                 if isinstance(self.X, str):

   This makes the cast a no-op once any earlier (subclass or same-method)
   cast has already typed the value.

Only enum casts (class names matching ``<Name>Enum``) are touched. Class
casts using ``Cls(**as_dict(...))`` and scalar casts (``TimestampT``,
``Bool``, ...) have idempotent constructors and don't suffer from these bugs.

Idempotent — re-running on the patched output is a no-op.

Usage:
    python tools/strip_redundant_enum_casts.py src/ocsf/datamodel/ocsf.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

# Boundaries used to scope per-method state.
CLASS_RE = re.compile(r"^class [A-Z][A-Za-z0-9_]*\(.*\):\s*$")
POSTINIT_RE = re.compile(r"^    def __post_init__\(")
SUPER_RE = re.compile(r"^        super\(\)\.__post_init__\(")

# Original required-slot guard (pre-patch shape).
GUARD_REQUIRED_RE = re.compile(
    r"^(?P<indent>        )if not isinstance\(self\.(?P<attr>[a-z_][a-z0-9_]*), "
    r"(?P<enum>[A-Z][A-Za-z0-9_]*Enum)\):\s*$"
)
# Original optional-slot guard (pre-patch shape).
GUARD_OPTIONAL_RE = re.compile(
    r"^(?P<indent>        )if self\.(?P<attr>[a-z_][a-z0-9_]*) is not None and "
    r"not isinstance\(self\.(?P=attr), (?P<enum>[A-Z][A-Za-z0-9_]*Enum)\):\s*$"
)
# Already-patched guard shape.
GUARD_PATCHED_RE = re.compile(
    r"^(?P<indent>        )if isinstance\(self\.(?P<attr>[a-z_][a-z0-9_]*), str\):\s*$"
)
# The follow-up assignment line.
ASSIGN_RE = re.compile(
    r"^            self\.(?P<attr>[a-z_][a-z0-9_]*) = "
    r"(?P<enum>[A-Z][A-Za-z0-9_]*Enum)\(self\.(?P=attr)\)\s*$"
)


def _pascal(slot: str) -> str:
    """activity_id -> ActivityId, type_id -> TypeId."""
    return "".join(p.capitalize() for p in slot.split("_"))


def _match_guard(line: str) -> tuple[str, str, str] | None:
    """Return (indent, attr, enum) for any recognised guard shape, else None."""
    for rx in (GUARD_REQUIRED_RE, GUARD_OPTIONAL_RE, GUARD_PATCHED_RE):
        m = rx.match(line)
        if m:
            attr = m.group("attr")
            enum = m.groupdict().get("enum")
            return (m.group("indent"), attr, enum or "")
    return None


def _scan_postinit_casts(lines: list[str], start: int, end: int) -> dict[str, list[int]]:
    """Find every enum cast 2-line block in lines[start:end].

    Returns ``{attr_name: [block_start_index, ...]}`` so callers can decide
    which casts to keep per attribute.
    """
    out: dict[str, list[int]] = {}
    i = start
    while i < end - 1:
        guard = _match_guard(lines[i])
        if guard is not None and guard[2]:  # need an enum name
            assign = ASSIGN_RE.match(lines[i + 1])
            if (
                assign
                and assign.group("attr") == guard[1]
                and assign.group("enum") == guard[2]
            ):
                out.setdefault(guard[1], []).append(i)
                i += 2
                continue
        i += 1
    return out


def _pick_kept_cast_index(block_starts: list[int], lines: list[str], attr: str) -> int:
    """Decide which of the duplicate casts on ``attr`` to keep.

    Heuristic: the class-scoped enum is NOT the bare ``<PascalSlot>Enum``.
    Keep the first non-bare cast; if all are bare (or all class-scoped),
    keep the last one in source order.
    """
    bare = f"{_pascal(attr)}Enum"
    non_bare = [
        bs for bs in block_starts
        if ASSIGN_RE.match(lines[bs + 1]).group("enum") != bare  # type: ignore[union-attr]
    ]
    return non_bare[0] if non_bare else block_starts[-1]


def repair(src: str) -> tuple[str, int, int]:
    """Apply both repairs. Returns (new_src, dropped_blocks, rewritten_guards)."""
    lines = src.splitlines(keepends=True)
    n = len(lines)

    # Pass 1 — for each __post_init__, mark which cast block lines to drop.
    dropped: set[int] = set()
    i = 0
    method_start: int | None = None
    while i < n:
        line = lines[i]
        if POSTINIT_RE.match(line):
            method_start = i + 1
        elif method_start is not None and (CLASS_RE.match(line) or SUPER_RE.match(line)):
            casts = _scan_postinit_casts(lines, method_start, i)
            for attr, block_starts in casts.items():
                if len(block_starts) <= 1:
                    continue
                keep = _pick_kept_cast_index(block_starts, lines, attr)
                for bs in block_starts:
                    if bs == keep:
                        continue
                    dropped.add(bs)
                    dropped.add(bs + 1)
                    # Trailing blank line that always follows a cast block.
                    if bs + 2 < n and lines[bs + 2].strip() == "":
                        dropped.add(bs + 2)
            method_start = None if CLASS_RE.match(line) else None
            if SUPER_RE.match(line):
                method_start = None
        i += 1

    # Pass 2 — emit, dropping marked lines and rewriting surviving guards.
    out: list[str] = []
    rewritten = 0
    i = 0
    while i < n:
        if i in dropped:
            i += 1
            continue
        line = lines[i]
        if i + 1 < n:
            guard = _match_guard(line)
            if guard is not None and guard[2]:
                assign = ASSIGN_RE.match(lines[i + 1])
                if (
                    assign
                    and assign.group("attr") == guard[1]
                    and assign.group("enum") == guard[2]
                ):
                    indent, attr, _ = guard
                    new_guard = f"{indent}if isinstance(self.{attr}, str):\n"
                    if line != new_guard:
                        rewritten += 1
                    out.append(new_guard)
                    out.append(lines[i + 1])
                    i += 2
                    continue
        out.append(line)
        i += 1

    return "".join(out), len(dropped) // 3, rewritten  # rough block count


def main() -> int:
    if len(sys.argv) != 2:
        print(f"usage: {sys.argv[0]} <path/to/ocsf.py>", file=sys.stderr)
        return 1
    path = Path(sys.argv[1])
    src = path.read_text()
    new_src, dropped, rewritten = repair(src)
    if new_src == src:
        print(f"strip_redundant_enum_casts: nothing to repair in {path}")
        return 0
    path.write_text(new_src)
    print(
        f"strip_redundant_enum_casts: dropped {dropped} duplicate cast block(s), "
        f"rewrote {rewritten} guard(s) to str-only in {path}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
