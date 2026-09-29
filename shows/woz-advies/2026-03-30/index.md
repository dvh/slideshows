---
marp: true
theme: don
paginate: true
---

<!-- _class: title -->

# Betrouwbaar notificeren met APIs

Wat moeten we standaardiseren?

**Werkgroep Notificeren** · Joost Farla (Geonovum) · 30 maart 2026

---

## Context: het WOZ-advies

- Geonovum onderzoekt de **transitie van ebMS2/StUF naar moderne APIs**
  - Voor de aanlevering vanuit bronhouders (gemeenten) aan de LV-WOZ
- Gemeenten leveren **~10 miljoen berichten per jaar** aan, met sterke seizoenspieken
- Analyse: welke functies van ebMS2 mist het Digikoppeling REST API profiel?
- Dezelfde vragen spelen bij het **notificeren van afnemers** door de LV-WOZ

<div class="highlight">
ebMS2 adresseert een deel van deze vragen op protocol-niveau, maar niet allemaal. Bij APIs bestaan de bouwstenen, maar de afspraken ontbreken.
</div>

Werkversie: [geonovum.github.io/KBI-WOZ-advies](https://geonovum.github.io/KBI-WOZ-advies/#vergelijking-met-msh-gebaseerde-protocollen)

---

## Welke afspraken missen we?

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2em; margin-top: 0; margin-bottom: 1em;">
<div style="line-height: 2;">

**Delivery lifecycle**
· Afleverbevestiging
· Retry-gedrag
· Idempotentie
· Foutafhandeling

</div>
<div style="line-height: 2;">

**Flow control**
· Capaciteitsbeheersing
· Volgordelijkheid

</div>
<div style="line-height: 2;">

**Trust**
· Authenticatie
· Non-repudiatie

</div>
</div>

<div class="highlight">
Het patroon (webhook, pub/sub, event log, pull-feed) bepaalt <em>waar</em> de verantwoordelijkheid ligt, maar de afspraken moeten hoe dan ook gemaakt worden.
</div>

---

## Afleverbevestiging

Hoe weet de aanbieder dat een notificatie is aangekomen?

| Patroon   | Bevestiging                                                |
| --------- | ---------------------------------------------------------- |
| Webhook   | HTTP 200 bevestigt ontvangst, niet noodzakelijk verwerking |
| Pub/sub   | ACK tracking afhankelijk van delivery guarantee            |
| Event log | Consumer offset; zichtbaar hoe ver elke consumer is        |
| Pull-feed | Impliciet; afnemer haalt zelf op                           |

<div class="highlight warning">
Er is geen gedeelde afspraak over wat een succesvolle aflevering betekent, en hoe de aanbieder dit kan vaststellen.
</div>

**Discussie:** Schrijft de standaard een delivery guarantee voor (at-least-once, at-most-once)? Moet de ACK-semantiek (ontvangen vs. verwerkt) uniform zijn?

---

## Retry-gedrag

Wat gebeurt er als een notificatie niet aankomt?

| Patroon   | Retry-mechanisme                                            |
| --------- | ----------------------------------------------------------- |
| Webhook   | Aanbieder moet zelf retries implementeren; geen standaard   |
| Pub/sub   | Broker kan retry afhandelen; afhankelijk van configuratie   |
| Event log | Consumer leest opnieuw vanaf zijn positie (retry is replay) |
| Pull-feed | Afnemer haalt gemiste notificaties zelf op; n.v.t.          |

<div class="highlight warning">
Er is geen gedeelde afspraak over wanneer en hoe vaak een aanbieder een notificatie opnieuw aanbiedt.
</div>

**Discussie:** Definieert de standaard een retry-profiel (backoff, max retries), of laat ze dit aan het gekozen patroon?

---

## Idempotentie

Wat als dezelfde notificatie twee keer aankomt?

| Patroon   | Duplicaat-risico                                          |
| --------- | --------------------------------------------------------- |
| Webhook   | `Idempotence-Key` bestaat, maar niet verplicht of uniform |
| Pub/sub   | Bij at-least-once moet afnemer duplicaten herkennen       |
| Event log | Consumer tracked offset; duplicaten bij herstart mogelijk |
| Pull-feed | Client bepaalt positie; zeldzaam maar niet uitgesloten    |

<div class="highlight warning">
Retries zijn alleen veilig als idempotentie is geregeld. Er is geen standaard die voorschrijft hoe duplicaat-eliminatie werkt.
</div>

**Discussie:** Wie borgt idempotentie: de aanbieder, de afnemer, of de tussenlaag? Hoort dit in een generieke standaard of bepaalt elke API het zelf?

---

## Foutafhandeling

Wat als een notificatie definitief niet verwerkt kan worden?

| Scenario         | Probleem                                                                    |
| ---------------- | --------------------------------------------------------------------------- |
| Retries uitgeput | Afnemer is onbereikbaar; alle pogingen falen                                |
| Poison message   | Bericht zelf is het probleem (malformed, schema-mismatch); retry helpt niet |
| Silent failure   | Aflevering lijkt geslaagd, maar verwerking faalt intern                     |
| In-doubt         | Verbinding valt weg voor de response; status onbekend                       |

<div class="highlight warning">
Ook in de huidige ebMS2-keten is foutafhandeling een bekend knelpunt. Bij een transitie naar APIs moet dit expliciet geadresseerd worden.
</div>

**Discussie:** Definieert de standaard gedrag per foutscenario, of alleen foutformaten? Wie is verantwoordelijk bij definitief falen?

---

## Capaciteitsbeheersing

Wat als het volume hoger is dan de ontvanger aankan?

| Patroon   | Backpressure                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Webhook   | Geen ingebouwde buffering; RateLimit headers in standaardisatie ([IETF draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)) |
| Pub/sub   | Buffert berichten; maar buffers lopen ook vol                                                                                                          |
| Event log | Buffert inherent; retentiebeleid bepaalt hoe lang                                                                                                      |
| Pull-feed | Afnemer bepaalt eigen tempo; natuurlijke backpressure                                                                                                  |

<div class="highlight warning">
Er is geen gedeelde afspraak over rate limits, gedrag bij overbelasting, en buffering.
</div>

**Discussie:** Nemen we IETF RateLimit headers op als verplichting of aanbeveling? Moet de standaard buffering voorschrijven?

---

## Volgordelijkheid

Komen notificaties aan in de juiste volgorde? Ook ebMS2 biedt hier in de praktijk geen garantie.

| Patroon   | Volgordegarantie                                 |
| --------- | ------------------------------------------------ |
| Webhook   | Geen garantie                                    |
| Pub/sub   | Afhankelijk van configuratie; vaak geen garantie |
| Event log | Geborgd binnen een partitie                      |
| Pull-feed | Geborgd door de feed zelf                        |

<div class="highlight warning">
ebMS2 kent ordering-primitieven (MessageOrder), maar Digikoppeling schrijft ze niet voor. Dit is een onopgelost probleem dat nu expliciet geadresseerd kan worden.
</div>

**Discussie:** Ontwerpen we voor gegarandeerde volgorde, of ontwerpen we consumers die out-of-order berichten aankunnen?

---

## Authenticatie

Hoe weet de afnemer dat een notificatie legitiem is?

| Patroon   | Authenticatie                                                            |
| --------- | ------------------------------------------------------------------------ |
| Webhook   | Afnemer biedt publiek endpoint; aanbieder niet standaard geverifieerd    |
| Pub/sub   | Authenticatie op de broker; end-to-end vereist extra stap                |
| Event log | Consumer authenticeert bij de log; herkomst niet standaard verifieerbaar |
| Pull-feed | Afnemer initieert verbinding; authenticatie is eenvoudiger               |

<div class="highlight warning">
Digikoppeling schrijft 2-zijdig TLS met PKI-certificaten voor (transport-niveau). Voor push-patronen is niet gestandaardiseerd hoe de afnemer de herkomst verifieert.
</div>

**Discussie:** Volstaat 2-zijdig TLS, of is message-level verificatie (JAdES) nodig voor notificaties?

---

## Non-repudiatie

Niet alleen weten dat het aankwam, maar het kunnen _bewijzen_:

| Aspect    | Mechanisme                                                                  |
| --------- | --------------------------------------------------------------------------- |
| Herkomst  | JAdES signing (Digikoppeling, optioneel): bewijst afzender en integriteit   |
| Ontvangst | Ondertekende acknowledgement door afnemer; niet gestandaardiseerd voor APIs |

<div class="highlight warning">
JAdES lost herkomst op, maar niet ontvangst. Voor bewijs van ontvangst moet de afnemer een ondertekende ACK terugsturen. Bij intermediairs geldt bewijs alleen tot de tussenlaag.
</div>

**Discussie:** Vereisen we bewijs van herkomst (JAdES), of ook bewijs van ontvangst (ondertekende ACK)?

---

<!-- _class: title -->

# Vragen of aanvullingen?

[geonovum.github.io/KBI-WOZ-advies](https://geonovum.github.io/KBI-WOZ-advies/)
