---
marp: true
theme: don
transition: wipe
headingDivider: 2
---

# API-ontwikkelingen bij de overheid en implementatie-ondersteuning

<!-- _class: title -->

Joost Farla
<j.farla@geonovum.nl>

Dimitri van Hees
<d.vanhees@geonovum.nl>

## API-ontwikkelingen

<!-- _class: title -->

## Kennisplatform API's

- Platform voor kennisuitwisseling en standaardisatie
- Werkgroepen voor specifieke onderwerpen
- Periodiek bijeenkomsten
  - Speciale editie: woensdag 5 november 2025 (EDSN, Amersfoort)
  - Aanmelden: https://www.formdesk.com/geonovum/API2025

## NL API Design Rules (ADR)

- Standaard conventies voor (RESTful) API's
- Op de **pas-toe-of-leg-uit lijst** van Forum Standaardisatie
- In beheer bij Logius
- Modulaire opzet

## Federatieve Service Connectivity (FSC)

- Standaard voor veilige en uniforme gegevensuitwisseling tussen organisaties
- Wederzijdse verificatie via digitale contracten
- Toegangsbeheer en delegatie
- Uniforme logging
- Onderdeel van Digikoppeling REST API profiel

## Federatieve Toegangsverlening (FTV)

- Externalized Authorization Management (EAM)
- Scheiding tussen techniel en beleid (toegangsregels)
- Uniforme logging van toegangsbeslissingen
- NL profiel voor AuthZEN

## Gemeenschappelijke Bronontsluiting

- Samenhang tussen API's, OOTS, EUDI wallet, etc.
- Standaardisatie voor (burger-)consent
- Oplossing voor scraping

## Implementatie-ondersteuning

<!-- _class: title -->

## Implementatie-ondersteuning

Wat we kunnen bieden:

- Toepassing van federatieve architectuurprincipes
- Begeleiding bij de implementatie van standaarden
- Ondersteuning bij casussen en architectuurvraagstukken

## Implementatie-ondersteuning

Wat we willen bereiken:

- Het gebruik van standaarden vergemakkelijken
- Duidelijke richtlijnen bieden voor het implementeren van standaarden
- Knelpunten in standaarden identificeren en adresseren
- Kennis borgen

## Implementatieondersteuning (team)

- Joost Farla (architect)
- Martin van der Plas (architect)
- Frank Terpstra (expert standaarden)

Contact? Mail naar api@geonovum.nl

## developer.overheid.nl

<!-- _class: title -->


## Developer portal

- "A developer portal provides a central place for developers to discover and use services."
- "To be clear, **it's not simply an API catalog**. It comprises more than a list of API specs and documentation."
- "It's a **central place for developers to go and learn** about the systems that they work on and interact with."
- "It provides **self-service tools** to get devs integrated quickly and easily."
- "And it gives folks **a place to go when they have questions**."

https://www.opslevel.com/resources/developer-portals-what-are-they-and-why-do-you-need-them

## developer.overheid.nl
- Kennisbank
- Open Source register
- API register

## API register
<!-- _class: title -->

## Verplichte standaarden

- OpenAPI Specification (OAS)
- REST API Design Rules (ADR)

## OpenAPI-first

- Contact info (ADR 2.1)
- Environments (nog niet in ADR)
- Security (mTLS vanaf 3.1)
- Example(s) tbv mocking services en SDK's
- JSON schemas (vanaf 3.1)

## ADR Scores

- Op basis van generieke OAS checker ipv validator
- Hulp bij afwijkingen
- Representatiever want alleen REST

## Organisatie

- Identificatie o.b.v. credentials
- Gekoppeld aan TOOI (waar mogelijk)
- Uitzondering voor organisaties buiten ROO

## TOOI API

- Gemeente Utrecht: <https://identifier.overheid.nl/tooi/id/gemeente/gm0344>
- API resource: <https://api.standaarden.overheid.nl/v1/overheidsorganisaties/https%3A%2F%2Fidentifier.overheid.nl%2Ftooi%2Fid%2Fgemeente%2Fgm0344>
- Adressen: <https://api.standaarden.overheid.nl/v1/overheidsorganisaties/https%3A%2F%2Fidentifier.overheid.nl%2Ftooi%2Fid%2Fgemeente%2Fgm0344/adressen>
- Caching versus "Data bij de Bron"...

## Nieuwe aanleverprocedure

![aanleverprocedure](aanlevering.png)

## API verwijderen

- Contact opnemen om API te laten verwijderen
- Dit omdat een API niet zomaar "verwijderd" kan worden; dit is een lifecycle wijziging

## API Lifecycle
<!-- _class: title -->

## API Lifecycle "End-of-Life" phase

![end-of-life](end-of-life.png)

## Geen standaard, wél API register extensie

```yaml
openapi: 3.0.3
info:
  version: 1.2.3
  x-deprecated: 2025-10-10 # toekomst of verleden
  x-sunset: 2027-11-11     # altijd in de toekomst
```

## Abonneren op API

- Op de hoogte blijven van (lifecycle) wijzigingen
- Via RSS of Discourse
- Of "Ik gebruik deze API" via e-mail
- Ook voor providers fijn

## OAS 3.1 support

- Automatisch omzetten van OAS 3.0.x naar 3.1.0
- JSON Schema's extraheren
- Typescript types, Java classes etc. genereren

## Arazzo support

- Arazzo als functionele documentatie per API
- Arazzo als functionele documentatie per samenhangende API's (DSO)
- Visualisatie

## Schema register
<!-- _class: title -->

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

## Help mee

- Kennisbank artikelen
- Blogposts
- Interviews
- Pull requests
- Feature requests
- Ideeën

## Spread the word!

<!-- _class: title -->

## Op naar één centrale plek voor software development bij de overheid!

<!-- _class: title -->

- Bijdragen: <https://developer.overheid.nl/contributing>
- Mastodon: <https://social.overheid.nl/@developer>
- Slack: <https://codefornl.slack.com/archives/CFV4B3XE2>
- Github: <https://github.com/developer-overheid-nl>
- E-mail: <developer.overheid@geonovum.nl>
