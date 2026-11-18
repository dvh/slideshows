---
marp: true
theme: don_main
headingDivider: 2
header: " "
footer: "![width:250px](../../themes/logo.png)"
lang: nl
targetAudience:
  "Not so technical folks. Interested in AI and its benefits for building software out in the open."
invite: "Graag nodig ik jullie uit voor een inspirerende kennissessie over open source werken binnen
  de overheid. Deze sessie sluit aan op ons maandoverleg I&A, de agenda staat nog niet vast maar de
  lunch is inbegrepen.

  Tijdens deze bijeenkomst neemt een spreker van Developer Overheid (Geonovum) ons mee in de wereld
  van open source, hergebruik en samenwerking binnen de publieke sector. We verkennen waarom steeds
  meer overheidsorganisaties kiezen voor open oplossingen en welke voordelen dit kan bieden op het
  gebied van innovatie, autonomie en samenwerking.

  De sessie is nadrukkelijk bedoeld voor een breed publiek. Technische voorkennis is niet nodig. We
  richten ons vooral op de praktijk: hoe werkt open source in de dagelijkse werkelijkheid van
  overheidsorganisaties en wat kunnen wij hiervan leren?

  Daarnaast zullen we enkele voorbeelden bespreken van initiatieven binnen onze eigen organisatie,
  zoals AI-toepassingen, lokaal hosten van AI-oplossingen, documentbeheer en andere ontwikkelingen
  waarbij open source en samenwerking een rol spelen.

  De definitieve agenda volgt later, maar reserveer deze afspraak alvast in je agenda als je
  geïnteresseerd bent in innovatie, AI, digitale autonomie, informatievoorziening, privacy,
  informatiebeveiliging of de toekomst van digitale samenwerking binnen de overheid.

  Met vriendelijke groet,"
---

<!-- _paginate: false -->

# Open Source als kans voor de veiligheidsregio's

<!-- _class:  invert  -->

<ul class="horizontal-list">
  <li>Tom Ootes & Jan Klopper</li>
  <li>tom@ootes.io</li>
  <li>Veiligheidsregio Drenthe</li>
  <li>19 november 2026</li>
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

## Over Tom

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

## Over Jan

<!-- _class: invert -->

<div class="two-columns">
  <ul>
    <li>Jan Klopper</li>
    <li>Developer.overheid.nl (2025)</li>
    <li>OpenKAT architect en maintainer.</li>
    <li>Security, Internet standaarden.</li>
  </ul>
  <div>
    <img src="./img/jan-klopper.webp" alt="Jan KLopper">
  </div>
</div>

<!--
Kort eerst iets over mijzelf.

Zo'n 25 jaar 'in het vak', en daar in alles gezien van hardware, netwerken
tot css en alles er tussen. De laatste paar jaar vooral in Crisis-ict rollen.
Architect en maintainer van OpenKAT bij MinVWS, daarna developer overheid in
de rol Implementatieadviseur internet standaarden, met een voorkeur voor 
security.
-->

## Agenda

<!-- _class: invert -->

1. Kort: developer.overheid.nl
2. Wat is open source?
3. Waarom nu: actualiteit, EU-strategie & digitale soevereiniteit
4. Digital Commons & andere redenen om open te werken
5. Hoe begin je: inkoop van producten (Nextcloud) en ontwikkeling
6. Software bouwen met AI: kansen, valkuilen & skills

##

<!-- _class: page-image-only -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./img/homepage.png)

## Open Source

![bg right:45% 92%](./img/open-source-cyclus.svg)

- De broncode is beschikbaar
- Iedereen kan bijdragen/ voorstellen doen
- Verzoeken doen tot wijzigingen van de code
- Investeringen komen terug bij alle stakeholders
- Gedeeld eigenaarschap

## Huidige ontwikkelingen

<!-- _class: invert -->

<div class="two-columns">
  <img src="./img/digid-overname.jpg" alt="Staatssecretaris verbiedt Amerikaanse overname van bedrijf achter DigiD">
  <img src="./img/nos-techbedrijven.jpg" alt="NOS: Techbedrijven deelden namen Nederlandse ambtenaren met VS">
</div>

## EU: Open Source Strategy (3 juni)

![bg right:45%](./img/eu-sovereignty-package.jpg)

- 2 miljard verdeeld over 7 jaar
- Investeringen in
  - Kritische open source projecten
  - Open Source startups
  - Kennisontwikkeling

## Als route naar digitale soevereiniteit

- Zelf leverancier kiezen
- Slim in grillige geopolitieke context
- Ook grote bedrijven steeds min stabiel (Office 365)

![bg right:40%](./img/bedankt_voor_het_volhouden.png)

## Proprietary: wat was ook alweer het probleem?

![bg right:30% 90%](./img/software-lock-in.svg)

<!-- _class: list-text-small -->

- Vendor lock-in
- Prijsstijgingen
- Geen invloed roadmap
- Geen code-portabiliteit
- Black-box (security, ook downstream)
- Diplomatiek (chantabel)
- Cloud act (data)

## Open source: hoe lost het dit op?

![bg right:40% 60%](./img/open-source-pakket.svg)

<!-- _class: list-text-small -->

- Vrij om zelf keuzes te maken
- Open source product = meerdere leveranciers
- Zelf bijdragen levert voor iedereen winst op
- Communities kunnen de code kopiëren zelf verdergaan
- Zelf hosten of bij leverancier
- In Europa

## “Digital Commons”

![bg right:40%](./img/bos.jpg)

- Vertaal als “Meente” van “Gemeente”
  - Een gemeenschappelijk stuk grond
- Metafoor van een bos
  - Onderhouden door de gemeenschap
  - Iedereen kan er gebruik van maken
- Voorbeelden: Wikipedia, PostgreSQL, Linux
- Geld blijft in Europa

## Vibe coden is als Eucalyptus planten

![alt text](./img/forestfire.png)

## Andere redenen open sourcen:

- WOO verplicht openbaren code
- Open, tenzij
- Public Money, Public Code

## Hoe te beginnen?

- Begin met afnemen van Open Source producten
- Begin ook met bijdragen aan bestaande projecten (QGIS)
- [https://oss.developer.overheid.nl](https://oss.developer.overheid.nl)

## Open Source inkoop; voorbeeld Nextcloud

<img src="./img/nextcloud-vs-microsoft.svg" alt="Gesloten product met één leverancier tegenover open source product (Nextcloud) met keuze uit meerdere leveranciers" class="img-centered" style="max-height: 420px;">

<!--
Voorbeeld Nextcloud als alternatief voor Microsoft 365: bestanden, agenda, chat/videobellen, samen bewerken.
Bij open source koop je geen licenties, maar dienstverlening: hosting, beheer, support, migratie.
Dezelfde software wordt door meerdere (Nederlandse) partijen aangeboden. Ontevreden? Wissel van leverancier, je data en software blijven.
Sluit aan op digitale soevereiniteit (eerdere slide).
-->

## Open Source, inkoop software ontwikkeling

- Bij offreren Open Source opgeven als eis
- Trekt vaak juist innovatieve partijen aan met lef, die trots zijn op hun code

## Waar helpt AI ons bij?

- Makkelijk wensen omzetten in software
- Snel leveren aan de praktijk
- Doorvragen; makkelijk leren van AI (als je wilt)
- Onafhankelijk worden van leveranciers door zelf bouwen

## Valkuilen

<!-- _class: invert -->

- Zonder instructies kiest AI zelf
- Je bouwt iets wat je niet kan onderhouden / niet begrijpt
- Gevoelige gegevens, persoonsgegevens of interne documenten
- AI zet makkelijk wachtwoorden of API-sleutels in de code
- Werkt in de demo, niet in productie
- Iedereen bouwt zijn eigen eilandje, er ontstaat wildgroei
- Wie is de eigenaar? Vanaf het begin intern bijhouden

## Wat AI niet vervangt

- Gebruikersonderzoek > UX-research > gewoon interviews afnemen
- Goede technische standaarden/ best practices
- Community building > andere veiligheidsregio's uitnodigen
- Kritisch nadenken en keuzes maken > nog steeds developers nodig (als architect)

## Advies

- Zet in op samen ontwikkelen/ community building
- Bouw aan de relaties
- Koop open source producten en support in
- Huur software-partijen in voor open ontwikkeling
- Draag kosten gezamenlijk als regio's

## Bedankt!

<!-- _class: invert grid-paper -->

<style scoped>
.meetup { position: absolute; right: 80px; top: 50%; transform: translateY(-50%); width: 340px; text-align: center; }
.meetup img { display: block; width: 300px; margin: 0 auto 16px; border-radius: 12px; }
.meetup p { margin: 0; font-size: 0.7em; line-height: 1.3; }
</style>

Vragen?

<!-- prettier-ignore -->
- Slides op [github.io](https://developer-overheid-nl.github.io/slideshows/shows/veiligheidsregio-drenthe)
- 📬 tom@ootes.io

<div class="meetup">
  <img src="./img/qr-meetup.svg" alt="QR-code naar de inschrijving voor de developer.overheid.nl meetup" />
  <p><strong>Schrijf je in voor onze meetup!</strong><br>Locatie: Utrecht</p>
</div>

<!--

Scan de QR-code om je in te schrijven voor de developer.overheid.nl meetup: https://opensourcewerken.nl/events/view/8dfe1365-3742-4832-8359-f2efed31126a/developeroverheidnl-meetup-samenbeterbouwen

-->
