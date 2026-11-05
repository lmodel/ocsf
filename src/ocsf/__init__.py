"""ocsf.

Open Cybersecurity Schema Framework (OCSF) 1.9.0 (LinkML)
"""

try:
    from ocsf._version import __version__, __version_tuple__
except ImportError:  # pragma: no cover
    __version__ = "0.0.0"
    __version_tuple__ = (0, 0, 0)
