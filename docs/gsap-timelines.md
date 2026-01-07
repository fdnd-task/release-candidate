# GSAP Timelines

Tijdens de workshop leer je hoe je met GSAP (nested) timelines structuur kan geven aan complexe animaties.   
Door de vanilla JavaScript code te analyseren krijg je een beter beeld van hoe JavaScript werkt. 

## Opdracht: Scene 4 toevoegen

Fork de [GSAP-timelines repository](https://github.com/joostf/GSAP-timelines/) en voeg een 4e scene toe aan het ruimteverhaal.

- Bedenk en schets een screenplay voor scene 4 
- Zoek zo nodig online (royalty free) SVG bestanden of andere graphics. Of maak ze zelf 
- Vul de HTML aan met jouw graphics en of andere HTML elementen 
- De Scene 4 module staat klaar (`scene-four.js`), animeer jouw verhaal met tweens in GSAP nested timelines

### Bronnen

[GSAP timelines](https://gsap.com/docs/v3/GSAP/Timeline)  
[GSAP nested timelines](https://gsap.com/docs/v3/GSAP/Timeline/#nesting)


## Opdracht: JavaScript prompt challenge

Met behulp van [Claude](https://claude.ai/) of [Chat GPT](https://chatgpt.com/) ga je de vanilla JavaScript code analyseren. 
In teams van 4 studenten bestudeer je deze JavaScript onderwerpen: Objects, Functions, Asynchronous & Modules

### Instructies
* Elk team, krijgt een onderwerp met voorbeeld code toegewezen
* Verdeel de concepten in je team
* Aan de hand van de voorbeeld code schrijf je prompts om een van de concepten van het betreffende onderwerp te analyseren
* Schrijf op welke prompts je hebt gebruikt en in hoeverre je de uitleg snapt
* Met je team bespreek je je bevindingen en de onderlinge samenhang van de concepten
* Met je team leg je uit aan de tribe wat de concepten betekenen en welke prompts je hebben geholpen om het te snappen

### Prompt strategy van oud student Ellenoor Bok (@EBok1)

Deze tips, over hoe goede uitleg te krijgen van ChatGPT, schreef Ellenoor in haar blog: [ChatGPT as my coding mentor](https://techhub.iodigital.com/articles/chatgpt-as-my-coding-mentor). 

1. Set context: "I'm a junior developer learning React..."
2. Set my level: "Explain this like I'm new to React" or "Use simple analogies."
3. Set expectations: "Don't show me code yet just explain the concept."
4. Ask specifically: Focus on one concept at a time
5. Request examples: "Can you show me a simple example?"
6. Dig deeper: "Why do I need this? What's the concept behind it?"

### Onderwerpen

<details>
  <summary>
    I. Objects
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
  II. Functions
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

<details>
 <summary>
   III. Promise, Async
 </summary> 

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
</details>

<details>
  <summary>
    IV. Modules; Deferred, Scoped, Async & Strict Mode
  </summary>

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
</details>

### Bronnen

* [ChatGPT as my coding mentor](https://techhub.iodigital.com/articles/chatgpt-as-my-coding-mentor) (van oud FDND student Ellenoor Bok)
* [Prompt engineering guide](https://www.promptingguide.ai/)
* [JavaScript interview guestions 2025](https://www.interviewbit.com/javascript-interview-questions/)
* [15 essential javascript concepts every frontend engineer should know](https://medium.com/@mayank2000jain/15-essential-javascript-concepts-every-frontend-engineer-should-know-fccda6ace6ea)
<!--

Voorbeeld code refactor Luuk

-->
