---
marp: true
theme: don
transition: wipe
headingDivider: 2
---
# developer.overheid.nl
<!-- _class: title -->

Dimitri van Hees
<d.vanhees@geonovum.nl>

## Organisatie

![organisatie](./organisatie.png)

## Kernteam

- Product Owner: Dimitri van Hees
- Developer Advocate: Tom Ootes
- Front-end: Jaap-Hein Wester
- Backend: Matthijs Hovestad

## Implementatieondersteuning

- Joost Farla (architect)
- Martin van der Plas (architect)
- Frank Terpstra (expert standaarden)

## Developer portal

- Kennisbank
- Communities
- Blog
- Tools
- Forum
- API register
- Open Source Software (OSS) register

## Homepage
<!-- _class: image -->

![homepage](./homepage.png)

## Release early, release often
<!-- _class: title -->

## Practice what you preach

- Front-end op basis van NL Design System
- Open Source
- API first

## Nieuwe features
<!-- _class: title -->

## Architectuur
<!-- _class: image -->

![architectuur](./architectuur.png)

## Implementatieondersteuning API's

![implementatieondersteuning](./implementatieondersteuning.png)

## Nieuwe ADR validator

- Compatible met nieuwe versie API Design Rules
- Valideert tegen OAS
- Accepteert afwijkende OAS locatie
- Betere resultaten in API dashboard

## Integratie communities

- Kennisplatform API’s
- Digilab
- OSPO-NL

## Known issues

- Homepage
- Informatiestructuur
- Toegankelijkheid
- Slack en Github

## API register
<!-- _class: title -->

## Focus op REST

- WMS/WFS -> OGC API = REST
- ODATA (4) = "REST"
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## OAS first (en hopelijk zsm 3.1)

- Contact info (ADR 2.1)
- Environments (nog niet in ADR)
- Security (mTLS vanaf 3.1)
- Example(s) tbv mocking services en SDK’s
- JSON schemas (vanaf 3.1)

## Nieuwe features API register

- Nieuwe aanleverprocedure ism Logius
- API lifecycle informatie; actuele versie, deprecation, uptime
- Verbeterde developer experience; functionele documentatie, tooling, mock data, SDK’s, Bruno collections, etc.
- Toegankelijke front-end obv NL Design System
- Filteren/zoeken
- Verbeterde contactinformatie
- Embedded Discourse comments

## Nieuwe aanleverprocedure

- POST met OAS locatie
- Wij checken dagelijks of er iets gewijzigd is (PUT om te forceren)
- Validator draait indien een API nieuw of gewijzigd is
- Feedback wordt teruggekoppeld naar contactinfo
- DELETE niet mogelijk; dit is een wijziging in lifecycle status

## TBD

- `servers` en `contact` optioneel meesturen
- Lifecycle info: <https://github.com/Geonovum/KP-APIs/issues/649>
- Aansluiten organisaties

## Ondersteuning upgrade OpenAPI 3.0 naar 3.1

- OpenAPI 3.1 is niet 100% backwards compatible
- Impactanalyse op basis van API register
- Linter “inversen”; kijken wat er breakt bij een upgrade
- Migratietutorial/tools

## Schema register
<!-- _class: title -->

## DVLA-1
<!-- _class: image -->
![dvla-1](./dvla.png)

## DVLA-2
<!-- _class: image -->
![dvla-2](./dvla2.png)

## schemas.developer.overheid.nl

- CORS policy
- Versiebeheer
- Zoeken
- API design; hergebruik en goede examples in docs

## openapi.yaml

```yaml
/apis/{id}:
  parameters:
    - $ref: "#/components/parameters/id"
  get:
    responses:
      "200":
        content:
          application/json:
            schema:
              $ref: "https://schemas.developer.overheid.nl/api.json"
```

## https:\/\/schemas.developer.overheid.nl/api.json

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
      "titel": {
          "type": "string"
      },
      "organisatie": {
        "type": "object",
        "properties": {
          "$ref": "https://schemas.standaarden.overheid.nl/tooi/organisatie.json"
        }
      }
  },
  "required": [
    "titel",
    "organisatie"
  ]
}
```

## https:\/\/schemas.standaarden.overheid.nl/tooi/organisatie.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "officieleNaam": {
      "type": "string"
    },
    "verkorteNaam": {
      "type": "string"
    },
    "uri": {
      "type": "string"
    },
    "adres": {
      "type": "object",
      "$ref": "https://schemas.developer.overheid.nl/adres.json" // enz.
    }
  }
}
```

## Overige features
<!-- _class: title -->

## Verbeteringen OSS Register

- Samenwerking Frankrijk, Italië en Brussel
- Publiccode.yaml
- Don't reinvent the wheel!

## Techradar
<!-- _class: image -->
![techradar](./techradar.png)

## Help mee

- Kennisbank artikelen
- Interviews
- Pull requests
- Feature requests
- Ideeën

## Op naar één centrale plek voor software development bij de overheid!
<!-- _class: title -->

- Bijdragen: <https://developer.overheid.nl/contributing>
- Mastodon: <https://social.overheid.nl/@developer>
- Slack: <https://codefornl.slack.com/archives/CFV4B3XE2>
- Github: <https://github.com/developer-overheid-nl>
- E-mail: <developer.overheid@geonovum.nl>
