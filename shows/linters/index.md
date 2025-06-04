---
marp: true
theme: don
headingDivider: 2
---
# Linters, validators, checkers
<!-- _class: title -->

Joost Farla - <j.farla@geonovum.nl>

Dimitri van Hees - <d.vanhees@geonovum.nl>

## Wat is een linter?

![lint](lint.png)

## Wat is een linter?

![clippy](clippy.png)

## Voordelen

- Leesbare en onderhoudbare code
- Objectieve beoordeling van code
- Minder discussie over stijlkeuzes
- Betere beveiliging en performance
- Educatie over kwaliteit van code

## Linter vs validator

--

## Checker

- OGC Checker
- OAS Checker

## Generieke checker

<https://geonovum-labs.github.io/ogc-checker/>
<https://developer-overheid-nl.github.io/oas-checker/>
<https://developer-overheid-nl.github.io/oas-generator/>

## Uitdagingen OGC checker

- landingpage/ogc discussie

## Spectral

- checkers obv spectral
- wat is spectral

## ADR Ruleset

- spectral
- in beheer bij Logius

## Spectral in CI/CD pipeline

## Spectral in CLI

```bash
npm install -g @stoplight/spectral-cli
spectral lint -r https://static.developer.overheid.nl/adr/ruleset.yaml $OAS_URL_OR_FILE
```

## Spectral in VSCode

```bash
# Install the extension from the vscode marketplace
$ code --install-extension stoplight.spectral

# Download the ruleset to your project home
$ curl -L https://static.developer.overheid.nl/adr/ruleset.yaml > .spectral.yml

# Run the IDE
$ code
```

## GitLab

```yaml
spectral-lint:
  image: node:20
  stage: spectral_lint
  script:
    - npm install -g @stoplight/spectral-cli
    - curl -L https://static.developer.overheid.nl/adr/ruleset.yaml > .spectral.yml
    - spectral lint -r .spectral.yml $OAS_URL_OR_FILE
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
      when: always
    - when: manual
```

## OGC conformsTo

- hoe werkt het

## Problemen OGC

## Landingpage

- ontwikkeling ADR

## Spectral test alleen spec

## Added features van de basislinter

- schema compatibility check

## custom functions

- spec of responses checken

## Roadmap

- Lostrekken in aparte NPM package
- APIficeren
- Andere editor
- LSP
