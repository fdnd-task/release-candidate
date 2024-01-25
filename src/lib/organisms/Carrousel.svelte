
<script>

	import {CardCarrousel, ImageCarrousel} from '$lib/index.js'
	
</script>


<section class="carrousel">
  <h2>Stay up to date</h2>
    <CardCarrousel />
    <ImageCarrousel />
</section>





<style>
h2 {
  font-family: "Kirang Haerang";
}

.carrousel h2 {
  font-family: var(--paragraph-font);
  font-weight: 200;
  line-height: 0.9em;
  text-align: center;
  font-size: clamp(24px, 3.8vw, 50px);
}


.carrousel {
  width: 100%;
  height: 93vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(/assets/bg-shape.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 0;
  /* overflow-x: hidden; */
}


/* Media query voor mobiele apparaten */
@media only screen and (max-width: 600px) {
  .carrousel {
    height: 180vw;
    background-size: cover;
  }
}

/* Media query voor tabletten */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .carrousel {
    height: 100vw;
    background-size: cover;
  }
}

/* Media query voor desktops */
@media only screen and (min-width: 1025px) {
  .carrousel {
    background-size: cover;
  }
}

</style>