# Agents.md

## Presentatie images
Dit document beschrijft de uitstraling van plaatjes die we voor developer.overheid.nl genereren. 

### Uitstraling
Het moet er tech savvy uit zien, met als doelgroep developers. 

- Het mag een soort hackerspace-achtige vibe hebben.
- Geef het een uitstraling van "open samenwerken", en open source software.

### Kleuren
Hiervoor de Rijkshuisstijl community gebruiken:
https://www.rijkshuisstijl-community.nl/design-tokens/color/

### Doel
De plaatjes hebben een ondersteunende functies bij slides in een presentatie van developer.overheid.nl.
## Slides stylen
Zet styling voor slides bij voorkeur in een herbruikbare Marp-class in `themes/don_main.css` (`section.<naam> …`) en gebruik die op de slide met `<!-- _class: <naam> -->` (combineer zo nodig, bv. `<!-- _class: invert browser -->`). Vermijd `<style scoped>`-blokken en inline styles in de markdown; gebruik hooguit een CSS-variabele op een element voor een slide-specifieke waarde. Beschrijf elke nieuwe class in een comment met een gebruiksvoorbeeld.
