---
marp: true
theme: don
paginate: true
style: |
  section img {
    display: block;
    margin: 0 auto;
  }
  section {
    font-variant-emoji: text;
  }
  section pre {
    font-size: 0.7em;
  }
  section table td:first-child,
  section table th:first-child {
    white-space: nowrap;
  }
  section.small table {
    font-size: 0.64em;
  }
  section.small table td,
  section.small table th {
    padding: 0.25em 0.6em;
  }
  section.small table th:first-child {
    width: 12%;
  }
  section.small p {
    font-size: 0.8em;
  }
  section.agenda table th:first-child {
    width: 22%;
  }
---

<!-- _class: title -->

# Functionele principes: van raadplegen naar bijhouden

**Werkgroep Historie** · Kennisplatform API's · Geonovum

14 oktober 2026

---

<!-- _class: agenda -->

## Agenda

| Tijd          | Onderdeel                                                            |
| ------------- | -------------------------------------------------------------------- |
| 13:00 - 13:15 | Terugblik op 23 september: wat we hebben verkend, en vier stellingen |
| 13:15 - 13:40 | Principes voor raadplegen: 4 tot en met 6                            |
| 13:40 - 14:20 | Principes voor bijhouden: 1 tot en met 4                             |
| 14:20 - 14:30 | Vervolgafspraken                                                     |

<!--
Werksessie, geen formele vaststelling. Per onderwerp één vraag waarover we een uitspraak willen; de rest schriftelijk.

Vorige keer kwamen we niet door de slides: de begrippendiscussie en principe 1 namen de meeste tijd. Daarom vandaag een strakke tijdsindeling en een parkeerlijst (in de chat) voor alles wat over "kan dat technisch wel" gaat.

Afwezig: Rijk van Haaften, Ruud Kathmann, Jeanot Bijpost. Ivo Hendriks vertegenwoordigt het UBB-standpunt. Het blok bijhouden begint met een mondelinge afbakening (notities bij de titelslide), omdat mijn eerdere, niet gedeelde werkversie daar te ver ging (negen principes die samen één historiemodel veronderstellen).

Bron: de slides van 23 september en de analyse "Registratietijd, beschikbaarheidstijd en herhaalbaarheid" (13 oktober) met de bijlage over veelgebruikte databases.
-->

---

<!-- _class: title -->

# Terugblik op 23 september

---

## Wat we hebben verkend

- Een toestand kan op verschillende manieren worden geïdentificeerd: **tijdstip, versienummer of token**
- Herhaalbaarheid kent **meerdere patronen** (alle momenten opnieuw meegeven, of een token) en **grenzen** (uitfasering, bewaartermijnen)
- Een API **legt uit welke tijdsassen zij voert** en wat zij ermee bedoelt (specificatie of discovery)
- Open gebleven: de **naam** van de as (registratietijd of systeemtijd) en het **beschikbaarheidsvraagstuk**

<!--
Dit is de samenvatting uit het verslag (paragraaf 4). Niet opnieuw bespreken; wie iets anders heeft gehoord, mailt.

De naamgeving beslissen we vandaag niet. De analyse (paragraaf 9) doet een voorstel: registratietijd voor de as, met systeemtijd en transactietijd als uitgelegde synoniemen; beschikbaarheidsmoment (niet -tijd) voor het punt per antwoord. Reacties schriftelijk.

Het beschikbaarheidsvraagstuk is het onderwerp van de volgende twee slides. Rijk constateerde vorige keer dat twee gesprekken door elkaar liepen: definities, en wat technisch kan. De analyse scheidt die twee.
-->

---

## Waar het misging: één voorziening, een lopende transactie

| Klok     | Gebeurtenis                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| 10:00:00 | Transactie start; het gegeven krijgt registratietijd 10:00:00                            |
| 10:00:03 | Afnemer vraagt de stand op registratietijd 10:00:03. Antwoord: **het gegeven ontbreekt** |
| 10:00:07 | Commit; het gegeven wordt zichtbaar                                                      |
| 10:00:10 | Afnemer herhaalt dezelfde vraag (10:00:03). Antwoord: **het gegeven is er wel**          |

<div class="highlight warning">
De verzameling "alles met registratietijd tot en met T" groeit na T nog door, zolang er transacties lopen die vóór T begonnen.
</div>

<!--
Kan worden overgeslagen als de tijd dringt; de stellingen op de volgende slide staan op zichzelf.

Dit is het scenario dat ik vorige keer voorlegde en dat Rob herkent uit DigiTwinDB. Er zijn nog twee varianten (analyse, paragraaf 2): overlappende transacties waardoor de volgorde op de registratieas niet de volgorde van zichtbaarheid is (de reden dat Microsoft change tracking op commitvolgorde baseert), en replica's of ketens waarbij niemand vastlegt wanneer een replica bij was.

Wat niet dit probleem is: het poststuk dat vrijdag binnenkomt en maandag wordt ingevoerd (Rob), de postkamer (Ivo). Dat is administratieve vertraging vóór de registratie; daarover is geen meningsverschil.

Speelt dit op elke database? Niet op alle, wel op alle gangbare relationele, en op elke database zodra de applicatie zelf de registratietijd toekent (bijlage bij de analyse):
- wel: PostgreSQL, SQL Server (temporal tables), MySQL en MariaDB geven een rij de tijd van het begin van de transactie of van de schrijfactie, en de rij wordt pas bij de commit zichtbaar; SQL Server documenteert dat expliciet
- niet op de eigen as: Oracle (SCN bij commit), Spanner en CockroachDB (committijd uit een gesynchroniseerde klok), XTDB en Datomic (één schrijver kent de systeemtijd na elkaar toe); daar loopt de as in de volgorde van zichtbaar worden
- de voorwaarde: dat geldt alleen als de API de systeemtijd van de database als registratieas gebruikt. Vult de applicatie zelf een kolom tijdstipRegistratie vóór de commit, en dat is in registers de gewone praktijk, dan komt het probleem op elke database terug, ook op Oracle of XTDB
Als iemand zegt "wij draaien Oracle, dus dat speelt bij ons niet": klopt voor het SCN, niet voor de door de applicatie toegekende registratietijd.

De kern van de analyse: een tijdreisvraag op registratietijd T is herhaalbaar zodra T vóór het begin van de oudste nog lopende transactie ligt. Dat punt heet in het UBB-werkdocument "het meest recente moment waarop geen schrijvers meer actief waren" (T80 tegenover T100), en in de analyse het beschikbaarheidsmoment.
-->

---

## Registratietijd en beschikbaarheid: vier stellingen

1. Beschikbaarheid is **geen vastgelegde tijd van het gegeven**, maar een **eigenschap van het antwoord**: één beschikbaarheidsmoment, tot waar de antwoordende instantie compleet is
2. **Hoe een aanbieder aan dat moment komt, is zijn eigen zaak**; hoe hij dat communiceert is interface
3. **Herhaalbaarheid hangt aan dat moment**: een tijdreisvraag is herhaalbaar zolang haar beschouwingsmoment op de registratieas er niet voorbij ligt. Daarbuiten laat de API niet kijken, of zegt zij dat zij nog niet zo ver is
4. In een keten is de registratietijd van de vorige schakel **inhoud**, geen tweede registratieas van deze voorziening. Wie erop wil tijdreizen, declareert die as onder eigen naam

<!--
Te stellen vraag: kan iemand hier niet mee leven? Inhoudelijke reacties per mail; de analyse en de bijlage zijn de onderbouwing.

Tien minuten, niet heropenen. Toetsvragen aan drie mensen:

- Ivo: geven stelling 1 en 4 het UBB-standpunt correct weer? Het UBB-werkdocument (hoofdstuk 4): "Availability is not a third axis. The projection is a store of its own, with its own system time, and that clock, read by a consumer, tells when the data was available. Another system's clock is data." En paragraaf 8.2.1: het moment moet wel terug naar de afnemer ("we answered your question at T80"). De begrippenslide van 23 september en UBB hadden dus allebei gelijk, over verschillende dingen: UBB over de opslag, de begrippenslide over het onderscheid. De analyse voegt het teruggeven en de eisen aan dat moment toe.
- Mark Strijker: stelling 4 getoetst aan de BGT, die naast tijdstipRegistratie al een LV-publicatiedatum draagt. STOP doet hetzelfde met "ontvangen op" en "bekend op". En: beschikbaarOp uit de ADR-extensie is in deze lezing het beschouwingsmoment op de registratieas van deze voorziening, begrensd door haar beschikbaarheidsmoment. Mark had dus gelijk dat je ermee op de registratietijdlijn zoekt.
- Rob: DigiTwinDB kent de registratietijd toe bij commit, geserialiseerd. Dan vallen registratietijd en beschikbaarheid samen en is stelling 3 automatisch waar.

Stelling 2 legt de verantwoordelijkheid: hoe de aanbieder aan het moment komt is registerontwerp, dat hij het afgeeft is interface. De precisie van het moment (dag, seconden, de duur van de langste transactie, of exact) is een gevolg van de gekozen methode en hoort in de beschrijving van de API; vandaag niet bespreken. Rijks bezwaar (de committijd is niet vast te leggen) is de reden dat die eis redelijk is, in de analyse (paragraaf 4) beantwoord: de committijd is niet nodig, alleen het begin van de oudste nog lopende transactie, en dat houdt elke database bij. Vier methoden met oplopende precisie: batchpublicatie, replicapositie, oudste open transactie, registratietijd bij commit. De garantie is overal dezelfde; de precisie wordt gedeclareerd in de beschrijving van het temporele gedrag van de API. Rijks "op dagniveau wel redelijk" is methode 1.

Als iemand naar de haalbaarheid op echte databases vraagt: de bijlage bij de analyse toetst PostgreSQL, SQL Server, Oracle, MySQL/MariaDB, MongoDB, Spanner/CockroachDB en XTDB. Drie uitkomsten: (1) gangbare relationele databases kennen de tijd toe bij het begin van de transactie, dus het scenario op de vorige slide is de norm; (2) de ondergrens is overal ingebouwd en goedkoop (oudste actieve transactie, change tracking-versie, SCN, clustertijd, snapshot token); (3) ingebouwd tijdreizen is kort houdbaar (MongoDB vijf minuten, CockroachDB vier uur, Oracle zolang de undo reikt), dus een register dat herhaalbaarheid over jaren belooft, modelleert zijn historie zelf of kiest een native bitemporele store zoals XTDB, waar de enkele transactielog de systeemtijd in commitvolgorde toekent en het snapshot token en await token precies de boven- en ondergrens uit stelling 3 en de sessiegaranties zijn. Performance: het beschikbaarheidsmoment bepalen kost vrijwel niets; de kosten van historie zitten in opslag en bevraging, en die zijn er ook zonder dit onderscheid.

Ruuds behoefte ("wat had ik op 1 april om 12 uur kunnen zien") is beantwoordbaar als het antwoord van toen zijn beschikbaarheidsmoment meedroeg (raadpleegprincipe 5). In een keten alleen per voorziening.

Gevolg voor de begrippentabel: de rij beschikbaarheidstijd wordt beschikbaarheidsmoment, een eigenschap van het antwoord, geen soort tijd van het gegeven. Gevolgen voor de principetekst staan in paragraaf 8 van de analyse (begrippen, raadpleegprincipes 3 en 4, bijhouden).

Parkeren: gelijkspelregel bij gelijke momenten, tijdstempel of token, gedrag in het grijze gebied (terugbrengen tot het beschikbaarheidsmoment en dat melden, of "nog niet zo ver").
-->

---

<!-- _class: title -->

# Principes voor raadplegen: 4 tot en met 6

---

## 4. Zonder beschouwingsmomenten: de huidige stand zoals nu bekend

- **Nu op elke as**: geen beschouwingsmoment opgegeven betekent de werkelijkheid van nu, met de kennis van nu
- **Nu is een bepaald moment**: op de registratieas is dat het beschikbaarheidsmoment van de antwoordende instantie; het antwoord noemt het (principe 5), zodat ook deze vraag herhaalbaar is
- **Historie is een laag erbovenop**: wie geen historie nodig heeft, merkt daar ook niets van

<!--
Te stellen vraag: gegevens die pas in de toekomst geldig worden: toestaan en declareren, maar buiten de huidige stand houden?

Raadpleegprincipe 4.

Waarom: dit is de voorwaarde voor adoptie. Als het voeren van de standaard betekent dat elke bestaande afnemer moet worden omgebouwd, gebeurt het niet. Rob van Dort: beide parameters weglaten geeft de huidige stand. Mark Strijker vorige keer: vragen moeten herhaalbaar zijn, behalve als er impliciet "nu" in zit; "nu" is over een jaar iets heel anders. Dat klopt, en daarom vertelt het antwoord welk "nu" het was (volgende principe).

De toevoeging uit de analyse (paragraaf 4, het grijze gebied): een vraag zonder beschouwingsmoment op de registratieas krijgt het beschikbaarheidsmoment als beschouwingsmoment, zodat het antwoord herhaalbaar is met de teruggegeven waarden.

Over de vraag: de ADR-extensie schrijft voor dat bij het ontbreken van een datum de meest recente geldige informatie wordt teruggegeven, en als er nog geen geldige versie bestaat, de meest recente bekende. Dat tweede deel is een bewuste keuze voor gegevens met geldigheid in de toekomst. De ADR-extensie staat een API toe toekomstige geldigheid niet te ondersteunen; het UBB-werkdocument noemt toekomstig gedateerde gegevens als uitgesteld onderwerp. Voorstel: toestaan, vooraf declareren in de beschrijving van de API, standaard buiten de actuele stand houden.
-->

---

## 5. Elk antwoord draagt de verwijzing waarmee het is te herhalen

- **Dezelfde vraag, hetzelfde antwoord**: wie de verwijzing volgt, krijgt het antwoord opnieuw, binnen de grenzen die de API over herhaalbaarheid declareert
- **De verwijzing is standaard**: de standaard schrijft haar voor, zodat elke afnemer bij elke API op dezelfde manier herhaalt
- **De inhoud is aan de API**: zij bepaalt wat de verwijzing vastzet (de beschouwingsmomenten per as en het beschikbaarheidsmoment, of alleen een token) en declareert dat
- **De verwijzing hoort bij het antwoord**: zij reist mee als het antwoord wordt opgeslagen, doorgegeven of als bestand geleverd

<!--
Te stellen vraag: akkoord met deze verdeling, de verwijzing standaard en de inhoud aan de API, ook als die inhoud alleen een token is?

Raadpleegprincipe 5, aangescherpt ten opzichte van 23 september. Toen: "het antwoord noemt zijn momenten". Nu: het antwoord bevat alles wat nodig is om de vraag te herhalen. De standaard legt de vorm vast (een verwijzing, in HTTP bijvoorbeeld een Link-header of een link in de inhoud), zodat elke afnemer bij elke API op dezelfde manier kan herhalen. Wat de verwijzing vastzet, is aan de API: of een aanbieder tijdstippen, versienummers of een ondoorzichtig token gebruikt, is een declaratie en geen besluit van de werkgroep. Zo blijft het modelneutraal zonder dat elke API haar eigen herhaalmechanisme verzint. Bij een token hoeft het antwoord geen momenten te noemen: het token zet de beschouwingsmomenten en het beschikbaarheidsmoment vast, en dat is genoeg om te herhalen. Het beschikbaarheidsmoment blijft als begrip bestaan (stelling 1: één moment per antwoord), maar zit dan in het token.

Waarom: de herhaalbare vraag uit het UBB-werkdocument. Een vraag op T100 levert in de praktijk het antwoord dat op T80 compleet was. Wat het antwoord ook teruggeeft, het moet dat T80 vastzetten, anders weet de afnemer niet wat hij heeft gezien. Precedenten: Memento stuurt Memento-Datetime mee; Datomic en XTDB geven bij elk antwoord het basismoment terug, XTDB als token; Spanner geeft op verzoek het gekozen leesmoment terug; Microsoft Graph en Google geven een deltaLink; de ADR-extensie laat in een collectie elke itemverwijzing de beschikbaarOp meedragen. Dit sluit aan bij Jeanots twee patronen (alle momenten opnieuw meegeven, of een token dat naar het antwoord leidt): beide voldoen.

Wat dit principe niet regelt, en waar het dan wel hoort:
- Dat een kalendertijd altijd een geldige vraag is ("wat was bekend op 1 april 12:00", de vraag van de Belastingdienst en van Ruud) hoort bij raadpleegprincipe 3, de parameters per as. Een API met tokens moet die vraag naar haar eigen waarde kunnen vertalen, zoals Memento met de TimeGate en Oracle met TIMESTAMP_TO_SCN.
- Wat een token niet kan (vergelijken tussen API's, citeren in een dossier, hergebruiken in een vraag aan een andere API) is een gevolg van de gekozen vorm en hoort in de declaratie van de API. Cosmos DB zegt het zelf over zijn sessietoken: een ondergrens, geen historische versie. Daarom blijft mijn aanbeveling een tijdstip, maar als aanbeveling, niet als eis.

Het teruggegeven beschikbaarheidsmoment moet veilig zijn, niet simpelweg "nu". Vier eisen (analyse, paragraaf 4): toegekend op basis van wat zichtbaar is, monotoon, eenduidig geordend, en pas afgegeven als alles eronder compleet is. Die eisen gelden voor de as zoals de API haar beheert, ook als de client alleen een token ziet. Hoe de aanbieder eraan komt is registerontwerp; dat hij er een heeft en teruggeeft is interface.

Headers of inhoud: beide zijn goed. De Link-header (RFC 8288) is hiervoor bedoeld, Memento werkt volledig met headers (Memento-Datetime, Link met rel=memento en rel=timemap), FHIR zet versie en moment in headers en in de inhoud, en HTTP Message Signatures (RFC 9421) kan headers meeondertekenen. De eis is dat de gegevens meereizen met het antwoord: bij een bestandslevering zijn er geen headers, en een afnemer die een antwoord opslaat of doorgeeft raakt headers makkelijk kwijt. Een API die alleen headers gebruikt, declareert dat; voor massale verstrekking moet het in de inhoud. Eén keer per antwoord, niet per item (volgt uit het volgende principe).

De vraag van de vorige versie ("alle assen teruggeven, ook de assen die de vraag niet noemde?") is hiermee beantwoord: alles wat nodig is om te herhalen, dus ook de assen die de vraag niet noemde.

Wat geparkeerd blijft is kleiner geworden: tijdstempel of token is nu een keuze van de aanbieder, met de declaratie als plek om te zeggen wat de afnemer daarmee wel en niet kan. Schriftelijk afhandelen, Jeanot is er vandaag niet.
-->

---

## 6. Eén antwoord is één momentopname

- **Dezelfde momenten voor alles in het antwoord**: elk object, elke gevolgde relatie en elke pagina staan op dezelfde beschouwingsmomenten; geen collage van tijdstippen
- **Verwijzingen nemen de momenten mee**: wie een verwijzing uit het antwoord volgt, ook naar de volgende pagina, blijft in dezelfde momentopname
- **Een ander moment is een nieuwe vraag**: een deel van het antwoord op een ander moment bekijken vraagt om een eigen verzoek

<!--
Te stellen vraag: hoe ver reikt dit over API-grenzen heen? Een verwijzing naar een andere API draagt de momenten mee, maar wat doet die API ermee?

Raadpleegprincipe 6.

Waarom: Rob van Dort: door het moment te fixeren krijg je altijd een consistente foto, ook terwijl zware batches muteren. Voor de BGT is dit direct herkenbaar: een consistent beeld langs de transactietijd is volgens Mark Strijker daar de grootste uitdaging.

Doorwerking langs relaties komt uit OData (Extension for Temporal Data): temporele queryopties werken door langs gevolgde relaties. OData staat ook toe ze per relatie te overschrijven; dat zit niet in dit principe, want dan is het antwoord geen momentopname meer. Dat links de momenten meedragen heeft een Nederlands precedent: in paragraaf 11.2 van de ADR-extensie draagt in een collectie elke verwijzing naar een item de beschikbaarOp mee.

Bladeren: een resultaat over meerdere pagina's moet over al die pagina's dezelfde momentopname tonen. Zit het beschikbaarheidsmoment niet in de bladerverwijzing, dan krijg je bij een lange doorloop dubbele of ontbrekende rijen.

Voorstel bij de vraag: binnen één API afdwingen. Over API-grenzen heen kan de standaard voorschrijven dat een link het moment draagt, en dat een API die de standaard volgt een meegegeven moment respecteert. Meer niet. Twee API's kunnen bovendien op verschillende beschikbaarheidsmomenten bij zijn; wat de tweede doet als hij nog niet bij is tot het moment van de eerste, is de vraag uit het grijze gebied (analyse, paragraaf 4) en verdient een eigen sessie samen met het Federatief Datastelsel.
-->

---

<!-- _class: title -->

# Bijhouden

<!--
Mondeling inleiden, geen eigen slide. De scope is de interface, niet het historiemodel: de standaard moet werken voor een registratie met alleen registratietijd én voor een registratie met formele en materiële historie. Twee toetsen per principe: gaat het over wat er over de lijn gaat, en volgt het uit de assen die de API voert? Wat overblijft zijn vier principes, de spiegel van raadpleegprincipe 3 en 5.

Te stellen vraag: is dit de juiste afbakening? De bijhoudkant als spiegel van de raadpleegkant, en niet meer.

Mijn eerdere werkversie (niet gedeeld) had negen principes voor bijhouden, met een handelingenrepertoire van zeven handelingen en regels voor het splitsen van perioden. Bij nader inzien standaardiseert dat op één historiemodel, en dat willen we niet: de scope is API's. Daarom heroverwogen.

Het criterium: een onderwerp valt af zodra het gaat over wat een organisatie doet in plaats van over wat er over de lijn gaat. Aangescherpt met: en zodra het één historiemodel veronderstelt. Wat overblijft is wat uit de tijdassen zelf volgt, en dat is de spiegel van wat we over raadplegen afspreken.

Wat afvalt en waar het heen gaat, per onderwerp het antwoord als iemand ernaar vraagt:
- Idempotentie: de techniek (Idempotency-Key, ADR) valt af, maar het functionele gedrag is principe 3 geworden: herhaald aanbieden maakt geen tweede feit op de registratieas.
- Voorwaardelijk schrijven: de techniek (voorwaardelijke verzoeken in HTTP) valt af, maar het functionele gedrag is principe 4: een mutatie kan zeggen op welke waarneming zij is gebaseerd.
- Bundeling en atomiciteit: ADR en Digikoppeling; de verwijzing uit het antwoord (principe 2) is het aanknopingspunt.
- Terugwerkende kracht en aankomst buiten volgorde: volgt uit principe 1. De registratietijd is het moment van ontvangst, de geldigheid komt uit het domein; een mutatie die later binnenkomt dan haar geldigheid, is gewoon een mutatie.
- Herleidbaarheid (grondslag, brondocument): informatiemodel, MIM en PROV.
- Splits- en gatensemantiek op de geldigheidsas: registergedrag, modelafhankelijk; het WOZ-advies noemt dit de belangrijkste bron van implementatieproblemen, maar dat is een probleem van het register, niet van de interface. OData kent er benoemde varianten voor (gaten laten of gaten vullen); een API kan declareren welke zij voert.
- Het handelingenrepertoire (wijzigen, corrigeren, beëindigen, enzovoort): wat over de lijn gaat is een nieuwe toestand met, als de API een geldigheidsas voert, de periode waarop zij slaat. Daaruit volgt wat er met de assen gebeurt: een latere periode is een verandering in de werkelijkheid, dezelfde periode met een andere waarde een vervanging van de vastlegging. De bedoeling erachter (was de oude waarde fout, of is de wereld veranderd) is domeininhoud: het gebeurtenistype, met betekenissen uit het informatiemodel en het UBB-vocabulaire (hoofdstuk 7 van het UBB-werkdocument: registreren, wijzigen, corrigeren, beëindigen, herstellen, heropleven, intrekken). Een API kan dat als gegeven meegeven; de standaard verwijst ernaar in plaats van het over te schrijven. Mark Westbroeks punt ("corrigeren is echt iets anders dan onttrekken") blijft waar, maar hoort bij het informatiemodel en UBB, niet bij de interface.
De vier principes die overblijven zijn de enige die alleen bestaan omdat er tijdassen zijn, en ze spiegelen de raadpleegkant: principe 1 is de schrijfkant van raadpleegprincipe 3 (momenten per as), principe 2, 3 en 4 die van raadpleegprincipe 5 (het antwoord draagt de verwijzing; dezelfde vraag, hetzelfde antwoord; de verwijzing als basis voor de volgende mutatie).

Vastleggen: is de werkgroep het eens met deze afbakening? Mark Westbroek en Mark Strijker hebben in de kick-off het handelingenrepertoire als kern benoemd; de vraag aan hen is of zij ermee kunnen leven dat dit bij het informatiemodel en UBB ligt, met de API als drager van het gebeurtenistype.
-->

---

## 1. De ontvanger kent de registratietijd toe

- **Niet de indiener**: de registratietijd zegt wanneer de ontvanger het wist; een meegestuurde registratietijd wordt genegeerd of geweigerd
- **Elke andere as is gedeclareerd**: per as zegt de API of de client het moment levert, de ontvanger het bepaalt, of de as niet bestaat
- **De registratietijd van een vorige schakel is inhoud**: een gewoon gegeven, of een as onder eigen naam, nooit stilzwijgend overgenomen als de eigen registratietijd

<!--
Te stellen vraag: wiens registratietijdlijn een landelijke voorziening bijhoudt is een ketenafspraak. Volstaat het dat de interface beide momenten kan dragen?

Bijhoudprincipe 1. Onomstreden in de bronnen: Rob geeft transTime niet mee en laat het systeem die bepalen; het UBB-werkdocument stelt dat de geldigheidsvelden door het domein worden toegekend en de systeemtijd door de store; SQL:2011 onderhoudt de systeemperiode automatisch; FHIR beheert versionId en lastUpdated op de server. Dit geeft de registratietijd haar bewijskracht: zij zegt wanneer de ontvanger het wist, en dat is niet aan de indiener.

De declaratie per as is wat het modelneutraal maakt. De WOZ laat de client de geldigheid leveren; de BGT voert geen geldigheidsas en zegt dat. Fedora (Memento) laat zien dat een door de client opgegeven moment een aparte, gedeclareerde uitzondering kan zijn, bijvoorbeeld voor het importeren van bestaande historie.

De derde regel is stelling 4 van vandaag toegepast op bijhouden: de BGT draagt naast tijdstipRegistratie een LV-publicatiedatum, STOP onderscheidt "ontvangen op" en "bekend op". Twee schakels in dezelfde keten, netjes benoemd in plaats van in elkaar geschoven. Mark Strijker kan dit toetsen aan Bravo.

De vraag wiens registratietijdlijn een landelijke voorziening bijhoudt, komt uit het WOZ-advies: de LV WOZ probeert vandaag de formele historie van de bronhouder over te nemen, houdt zelf geen tijdlijn bij, en kan daardoor de kernvraag van afnemers ("wat wist de LV vier weken geleden?") niet beantwoorden, zodat de Belastingdienst die tijdlijn zelf reconstrueert. Welke tijdlijn de LV voert is een ketenafspraak; dat de interface beide kan dragen is standaard. Dit is het punt met de grootste doorwerking in lopende trajecten (LV WOZ, Bravo).
-->

---

## 2. Het antwoord op een mutatie is een raadpleegantwoord

- **Dezelfde vorm als bij raadplegen**: de verwijzing om terug te lezen wat je schreef (raadpleegprincipe 5) en het adres van de ontstane toestand (raadpleegprincipe 1)
- **Met de registratietijd** die de ontvanger heeft toegekend
- **Daarmee sluit de kring**: de client leest zijn eigen schrijfactie terug, verwijst ernaar, en kan die verwijzing meegeven als basis voor een volgende mutatie (principe 4)

<!--
Te stellen vraag: moet het antwoord de nieuwe toestand zelf bevatten, of volstaat de verwijzing?

Bijhoudprincipe 2 koppelt de schrijfkant aan alles wat we over raadplegen hebben afgesproken. Zonder dit principe staat de schrijfkant los van de raadpleegprincipes.

Het antwoord geeft terug waarmee de client zijn eigen schrijfactie kan teruglezen (de sessiegaranties: lees je eigen schrijfacties) en waarmee hij ernaar kan verwijzen (raadpleegprincipe 1, het eigen adres).

"Verwerkt" is niet hetzelfde als "te zien". Op het moment van antwoorden weet de ontvanger zeker welke registratietijd hij heeft toegekend; of de mutatie al binnen zijn beschikbaarheidsmoment valt, hangt van de situatie af. Drie gevallen:
- registratietijd bij het begin van de transactie (methode 3, de meeste registers): er lopen nog oudere transacties, het beschikbaarheidsmoment ligt nog vóór de registratietijd van deze mutatie; zij is gecommit maar valt nog in het grijze gebied;
- leesreplica's of meerdere nodes (scenario C, ook XTDB): de schrijfkant is klaar, maar de instantie die de volgende leesvraag beantwoordt, is misschien nog niet zo ver;
- registratietijd bij commit, geserialiseerd (methode 4, DigiTwinDB en XTDB op de eigen as): registratietijd en beschikbaarheid vallen samen.
Beschikbaarheid is een eigenschap van de antwoordende instantie (stelling 1), nooit een wereldwijd feit: bij replicatie kan de ontvanger alleen zeggen tot waar hij zelf compleet is. Wat een andere instantie toont, weet hij niet. Daarom draagt het antwoord de verwijzing: de client geeft haar bij zijn volgende vraag mee, en de instantie die antwoordt wacht tot zij zo ver is, of meldt dat zij nog niet zo ver is (de twee antwoorden uit het grijze gebied, analyse paragraaf 4). XTDB doet precies dit met een await-token.

Precedenten: FHIR honoreert Prefer: return=minimal, return=representation of return=OperationOutcome (RFC 7240) en geeft ETag en Last-Modified bij elk antwoord terug; Cosmos DB geeft bij elke schrijfactie het sessietoken terug. Wat de werkgroep toevoegt, is dat het antwoord dezelfde vorm heeft als een raadpleegantwoord.

Bij de vraag: mijn neiging is de verwijzing verplicht, de toestand optioneel (de client vraagt erom met Prefer). De verwijzing uit het antwoord is ook wat de herhaling in principe 3 teruggeeft (herhaald aanbieden verandert niets).
-->

---

## 3. Dezelfde mutatie opnieuw aanbieden verandert niets

- **Eén feit, hoe vaak ook aangeboden**: een mutatie die de ontvanger al heeft verwerkt, krijgt geen tweede registratietijd
- **Hetzelfde antwoord**: de herhaling krijgt hetzelfde raadpleegantwoord als de eerste aanbieding (principe 2), met dezelfde verwijzing en hetzelfde adres
- **Herkenbaar en begrensd**: de API declareert waaraan zij een herhaling herkent en hoe lang zij die herkent

<!--
Te stellen vraag: is dit een principe van deze standaard, of volstaat een verwijzing naar de API Design Rules?

Bijhoudprincipe 3 is de schrijfkant van "dezelfde vraag, hetzelfde antwoord" (raadpleegprincipe 5): dezelfde mutatie, hetzelfde resultaat. De historie-eigen kern is de eerste regel: herhaald aanbieden maakt geen tweede feit op de registratieas. Zonder die regel ontstaat bij elke herhaalde aanlevering in een keten een spookversie met een eigen registratietijd, en dat is precies wat een afnemer die op registratietijd tijdreist niet kan onderscheiden van een echte mutatie.

De tweede regel volgt uit principe 2: als het antwoord op een mutatie een raadpleegantwoord is, dan is het antwoord op de herhaling hetzelfde raadpleegantwoord. Waaraan de API de herhaling herkent, zegt de derde regel.

De derde regel is de declaratie: waaraan herkent de API een herhaling (een door de client meegegeven sleutel, of de inhoud van de mutatie) en hoe lang (Stripe en de Zalando-richtlijnen gebruiken 24 uur). De techniek (de Idempotency-Key-header waar de IETF aan werkt, de regels in de ADR) hoort niet in deze standaard; alleen dat het gedrag er is en gedeclareerd wordt.

Dit sluit aan bij wat vorige keer over herhaalbaarheid is gezegd: ook bij raadplegen zijn de grenzen (bewaartermijn) per API te beschrijven.
-->

---

## 4. Een mutatie kan zeggen op welke waarneming zij is gebaseerd

- **Wat de client zag**: de verwijzing uit een eerder antwoord (raadpleegprincipe 5) of het adres van de toestand waarop hij zich baseert
- **De ontvanger herkent het conflict**: is er sindsdien iets veranderd, dan weet hij dat vóór hij verwerkt, en zegt hij het
- **Wat hij dan doet is ketenafspraak**: weigeren, signaleren of tolereren; de API declareert welke sleutel zij ondersteunt en of zij de voorwaarde verplicht stelt

<!--
Te stellen vraag: mag een API dit verplicht stellen voor elke mutatie?

Bijhoudprincipe 4 is het sluitstuk van de kring uit principe 2: de client leest terug wat hij schreef of zag, en geeft die waarneming mee als basis voor zijn volgende mutatie. De ontvanger kan dan zien of er intussen iets is veranderd. Dit vervangt het oud-nieuwpaar uit StUF, dat hetzelfde doel diende maar de hele oude toestand meestuurde.

Waarom een eigen principe: dat HTTP voorwaardelijke verzoeken kent, betekent niet dat API's ze gebruiken. De standaard zegt dat het gedrag er is, en dat de sleutel de verwijzing of het adres uit deze standaard is. Dat is functioneel; de techniek is aan de API en de API Design Rules.

De techniek, alleen voor de notities: dit zijn de voorwaardelijke verzoeken uit HTTP. OGC API Features deel 4 (concept) heeft er twee conformiteitsklassen voor, op tijdstempel (GET geeft Last-Modified, PUT vereist If-Unmodified-Since) en op versie (GET geeft ETag, PUT vereist If-Match), met 412 bij een mismatch en 428 als de voorwaarde ontbreekt. FHIR gebruikt If-Match met het versienummer en laat de server toe If-Match verplicht te stellen. Bij ons is de tijdstempel het beschikbaarheidsmoment en de versie het adres van de toestand. Valkuil: zwakke ETags falen altijd bij If-Match; het adres moet dus een sterke waarde zijn.

Of de ontvanger bij een conflict weigert, signaleert of tolereert, is ketenafspraak (het WOZ-advies werkt afkeuren, tolereren en signaleren uit). Bij de vraag: FHIR en OGC laten de server de voorwaarde verplicht stellen; mijn neiging is dat toe te staan en te laten declareren.

Vastleggen per principe: aangenomen, aangenomen met aanpassing, of open met wie het uitwerkt.
-->

---

<!-- _class: title -->

# Vervolgafspraken

[github.com/Geonovum/KP-APIs/tree/master/overleggen/Werkgroep%20Historie](https://github.com/Geonovum/KP-APIs/tree/master/overleggen/Werkgroep%20Historie)

<!--
Per besproken punt vastleggen: aangenomen, aangenomen met aanpassing, of nog open (met wie het uitwerkt).

Schriftelijk af te handelen (reacties per mail aan Joost, ook van wie er vandaag niet was):
- de vier stellingen over registratietijd en beschikbaarheid, met de analyse en de bijlage als onderbouwing
- de naamgeving (registratietijd of systeemtijd)
- tijdstempel of token voor het beschikbaarheidsmoment
- de afbakening van bijhouden, in het bijzonder voor Rijk en Ruud (WOZ): kunnen zij ermee leven dat het handelingenrepertoire bij het informatiemodel en UBB ligt, met de API als drager van het gebeurtenistype?

Volgende sessie, met Rijk en Ruud: de vier bijhoudprincipes getoetst aan de WOZ-keten en aan Bravo, en de raadpleegonderwerpen die nog niet aan bod zijn geweest (bevragen over een bereik, de tijdlijnrepresentatie, de toezegging over herhaalbaarheid, de verschilbevraging, massale verstrekking, sessiegaranties). Datum: cadans van drie weken geeft woensdag 4 november, 13:00 - 14:30, online. Checken op verhinderingen.

Joost werkt de principetekst uit tot een document voor de werkgroep: begrippen en raadpleegprincipes bijgewerkt op basis van de analyse, de bijhoudkant als de vier principes van vandaag. Verslag, slides en analyse gaan op GitHub.

Punten die in deze sessie zijn opgekomen (in te vullen):
- ...
-->
