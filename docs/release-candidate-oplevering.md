**Release Candidate afronden en overdraagbaar maken**

Tijdens de wrap-up van deze sprint zorgen jullie ervoor dat de repository van jullie project op FDND Agency overzichtelijk, compleet en overdraagbaar is. Een nieuw team kan dan in de volgende fase het project probleemloos oppakken.

---

### 1. **De repository opruimen**

1. **Opschonen van bestanden:**  
   - Verwijder ongebruikte bestanden en mappen uit de repository.
   - Controleer op testbestanden, tijdelijke bestanden (zoals `.DS_Store` of `node_modules`, als ze per ongeluk zijn gepusht) en verwijder deze.

2. **Consistente bestandsnamen en structuur:**  
   - Controleer of alle bestanden en mappen logisch geordend zijn en duidelijke namen hebben.
   - Zorg voor een consistente structuur binnen de `src` folder.

3. **Branch management:**  
   - Zorg dat de `release-candidate` branch op FDND Agency de meest actuele, stabiele en werkende versie van het project bevat.
   - Merge eventuele openstaande branches die klaar zijn, of sluit branches die niet meer nodig zijn.

---

### 2. **Documentatie bijwerken**

Een goede documentatie is cruciaal voor de overdraagbaarheid van het project. Controleer en/of maak de volgende onderdelen:

1. **About sectie** 
   - Zorg in voor een korte beschrijving van het project.
   - Zorg voor een link naar de live site.


2. **README.md:**  
   Zorg dat de `README.md` up-to-date is en de volgende informatie bevat:
   - **Korte projectbeschrijving:** Wat is het doel van het project en wie is de opdrachtgever?
   - **Technische stack:** Benoem gebruikte technologieën, zoals SvelteKit, het gekozen headless CMS, en andere belangrijke tools.
   - **Installatie-instructies:** Een stap-voor-stap uitleg voor het lokaal opzetten van het project. Bijvoorbeeld:
     ```bash
     git clone [repository-url]
     cd [project-map]
     npm install
     npm run dev
     ```
   - **Belangrijke scripts:** Leg uit wat de belangrijkste NPM-scripts zijn, bijvoorbeeld `npm run build`, `npm run dev`, en `npm run preview`.
   - **Link naar live omgeving:** Als er een gehoste versie is, voeg de URL toe.
   - **Teamleden:** Voeg de namen van de huidige teamleden en hun rol toe.

3. **CONTRIBUTING.md:**  
   Voeg een bestand toe met richtlijnen voor het bijdragen aan het project:
   - Hoe nieuwe branches moeten worden aangemaakt (bijv. `feature/[naam]`).
   - Hoe commits gemaakt moeten worden (bijv. “Gebruik duidelijke commitberichten in de vorm van: [type]: [beschrijving]”).
   - Hoe pull requests moeten worden aangemaakt en gereviewd.
   - Verwijs naar de in het project gebruikte code conventies 

4. **Technische documentatie:**  
   Voeg een aparte map toe (bijv. `docs/`) met technische documentatie:
   - Uitleg over hoe de code is gestructureerd.
   - Beschrijving van belangrijke componenten en hoe ze werken.
   - Configuratie van het CMS: Welke contenttypes zijn er, hoe zijn ze ingesteld, en hoe werkt de koppeling met de front-end?
   - Eventuele API-documentatie als er externe API’s worden gebruikt.

---

### 3. **Checklist voor overdraagbaarheid**

1. **Werkt de code lokaal?**  
   - Test of een nieuwe ontwikkelaar de repository zonder problemen kan clonen, installeren en starten.

2. **Is de live omgeving up-to-date?**  
   - Zorg dat de live omgeving de meest recente, goed werkend, versie bevat.

3. **Environment variables (env):**  
   - Controleer waar nodig, of alle benodigde `.env`-variabelen duidelijk gedocumenteerd zijn in een `.env.example` bestand. Bijvoorbeeld:
     ```
     API_BASE_URL=https://cms.example.com
     API_KEY=1234567890abcdef
     ```

4. **Openstaande issues en to-do’s:**  
   - Documenteer alle openstaande issues of taken in GitHub Issues op de FDND Agency repository.

5. **Dependencies updaten:**  
   - Controleer of alle npm-dependencies up-to-date zijn en of er geen kwetsbaarheden zijn met `npm audit`.

---

### 4. **Laatste sprint review en feedback**

- **Teamcontrole:** Laat elk teamlid een laatste check doen van de documentatie en code.
- **Feedback verwerken:** Vraag de opdrachtgever tijdens de sprint review om feedback over de huidige staat van het project (repository en live website) en documenteer opmerkingen voor het volgende team in items in het project board op FDND Agency.

---

### 5. **In- of opruimen en ordenen van het GitHub Project Board op FDND Agency**

0. **Verplaats items naar het FDND Agency Project Board**
   - Verplaats zonnodig alle items van het project board van de eigen github repo naar het betreffende project board op FDND Agency 

1. **Voltooide items archiveren:**  
   - Controleer alle items op het project board.
   - Verplaats voltooide items naar de kolom "Done" (of een soortgelijke kolom) en sluit deze indien mogelijk. 

2. **Openstaande taken ordenen:**  
   - Zorg dat openstaande taken duidelijk zijn en verplaats deze naar de ToDo kolom in het FDND Agency project board.
   - Voeg duidelijke beschrijvingen toe aan taken zodat het helder is wat er nog moet gebeuren.
   - Als het goed is staan er geen taken meer in de "In Progress", "Ready for Review" en "Done" kolom ⚠️
     
     M.a.w. er staan geen taken meer open, als het goed is ⚠️

3. **Labels en assignees bijwerken:** 
   - Geef taken met labels een MoSCoW prioriteit.
   - Voeg andere relevante labels toe aan kaarten (bijv. "Bug", "Feature", "Improvement").
   - Zorg dat kaarten zonder assignee worden vrijgelaten of duidelijk maken dat ze nog opgepakt moeten worden.
  

4. **Documentatie koppelen:**  
   - Voeg links naar gerelateerde documentatie (bijv. Commits, PR, README of Wiki) toe aan de taken waar nodig.

---

### 6. **Handover documenteren**

Schrijf een korte samenvatting in de repository (bijv. `handover.md`) waarin jullie het project introduceren aan de volgende groep:
- Wat is de huidige status van het project?
- Wat zijn de belangrijkste features die al werken?
- Wat zijn de grootste aandachtspunten of uitdagingen?
- Wat wordt aangeraden als eerste stap voor het volgende team?

---

