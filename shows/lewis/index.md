---
marp: true
theme: default
paginate: true
backgroundColor: #fff
style: |
  section {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  h1 {
    color: #1e293b;
    font-size: 2.5em;
    font-weight: 700;
  }
  h2 {
    color: #334155;
    font-size: 1.8em;
    font-weight: 600;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .highlight {
    background: #fef3c7;
    padding: 0.2em 0.4em;
    border-radius: 4px;
  }
  .green { color: #10b981; font-weight: 700; }
  .amber { color: #f59e0b; font-weight: 700; }
  .red { color: #ef4444; font-weight: 700; }
---

# LoadTrack
**Evidence-based load monitoring voor personal trainers**

*Van chaos naar controle in 10 seconden per sessie*

---

## Het probleem

Personal trainers werken met **gefragmenteerde tools** die niet aansluiten bij hun workflow:

- ⏱️ **30 minuten admin per cliënt per week**
- 📝 Notities in iPhone → Later overtypen in MyWellness
- 📊 Geen inzicht in progressie & load trends
- ⚠️ Overtraining & blessures zien ze te laat
- 🔄 Periodisering is giswerk zonder data

*"Belangrijke informatie gaat verloren omdat ik pas later in de week tijd heb om te evalueren"* - Lewis

---

## De markt gap

<div class="columns">

### Bestaande PT software
- Trainerize, TrueCoach, My PT Hub
- Focus: workout programming
- Load monitoring: oppervlakkig
- Niet evidence-based

### Elite sport tools
- Coach ID, Firstbeat, CoachMePlus  
- GPS & wearables vereist
- €€€ en complex
- Voor teamsport, niet 1-op-1

</div>

**Er is niks dat load monitoring _serieus_ neemt voor individuele personal trainers**

---

## Onze oplossing

Een **dedicated load monitoring platform** dat:

✅ Logging **tijdens de training** (geen dubbel werk)
✅ Evidence-based metrics (RPE, acute:chronic ratio, muscle group volume)
✅ Pre-session wellness check voor cliënten
✅ Automatische **traffic light warnings** (🟢 🟡 🔴)
✅ Progressie inzichtelijk zonder Excel sheets

<span class="highlight">**10 seconden om een sessie te loggen**</span>

---

## Hoe het werkt

### Voor de PT (web + mobile)
1. **Pre-session**: Dashboard toont welke cliënten in <span class="red">rode zone</span> zitten
2. **During-session**: Log RPE + volume per oefening (10 sec)
3. **Post-session**: Automatische load berekening & trend analyse
4. **Planning**: Zie reminders voor weeg/meet/test momenten

### Voor de cliënt (mobile app)
- Dagelijkse wellness questionnaire
- Week targets & progressie bars
- Training schema & evaluaties (geen load data)

---

## De technologie

**Stack:**
- Frontend: React/Next.js (mobile-first)
- Backend: AWS Lambda + DynamoDB (serverless, schaalbaar)
- Real-time sync tussen PT en cliënt apps
- Strava/Garmin integratie mogelijk (fase 2)

**Waarom dit snel te bouwen is:**
- Core algoritmes zijn wetenschappelijk bewezen (RPE × duur, A:C ratio)
- Begin met handmatige input, automatisering later
- MVP focus: alleen wat Lewis _nu_ nodig heeft

---

## Roadmap

### 📱 Fase 1: MVP (4-6 weken)
- During-session logging (RPE + volume)
- Pre-session wellness check (cliënt app)
- Traffic light dashboard
- Week targets & progress bars
- Basic notities per sessie

### 📈 Fase 2: Expansion (2-3 maanden)
- Full training history & progressie grafieken
- Periodization planning tools
- Goal tracking & evaluation reminders
- Strava/wearable integratie
- Exercise library

---

## Business model

### Pricing (per PT)
- **Starter**: €39/maand (tot 15 cliënten)
- **Pro**: €69/maand (tot 40 cliënten)
- **Studio**: €149/maand (meerdere trainers, onbeperkt cliënten)

### Target market
- **Primary**: Zelfstandige PT's (10-30 actieve cliënten)
- **Secondary**: Kleine studios (2-5 trainers)
- **Nederland**: ~8.000 actieve personal trainers
- **Conversie**: 5% = 400 klanten × €50/maand = **€240k ARR**

---

## Waarom nu?

1. **Problem-solution fit**: Lewis heeft dit _nu_ nodig en betaalt ervoor
2. **Timing**: Post-COVID focus op preventie & evidence-based training
3. **Competition**: Niemand doet load monitoring goed voor deze markt
4. **Technology**: Serverless maakt het goedkoop om te schalen
5. **Distribution**: Fitness communities (Facebook groepen, conferenties)

<span class="highlight">We valideren met Lewis' eigen praktijk voordat we schalen</span>

---

## De vraag

**We zoeken:**
- Validatie van het concept
- Feedback op scope (te breed? te smal?)
- Interesse in pilot programma (gratis voor feedback)

**Next steps:**
1. Working prototype in Lovable (deze week)
2. 2 weken testen met Lewis
3. Refinement op basis van feedback
4. Soft launch bij 5 PT's in Lewis' netwerk

*Jullie input helpt ons de juiste richting te kiezen* 🎯

---

# Questions?

**Contact:**
Dimitri - [je contact info]

**Demo:**
[Link naar Lovable prototype zodra klaar]