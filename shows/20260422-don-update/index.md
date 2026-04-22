---
marp: true
theme: don
headingDivider: 2
---

# developer.overheid.nl update

<style scoped>
p {
  text-align: center;
}
</style>

*22 april 2026*
<!-- _class: title -->

## Welkom!
<!-- Tom -->

<style scoped>
img {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
</style>

![](./GithubProfile.svg)

- Open werken, zichtbaarheid, contributies, inspraak

## Kennisbank: herindeling hoofdthema's
<!-- Tom -->

<style scoped>
img {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>


![](./herindeling_hoofdthemas.png)

- Tags
- Extra ingang: `content_type` (frontmatter markdown)


##
<!-- Tom -->


![](./footer_bijdragen.png)


## Nieuw: kennisbank artikel aandragen
<!-- Tom -->
<style scoped>
img {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>

![](./kennisbank_artikel.png)


- Artikelen, blog, workflow

## Register-sites
<!-- _class: title -->

## Register-sites
<!-- Jaap-Hein -->

- Architectuur
  - [Astro](https://astro.build/): Structuur, routing, SSR/SSG, Markdown.
  - [Rijkshuisstijl community components](https://www.rijkshuisstijl-community.nl/): React component library op basis van NL Design System; [OpenAPI TypeScript](https://openapi-ts.dev/): Type declarations & fetch; [i18Next](https://www.i18next.com/): internationalization; [Biome](https://biomejs.dev/): formatting, linting and assist.
  - Monorepo; Aantal packages worden gepubliceerd op NPM.
- Register Site Template
  - https://github.com/developer-overheid-nl/register-site-template 
  - Alleen een front-end van de register sites om te clonen.
  - Maakt gebruik van de gepubliceerde packages.
- Hergebruik door DSO, Justid, RVO

---
<style scoped>
p {
  text-align: center;
  background: rgb(255,255,255,0.75);
  border: 1px solid #154273;
  border-radius: 5px;
}
</style>

![bg sepia:50%](./filters_oud.png)
![bg drop-shadow](./filters_nieuw.png)

[nieuwe filters](https://oss.developer.overheid.nl/)

## Changelogs
<!-- _class: title -->

## Changelogs
<!-- Matthijs -->

- Aanleiding
  - Meer hergebruik en open source betekent ook strakker versioneren en releasen.
- Onderzoek
  - Vergelijking van [Changesets](https://github.com/changesets/changesets) en [Changie](https://changie.dev/).
  - Beide tools helpen wijzigingen per app of package vast te leggen.
- Resultaat
  - Consistentere release-notes en een beter onderhoudbare `CHANGELOG.md`.
  - Voorbeeld: changelog per app, zoals bij `api-register`.
<!-- Voorbeeld: https://github.com/developer-overheid-nl/don-register-site/blob/main/apps/api-register/CHANGELOG.md -->

## Changelog voorbeeld

<style scoped>
img {
  display: block;
  margin: 10px auto 0 auto;
  max-height: 560px;
  border: 1px solid #d1d9e0;
}
p {
  text-align: center;
  color: #154273;
  font-size: 0.75em;
}
</style>

![w:620](./CHANGELOG.png)

`api-register`: changelog per app

## API's
<!-- _class: title -->

## API's
<!-- Matthijs -->

- Infrastructuur
  - APISIX - Keycloak - Open Policy Agent (OPA).
  - Autorisatielogica is uit custom APISIX plugin gehaald en als policy in OPA ondergebracht.
- Flow
  - Trusted client
  - Untrusted client
- Waarom
  - Minder maatwerk in APISIX.
  - Beter beheerbaar en toekomstvast.

---

- Volgende stap
  - APISIX-routing as code.
- API-key aanvragen
  - `Untrusted client`: via [key-aanvragen](https://apis.developer.overheid.nl/apis/key-aanvragen).
  - `Trusted client`: via [developer.overheid@geonovum.nl](mailto:developer.overheid@geonovum.nl) met contactgegevens en organisatie.

## Nieuwe checker
<!-- _class: title -->

## Nieuwe checker
<!-- Dimitri -->

- CLI  support, dus geen Spectral meer nodig:

```bash
npx @developer-overheid-nl/don-checker@latest \
validate \
--ruleset adr-21 \
--input https://api.developer.overheid.nl/api-register/v1/openapi.json
```

- YAML ↔ JSON tbv publiccode.yml, leesbaarheid OpenAPI Specs
- Verschillende versies binnen een standaard
- Results gegroepeerd per severity-level: error, warning, info, hint

## Severities
<!-- _class: image -->
<!-- Dimitri -->

![package](./checker_severities.png)

## NPM Packages
<!-- Dimitri -->

![package](./npm_package.png)

## JSON Schema register
<!-- _class: title -->

## JSON Schema register
<!-- Dimitri -->

- OpenAPI 3.1 komt eraan!
![ptolu](./ptolu.png)

- Herbruikbare JSON Schema's
- Herbruikbare OAS components

## Huidige work-in-progress

![package](./schemas_architectuur.png)

## Voorbeeld

```yaml
headers:
  API-Version:
    $ref: https://components.developer.overheid.nl/oas/adr/api-version.json
description: Bad request
content:
  application/problem+json:
    schema:
      $ref: https://schemas.developer.overheid.nl/adr/problem-json.json
```

## Vervolg

- Schema Design Rules
- JSON-LD koppeling voor semantiek
- Nieuwe werkgroep Kennisplatform API's: JSON Schema
- Meedoen: <d.vanhees@geonovum.nl>

## Publiccode.yml
<!-- _class: title -->

## Publiccode.yml
<!-- Tom -->

- Nieuwste versie
- Known issues
- Verbeteren dmv AI

## AI Skills
<!-- _class: title -->

## AI Skills
<!-- Tom -->

- Disclaimer
- Anthrophic standaard

## Save the date!
<!-- _class: title -->

## Fysieke bijeenkomst
<!-- Tom -->

- Woensdag 17 juni
- Beatrixtheater, Utrecht
- Demo's
- Roadmap tweede halfjaar
- 9 & 10 juni: FOST (fka API Days) Amsterdam
