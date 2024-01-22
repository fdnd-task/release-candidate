<script>
    // Hier import ik de components die nodig zijn in deze pagina
    import { Card,  LinkButton, Logo, Search } from '$lib/index.js'
    // Hier export ik de data zodat ik de data vanuit hygraph kan gebruiken die ik query in de page.server
    export let data;

    // console.log(JSON.stringify(data.apiBooks, null, 2));
    console.log(JSON.stringify(data.apiEBooks.results[0], null, 2))
    // Hier export ik de data zodat ik de data vanuit hygraph kan gebruiken die ik query in de page.server

</script>

<header>
    <Search 
    cardData={data.hygraphData.uitleengeschiedenis1}/>
    <!-- menu  -->
</header>


<section  class="hero-text">
        <article>
                <h1>
                    Welkom <span>Mark Vos</span> bij OBA!
                </h1>
                <p> Ontdek een wereld vol kennis en verhalen. Onze collectie staat tot uw beschikking, en ons team helpt u graag bij uw zoektocht naar wijsheid. Laat de pagina's uw gids zijn op een avontuurlijke reis door het geschreven woord.</p>
        </article>
        <article class="logo">
                <img src="{Logo}" alt="oba logo" width="100%" >
        </article>

</section>



    <section>
            <article>
                <h2>Jouw recente leeslijst: <span>boeken<span></h2>
                <p> Deze boeken heb je toegevoegd aan jouw leeslijst en wil je ooit nog lezen!</p>
                <LinkButton buttonText="Bekijk Leeslijst" buttonLink="#"/>
            </article>

            <article class="carousel">
                {#each data.apiBooks.results.slice(0, 5) as book}
                <Card 
                    bookAuthor={book.authors}
                    bookTitle={book.titles}
                    bookUrl={book.coverimages}
                />
            {/each}
            </article>
    </section>


<section>   
      <article class="carousel">
        {#each data.apiEBooks.results.slice(0, 5) as book}
        <Card 
            bookAuthor={book.authors}
            bookTitle={book.titles}
            bookUrl={book.coverimages}
        />
    {/each}

    </article>
    
</section>

<Search 
cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}/>

<!-- leeslijst sections zijn precies dezelfde classes, want opmaak is exact hetzelfde elke keer -->

<section class="readinglist-books-section">
    <article class="readinglist-text">  
        <h2>
            Jouw recente leeslijst: <span>e-boeken<span>
            </h2>
            <p> Deze boeken heb je toegevoegd aan jouw leeslijst en wil je ooit nog lezen via jouw telefoon of e-reader!</p>
            <LinkButton buttonText="Bekijk Leeslijst" buttonLink="#"/>
    </article>


</section>

<section>
        <article>
            <h2> Jouw recente leeslijst: <span>luisterboeken<span></h2>
            <p> Deze boeken heb je toegevoegd aan jouw leeslijst en wil je ooit nog luisteren!</p>
            <LinkButton buttonText="Bekijk Leeslijst" buttonLink="#"/>
            </article>
        <article class="carousel">
            {#each data.apiAudioBooks.results.slice(0, 5) as book}
            <Card 
                bookAuthor={book.authors}
                bookTitle={book.titles}
                bookUrl={book.coverimages}
            />
        {/each}

        </article>


</section>


<section class="about-section">
    <article class="about-text"> 
        <h2>
        Ontdek de Wereld van Leren bij <span>OBA!</span>
        </h2>
        <p>
            Bij OBA bieden we niet alleen een schat aan boeken, maar ook een wereld van kennis en leren. Ontdek onze cursussen, van talen en schoolvakken tot rijles theorie en meer. Investeer in jezelf, breid je vaardigheden uit en verrijk je leven met onze educatieve programma's. Kom langs en begin vandaag nog met leren!
        </p>
        <LinkButton buttonText="Meer bekijken" buttonLink="https://www.oba.nl/"/>
  
    </article>

    <section class="about-carousel">
        <!-- carousel plaatsen -->
    </section>

        


</section>





<style>
header{
    width: 100%;
    height: 15vh;
}
section{
    margin: 2rem auto;
    padding: 1rem;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    grid-gap: .7em;
    grid-row:  21rem 15rem ; */
    display: flex;
    flex-direction: column;
}

section:nth-child(2n+1){
    background-color: var(--primary-light-color);
}
article{
    padding: 4rem 0;
}
.logo{
    padding: 0;
}

.carousel{
 display: flex;
  gap: 10px;
  width: 580px;
  max-width: 90%;
  padding: 10px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  animation-name: tostart;
}
span{
    color: var(--primary-accent-color);
}
.hero-text{
    justify-content: flex-start;
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@media only screen and (min-width: 40rem) {
    section{
    height: 65hv;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    }
    section:nth-child(2){
        width: 85%;
    }
    article{
    width: 45%;
    padding: 5rem 0;
}
.logo{
    position: absolute;
    top:0   ;
    right: 0;
    width: 50%;
}
}





</style>