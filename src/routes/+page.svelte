<script>
    // Hier import ik de components die nodig zijn in deze pagina
    import { Card,  LinkButton, Logo, Search } from '$lib/index.js'
	import { hygraph } from '$lib/utils/hygraph';
    // Hier export ik de data zodat ik de data vanuit hygraph kan gebruiken die ik query in de page.server
    export let data;


    console.log(JSON.stringify(data.searchData, null, 2));
</script>
<!-- mobile en tablet hero section -->

<section class="hero-section">

    <article class="hero-text">
        <h1>
            Welkom <span>Mark Vos</span> bij OBA!
        </h1>
        <p> Ontdek een wereld vol kennis en verhalen. Onze collectie staat tot uw beschikking, en ons team helpt u graag bij uw zoektocht naar wijsheid. Laat de pagina's uw gids zijn op een avontuurlijke reis door het geschreven woord.</p>
    </article>
    
    <section class="hero-image">
        <img src="{Logo}" alt="oba logo" width="100%">
    </section>

</section>


<!-- laptop hero versie: oba logo helemaal rechts in de hoek zoals op figma, lukte net niet voor tablet (display staat op none voor mobile en tablet)-->

<section class="hero-section-large">

        <img src="/oba.png" alt="oba logo" >

    <article class="hero-text">
        <h1>
        Welkom <span>Mark Vos</span> bij OBA!
        </h1>
        <p> Ontdek een wereld vol kennis en verhalen. Onze collectie staat tot uw beschikking, en ons team helpt u graag bij uw zoektocht naar wijsheid. Laat de pagina's uw gids zijn op een avontuurlijke reis door het geschreven woord.</p>
    </article>
    
</section>

<Search 
cardData={data.hygraphData.uitleengeschiedenis1}/>

<!-- leeslijst sections zijn precies dezelfde classes, want opmaak is exact hetzelfde elke keer -->

<section class="readinglist-books-section">
    <article class="readinglist-text">  
        <h2>
        Jouw recente leeslijst: <span>boeken<span>
        </h2>
        <p> Deze boeken heb je toegevoegd aan jouw leeslijst en wil je ooit nog lezen!</p>
    </article>

    <section class="readinglist-carousel">
        <!-- Hier gebruik ik de card molecule die ik heb gemaakt, en geef ik de data mee die ik heb gequery in de page.server -->
        <Card 
            bookAuthor={data.hygraphData.uitleengeschiedenis1[0].author}
            bookTitle={data.hygraphData.uitleengeschiedenis1[0].title}
            bookUrl={data.hygraphData.uitleengeschiedenis1[0].image?.url}
        />
    </section>
    <LinkButton buttonText="Bekijk Leeslijst" buttonLink="#"/>
    
</section>

<section class="readinglist-books-section">
    <article class="readinglist-text">  
        <h2>
        Jouw recente leeslijst: <span>e-boeken<span>
        </h2>
        <p> Deze boeken heb je toegevoegd aan jouw leeslijst en wil je ooit nog lezen via jouw telefoon of e-reader!</p>
    </article>

    <section class="readinglist-carousel">
        <!-- Hier gebruik ik de card molecule die ik heb gemaakt, en geef ik de data mee die ik heb gequery in de page.server -->
        <Card 
            bookAuthor={data.hygraphData.uitleengeschiedenis1[1].author}
            bookTitle={data.hygraphData.uitleengeschiedenis1[1].title}
            bookUrl={data.hygraphData.uitleengeschiedenis1[1].image?.url}
        />
    </section>
    <LinkButton buttonText="Bekijk Leeslijst" buttonLink="#"/>

</section>

<section class="readinglist-books-section">
    <article class="readinglist-text">  
        <h2>
        Jouw recente leeslijst: <span>luisterboeken<span>
        </h2>
        <p> Deze boeken heb je toegevoegd aan jouw leeslijst en wil je ooit nog luisteren!</p>
    </article>

    <section class="readinglist-carousel">
        <!-- Hier gebruik ik de card molecule die ik heb gemaakt, en geef ik de data mee die ik heb gequery in de page.server -->
        <Card 
            bookAuthor={data.hygraphData.uitleengeschiedenis1[2].author}
            bookTitle={data.hygraphData.uitleengeschiedenis1[2].title}
            bookUrl={data.hygraphData.uitleengeschiedenis1[2].image.url}
        />
    </section>
    <LinkButton buttonText="Bekijk Leeslijst" buttonLink="#"/>
</section>


<!-- die onderste section? link heb ik naar oba website gedaan voor nu, want er stond "Meer Bekijken" -->

<section class="about-section">
    <article class="about-text"> 
        <h2>
        Ontdek de Wereld van Leren bij <span>OBA!</span>
        </h2>
        <p>
            Bij OBA bieden we niet alleen een schat aan boeken, maar ook een wereld van kennis en leren. Ontdek onze cursussen, van talen en schoolvakken tot rijles theorie en meer. Investeer in jezelf, breid je vaardigheden uit en verrijk je leven met onze educatieve programma's. Kom langs en begin vandaag nog met leren!
        </p>
    </article>

    <section class="about-carousel">
        <!-- carousel plaatsen -->
    </section>

    <section class="about-text">
        <a href='https://www.oba.nl/' class="oba-button">Meer bekijken</a>
    </section>


</section>



<style>

/* mobile first */


h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.8em;
}

p {
    padding: 25px 0px;
    font-size: 1em;
}

span {
    color: var(--primary-accent-color);
}

.oba-button{
    padding: 1em 2em;
    border: none;

    background-color: var(--primary-dark-color);
    color: var(--primary-light-color);
    text-align: center;
    text-decoration: none;
}
.oba-button:hover {
    background-color: var(--primary-accent-color);
    color: var(--primary-light-color);
}


.hero-section {
    padding: 6.25em 1.5em;

    display: grid;
    grid:
    "text" auto
    "img" 1fr
    / 1fr;
    gap: 1em;
}

.hero-section-large {
    display: none;
}

.hero-text {
    grid-area: text;
}

.hero-image {
    grid-area: img;

}

.readinglist-books-section {
    padding: 6.25em 1.5em;

    display: grid;
    grid:
    "text" 1fr
    "carousel" 1fr
    / 1fr;
}

.readinglist-books-section:nth-of-type(odd) {
    margin: 0;

    background: var(--primary-light-color);
}

.about-section {
    padding: 6.25em 1.5em;

    display: grid;
    grid:
    "text" 1fr
       "carousel" 1fr
    / 1fr;

    text-align: center;
}


/* tablet breakpoint */
    @media (min-width: 40em) {


        .hero-section {
            padding: 6.25em 1.5em;

            display: grid;
            grid:
            "text img" 1fr
            / 1fr 1fr;
            gap: 30px;
        }

        .hero-section img {
            width: 400px;
        }

        .hero-section-large {
            display: none;
        }


        .oba-button {
          width: 250px;
        }   

    }


/* laptop breakpoint */
    @media (min-width: 68em) {

        h1 {
            font-size: 2.5em;
        }

        h2 {
            font-size: 2.2em;
        }

        p {
            padding: 1.5em 0em;
            font-size: 1.1em;
        }

        .hero-section-large {
            padding: 9em;
            display: grid;
            grid:
            "text" 1fr
            / 1fr 1fr;
            gap: 30px;

        }

        .extraPadding {
            max-width: 100%;
            padding: 0 2rem;
        }

        .hero-section-large img {
            position: absolute;
            right: 0;
            top: 0;

            width: 700px;
        }


        .hero-section {
            display: none;
        }

        .oba-button {
          width: 200px;
        }   

        .readinglist-books-section {
            padding: 9em;

            display: grid;
            grid:
            "text carousel" 1fr
            / 1fr 1fr;
        }
    }
</style>