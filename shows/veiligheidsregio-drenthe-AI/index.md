---
marp: true
theme: don_main
headingDivider: 2
header: " "
footer: "![width:250px](../../themes/logo.png)"
lang: nl
targetAudience:
  "Not so technical folks. Interested in AI and its benefits for building software out in the open."
---

<!-- _paginate: false -->

# Open Source developen met AI

<!-- _class:  invert  -->

<ul class="horizontal-list">
  <li>Tom Ootes</li>
  <li>tom@ootes.io</li>
  <li>Veiligheidsregio Drenthe</li>
  <li>Assen</li>
  <li>18 november 2026</li>
</ul>

<!--

- Leuk dat ik hier mag vertellen over DON
- Grapje dat ik hier aan de overkant van het kanaal woon
- Vertellen over alle inzichten van DON afgelopen jaren
- Mooie tools die hieruit voort zijn gekomen

De afgelopen jaren ben ik standaarden gaan zien als een manier van samenwerken,
van afspraken die je maakt als je bijvoorbeeld een API bouwt of een front-end.
Ik zie het als een manier voor onze overheid om eindelijk wat meer eenduidig te
developen, maar ook als een manier om instructies mee te geven aan LLM's zodat
coding agents niet uit de bocht vliegen. In die zin worden standaarden steeds
belangrijker.

-->

## Over mij

<!-- _class: invert -->

<div class="two-columns">
  <ul>
    <li>Tom Ootes</li>
    <li>Developer.overheid.nl (2023)</li>
    <li>Open Source, Developer Advocate</li>
    <li>Community, outreach</li>
    <li>Muzikant/ muziekliefhebber</li>
  </ul>
  <div>
    <img src="./img/tom.png" alt="Tom Ootes">
  </div>
</div>

<!--
Kort eerst iets over mijzelf.

Ik ben Tom, werk al sinds 2023 aan developer.overheid.nl. Als freelancer
veel verschillende overheidsprojecten gedaan. Vind het mooi om daaraan te
werken omdat we met developer.overheid.nl een gemeenschappelijk platform
hebben om developers op eenduidige manier software te laten bouwen.

Mijn rol is developer advocate wat betekent dat ik me verdiep in wat developers
nodig hebben om bijvoorbeeld compliant te kunnen worden aan een standaard.

-->

## Agenda

<!-- _class: invert -->

1. developer.overheid.nl & mijn verhaal bij VWS
2. Het overheidslandschap: eilandjes, maar dezelfde taken
3. Het antwoord: extreem bruikbare tooling
4. Pijler 1, open source: publiccode.yml & een skill
5. Pijler 2, open standaarden: API Design Rules & OAS-Checker
6. Pijler 3, Overheidsbrede services: code.overheid.nl
7. Oproep

##

<!-- _class: page-image-only -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./img/homepage.png)

## Waar helpt AI ons bij?

- Makkelijk wensen omzetten in software
- Als je iteratief werkt (veel demo's) snel testen
- Doorvragen; makkelijk leren van AI (als je wilt)
- Onafhankelijk worden van leveranciers

## Valkuilen

- Zonder instructies kiest AI zelf
- Je bouwt iets wat je niet kan onderhouden / niet begrijpt
- Gevoelige gegevens in de prompt, bijvoorbeeld persoonsgegevens of interne documenten
- AI zet makkelijk wachtwoorden of API-sleutels in de code
- Werkt in de demo, niet in productie
- Iedereen bouwt zijn eigen eilandje, er ontstaat wildgroei
- Wie is de eigenaar? Vanaf het begin intern bijhouden

## Wat AI niet vervangt

- Gebruikersonderzoek > UX-research > gewoon interviews afnemen
- Goede technische standaarden/ best practices
- Community building > andere veiligheidsregio's uitnodigen
- Kritisch nadenken en keuzes maken. AI geeft je opties, maar jij beslist wat verstandig is

## AI Skills

- Instructies
- Geïnstalleerd op je AI
- Geactiveerd bij een bepaalde trigger

## Voorbeeld skill

<!-- _class: invert code-editor -->

<style scoped>section { --code-editor-file: "SKILL.md"; --code-editor-status: "Markdown · Agent Skill"; }</style>

```md
---
name: set-programming-language
description: Wanneer je software bouwt, bijvoorbeeld web-apps of websites, gebruik dan deze stack.
---

Wanneer je een webtoepassing bouwt, gebruik dan altijd Python.

- Kies geen andere programmeertaal voor de backend.
- Twijfel je? Vraag het eerst na bij de gebruiker.
```

## Open Source!~

- AI heeft veel kansen
- Echte kansen liggen in samenwerking
