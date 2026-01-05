# GSAP Timelines

Tijdens de workshop leer je hoe je met GSAP (nested) timelines structuur kan geven aan complexe animaties.   
Door de vanilla JavaScript code te analyseren krijg je een beter beeld van hoe JavaScript werkt. 

## Opdracht: Chapter 4 toevoegen

Fork de [GSAP-timelines repository](https://github.com/joostf/GSAP-timelines/) en voeg een 4e hoofstuk toe aan het ruimteverhaal.

- Bedenk en schets een screenplay voor Chapter 4 
- Zoek zo nodig online (royalty free) SVG bestanden of andere graphics. Of maak ze zelf 
- Vul de HTML aan met jouw graphics en of andere HTML elementen 
- Voeg een `chapter-four.js` module toe (hergebruik de code uit een van de andere hoofdstukken) 
- Importeer de module in `script.js` en 

## Opdracht: JavaScript prompt challenge

Met behulp van Chat GPT gaan we de vanilla JavaScript code analyseren.

### I. Objecten, Context, Dot Notation, Chaining

Prompt: Kan je aan de hand van de onderstaande code uitleggen wat de javascript concepten: `Object`, `Context`, `Dot Notation` en `Chaining` zijn?

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

### II. Functions, Scope, Hoisting

Prompt: Kan je aan de hand van de onderstaande code uitleggen wat de javascript concepten: `Function`, `Scope` en `Hoisting` zijn?

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


### III. Promise, Async

Prompt: Kan je aan de hand van de onderstaande code uitleggen wat de javascript concepten: `Promise` en `Async` zijn?

```js
const tl = gsap.timeline({})
  
tl.from(els.introTitle, .5, {opacity:0})
  .staggerFrom(els.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:.25})

tl.then(() => { 
  console.log('tl sequence ready')
})
```


### IV. Modules; Deferred, Scoped, Async & Strict Mode

Prompt: Kan je aan de hand van de onderstaande code uitleggen wat de javascript concepten: `Module`, `Deferred`, `Scoped`, `Async`, `Top-Level Await` en `Strict Mode` zijn?

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
-->
