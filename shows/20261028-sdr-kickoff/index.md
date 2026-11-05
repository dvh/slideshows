---
marp: true
theme: don
headingDivider: 2
paginate: true
title: Kickoff werkgroep Schema Design Rules
---

# Kickoff werkgroep Schema Design Rules
<!-- _class: title -->


<!--
Totaal 2 uur 50, max 3 uur
- Iemand in de zaal bewaakt de Teams-chat
- Whiteboard: parkeerplaats voor zijpaden
- Uitloop: eerst Sourcemeta schrappen, wordt huiswerk
-->

## Agenda

1. Kennismaking
2. Waarom schemaregisters en schema design rules
3. Koffiepauze (10 min)
4. Doel, eerste versie en afbakening met de ADR
5. Regels ter inspiratie
6. Koffiepauze (10 min)
7. Naamgeving, casing en versionering
8. Casus: varianten op dezelfde structuur
9. Werkwijze en planning

<!--
- Ontbreekt er iets? Naar de parkeerplaats
-->

## Welkom en kennismaking

- Wie ben je?
- Waar werk je met schema's?
- Wat wil je uit deze werkgroep halen?

<!--
0:00 tot 0:15 (15 min)
- Online deelnemers eerst
- Verwachtingen op Whiteboard
-->

## Waarom een schemaregister

- Vindbaar: weten wat er al bestaat
- Hergebruik in plaats van opnieuw definiëren
- Stabiele URL's om naar te verwijzen met `$ref`
- Eén plek voor versies en wijzigingen
- Zicht op afhankelijkheden en impact van wijzigingen
- Centraal toetsen aan regels

<!--
0:15 tot 0:20 (5 min)
- Register maakt hergebruik mogelijk
- Zonder afspraken groeien de varianten mee
-->

## Voorbeelden

- [DVLA](https://dvla.github.io/posts/2022-10-working-with-json-schema/): blog over schema's en hergebruik
- [Sourcemeta](https://schemas.sourcemeta.com/)
- [Gemeente Amsterdam](https://schemas.data.amsterdam.nl/)
- [schema.gov.it](https://schema.gov.it/)
- [schemas.developer.overheid.nl](https://schemas.don.projects.digilab.network/)

<!--
0:20 tot 0:40 (20 min)
- DVLA: register offline, blog laat werkwijze zien
- schema.gov.it: nu onbereikbaar, alleen noemen
- Amsterdam (ca. 10 min): onvoorbereid, dus interview
  - Waarom een catalogus?
  - Welke afspraken wel, welke hadden jullie eerder gewild?
  - Hergebruik en varianten?
  - Live laten zien mag, hoeft niet
- Lessons learned op Whiteboard
- developer.overheid.nl als laatste (ca. 5 min): wildgroei laten zien, nog geen oplossingen
-->

## Waarom schema design rules: breder dan OpenAPI

- OpenAPI en AsyncAPI
  - OAS 3.1 verplichte standaard per 1 januari 2027
- Validators
- Generators: TypeScript-types, classes, formulieren, documentatie
- AI: genereren van code en data
- AI: valideren van output
- Eenduidige schema's maken dit betrouwbaar
- Extensies overheidsbreed standaardiseren

<!--
0:40 tot 0:45 (5 min)
- Register laat zien wat er gebeurt zonder afspraken
- OAS 3.1 verplicht per 1 januari, gebruikt volledig JSON Schema 2020-12
- Inconsistenties komen terug in alles wat je genereert
- AI: eenduidiger schema, betere output en toetsing
- govschema.org: geen overheid, opstartfase, teken van de richting
- Extensies: alleen via de SDR overheidsbreed te standaardiseren
- Afsluiter: regels op schemaniveau, los van het type API
-->

## Demo x-jsonld: extensies op schema's

- Werk van de Italiaanse collega's: [schema-editor](https://teamdigitale.github.io/dati-semantic-schema-editor/latest/)
- `x-jsonld` koppelt velden aan begrippen
- JSON Schema blijft JSON Schema
- Meer extensies te verwachten, ook eigen
- Hoe heten ze en waar leggen we ze vast?

<!--
0:45 tot 0:55 (10 min)
- Uitwerking van het extensiepunt
- Afspraak nodig: naamgeving en vastlegging van extensies
- Brug naar informatiemodel- en linked-datawereld
- Inhoud x-jsonld: latere sessie
-->

## Koffiepauze
<!-- _class: title -->

<!--
0:55 tot 1:05 (10 min)
- Online deelnemers: hoe laat verder?
-->

## Doel en eerste versie

- Doel: bevestigen
- Eerste versie: klein, toetsbaar, ADR-werkwijze
- Kandidaat-onderwerpen ophalen, nog niet kiezen
- Wie missen we nog?

<!--
1:05 tot 1:25 (20 min), samen met de ADR-slide
- Doel is helder, kort bevestigen
- Hoe de eerste versie eruitziet, niet wat erin staat
- Kandidaten: casing, naamgeving, versionering, extensies, Sourcemeta-regels
- Hardop zeggen: keuze volgt als er meer mensen zijn aangesloten
- Wie missen we: o.a. informatiemodel- en linked-datawereld
-->

## Afbakening met de API Design Rules

- Welke onderwerpen verhuizen naar de schema design rules?
- Welke blijven bij de ADR?
- Eerste kandidaat: property casing

<!--
- ADR-maintainer licht toe wat er al besproken is
- Doel: eerste lijst verhuizen en blijven
-->

## Regels van Sourcemeta One
<!-- _class: title -->

## Annotaties en voorbeelden

<style scoped>table { font-size: 0.5em; }</style>

| Regel | Omschrijving |
|-------|--------------|
| `top_level_title` | Beknopte title op topniveau |
| `top_level_description` | Description op topniveau |
| `top_level_examples` | Examples op topniveau |
| `valid_examples` | Examples valideren tegen het schema |
| `valid_default` | Default valideert tegen het schema |
| `duplicate_examples` | Geen dubbele examples |
| `title_description_equal` | Title en description niet gelijk |
| `title_trailing_period` | Geen punt aan het eind van een title |
| `description_trailing_period` | Geen punt aan het eind van een description |
| `title_trim` | Geen witruimte rond een title |
| `description_trim` | Geen witruimte rond een description |
| `comment_trim` | Geen witruimte rond een comment |

<!--
1:25 tot 1:45 (20 min) voor 46 regels, tempo houden
- Doorlopen, niet indelen
- Reacties op Whiteboard, discussies naar de parkeerplaats
- Trailing period: snel parkeren
-->

## Sourcemeta One: interoperabiliteit en hergebruik

<style scoped>table { font-size: 0.5em; }</style>

| Regel | Omschrijving |
|-------|--------------|
| `invalid_external_ref` | Externe `$ref` moet resolven |
| `definitions_to_defs` | `$defs` in plaats van `definitions` |
| `unnecessary_allof_ref_wrapper_modern` | Geen `allOf` om een `$ref` (2019-09 en later) |
| `unnecessary_allof_wrapper` | Niet-conflicterende keywords uit `allOf` halen |
| `unnecessary_extends_wrapper` | Niet-conflicterende keywords uit `extends` halen |
| `simple_properties_identifiers` | Propertynamen te mappen naar programmeertalen |
| `portable_anchor_names` | Anchors binnen veilige tekenset |
| `pattern_non_ecma_regex` | `pattern` alleen in ECMA-262 |
| `pattern_properties_non_ecma_regex` | Keys van `patternProperties` alleen in ECMA-262 |
| `unknown_format_prefix` | Alleen `format`-waarden uit de specificatie |

<!--
- simple_properties_identifiers: opstap naar casing
- unnecessary_allof_ref_wrapper_modern: opstap naar de casus
-->

## Sourcemeta One: tegenstrijdig of onvervulbaar

<style scoped>table { font-size: 0.5em; }</style>

| Regel | Omschrijving |
|-------|--------------|
| `conflicting_readonly_writeonly` | Niet tegelijk `readOnly` en `writeOnly` |
| `const_not_in_enum` | Niet tegelijk `const` en `enum` |
| `forbid_empty_enum` | Geen lege `enum` |
| `enum_to_const` | `enum` met één waarde wordt `const` |
| `equal_numeric_bounds_to_const` | Gelijke `minimum` en `maximum` wordt `const` |
| `incoherent_min_max_contains` | `minContains` niet groter dan `maxContains` |
| `unsatisfiable_max_contains` | `maxContains` boven de arraygrens is zinloos |
| `unsatisfiable_min_properties` | `minProperties` onder aantal `required` is zinloos |

<!--
- Fouten en verwarrende constructies, snel doorheen
-->

## Sourcemeta One: overbodige constraints

<style scoped>table { font-size: 0.5em; }</style>

| Regel | Omschrijving |
|-------|--------------|
| `properties_default` | Lege `properties` |
| `pattern_properties_default` | Lege `patternProperties` |
| `property_names_default` | Lege `propertyNames` |
| `property_names_type_default` | `type: string` in `propertyNames` |
| `items_array_default` | Lege array als `items` |
| `items_schema_default` | `true` als `items` |
| `unevaluated_items_default` | `true` als `unevaluatedItems` |
| `unevaluated_properties_default` | `true` als `unevaluatedProperties` |

<!--
- Opruimregels, snel doorheen
-->

## Sourcemeta One: overbodige constraints

<style scoped>table { font-size: 0.5em; }</style>

| Regel | Omschrijving |
|-------|--------------|
| `content_schema_default` | `true` als `contentSchema` |
| `dependencies_default` | Lege `dependencies` |
| `dependent_required_default` | Lege `dependentRequired` |
| `disallow_default` | Lege array als `disallow` |
| `divisible_by_default` | `divisibleBy: 1` |
| `multiple_of_default` | `multipleOf: 1` |
| `then_empty` | Leeg schema als `then` |
| `else_empty` | Leeg schema als `else` |

<!--
- disallow, divisibleBy, dependencies: oude drafts
- Triage per regel is huiswerk
-->

## Koffiepauze
<!-- _class: title -->

<!--
1:45 tot 1:55 (10 min)
- Sourcemeta uitgelopen? Rest zelf laten doorlezen
-->

## Naamgeving, casing en versionering

- Property casing
- Naamgeving van schemabestanden
- Naamgeving van extensies
- Versionering in het register

<!--
1:55 tot 2:15 (20 min)
- Begin met casing, daar ligt voorwerk
- Standpunten en open vragen verzamelen, nog geen besluiten
-->

## Casus: kleine afwijkingen op dezelfde structuur

Eén GeoJSON Polygon, honderden varianten in het register

- Lokaal schema met `allOf`?
- `$ref` met eigen annotaties?
- OpenAPI overlays?
- Iets anders?

<!--
2:15 tot 2:35 (20 min)
- Groep eerst zelf opties laten noemen
- Structuur versus annotaties
- 2020-12 en OAS 3.1: annotaties naast `$ref` mogen, zonder allOf
- Overlays werken alleen op OpenAPI-documenten
-->

## Werkwijze en planning

- Voorstel: zelfde werkwijze en publicatie als de API Design Rules
- Frequentie en rollen
- Voorbereiding kandidaat-onderwerpen, met eigenaar
- Wie benadert wie om aan te sluiten
- Volgende sessie

<!--
2:35 tot 2:50 (15 min)
- Begin met voorstel ADR-werkwijze, toets bij maintainer, aftikken
- Restant is buffer
- Elk actiepunt: eigenaar en datum
- Huiswerk: Sourcemeta-triage, eventueel JSON-LD-sessie
-->
