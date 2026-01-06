# GSAP Timelines

Tijdens de workshop leer je hoe je met GSAP (nested) timelines structuur kan geven aan complexe animaties.   
Door de vanilla JavaScript code te analyseren krijg je een beter beeld van hoe JavaScript werkt. 

## Opdracht: Chapter 4 toevoegen

Fork de [GSAP-timelines repository](https://github.com/joostf/GSAP-timelines/) en voeg een 4e hoofstuk toe aan het ruimteverhaal.

- Bedenk en schets een screenplay voor Chapter 4 
- Zoek zo nodig online (royalty free) SVG bestanden of andere graphics. Of maak ze zelf 
- Vul de HTML aan met jouw graphics en of andere HTML elementen 
- Voeg een `chapter-four.js` module toe (hergebruik de code uit een van de andere hoofdstukken) en pas `script.js` aan zodat het nieuwe hoofdstuk aan het verhaal wordt toegevoegd (demo).
- Animeer jouw verhaal met GSAP nested timelines

### Bronnen

[GSAP timelines](https://gsap.com/docs/v3/GSAP/Timeline)
[GSAP nested timelines](https://gsap.com/docs/v3/GSAP/Timeline/#nesting)


## Opdracht: JavaScript prompt challenge

Met behulp van Chat GPT ga je vanilla JavaScript code analyseren. In teams van 4 studenten bestuderen we onderstaande JavaScript concepten. 

* Elk team, krijgt een onderwerp met voorbeeld code toegewezen
* Je verdeeld de concepten in je team
* Aan de hand van de voorbeeld code schrijf je prompts om een van de concepten van het betreffende onderwerp te analyseren
* Schrijf op welke prompts je hebt gebruikt en in hoeverre je de uitleg snapt
* Met je team bespreek je je bevindingen en de onderlinge samenhang van de concepten
* Met je team leg je uit aan de tribe wat de concepten betekenen en welke prompts je hebben geholpen om het te snappen

<details>
  <summary>
    I. Objecten
  </summary>summry


**Concepten**  
`Object`, `Context`, `Dot Notation`, `Chaining`

**Voorbeeld code**  
```js
const tlChapterOne = gsap.timeline({ defaults: {duration: 1 } })

export function chapterOne() {
  tlChapterOne
    .add(tlIntro(), .25)
    .add(tlPlanet(), .25)
    .add(tlRocket(), .5)
    

  return tlChapterOne;
}
```
</details>


<details>

<summary>
  II. Functions, Scope, Hoisting
</summary>

**Concepten**  
`Function`, `Return Statement`, `Scope`, `Hoisting`

**Voorbeeld code**  
```js
const tlChapterOne = gsap.timeline({ defaults: {duration: 1 } })

export function chapterOne() {
  tlChapterOne
    .add(tlIntro(), .25)
    .add(tlPlanet(), .25)
    .add(tlRocket(), .5)
    

  return tlChapterOne;
}

/* child timelines */
// intro
function tlIntro() {
  const tl = gsap.timeline({})
  
  tl.from(els.introTitle, .5, {opacity:0})
    .staggerFrom(els.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:.25})
  return tl 
}

// planet
function tlPlanet() {
  const tl = gsap.timeline({})
  
  tl.set(els.planet, {xPercent:100, x:'120%', scale: 0.15,  transformOrigin:'50% 0'})
    .to(els.planet, 1,  {opacity:1}, '+=.25')
    .to(els.planet, 3,  {xPercent:10, yPercent:50, scale: 1, ease: 'elastic.out(1, 0.3)'})

  return tl 
}

// rocket
function tlRocket() {
  const tl = gsap.timeline({})
  
  tl.set(els.rocket, {xPercent:-20, yPercent:80, rotate:-20, transformOrigin:'50% 50%'})
    .to(els.rocket, 1, {opacity:1, onComplete:flames(true)}, '+=1.5')
    .to(els.rocket, 2, {xPercent:70, yPercent:45, scale:.1, rotate:-100, ease: 'elastic.out(.5, 0.3)'})
    .to(els.ch2Trigger, .25, {opacity:1, yPercent:0})
    
  return tl 
} 
```
</details>

### III. Promise, Async

**Concepten**   
`Promise`, `Async` en `Await`

**Voorbeeld code**  
```js
const tl = gsap.timeline({})
  
tl.from(els.introTitle, .5, {opacity:0})
  .staggerFrom(els.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:.25})

tl.then(() => { 
  console.log('tl sequence ready')
})
```


### IV. Modules; Deferred, Scoped, Async & Strict Mode

**Concepten **  
`Module`, `Deferred`, `Scoped`, `Async`, `Top-Level Await` en `Strict Mode` zijn?

**Voorbeeld code**  
```js
import { chapterOne } from './chapter-one.js'
import { chapterTwo } from './chapter-two.js'
import { chapterThree } from './chapter-three.js'
import { els } from './elements.js'

const ch1 = chapterOne()
const ch2 = chapterTwo()
const ch3 = chapterThree()

ch1.play()

els.ch2Trigger.addEventListener("click", () =>{ ch2.restart() }) 
els.ch3Trigger.addEventListener("click", () => { ch3.restart() })
```


<!--
Werkvormen toevoegen (analyseren/experimenteren/voorbeelden uit eigen code laten zien/presenteren)
Voorbeeld code refactor Luuk
Sollicitatie / interview vragen JavaScript
Sources panel met JavaScript Debugger
AI als tutor blog van Ellenoor
-->
