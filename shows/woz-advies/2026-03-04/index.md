---
marp: true
theme: don
paginate: true
---

<!-- _class: title -->

# Modernisering gegevensaanlevering LV-WOZ

Status-update adviesrapport

**Kennisborging en implementatieondersteuning** · Geonovum · 4 maart 2026

---

## Aanleiding en scope

- Kadaster bereidt vernieuwing LV-WOZ voor
- ebMS2 en StUF zijn end-of-life
- Advies over modernisering koppelvlak gemeenten <-> LV-WOZ
- Fase 1 (afgerond): analyse huidige situatie, knelpunten, perspectieven
- Fase 2 (in voorbereiding): oplossingsrichtingen

---

## Geïdentificeerde knelpunten

| Thema                        | Kernprobleem                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Complexiteit standaarden** | ebMS2/StUF zijn erg complex en vereisen specialistische kennis; leidt tot uitbesteding aan intermediairs                 |
| **Rol van intermediairs**    | Tussenstations doorbreken end-to-end betrouwbaarheid, onweerlegbaarheid en foutafhandeling                               |
| **Historiemodel**            | LV synchroniseert bronhouder-formele historie die afnemers niet nodig hebben; LV-formele historie wordt niet bijgehouden |
| **Hybride architectuur**     | Event-driven intentie, maar synchronisatie-praktijk                                                                      |
| **Asynchrone verwerking**    | Geen directe terugkoppeling; foutmeldingen komen uren later en bereiken vaak niet de juiste plek                         |
| **Interpretatielast**        | Elke ketenpartner moet zelfstandig afleiden wat datamutaties betekenen                                                   |

---

## Twee perspectieven geanalyseerd

|                  | **ebMS3/AS4**                                                     | **REST API's**                                                                             |
| ---------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Aard**         | Onderhoudstransitie                                               | Architectuurtransitie                                                                      |
| **Lost op**      | Verouderd protocol, krimpende markt, EU-aansluiting               | MSH-complexiteit, toegankelijkheid, aansluiting bij moderne kaders                         |
| **Lost niet op** | MSH-complexiteit, StUF-problematiek, intermediair-afhankelijkheid | Betrouwbaarheid, bitemporele aanlevering, correctie-semantiek (nog niet gestandaardiseerd) |
| **Conclusie**    | Onderhoudstransitie; verandert de ketenstructuur niet             | Vereist domeinspecifieke standaardisatie                                                   |

Digikoppeling REST API profiel met FSC biedt een solide basis (authenticatie, toegangsbeheer,
logging, service discovery). De standaardisatie-opgave zit in de domeinspecifieke invulling.

---

## Vervolg

- Analysefase is afgerond; oplossingsrichtingen in voorbereiding
- Ontwerpuitgangspunten voor een REST-gebaseerd koppelvlak
- Afstemming met stakeholders
- Opstart Werkgroep Historie en Tijdreizen (Kennisplatform APIs)
- Bevindingen breder toepasbaar maken voor andere registraties in dezelfde transitie
