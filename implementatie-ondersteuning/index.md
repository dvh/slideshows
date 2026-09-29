---
marp: true
theme: don
paginate: true
---

<script type="module" src="mermaid-init.js"></script>
<script src="alerts-init.js"></script>

<!-- _class: title -->

# Implementatie-ondersteuning

Van standaard naar werkende software

zoBouwenWijSoftwareBijDeOverheid · 16 december 2025

---

## 1600 overheidsorganisaties, 1600 manieren

Zonder gedeelde afspraken:

- Elke koppeling vraagt om maatwerk
- Elke organisatie vindt het wiel opnieuw uit
- Kwaliteit van oplossingen varieert sterk
- Geen herbruikbare libraries of componenten
- Kennis is niet overdraagbaar tussen organisaties

---

## Het belang van gedeelde standaarden

Standaarden maken samenwerking mogelijk over organisatiegrenzen heen.

| Standaard                    | Wat het oplost                                 |
| ---------------------------- | ---------------------------------------------- |
| **NL API Design Rules**      | Consistente REST(ful) APIs                     |
| **NL GOV OAuth / OpenID**    | Gestandaardiseerde authenticatie + autorisatie |
| **NL GOV CloudEvents**       | Uniforme event-notificaties                    |
| **Logboek Dataverwerkingen** | Transparante logging over organisaties heen    |

<div class="emphasis">

### Standaarden zijn pas waardevol als we dezelfde hanteren

### én deze op dezelfde manier toepassen

</div>

---

<!-- _class: statement -->

Maar...

Een standaard beschrijft het **WAT**
Niet het **HOE**

---

<!-- _class: quote -->

## Adoptie open standaarden bij overheid stagneert

> Hoewel in 2023 nog een lichte stijging werd waargenomen, laat de monitor van 2024 zien dat sprake is van stagnatie.

forumstandaardisatie.nl/nieuws/monitor-open-standaarden-2024-adoptie-lijkt-te-stagneren

---

## Casus: Huurtoeslag berekenen

Dienst Toeslagen beoordeelt een aanvraag huurtoeslag. Welke gegevens zijn nodig?

| Gegeven               | Bron            |
| --------------------- | --------------- |
| Inkomen               | Belastingdienst |
| Huishoudsamenstelling | BRP             |
| Studiestatus          | DUO             |

---

<!-- _class: comparison -->

## Data bij de bron — het principe

<div class="wrong">

### ✗ Kopieën maken

- Jaarlijkse inkomensgegevens-dump
- Maandelijkse BRP-leveringen
- Periodieke DUO-bestanden
- Eigen kopie-database

**→** Verouderd, afwijkend, fouten

</div>

<div class="right">

### ✓ Bevragen bij de bron

- Realtime API-call naar BRP
- Altijd actuele inkomensgegevens
- Geen eigen opslag nodig
- Bron blijft verantwoordelijk

**→** Actueel, betrouwbaar, compliant

</div>

---

## Huurtoeslag — een voorbeeldflow

<pre class="mermaid">
sequenceDiagram
  participant DT as Dienst Toeslagen
  participant BD as Belastingdienst
  participant BRP
  participant DUO
  DT->>BRP: Huishoudsamenstelling?
  BRP-->>DT: 2 personen, adres
  DT->>BD: Inkomen huishouden?
  BD-->>DT: €28.000 / jaar
  DT->>DUO: Studiestatus?
  DUO-->>DT: Geen student
</pre>

---

## Maar dan loop je hier tegenaan...

| Uitdaging           | Voorbeeld                                     |
| ------------------- | --------------------------------------------- |
| **Beschikbaarheid** | BRP-API in onderhoud tijdens toeslagenperiode |
| **Autorisatie**     | Welke medewerker mag welke gegevens opvragen? |
| **Actualiteit**     | Inkomen wijzigt, toeslag moet worden herzien  |
| **Volume**          | 6 miljoen toeslagontvangers                   |
| **Formaat**         | BRP/DUO: REST, Belastingdienst: SOAP          |

> [!WARNING] Het principe is helder — de praktijk is weerbarstig.

---

<!-- _class: cta -->

## Hier komt implementatie-ondersteuning in beeld

<div class="card-container">

<div class="card">

### Wat wij kunnen brengen

- Architectuuradvies
- Hands-on support
- Kennis van standaarden

</div>

<div class="card">

### Wat jullie kunnen brengen

- Echte use cases
- Praktische knelpunten
- Feedback

</div>

</div>

<div class="emphasis">

### Samen bouwen we aan de Kennisbank op developer.overheid.nl

</div>

---

## Dus, wat nu? Is dit alleen een software-probleem?

Nee! het is en een software-ding, _en_ een regel en wetgeving ding.

- De BIO
- Pas toe of leg uit
- NIS2
- CRA

---

## Tooling voor verschillende doelen

- Code
- Platform
- Security specifiek

Idealiter doorlopend en continue.

---

## Code Testing

Reviews / conformity

- Unit tests
- Linting
- Code coverage
- Code smells
- Api Design Rules validator
- QualityTime
- Jenkins

---

## Platform / hosting

Code is vaak 'kaal'. Hosting voegt laagjes toe die cruciaal zijn voor security.

- Itnernet.nl
- Openkat.nl
- ssltest

---

## Security

- Dependabot
- Code-smells
- Trufflehog
- Sonarcloud

---

## En wat is het doel dan?

Bewijsbaar vertrouwen!

- Lever SBoM's mee in je build artifacts
- Lever de output van je quality tooling mee
- Timestamp / sign deze builds en quality assurance files
- Alles in de CI \o/
- Controle op deze zaken in de CD \\o//

---

<!-- _class: title -->

# Vraag of casus?

## Loop even langs of neem contact op!

api@geonovum.nl · developer.overheid.nl
