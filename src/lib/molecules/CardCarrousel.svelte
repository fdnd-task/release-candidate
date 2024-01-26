
<!-- imports-->
<script>
  import { base } from '$app/paths';
  import { currentPosition } from '$lib/cardCarrousel.js';
  import { CarrouselButton } from '$lib/index.js';

  // carrouselcontent 
  export const cards = [
      { image: 'image 252.jpeg', title: 'Young football prospects in Brazil juggle success, education, and family.' },
      { image: 'image 253.jpeg', title: 'The Brazilian youth championship attracts scouts from global clubs.' },
      { image: 'image 254.jpeg', title: 'Talented youths dream of a football career in Brazil, a national passion.' },
      { image: 'image 255.jpeg', title: 'In Rios favelas, football provides hope and a positive escape.' },
      { image: 'image 256.jpeg', title: 'Brazilian youth academies hone skills for high-level competitions.' },
      { image: 'image 257.jpeg', title: 'The Brazilian youth championship attracts scouts from global clubs.' },
  ];
</script>

<section class="carrouselSection" aria-label="Carousel">
  {#each cards as card, index}
      <article class="carrouselItem" aria-hidden={index !== $currentPosition}>
          <div class="carrouselItemImage">
              <img src={`${base}/assets/${card.image}`}  loading="lazy" alt="children playing">
          </div>
          <h3>{card.title}</h3>
          <!-- <p>Read more</p> -->
      </article>
  {/each}
</section>

<!-- <CarrouselButton /> -->




<style>


h3,
p {
  font-family: "Kirang Haerang";
  color: black;
  font-size: 1.5em;
}


.carrouselSection {
  display: flex;
  flex-direction: row;
  padding: 0 0 0 4rem;
  overflow: auto;
  width: 100%;
  margin: 4% 0 2% 0;
}


.carrouselItem {
  background-image: url(/assets/item-bg-shape.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  width: clamp(200px, 28%, 28%);
  height: clamp(250px, 31vw, 31vw);
  flex: 0 0 auto;
  overflow: hidden;
  padding: clamp(0.5rem, 1vw, 1vw);
  margin-right: 16px;
  box-sizing: border-box;
}


.carrouselItem > h3 {
  font-size: clamp(16px, 1.5vw, 24px);
  font-weight: 400;
  font-family: var(--paragraph-font);
  padding: clamp(0.5rem, 1vw, 1vw);
}


.carrouselItemImage {
  max-width: 100%;
  height: 60%;
  overflow: hidden;
  border-radius: 5px;
}

.carrouselItem .carrouselItemImage > img {
  border-radius: 5px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: top;
}

/* Media queries */
@media only screen and (max-width: 450px) {
  .carrouselItem {
    width: 100%;
    height: auto; 
    margin-right: 0; 
  }

  .carrouselItemImage {
    width: 100%;
    height: 60%;
  }

  h3 {
    font-size: 1.5em;
    overflow: hidden;
    padding:auto;
  }
}

@media only screen and (min-width: 451px) and (max-width: 767px) {
  .carrouselItem {
    width: calc(50% - 1rem);
    height: auto;
    margin-right: 2rem; 
  }

  h3 {
    font-size: 1.5em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .carrouselItem {
    width: calc(33.33% - 1rem); 
    height: auto; 
    margin-right: 2rem; 
  }

  h3 {
    font-size: 1.5em;
  }
}


</style>
