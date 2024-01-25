<script>
	import { base } from '$app/paths';
</script>





<section class="carrousel-section"  aria-label="Carousel">
  <article class="carrousel-item" aria-hidden="false">
      <div class="carrousel-item-image">
        <img src="{base}/assets/image 255.jpeg" loading="lazy" alt="children playing">
      </div>
      <h3>Talented youths dream of a football career in Brazil, a national passion.</h3>
      <p>Read more</p>
  </article>
  <article class="carrousel-item"  aria-hidden="false">
      <div class="carrousel-item-image">
          <img src="{base}/assets/image 256.jpeg" loading="lazy" alt="children playing">
      </div>
      <h3>Brazilian youth academies hone skills for high-level competitions. </h3>
      <p>Read more</p>
  </article>
  <article class="carrousel-item"  aria-hidden="false">
      <div class="carrousel-item-image">
          <img src="{base}/assets/image 257.jpeg" loading="lazy" alt="children playing">
      </div>
      <h3>In Rio's favelas, football provides hope and a positive escape. </h3>
      <p>Read more</p>
  </article>
  <article class="carrousel-item"  aria-hidden="false">
      <div class="carrousel-item-image">
          <img src="{base}/assets/image 252.jpeg" loading="lazy" alt="children playing">
      </div>
      <h3>Youth club rivalry in Brazil is intense, players devoted to team colors. </h3>
      <p>Read more</p>
  </article>
  <article class="carrousel-item"  aria-hidden="false">
      <div class="carrousel-item-image">
          <img src="{base}/assets/image 253.jpeg" loading="lazy" alt="children playing">
      </div>
      <h3>The Brazilian youth championship attracts scouts from global clubs. </h3>
      <p>Read more</p>
  </article>
  <article class="carrousel-item"  aria-hidden="false">
      <div class="carrousel-item-image">
          <img src="{base}/assets/image 254.jpeg" loading="lazy" alt="children playing">
      </div>
      <h3>Young football prospects in Brazil juggle success, education, and family. </h3>
      <p>Read more</p>
  </article>
</section>

<style>

h3 {
  font-family: "Kirang Haerang";
  color: black;
}


.carrousel-section {
  display: flex;
  flex-direction: row;
  padding: 0 0 0 4rem;
  overflow: auto;
  width: 100%;
  margin: 4% 0 2% 0;
  /* transition: 0.2s ease-in;
  scroll-snap-type: x mandatory; */
}

.carrousel-item {
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
  /* scroll-snap-align: start; */
  max-width: 33.33%;
}

.carrousel-item > h3 {
  font-size: clamp(16px, 1.5vw, 24px);
  font-weight: 400;
  font-family: var(--paragraph-font);

  padding: clamp(0.5rem, 1vw, 1vw);
}

.carrousel-item-image {
  max-width: 100%;
  height: 60%;
  overflow: hidden;
  border-radius: 5px;
}

.carrousel-item .carrousel-item-image > img {
  border-radius: 5px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: top;
}

@media only screen and (max-width: 600px) {
  .carrousel-item {
    width:100%; 
    height:100%;
  }
  .carrousel-item-image {
  width: 100%;
  height: 60%;
  overflow: hidden;
  border-radius: 5px;
}
  h3{
    font-size: 1.5em;
  }
  .carrousel-item .carrousel-item-image > img{
    max-width: 100%;
   max-height: 100%;
  }
 
}

@media only screen and (max-width: 601px){
  .carrousel-item {
    max-width: 100%;
    max-height:100%;
  }
  h3{
    font-size: 16px;
  }
  .carrousel-item-image{
    max-width: 100%;
    max-height: 100%;
  }
}

  @media only screen and (max-width: 1024px) {
  .carrousel-item {
    max-width: 90%; 
    max-height:100%;
  }

  h3{
    font-size: 1.5em;
  }
}
</style>