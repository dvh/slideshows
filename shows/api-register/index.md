---
marp: true
theme: don
transition: wipe
headingDivider: 2
---
# Het nieuwe API register
<!-- _class: title -->

Dimitri van Hees
<d.vanhees@geonovum.nl>

## Uitgangspunten

- REST-only
- OpenAPI-first
- API-first
- Open Source

## REST-only
<!-- _class: title -->

## Huidige API register

- REST/JSON (113)
- REST/XML (27)
- OData (4)
- WFS (3)
- WMS (1)
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## JSON/XML

- **REST/JSON (113)**
- **REST/XML (27)**
- OData (4)
- WFS (3)
- WMS (1)
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## OData

- **REST (140)**
- **OData (4)** = REST
- WFS (3)
- WMS (1)
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## Geo API's

- **REST (144)**
- **WFS (3)** ➔ OGC API = REST
- **WMS (1)** ➔ OGC API = REST
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## Overige API's (2,6%)

- **REST (148)**
- ~~GraphQL (1)~~
- ~~CKAN (1)~~
- ~~Atom (1)~~
- ~~Socrata (1)~~

## OpenAPI-first
<!-- _class: title -->

## OpenAPI Specification (OAS)

- Verplichte standaard
- REST API Design Rules (ADR)

## Uit te drukken in OAS

- Contactinformatie (`info.contact` vanaf ADR 2.1)
- Security schemes (`mTLS` vanaf OAS 3.1)
- Example(s vanaf OAS 3.1) voor mocking en code generatie
- Environments (`servers`-array, nog niet in ADR)

## Niet in OAS

- SLA info (KPA werkgroep)
- Thema's (TOOI)
- Organisatie
- Code repository
- API lifecycle info

## Organisatie

- Hard gekoppeld aan Register van Overheidsorganisaties (ROO)
- Via eigen API die content dupliceert
- Gouden API winnaar "SURF" staat niet in ROO; API kan niet naar register

## Organisatie via Auth

## ADR Validator

## Aanleverprocedure

## Deprecation/sunset

## OpenAPI 3.1

## API scores

- Meta gegevens laten vallen
- TLS -> tonen bij ADR, dus nog maar één score
- Validator draaien bij wijziging of toevoeging OAS

## Extra features

- Embedded Discourse comments in eigen tab
- Mocking data, SDK’s, Bruno collections, etc.
- WCAG compatible “ReDoc”?
- Views beschikbaar als webcomponent zodat bijv. PDOK het ook kan gebruiken
