---
marp: true
theme: don_main
headingDivider: 2
header: " "
footer: "![width:250px](../../themes/logo.png)"
lang: nl
---

# Open Source == Inner Source

<!-- _class: title invert -->

<ul class="horizontal-list" style="margin-top: 3rem;">
  <li>Tom Ootes</li>
  <li>Developer.overheid.nl</li>
  <li>DICTU Tech Festival</li>
  <li>25 juni 2026</li>
</ul>

## whoami

<!-- _class: invert -->

<div class="two-columns">
  <ul>
    <li>Tom Ootes</li>
    <li>Developer.overheid.nl (2023)</li>
    <li>Developer Advocate</li>
    <li>Community/ outreach</li>
    <li>Music/ indieweb-geek</li>
    <li>Lezen biologie</li>
  </ul>
  <div>
    <img src="./img/tom.jpg" alt="Tom Ootes">
  </div>
</div>

<!--
I'm Tom Ootes, I've been working for the developer portal of the Dutch government for a while now. I started out in 2023 as a front-end developer, currently I've got the role of developer advocate. Which means that I'm responsible for outreach and giving presentations.

I also love making music and I am somewhat of a indieweb geek so I for example love working on the website of my band.

In my spare time I love reading about biology and nature.
-->

## developer.overheid.nl

<!-- _class: page-image-only -->

![bg contain](./img/don-home.png)

## API-register

<!-- _class: page-image-only -->

![bg contain](./img/don-api-register.png)

## Open source-register

<!-- _class: page-image-only -->

![bg contain](./img/don-oss-register.png)

## Kennisbank

<!-- _class: page-image-only -->

![bg contain](./img/don-kennisbank.png)

## Blog

<!-- _class: page-image-only -->

![bg contain](./img/don-blog.png)

## Community

<!-- _class: page-image-only -->

![bg contain](./img/don-community.png)

## En events!

<!-- _class: title invert -->

## Agenda

<!-- _class: invert -->

1. Digitale Soevereiniteit: een recap
1. Proprietary software: waarom zo problematisch
1. Open source als oplossing
1. Inner source
1. Applicatie-laag
1. Cloud-laag
1. Conclusie

## Digitale soevereiniteit: actueel

![bg right:50%](./img/noodknop.jpg) ![bg](./img/icc.jpg)

<!--
The last 12 months the whole discussion around digital autonomy within the Netherlands has truly exploded. Specific public figures in the digital debate had been calling for action for years,
-->

## Huidige ontwikkelingen

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

## “Digital Commons”

![bg right:40%](./img/bos.jpg)

- Vertaal als “Meente” van “Gemeente”
  - Een gemeenschappelijk stuk grond
- Metafoor van een bos
  - Onderhouden door de gemeenschap
  - Iedereen kan er gebruik van maken
- Voorbeelden: Wikipedia, PostgreSQL, Linux

## Welke verschijningsvormen?

- Projecten/ componenten/ repositories
  - NL Design System
  - Gezamenlijke tools
- Open standaarden
- Services/ platforms
  - Code.overheid.nl
  - Hosting/ gezamenlijke kubernetes clusters

## Andere redenen open sourcen:

- WOO verplicht openbaren code
- Open, tenzij
- Public Money, Public Code

## Veel draagvlak; en noodzaak

<!-- _class: title invert -->

## DICTU doet het goed!

![bg right:30% 60%](./img/emoji-dictu.svg)

- Veel investeringen in Drupal community
- Cloud exit-strategie
- Toetsingsinstrument soevereiniteit
- Dedicated OSPO mensen!?

## Proprietary: wat was ook alweer het probleem?

![bg right:30% 60%](./img/emoji-proprietary.svg)

- Vendor lock-in
- Prijsstijgingen
- Geen invloed roadmap
- Geen code-portabiliteit
- Black-box (security, ook downstream)
- Diplomatiek (chantabel)
- Cloud act (data)

## Open source: hoe lost het dit op?

![bg right:30% 60%](./img/emoji-opensource.svg)

- Meerdere leveranciers
- Zelf contribueren
- Communities kunnen forken
- Inzichtelijke code
- Self hosted of bij leverancier
- In Europa

## Zonder inner source geen open source

<!-- _class: title invert -->

<p style="text-align: center;">Want geen hergebruik!</p>

## Inner source

- Tijd beschikbaar ontwikkeling gedeelde projecten
- Goede documentatie
- 20% regel?
- Cultuur van samenwerken, community building
- Hackathons/ kennisdelings-events
- Trek talent aan

## Suggestie! Inner source register

![bg right:60% contain](./img/don-oss-register.png)

## De applicatie-laag: waar wringt het?

<div class="two-columns">
  <div>

**Problemen**

- Geen portabiliteit
- Vendor lock-in
- Specifieke werkwijze/ soms geen git / nette versionering
- Black-box
- Eerlijk: geen open source alternatief voor low code

  </div>
  <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
    <img src="./img/mendix.png" alt="Mendix" style="width: 220px;">
    <img src="./img/oracle-apex.png" alt="Oracle APEX" style="width: 160px;">
    <img src="./img/outsystems.png" alt="OutSystems" style="width: 160px;">
  </div>
</div>

## De applicatie-laag: hoe beter?

<div class="two-columns">
  <div>

**Oplossing**

- Stap voor stap naar open source
- Landschap met API’s
- LLM’s: sneller leren, sneller bouwen
- Begin klein, bouw POC’s
- Organiseer hackathons

  </div>
  <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
    <img src="./img/mendix.png" alt="Mendix" style="width: 220px;">
    <img src="./img/oracle-apex.png" alt="Oracle APEX" style="width: 160px;">
    <img src="./img/outsystems.png" alt="OutSystems" style="width: 160px;">
  </div>
</div>

## Cloud/hyperscalers: waar wringt het?

<!-- _class: list-text-small -->

<div class="two-columns">
  <div>

**Problemen**

- Out-of-the-box services > aantrekkelijk
- Schaalt makkelijk > weinig optimalisatie
- Data niet veilig (cloud act)
- Diplomatiek (pressiemiddel)
- Kosten kunnen oplopen

**Oplossing**

- Vervang out-of-the-box services langzaam voor open source componenten
- Uiteindelijk naar gewone Kubernetes

  </div>
  <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
    <img src="./img/microsoft.png" alt="Microsoft" style="width: 130px;">
    <img src="./img/aws.png" alt="AWS" style="width: 130px;">
    <img src="./img/google-cloud.png" alt="Google Cloud" style="width: 130px;">
  </div>
</div>

## Haven+!

![bg right:60% contain](./img/haven-plus.png)

## Dus! Open source:

- Bereik je door cultuurverandering
- Stap voor stap andere keuzes maken
- Is avontuurlijker en leerzamer, leidt ook tot technologische vrijheid.
- En onthoud; we hebben momentum!

## Dankjewel!

<!-- _class: title invert -->

Vragen? Let's stay in touch

<ul class="horizontal-list" style="margin-top: 3rem;">
  <li>📩 <a href="mailto:tom@ootes.io">tom@ootes.io</a></li>
  <li>🐘 <a href="https://social.codefor.nl/@tomootes">@tomootes</a></li>
  <li>📑 <a href="https://ootes.io">ootes.io</a></li>
</ul>
