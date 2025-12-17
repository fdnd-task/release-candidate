# Quality assurance

Aan het eind van deze sprint voldoet jullie project aan onderstaande punten.

## Workflow
Finale review van het GitHub Project Board:
- Zorg dat alle taken correct zijn geprioriteerd, afgerond en gedocumenteerd.
- Markeer alle resterende taken als "Done" of geef een duidelijke status (bijv. "Won't Fix" met uitleg).

### Branch management:
- Zorg dat alle branches worden samengevoegd in de dev branch. 
- Verwijder oude, ongebruikte branches om de repository schoon te houden. Alleen de main en dev blijven staan (dit zijn zogenaamde evergreen branches)
 
### Code reviews:
- Voer een laatste teamcode-review uit om consistentie, leesbaarheid en kwaliteit te waarborgen.
- Documenteer eventuele uitzonderingen of keuzes in de codebase.

### Documentatie:
Update de README met:
- Een duidelijke beschrijving van het project.
- Installatie-instructies.
- Gebruikershandleiding.
- Link naar de live versie (indien beschikbaar).
- Voeg een changelog toe waarin alle belangrijke wijzigingen worden vermeld.
- Zorg dat er een overdrachtsdocument is voor de opdrachtgever (`HANDOVER.md`).

### Deployment:
Zorg dat de toepassing live staat op een platform zoals Netlify, Vercel, of een eigen server (FDND Netlify). Test de live versie grondig en zorg dat deze overeenkomt met de verwachtingen van de opdrachtgever.

### Feedback verwerken:
Verzamel feedback van de opdrachtgever en pas eventuele laatste wijzigingen toe. Documenteer welke feedback is verwerkt en welke niet (met uitleg) in issues.


## CODE/DESIGN
### Code kwaliteit:
- Zorg dat de code voldoet aan de afgesproken code conventies 
- Verwijder overbodige of ongebruikte code.
- Optimaliseer de code waar mogelijk (bijv. DRY).

### Performance optimalisatie:
Controleer op laadtijden en optimaliseer afbeeldingen en assets. Test de toepassing met tools zoals Lighthouse om performance en toegankelijkheid te verbeteren.

### Responsiveness:
Controleer of de toepassing goed werkt op verschillende schermformaten (mobiel, tablet, desktop). Pas eventuele inconsistenties in het design aan.

### Complexe interacties:
- Zorg dat interactieve elementen (bijv. formulieren, animaties, drag-and-drop functionaliteit) intuïtief en foutloos werken.
- Check of alle mogelijke states geïmplementeerd zijn.
- Test edge cases en zorg dat er duidelijke foutmeldingen zijn waar nodig.

### Toegankelijkheid (a11y):
- Controleer of de toepassing voldoet aan WCAG-richtlijnen.
- Test de toepassing met een screenreader en zorg dat alle interactieve elementen toegankelijk zijn.
- Controleer of je goed rekening houd met preferences van de gebruiker.

### Design consistentie:
- Controleer of alle componenten consistent zijn qua stijl en gedrag.
- Zorg dat het kleurgebruik, typografie en spacing overeenkomen met het ontwerp.
- Check of CSS states in de huisstijl zijn vormgegeven (bijv. focus-visible)

### Versiebeheer van assets:
Zorg dat alle afbeeldingen, iconen en andere assets goed georganiseerd zijn in de repository. Verwijder ongebruikte assets.

### Feedback aan de gebruiker:
Zorg dat er duidelijke feedback is voor gebruikers als er interactie is met de website (bijv. bij filteren of posten van content).

### Overdraagbaarheid:
Zorg dat de code en structuur begrijpelijk zijn voor een nieuwe ontwikkelaar. Voeg inline comments toe waar nodig om complexe logica uit te leggen.

### Betekenisvolle content:
Verwijder alle dummy content en zorg voor betekenivolle content waar nodig (content first!) Controleer alle interface copy (labels, buttons, links etc)