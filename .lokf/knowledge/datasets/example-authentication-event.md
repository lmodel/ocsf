---
type: OcsfAuthentication
id: https://w3id.org/lmodel/ocsf/knowledge/datasets/example-authentication-event
genre: reference
title: A logon over SSH
description: An authentication event written as a concept of type `OcsfAuthentication` in the adapt copy's keys. It shows that the domain schema admits an event as a concept, with its numbers as OCSF writes them.
resource: tests/data/valid/OcsfAuthentication-logon.yaml
derivedFrom:
  - https://w3id.org/lmodel/ocsf/knowledge/datasets/example-data
sources:
  - id: readme.md
    resource: README.md
    title: the Knowledge Trust Ladder (KTL) section
  - id: ocsfauthentication-logon.yaml
    resource: tests/data/valid/OcsfAuthentication-logon.yaml
activity_id: 1
activity_name: Logon
auth_protocol: Other
auth_protocol_id: 99
category_name: Identity & Access Management
category_uid: 3
class_name: Authentication
class_uid: 3002
cloud:
  provider: AWS
  region: eu-west-1
device:
  hostname: bastion-01.example.com
  ip: 192.0.2.10
  ocsf_type: Server
  type_id: 1
dst_endpoint:
  hostname: bastion-01.example.com
  ip: 192.0.2.10
  port: 22
is_mfa: true
is_remote: true
logon_type: Remote Interactive
logon_type_id: 10
metadata:
  product:
    ocsf_name: OpenSSH
    vendor_name: OpenBSD
    ocsf_version: 9.6p1
  profiles:
    - cloud
    - host
  ocsf_version: 1.9.0
severity: Informational
severity_id: 1
src_endpoint:
  ip: 198.51.100.7
ocsf_status: Success
status_id: 1
time: 1793793600000
type_name: "Authentication: Logon"
type_uid: 300201
user:
  ocsf_name: analyst
  ocsf_type: User
  type_id: 1
  uid: "1001"
generated:
  by: process:ktl-librarian
  at: "2026-11-06T21:23:27Z"
status: draft
verified:
  - by: process:ktl-librarian
    at: "2026-11-05T01:45:03Z"
---

# A logon over SSH

This concept shows how a host writes an event in its bundle, in the adapt copy's keys. Its type is `OcsfAuthentication`, and `lokf validate` checks it against `.lokf/schema/ocsf.yaml`.[^readme.md]

`tests/data/valid/OcsfAuthentication-logon.yaml` holds its other keys, and a key LOKF also defines takes the `ocsf_` prefix.[^ocsfauthentication-logon.yaml]

[^readme.md]: README.md, the Knowledge Trust Ladder (KTL) section
[^ocsfauthentication-logon.yaml]: tests/data/valid/OcsfAuthentication-logon.yaml
