---
marp: true
theme: don
transition: wipe
headingDivider: 2
---

# How the Dutch Government uses an OpenAPI-first approach to leverage Developer Experience
<!-- _class: title -->

Dimitri van Hees
API Days Paris
December 11, 2025

## Introduction

## 2018

![ptlo](./2018.png)
<!-- _class: image -->

## Recap, italy, governance

## PTLO
<!-- _class: image -->
![ptlo](./ptolu.png)

## Data at the source instead of local copies

incidents with local copies

## Digital autonomy
<!-- _class: image -->
![alt text](./trump.webp)

## API Lifecycle: end-of-life

Api lifecycle: rfc, extension, date format, terminology, related versions
Versioning
Exploit info.version (weird decision)
Extensions x-deprecated, x-sunset
Not following rfc; again weird decision about date format
More important: DX low when you have to parse runtime headers; what about closed apis? Perhaps we'll do it both, but urge to fix this in openapi, along with the version!
Impossible to DELETE -> versioning
Github-style badges

## API Lifecycle

![end-of-life](./end-of-life.png)

## API register extensions

```yaml
openapi: 3.0.3
info:
  version: 1.2.3
  x-deprecated: 2025-10-10 # future or past
  x-sunset: 2027-11-11     # future
```

## How does it work

How does it work once we have an oas url, oas versions, notifications
V3.0 mandatory, v3.1 supports schema and mTLS. So we convert it to make schema reuse possible. To 3.1, 3.0. -> npm package
New api process
Code generation
Mocking
Sdks
Notification service

## API Design Rules (ADR)

Discussions about versioning, pagination. Body or header links? Toss a coin. Dont care HOW but that we do it all the SAME.
Better for generic tooling, saves discussion, and last but not least: if we find that it should have been different in a next version of the api design rules, we can all follow the same migration path and documentation; generic tooling stays intact when updated to next major version
- more rules

## ADR validation

Adr validation and benchmarking new rules like problemjson, dashboard ro monitor adaptation
Spectral ruleset


## OAS Checker.png
<!-- _class: image -->
![ptlo](./oaschecker.png)

## Howtofix.png
<!-- _class: image -->
![alt text](howtofix.png)

## Impact analyses for new rules
<!-- _class: title -->

## application/problem+json

```json
{
  "status": 400,
  "title": "Request validation failed",
  "errors": [{
    "in": "body", // body, query or header
    "location": "#/foo[0]/bar", // JSON pointer
    "code": "date.format",
    "detail": "Must be ISO 8601"
  }]
}
```

## Impact analyis for `application/problem+json`-rule

- 70% doesn't return `400` at all
- 15% (50% of 30%) doesn't return `application/problem+json`
- 12% (80% of 50% of 30%) doesn't return `errors` property
- 97% will fail this ADR

## HLA
<!-- _class: image -->
![ptlo](./hla.png)

## Tools API

- Convert OAS 3.0 to OAS 3.1
- Convert OAS 3.1 to OAS 3.0
- Validate OAS against ADR
- Bundle OAS to single file
- OAS to Postman collection
- Arazzo to Markdown
- Arazzo to Mermaid

## code.overheid.nl

Collab code.overheid.nl; mirror github/lab. Based on forgejo

## Arazzo support

- Arazzo support
- Usecase: dso
- Release after apidays; want to verify with arazzo folks
- Arazzo Tool inspired by lorna mitchell

## Arazzo.png
<!-- _class: image -->
![ptlo](./arazzo.png)

## Open Source Software (OSS) register
<!-- _class: title -->

## Publiccode.yml

- OAS for OSS projects in the public secotr
- Collab EU, italy, brussels



<!-- Feels like coming home, little recap
Api journy started 2012, first api days: last time i spoke here, openapi required, eu meeting (call from mehdi), decentralized -->
Call 2 years ago to bring portal to next level
Only instruments: 2 standards
Openapi and api design rules
Carrot (rewarding) instead of obliging 
Tools to help
DRY government (dikes), dont reinvent the wheel
The new api register
Oas first; wfs/wms
Ogc api![alt text](image.png)
Graphql not a standard (yet)


## Next steps

- Schema register (based on DVLA presentation last year)
- MCP rules