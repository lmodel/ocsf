---
type: Policy
id: https://w3id.org/lmodel/ocsf/knowledge/policies/license-and-attribution
genre: reference
title: Licence and attribution
description: "Whose work each part is: the code and the schema under Apache-2.0, the bundle under CC BY 4.0, OCSF's text under its own Apache-2.0 with its NOTICE kept, and no copy of ocsf/examples, which states no licence. No endorsement by the OCSF project is implied."
resource: NOTICE
references:
  - https://w3id.org/lmodel/ocsf/knowledge/references/ocsf-schema
sources:
  - id: notice
    resource: NOTICE
  - id: readme.md
    resource: README.md
    title: License
  - resource: LICENSE
generated:
  by: process:ktl-librarian
  at: "2026-11-04T23:20:36Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# Licence and attribution

The code in this repository is under the Apache License 2.0.[^notice] The knowledge bundle is under CC BY 4.0.[^readme.md]

`upstream/ocsf-schema/` holds the tag's files with OCSF's LICENSE and NOTICE, and the schema's captions and descriptions are copied from there.[^notice]

ocsf/examples states no licence, so no event of it is copied here.[^notice]

The project implies no endorsement by the OCSF project.[^readme.md]

[^notice]: NOTICE
[^readme.md]: README.md, License
