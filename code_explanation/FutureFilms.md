
# HTML Tag

```HTML
`<html lang="DU">`
```


- **Beschrijving**: De `<html>` tag omsluit alle inhoud op de webpagina (behalve de `<!DOCTYPE>` tag). De `lang` attribuut binnen de `<html>` tag specificeert de primaire taal van de documentinhoud, wat helpt bij zoekmachineoptimalisatie en toegankelijkheid.
- **Attributen**:
    - `lang="DU"`: Geeft aan dat de inhoud van de webpagina voornamelijk in het Nederlands is geschreven.


# Doctype

```html
<!DOCTYPE html>
```

- **Beschrijving**: De `<!DOCTYPE>` declaratie definieert het documenttype en de versie van HTML die gebruikt wordt. In dit geval specificeert het HTML5, de nieuwste versie. Deze declaratie moet bovenaan elk HTML-document staan en is noodzakelijk om ervoor te zorgen dat de browser de content correct rendert.
- **Gebruik**: Plaats dit altijd als eerste regel in je HTML-bestanden om compatibiliteitsproblemen met browsers te voorkomen.



# HTML `<head>` Uitleg

Het `<head>` element van een HTML-pagina bevat metadata, links naar stylesheets, scripts, en andere essentiële resources die de browser nodig heeft om de pagina correct weer te geven en te functioneren. Hieronder volgt een gedetailleerde uitleg van elk element binnen de `<head>` sectie van je HTML-document.
## Head Element


```html
<head>     ... </head>

```


- **Beschrijving**: Het `<head>` element bevat metadata, links naar externe bronnen zoals CSS-bestanden, en andere scripts die nodig zijn voor de website. De inhoud van de `<head>` is niet zichtbaar voor de gebruiker, maar speelt een cruciale rol in de functionaliteit van de webpagina.

## Meta Charset

```html

<meta charset="UTF-8"/>
```



- **Beschrijving**: Deze meta tag specificeert de karakter encoding voor de HTML-document. UTF-8 is een universele karakter set die alle tekens van alle geschreven talen ondersteunt, waardoor het de meest gebruikte encoding op het web is.
- **Gebruik**: Voeg deze tag toe aan je `<head>` om te garanderen dat alle tekens correct worden weergegeven.

## Meta Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- **Beschrijving**: Deze tag controleert hoe een webpagina wordt geschaald en weergegeven op verschillende apparaten, zoals mobiele telefoons en tablets. Het is cruciaal voor het bouwen van responsieve websites.
- **Attributen**:
    - `name="viewport"`: Geeft aan dat de viewport eigenschappen volgen.
    - `content="width=device-width, initial-scale=1.0"`: Zet de breedte van de viewport gelijk aan de schermbreedte van het apparaat en de initiële zoomniveau op 1.0.

## Link naar CSS-bestand

htmlCopy code

`<link rel="stylesheet" href="style.css">`

- **Beschrijving**: Dit element linkt een extern CSS-bestand aan het HTML-document. Het stelt de stijlen in voor hoe elementen op de pagina moeten worden weergegeven.
- **Attributen**:
    - `rel="stylesheet"`: Definieert het type relatie tussen het huidige document en het gelinkte document. Hier wordt aangegeven dat het gelinkte document een stylesheet is.
    - `href="style.css"`: Specificeert het pad naar het CSS-bestand.

## Title

htmlCopy code

`<title>Jukebox Future Films</title>`

- **Beschrijving**: De `<title>` tag specificeert de titel van de webpagina, die getoond wordt in de titelbalk van de browser of op de tab van de pagina. Het is ook belangrijk voor SEO en voor gebruikerservaring.
- **Gebruik**: Zorg dat elke pagina een unieke en beschrijvende titel heeft die de inhoud van de pagina goed samenvat.

----

# HTML `<body>`, `<header>`, `<main>` Uitleg

Het `<main>` element is bedoeld voor de primaire inhoud van het document.
## Main Element

```html
<main>     ... </main>
```



- **Beschrijving**: Het `<main>` element speelt een belangrijke rol in de documentstructuur door de hoofdinhoud te omringen. Dit verbetert de toegankelijkheid door screen readers en andere hulpmiddelen toe te staan om snel de hoofdinhoud van de pagina te identificeren.
- **Gebruik**: Bevat inhoud die uniek is voor die pagina en niet herhaald wordt over pagina's heen, zoals navigatiebalken of voetteksten.

## Section Header

```html
<h2>Instructie FutureFilms spel</h2>
```

- **Beschrijving**: De `<h2>` tag dient als een hoofdkop voor een sectie binnen `<main>`. Het geeft de titel of het hoofdonderwerp van de inhoud die volgt.
- **Gebruik**: Essentieel voor zowel SEO als toegankelijkheid, omdat het structuur biedt en het belang van de secties eronder aangeeft.

## Paragraaf
```html
<p>Je kiest verschillende niveaus.</p>
```

- **Beschrijving**: De `<p>` tag wordt gebruikt om een paragraaf tekst weer te geven. In dit geval beschrijft het kort de functionaliteit of het doel van de spelsectie.
- **Gebruik**: Gebruikt voor het toevoegen van tekstuele inhoud die de gebruiker informeert of instrueert over de interactie met de webpagina.

## Div Container voor Thema Selectie

```html
`<div id="theme-selection">     ... </div>`
```


- **Beschrijving**: Een `<div>` element fungeert hier als een container voor de themaselectie sectie. Het `id` attribuut wordt gebruikt om deze specifieke `<div>` te identificeren en mogelijk te stylen of te manipuleren met CSS en JavaScript.
- **Attributen**:
    - `id="theme-selection"`: Dit unieke ID kan worden gebruikt voor styling of om het element te targeten met JavaScript.

## Kop voor Thema's

```html
<h3>Kies thema's en niveaus:</h3>

```

- **Beschrijving**: Deze `<h3>` tag biedt een subkop onder de hoofdkop, die verder detailleert wat er in deze sectie van de inhoud verwacht kan worden.

## Formulier voor Thema's

```html
`<form id="themesForm">     
<!-- Dynamisch ingevulde checkboxes komen hier --> 
</form>`
```

- **Beschrijving**: Het `<form>` element wordt gebruikt om gebruikersinput te verzamelen. In dit geval zal het formulier dynamisch gevulde checkboxes bevatten die de gebruiker kan selecteren.
- **Attributen**:
    - `id="themesForm"`: Een uniek ID voor het formulier, wat handig is voor referentie in JavaScript.

## Knop om de Quiz te Starten

htmlCopy code
```html
`<button onclick="submitSelection(event)">Start de Quiz</button>`
```


- **Beschrijving**: Deze `<button>` tag is een interactief element waarmee de gebruiker de geselecteerde thema's en niveaus kan indienen.
- **Attributen**:
    - `onclick="submitSelection(event)"`: Dit JavaScript event handler wordt aangeroepen wanneer de gebruiker op de knop klikt. Het roept de functie `submitSelection` aan, die de actie verwerkt.

---

Deze uitleg kan worden gebruikt in een Markdown-bestand om de structuur en functionaliteit van de `<main>` sectie van je webpagina uit te leggen. Dit helpt bij het documenteren en begrijpen van de belangrijke onderdelen van de pagina.

# JavaScript Code Uitleg

Het `<script>` gedeelte van je webpagina is verantwoordelijk voor het dynamisch beheren van gebruikersinteracties, zoals het selecteren van thema's en niveaus. Hieronder volgt een gedetailleerde uitleg van de initiële variabelen en hun doel binnen je script.

## Constanten en Variabelen

```jsx
const THEMES = [
    'Mobiliteit', 
    'Energietransitie', 
    'Klimaatverandering',
    'Watermanagement',
    'Grondstoffen', 
    'Voedselinnovatie', 
    'Biodiversiteit',
    'InternetofThings'
];
```



- **Beschrijving**: Een array `THEMES` die de verschillende thema's bevat waaruit een gebruiker kan kiezen. Deze thema's vertegenwoordigen de categorieën van inhoud of vragen voor de quiz of het spel.
- **Gebruik**: Gebruikt om dynamisch formulierelementen (checkboxes) te genereren voor elk thema.

```jsx
const LEVELS = ['1', '2', '3'];

```

- **Beschrijving**: Een array `LEVELS` die de moeilijkheidsgraden of niveaus representeert die beschikbaar zijn binnen elk thema.
- **Gebruik**: Gebruikt in combinatie met `THEMES` om voor elk thema meerdere niveauselecties te bieden.


```jsx
const MAX_SELECTION = 8;
```


- **Beschrijving**: Een constante `MAX_SELECTION` die het maximale aantal selecties bepaalt dat een gebruiker kan maken.
- **Gebruik**: Helpt bij het beperken van de hoeveelheid geselecteerde opties om overbelasting van keuzes of onbalans in de spellogica te voorkomen.

```jsx
let selectedCheckboxes = [];
```


- **Beschrijving**: Een array `selectedCheckboxes` die de ID's van alle aangevinkte checkboxes bijhoudt.
- **Gebruik**: Staat centraal in het beheren van de staat van de gebruikerselecties, inclusief het toevoegen en verwijderen van selecties op basis van gebruikersinteracties.

  Zeker! Hieronder volgt een stap-voor-stap uitleg van de JavaScript code die je gebruikt om dynamisch checkboxes te genereren op basis van de gedefinieerde thema's en niveaus:

## De `window.onload` Functie

```jsx
window.onload = function() {

                    const form = document.getElementById('themesForm');

                    THEMES.forEach((theme) => {

                        const div = document.createElement('div');

                        div.className = 'theme-row';

                        const label = document.createElement('label');

                        label.textContent = theme + ': ';

                        div.appendChild(label);

                        LEVELS.forEach((level) => {

                            const input = document.createElement('input');

                            input.type = 'checkbox';

                            input.id = theme + level;

                            input.name = theme;

                            input.value = level;

                            input.addEventListener('change', handleCheckboxChange);

                            const levelLabel = document.createElement('label');

                            levelLabel.htmlFor = input.id;

                            levelLabel.textContent = level;

                            div.appendChild(input);

                            div.appendChild(levelLabel);

                        });

                        form.appendChild(div);

                    });

                };
```

```jsx
window.onload = function() {     
const form = document.getElementById('themesForm');     ... };
```

- **Beschrijving**: Deze functie wordt uitgevoerd zodra de gehele webpagina inclusief al haar afhankelijke bronnen (zoals afbeeldingen en CSS) volledig is geladen.
- **Gebruik**: Hier wordt een verwijzing naar het formulier met de ID `themesForm` opgehaald. Dit formulier zal gebruikt worden om de dynamisch gegenereerde checkboxes in te plaatsen.

### Loop over de `THEMES` Array

```jsx
THEMES.forEach((theme) => {     ... });
```

- **Beschrijving**: De `forEach` methode wordt toegepast op de `THEMES` array. Voor elk thema in de array voert de functie de volgende stappen uit.
- **Gebruik**: Deze lus dient om elementen te creëren voor elk thema dat in de `THEMES` array is gedefinieerd.
>Een uitgebreidere uitleg hier: [[For Each]]
#### Creëer een Container `div` per Thema
```jsx
const div = document.createElement('div'); div.className = 'theme-row';
```

- **Beschrijving**: Voor elk thema wordt een nieuw `div` element gecreëerd. Dit dient als een container voor de checkboxes en hun labels.
- **Gebruik**: De class `theme-row` wordt toegewezen om eventueel CSS-stijlen toe te passen specifiek voor elke rij van het thema.

#### Creëer en Voeg een Label Toe

```jsx
const label = document.createElement('label'); label.textContent = theme + ': '; div.appendChild(label);
```
- **Beschrijving**: Er wordt een `label` element gecreëerd dat de naam van het thema toont.
- **Gebruik**: Het label toont de gebruiker welk thema de volgende reeks checkboxes vertegenwoordigt.
- Uitgebreide uitleg hier: [[CreateElement with append child]]

## For Each level

```jsx
LEVELS.forEach((level) => {
    ...
});

```

- **Gebruik**: Er wordt binnen de For loop van elke thema geitereerd over alle levels, dus van 1 tot 3.

## create element
```jsx
const input = document.createElement('input');
input.type = 'checkbox';
input.id = theme + level;
input.name = theme;
input.value = level;
```

- **Element**: Hier wordt een nieuw `<input>` element gecreëerd.
- **Eigenschappen**:
    - `type='checkbox'`: Specificeert dat het een checkbox moet zijn.
    - `id=theme + level`: Geeft het element een unieke ID, samengesteld uit het thema en het niveau (bv. "Mobiliteit1").
    - `name=theme`: Alle checkboxes van hetzelfde thema delen dezelfde `name`, wat helpt bij het groeperen van de data voor verzending of verwerking.
    - `value=level`: Stelt de waarde in die het input element zal doorsturen wanneer het wordt gesubmit.

## Eventlistener
```jsx
input.addEventListener('change', handleCheckboxChange);

```

- **Wat het doet**: Voegt een event listener toe die de functie `handleCheckboxChange` aanroept elke keer dat de staat van de checkbox verandert (aangevinkt/uit-gevinkt).
- **Doel**: Beheert de logica voor wat er gebeurt als check-boxes worden aangevinkt of uit-gevinkt, zoals het beperken van het aantal aangevinkte check-boxes.

```jsx

const levelLabel = document.createElement('label');
levelLabel.htmlFor = input.id;
levelLabel.textContent = level;

```
- **Wat het doet**: Voegt de nieuw gecreëerde checkbox en label toe aan een container `div`.
- **Doel**: Structureert de elementen visueel en logisch op de pagina.
- De htmlFor zorgt ervoor dat als de gebruiker op de levels klikt (1, 2 of 3) er ook wordt uit of aangevinkt
```jsx
form.appendChild(div);

```
- **Wat het doet**: Voegt de volledige `div` (die de checkboxes en labels bevat) toe aan het hoofdformulier (`themesForm`).
- **Doel**: Zorgt ervoor dat al deze elementen deel uitmaken van het formulier dat uiteindelijk zal worden gebruikt voor data-verzameling of andere acties.

# Handle Check-box change 
```jsx
function handleCheckboxChange(event) {
    const { id, checked } = event.target;
    if (checked) {
        selectedCheckboxes.push(id);
        if (selectedCheckboxes.length > MAX_SELECTION) {
            const toUncheck = selectedCheckboxes.shift();
            document.getElementById(toUncheck).checked = false;
        }
    } else {
        selectedCheckboxes = selectedCheckboxes.filter(selectedId => selectedId !== id);
    }
}

```

## Parameter: `event`

- **Beschrijving**: Dit is het event object dat automatisch wordt doorgegeven aan de event handler wanneer een event (zoals een verandering in de checkbox) optreedt. Het object bevat informatie over het event, inclusief welk element het event heeft getriggerd.
## Extractie van Data: `const { id, checked } = event.target;`

- **Wat het doet**: Deze regel gebruikt destructuring om de `id` en `checked` eigenschappen direct uit `event.target` te halen. `event.target` verwijst naar het DOM-element dat het event heeft getriggerd, in dit geval de checkbox.
    - `id`: De ID van de checkbox.
    - `checked`: Een boolean waarde die aangeeft of de checkbox is aangevinkt (`true`) of uitgevinkt (`false`).
## Logica aanvinken
```jsx
if (checked) {
    selectedCheckboxes.push(id);
    if (selectedCheckboxes.length > MAX_SELECTION) {
        const toUncheck = selectedCheckboxes.shift();
        document.getElementById(toUncheck).checked = false;
    }
}

```

**Als de Checkbox Aangevinkt is**:

- **Toevoegen aan Array**: De ID van de checkbox wordt toegevoegd aan de `selectedCheckboxes` array, wat een lijst bijhoudt van alle aangevinkte checkboxes.
- **Controleren op Maximum Selectie**: Er wordt gecontroleerd of het totale aantal geselecteerde checkboxes groter is dan de toegestane maximum (`MAX_SELECTION`).
- **Eerste Checkbox Uitvinken**: Als het maximum overschreden wordt, wordt de eerste checkbox in de lijst automatisch uitgevinkt. Dit wordt gedaan door:
    - `shift()`: Verwijdert het eerste element uit de array en retourneert dat element (ID van de eerste geselecteerde checkbox).
    - `getElementById(toUncheck).checked = false`: Vindt het checkbox-element met dat ID in het DOM en zet de `checked` eigenschap op `false` om het uit te vinken.

```jsx
else {
    selectedCheckboxes = selectedCheckboxes.filter(selectedId => selectedId !== id);
}

```

**Als de Checkbox Uitgevinkt is**:

- **Filter de Array**: De array `selectedCheckboxes` wordt gefilterd om alle instances van de uit-gevinkte checkbox te verwijderen. Dit gebeurt via de `filter()` methode die een nieuwe array creëert met alle elementen die voldoen aan de voorwaarde (in dit geval, alle ID's die niet gelijk zijn aan de ID van de checkbox die net is uit-gevinkt).
- Dit zorgt ervoor dat de `selectedCheckboxes` array up-to-date blijft met alleen de ID's van de check-boxes die momenteel zijn aangevinkt. Belangrijk om op te merken dat deze else op gelijke hoogte zit van if checked, gaat dus om uit-gevinkte check-boxes.

# Submit Selection (event)

```jsx
function submitSelection(event) {

            event.preventDefault();

            const selectedThemes = {};

            THEMES.forEach((theme) => {

                selectedThemes[theme] = [];

                LEVELS.forEach((level) => {

                    const checkboxId = theme + level;

                    if (selectedCheckboxes.includes(checkboxId)) {

                        selectedThemes[theme].push(level);

                    }

                });

            });

  

             // Filter out themes that do not have any levels selected

            Object.keys(selectedThemes).forEach(theme => {

             if (selectedThemes[theme].length === 0) {

                    delete selectedThemes[theme];

                }

            });

  

  

            if (Object.keys(selectedThemes).length === 1) {

                // Vind een willekeurig thema om toe te voegen dat niet het al geselecteerde thema is

                const beschikbareThemas = THEMES.filter(t => !selectedThemes.hasOwnProperty(t));

                const randomThema = beschikbareThemas[Math.floor(Math.random() * beschikbareThemas.length)];

                // Voeg dit thema toe met alleen niveau '1'

                selectedThemes[randomThema] = ['1'];

            }

  

            opslaanGeselecteerdeVideos(selectedThemes); // Aanroepen van de nieuwe functie.

            window.location.href = './videoplayer.html';

        }
```

## Prevent Default
```jsx
event.preventDefault();

```

- **Wat het doet**: Deze methode stopt de standaard actie die behoort bij het event, in dit geval het versturen van een formulier. Zonder deze regel zou het formulier normaal worden verzonden naar de server of naar een andere pagina zoals gespecificeerd in de `action` attribuut van het formulier.
- **Doel**: Zorgt ervoor dat de pagina niet herlaadt, wat je in staat stelt om de controle over te nemen en de data programmatisch te verwerken.

## Stap 2: Initialiseren van een Object voor Geselecteerde Thema's

```jsx
const selectedThemes = {};

```

- **Wat het doet**: Maakt een leeg object aan waarin de geselecteerde niveaus voor elk thema zullen worden opgeslagen.
- **Doel**: Dient als een datastructuur om de selecties van gebruikers georganiseerd te houden.

## Stap 3: Verzamelen van Selecties
```jsx
THEMES.forEach((theme) => {
    selectedThemes[theme] = [];
    LEVELS.forEach((level) => {
        const checkboxId = theme + level;
        if (selectedCheckboxes.includes(checkboxId)) {
            selectedThemes[theme].push(level);
        }
    });
});

```

- **Wat het doet**: Doorloopt elk thema en elk niveau om te bepalen welke checkboxes zijn aangevinkt.
    - Voor elk thema initialiseert het een lege array.
    - Voor elk niveau binnen een thema bouwt het een ID op basis van het thema en niveau.
    - Controleert of het ID van de checkbox in de lijst `selectedCheckboxes` staat (een lijst die alle aangevinkte checkboxes bevat).
- **Doel**: Slaat elk geselecteerd niveau op onder het overeenkomstige thema in het `selectedThemes` object.

Voor een meer uitgebreide uitleg met ingevulde iteratie zie [[Itereren over check-boxes]]

## Stap 4: Verwijderen van lege uit-gevinkte themas uit selectedThemes

```jsx
    Object.keys(selectedThemes).forEach(theme => {

             if (selectedThemes[theme].length === 0) {

                    delete selectedThemes[theme];

                }

            });

```

1. **Object.keys(selectedThemes)**: Deze functie genereert een array van sleutels uit het `selectedThemes` object. De sleutels vertegenwoordigen de namen van de thema's die zijn opgeslagen in het object.
    
2. **forEach(theme => {...})**: Deze methode wordt gebruikt om door elke sleutel (themanaam) in de array van sleutels te itereren. Voor elke iteratie is `theme` de huidige sleutelwaarde in de array. De functie binnen `forEach()` voert een bepaalde actie uit voor elke sleutel.
    
3. **if (selectedThemes[theme].length === 0)**: Binnen de `forEach()` functie, is er een `if`-statement die controleert of de lengte van de array die gekoppeld is aan de huidige sleutel (`theme`) gelijk is aan 0. Met andere woorden, het controleert of de array leeg is.
	1. In javascript het verschil tussen == en === : beide vergelijkingsoperatoren die worden gebruikt om waarden te vergelijken, maar ze werken op verschillende manieren en het is belangrijk om het verschil te begrijpen om fouten in je code te voorkomen. Zie uitgebreide uitleg [[vergelijksoperatoren in Javascript]]


```jsx
if (Object.keys(selectedThemes).length === 1) {

                // Vind een willekeurig thema om toe te voegen dat niet het al geselecteerde thema is

                const beschikbareThemas = THEMES.filter(t => !selectedThemes.hasOwnProperty(t));

                const randomThema = beschikbareThemas[Math.floor(Math.random() * beschikbareThemas.length)];

                // Voeg dit thema toe met alleen niveau '1'

                selectedThemes[randomThema] = ['1'];

            }
   // selected themes structuur = {'Mobiliteit':['1','2']}
```
### Overzicht van de Code

De code in het if-statement controleert of er precies één thema is geselecteerd in `selectedThemes`. Als dit het geval is, voert de code een reeks bewerkingen uit om een nieuw, willekeurig thema (dat niet reeds geselecteerd is) toe te voegen aan `selectedThemes` met een specifiek niveau ('1').

### Gedetailleerde Uitleg

1. **If-statement Conditielogica**: 
	1. if (Object.keys(selectedThemes).length === 1) {
	    Dit controleert of het aantal sleutels (themanaam) in het object `selectedThemes` precies één is. De functie `Object.keys(selectedThemes)` genereert een array van alle sleutels (thema's) in het object, en `.length` telt deze sleutels. De `===` operator zorgt ervoor dat deze vergelijking strikt is, wat betekent dat het type (in dit geval een getal) en de waarde beide overeen moeten komen.
    
2. **Filter Beschikbare Thema's**:
	1. `const beschikbareThemas = THEMES.filter(t => !selectedThemes.hasOwnProperty(t));`
	2. `THEMES` is een array van alle mogelijke thema's. De `filter()` methode creëert een nieuwe array `beschikbareThemas` bestaande uit thema's die niet reeds geselecteerd zijn in `selectedThemes`. `selectedThemes.hasOwnProperty(t)` controleert of het thema `t` een eigenschap is van `selectedThemes`. De uitdrukking `!selectedThemes.hasOwnProperty(t)` is waar voor thema's die **niet** reeds geselecteerd zijn.
	3. Zie een voorbeeld van hoe dit gebeurt als selectedThemes dit is {'Mobiliteit':['1']}: [[Filter met hasOwnProperty]]
	
    
3. **Selecteer een Willekeurig Thema**:
    
    javascriptCopy code
    
    `const randomThema = beschikbareThemas[Math.floor(Math.random() * beschikbareThemas.length)];`
    
    Hier wordt een willekeurig thema gekozen uit de `beschikbareThemas` array. `Math.random()` genereert een willekeurig getal tussen 0 en 1 (exclusief 1), en dit getal wordt vermenigvuldigd met de lengte van de `beschikbareThemas` array. `Math.floor()` rondt dit getal af naar beneden om een geheel getalindex te krijgen, wat gebruikt wordt om een element uit de array te selecteren.
    
4. **Voeg het Willekeurige Thema Toe**:
    
    javascriptCopy code
    
    `selectedThemes[randomThema] = ['1'];`
    
    Tot slot wordt het willekeurig gekozen thema toegevoegd aan het `selectedThemes` object, met een array die alleen het niveau '1' bevat. Dit betekent dat dit thema nu actief is met niveau '1'.
    

### Samenvatting

De code voert een eenvoudige maar effectieve taak uit: als er precies één thema geselecteerd is, voegt het een nieuw, willekeurig, niet eerder geselecteerd thema toe, specifiek met niveau '1'. Dit helpt om diversiteit in de themaselectie te behouden zonder de bestaande selectie te overschrijven. Dit kan nuttig zijn in toepassingen zoals het dynamisch genereren van inhoud gebaseerd op gebruikersvoorkeuren of het zorgen voor een gebalanceerde vertegenwoordiging van thema's.

## Stap 4: Opslaan van Geselecteerde Video's

```jsx
opslaanGeselecteerdeVideos(selectedThemes);

```

- **Wat het doet**: Roept een functie aan die vermoedelijk de geselecteerde thema's en niveaus gebruikt om video's op te slaan of te verwerken.
- **Doel**: Afhandeling van de logica die betrekking heeft op de verdere verwerking van de selecties, zoals het klaarzetten van video's voor weergave.

## Stap 5: Doorsturen naar een Andere Pagina
```jsx
window.location.href = './videoplayer.html';

```
- **Wat het doet**: Verandert de huidige locatie van het venster naar een nieuwe URL, in dit geval naar de `videoplayer.html` pagina.
- **Doel**: Na succesvolle verwerking van het formulier en het instellen van de video's, leidt deze regel de gebruiker om naar een pagina waar de video's waarschijnlijk zullen worden getoond.
# Functie opslaan geselecteerde videos
```jsx

function opslaanGeselecteerdeVideos(selectedThemes) {
    const eindLijst = [];
    const themaLijsten = {}; // Tijdelijke opslag voor video's per thema en niveau

    // Stap 1: Verzamel alle beschikbare video's per thema en niveau
    Object.keys(selectedThemes).forEach(theme => {
        themaLijsten[theme] = {};
        selectedThemes[theme].forEach(level => {
            if (beschikbareVideos[theme] && beschikbareVideos[theme][level]) {
                if (!themaLijsten[theme][level]) {
                    themaLijsten[theme][level] = [];
                }
                themaLijsten[theme][level] = themaLijsten[theme][level].concat(beschikbareVideos[theme][level]);
            }
        });
    });

    // Stap 2: Selecteer 8 willekeurige video's afwisselend per thema en niveau
    const themaKeys = Object.keys(themaLijsten).filter(theme => Object.keys(themaLijsten[theme]).some(level => themaLijsten[theme][level].length > 0));
    let themaIndex = 0; // Startpunt voor thema-selectie

    while (eindLijst.length < 8 && themaKeys.length > 0) {
        const thema = themaKeys[themaIndex % themaKeys.length];
        const niveauKeys = Object.keys(themaLijsten[thema]);
        let niveauIndex = niveauKeys.length > 1 ? (niveauIndexen[thema] || 0) : 0; // Gebruik de opgeslagen index voor dit thema
        const niveau = niveauKeys[niveauIndex];
        const videos = themaLijsten[thema][niveau];

        if (videos.length > 0) {
            const videoIndex = Math.floor(Math.random() * videos.length);
            eindLijst.push(videos.splice(videoIndex, 1)[0]);
        }

        // Update de niveauIndex voor het huidige thema
        if (niveauKeys.length > 1) {
            niveauIndexen[thema] = (niveauIndex + 1) % niveauKeys.length;
        }

        // Verwijder thema als er geen video's meer zijn
        if (videos.length === 0) {
            themaKeys.splice(themaIndex % themaKeys.length, 1);
        } else {
            themaIndex++;
        }
    }

    console.log(eindLijst);
    localStorage.setItem('videoLijst', JSON.stringify(eindLijst)); // Opslaan in localStorage
}

```

## Parameter


```jsx
function opslaanGeselecteerdeVideos(selectedThemes) {
    const themaLijsten = {};
    const eindLijst = [];

    // Stap 1: Genereer voor elk thema en niveau een lijst met alle mogelijke video's.
    // Stap 2: Zorg voor een afwisselende selectie van video's uit elk thema.
    // Opslaan in localStorage.
}

```
**Parameter**: `selectedThemes` — een object dat per thema de geselecteerde niveaus bevat. Bijvoorbeeld: `{ Mobiliteit: ['1', '2'], Klimaatverandering: ['3'] }`.

```jsx
Object.keys(selectedThemes).forEach(theme => {
        themaLijsten[theme] = {};
        selectedThemes[theme].forEach(level => {
            if (beschikbareVideos[theme] && beschikbareVideos[theme][level]) {
                if (!themaLijsten[theme][level]) {
                    themaLijsten[theme][level] = [];
                }
                themaLijsten[theme][level] = themaLijsten[theme][level].concat(beschikbareVideos[theme][level]);
            }
        });
    });

```

- **themaLijsten**: Een hulpmiddel dat vermoedelijk bedoeld is om te gebruiken, maar in dit gedeelte van de code wordt het niet gebruikt. Het zou kunnen dienen als opslag voor een evenwichtigere selectie van video's uit elk thema.
- **eindLijst**: Een array die wordt gebruikt om alle video's die overeenkomen met de geselecteerde thema's en niveaus op te slaan.
- **Logica**:
    - `Object.keys(selectedThemes).forEach(...)`: Itereert door elk thema in `selectedThemes`.
    - Voor elk thema en elk niveau, checkt de code of er bijbehorende video's zijn in `beschikbareVideos`. Als die er zijn, worden ze toegevoegd aan `eindLijst`.
    - Volledige iteratie met in {Mobiliteit: \['1']} is hier: [[Itereren over selected themes]]
    - Volledig uitgebreide uitleg van elke line of code: 

```jsx
const themaKeys = Object.keys(themaLijsten).filter(theme => Object.keys(themaLijsten[theme]).some(level => themaLijsten[theme][level].length > 0));



themaLijsten = {
    "Mobiliteit": {
        "1": ["Mobiliteit_1_1.mp4", "Mobiliteit_1_2.mp4"]
    }
} /*voorbeeld van themalijsten*/

```

# Aanmaken van Themakeys 


1. **`Object.keys(themaLijsten)`**:

    - Deze functie haalt alle sleutels (d.w.z., themanamen) uit het `themaLijsten` object en geeft deze terug als een array. Bijvoorbeeld, als `themaLijsten` de thema's "Mobiliteit" en "Klimaatverandering" bevat, zou dit resultaat in een array zijn zoals `["Mobiliteit", "Klimaatverandering"]`.
2. **`.filter(theme => ...)`**:
    
    - De `filter` functie wordt toegepast op de array van themasleutels. Deze functie loopt door elke `theme` in de array heen en gebruikt een testfunctie om te bepalen of het thema in de gefilterde lijst moet blijven. Alleen de thema's die voldoen aan de voorwaarde binnen de functie worden behouden.
3. **`Object.keys(themaLijsten[theme])`**:
    
    - Voor elk thema wordt opnieuw `Object.keys` aangeroepen, dit keer op `themaLijsten[theme]`, om alle sleutels (niveaus) van dat specifieke thema te verkrijgen. Dit geeft een array terug van niveaus die gedefinieerd zijn voor het huidige thema binnen `themaLijsten`.
4. **`.some(level => themaLijsten[theme][level].length > 0)`**:
    
    - De `some` functie wordt toegepast op de array van niveausleutels. `some` is een testfunctie die waar teruggeeft zodra het ten minste één element vindt dat voldoet aan de voorwaarde binnen de functie. In dit geval:
        - `level => themaLijsten[theme][level].length > 0`: Deze functie controleert of het array van video's op een bepaald niveau (`themaLijsten[theme][level]`) één of meer items bevat. Als dit waar is voor ten minste één niveau binnen een thema, geeft `some` waar terug, waardoor het huidige thema wordt behouden in de gefilterde lijst `themaKeys`.
        - Belangrijk op te merken is dat deze functie controleert én dat er een level is én dat dit level beschikbare videos heeft. Pas dan wordt de video meegenomen.
## Conditionele while loop

```jsx
while (eindLijst.length < 8 && themaKeys.length > 0)
```
	1.Eindlijst.length < 8: zolang de eindlijst als array niet meer dan 8 waarden heeft;
	2.Themaykeys zijn alle thema's waarvan tenminste 1 van de 3 levels een beschikbare video heeft, de while loop gaat door zolangs deze array meer dan 1 thema heeft.

```jsx
const thema = themaKeys[themaIndex % themaKeys.length];
```
	1. Hier wordt een constante genaamd thema gevormd op basis van een deling vanuit de modulo operator waarbij themaindex, die start bij 0 gedeeld wordt door de lengte van thema keys
[[Modulo in Javascript]]

```jsx
const niveauKeys = Object.keys(themaLijsten[thema]);
```
	1.Pakt hier alle beschikbare niveaus van elke beschikbare themas als een aray of strings
	2.Niet te vergeten: themalijsten is het resultaat van de gebruikersselectie in afweging met de video's die binnen deze selectie beschikbaar worden gestelt door de host

```jsx
   let niveauIndex = niveauKeys.length > 1 ? (niveauIndexen[thema] || 0) : 0;
```

- **Doel**: Deze regel code bepaalt de waarde van `niveauIndex`, die wordt gebruikt om een specifiek niveau te selecteren binnen een thema voor verdere verwerking.
- **Voorwaarde**: Het gebruikt een ternaire operator, die een kortere vorm van een if-else statement is. : `condition ? exprIfTrue : exprIfFalse`

1. **Conditionele Check** (`niveauKeys.length > 1`):
    
    - **`niveauKeys.length`** geeft het aantal niveaus binnen het huidige thema weer. `niveauKeys` is een array die alle niveau sleutels bevat die uit `themaLijsten[thema]` zijn opgehaald.
    - Deze conditie controleert of er meer dan één niveau aanwezig is binnen het huidige thema.
2. **Waarheidsevaluatie** (`(niveauIndexen[thema] || 0)`):
    
    - **`niveauIndexen[thema]`** is een toegangspunt in een object `niveauIndexen` dat de huidige index voor elk thema opslaat. Dit stelt je in staat om bij te houden op welk niveau je bent binnen elk thema als je door meerdere niveaus itereert.
    - **`|| 0`** is een logische OR-operator die wordt gebruikt als fail-safe. Als `niveauIndexen[thema]` `undefined` of `null` is (wat kan gebeuren als er nog geen index is opgeslagen voor dat thema), zal het de waarde `0` gebruiken. Dit zorgt ervoor dat je altijd begint bij index 0 als er geen bestaande index is.
3. **Vals Evaluatie** (`0`):
    
    - Als er slechts één niveau is (`niveauKeys.length <= 1`), stelt deze code `niveauIndex` in op `0`. Dit betekent dat je automatisch het enige beschikbare niveau selecteert.
    - Als laatste hier het verschil tussen let en const in javascript [[Let en const]]

#### Samenvatting en Gebruik

Deze regel is ontworpen om flexibel te zijn en automatisch aan te passen aan de hoeveelheid beschikbare niveaus binnen een thema. Het houdt de voortgang bij door middel van `niveauIndexen` en zorgt ervoor dat, in het geval van meerdere niveaus, de juiste index wordt geselecteerd of dat er begonnen wordt bij de beginindex als er nog geen voortgang is vastgelegd. Deze benadering is vooral nuttig in iteratieve processen waarbij je door verschillende niveaus van gegevens moet lopen en deze consequent moet behandelen.

```jsx
                if (videos.length > 0) {

                    const videoIndex = Math.floor(Math.random() * videos.length);

                    eindLijst.push(videos.splice(videoIndex, 1)[0]);

                }
```

### Voorwaarde

- **`if (videos.length > 0)`**: Deze voorwaarde controleert of er nog video's beschikbaar zijn in de huidige lijst `videos` die behoort tot een specifiek thema en niveau. Als er geen video's meer zijn, wordt deze blok code overgeslagen om fouten tijdens het uitvoeren te voorkomen.

### Kern Logica

- **`const videoIndex = Math.floor(Math.random() * videos.length);`**:
    
    - `Math.random()` genereert een willekeurig getal tussen 0 (inclusief) en 1 (exclusief).
    - Dit getal wordt vervolgens vermenigvuldigd met de lengte van de `videos` array, die het aantal beschikbare video's in de lijst representeert.
    - `Math.floor()` wordt gebruikt om het resulterende getal naar beneden af te ronden naar het dichtstbijzijnde gehele getal. Dit resulteert in een willekeurige index in de array van `0` tot `videos.length - 1`.
- **`videos.splice(videoIndex, 1)[0]`**:
    
    - `splice()` is een methode die wordt gebruikt om items uit een array te verwijderen of toe te voegen. In dit geval verwijdert `splice(videoIndex, 1)` één item op de positie `videoIndex`.
    - `splice()` retourneert een array met de verwijderde element(en), dus `[0]` aan het einde haalt het verwijderde element uit deze array.
    - Dit element (de geselecteerde video) wordt vervolgens toegevoegd aan `eindLijst` met de `push()` methode. Een voorbeeld van hoe dit werkt vindt je hier: [[Splicing en pushing]]

### Resultaat

- De geselecteerde video wordt uit de oorspronkelijke lijst `videos` verwijderd om herhaling te voorkomen en wordt toegevoegd aan de `eindLijst`, die uiteindelijk gebruikt wordt voor de quiz. Dit zorgt ervoor dat elke video slechts eenmaal wordt getoond en bevordert de variëteit van de inhoud die aan de gebruiker wordt gepresenteerd.

## Conclusie

Deze aanpak verzekert een eerlijke en willekeurige selectie van video's uit de beschikbare pool, waardoor de kans op voorspelbaarheid of bias in de videokeuze wordt geminimaliseerd. Het is een essentieel onderdeel van het dynamisch genereren van inhoud voor de quiz, wat helpt om de ervaring fris en boeiend te houden voor de eindgebruiker.