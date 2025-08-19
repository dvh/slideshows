---
marp: true
theme: don
headingDivider: 2
---
# Why further development on `publiccode.yml` is necessary to improve European cooperation

<!-- _class: title -->

<ul class="horizontal-list" style="margin-top: 3rem;">
  <li>Tom Ootes</li>
  <li>🐘 <a href="https://hostux.social/@tomootes">@tomootes</a></li>
  <li>Open Source Summit Europe</li>
  <li>27 August 2025</li>
</ul>

<!--
- So I know you guys have been in this situation:
- your product owner or manager comes up to you and your team and asks you to build a new solution
- These kind of situations always make me think
- We can save a lot money, and build better stuff!
- A new project arises within you organization and people start thinking about the UX, and so forth
- Or in a worst-case scenario, a manager starts talking about buying an off-the-shelf SAAS solution
- This kind of situations has always 
-->

# **whoami**

**Tom Ootes**
📩 <a href="mailto:tom@ootes.io">tom@ootes.io</a>

🧰 (Freelance) Developer Advocate @ **developer.overheid.nl**

🎸 Making music
🌳 Love biology


<!--
- Im am Tom Ootes
- I work as a freelancer in IT, as a developer
- Ive done a lot of projects for the Dutch Government as a freelancer
- During my work 
- As a developer advocate
- Besides this i have a band with which i like to play together
- I also really enjoy reading about biology, and i am a big fan of Alexander von Humboldt, the naturalist and explorer.
-->

## **About developer.overheid.nl**


- Developer portal
- OSS Catalogue
- API Catalogue
- Knowledge base


> I help developers within the Dutch government building quality applications


## **How did i get here?**

- 🧑‍💻 Working as freelance front-end dev
- 😷 Hired to work on the Dutch contact tracing software
- 📋 Big project to inform citizens / obtain data
- ⚕️ Dutch Ministry of Health

### Am I missing something?
- 👌🏻 Cool project
- 🤏🏻 One thing

## Very little documentation!
<!-- _class: title -->

<!--
- We are a team that is building a developer portal for the whole Dutch government
- We do so by working on a couple of products
- OSS Catalogue > has been around for five years now. 
  - This presentation is about how we want to refactor this catalogue, based on publiccode.yml
- API Catalogue > gov orgs can add their API here
- Knowledgebase with articles on for example how to become Double-U-Cee-A-Gee compliant
-- We also have tutorials en tools, for example on how to install and use the Dutch gov Design System.
-->


<p style="text-align: center; font-size: 3rem;">👹</p>

**How should I:**
- Write code?
- Assess OS libraries?
- Interpret policies?
- Co-operate?


## What if I had this?
<!-- _class: title -->

<p style="text-align: center; font-size: 3rem;">💭</p>

**We would have:**
- Code convergency
- Less tech debt
- Community
- Easier cooperation


## Tadaaaaaaaaaaa: developer.overheid.nl
<!-- _class: title -->

<p style="text-align: center; font-size: 3rem;">🌈</p>


### 


<!--
- I have been working as a freelance developer for almost 10 years now
- Doing mostly projects for Dutch government organizations
- During the Covid Crisis i was hired to work on the software for Contact-tracing covid cases within The Netherlands.
- The goal of the product was to inform citizens on their infection and give them behavioural instructions
- Another goal was to obtain data on local outbreaks to base policy decisions on.
-->



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
