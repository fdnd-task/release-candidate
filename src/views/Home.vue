<template>
  <div>
    <section class="hero__wrapper">
      <section class="hero__header">
        <section class="hero__header-text">
        <h1>JBI Installatie-<br>
            service
        </h1>
        <h2>
          Groot in klein werk. Niet te klein <br>
          voor het grote werk.
        </h2>
        </section>
      </section>
      <section class="hero__top" :style="{ backgroundImage: `url(${backgroundImage})` }">
      </section>
      <section class="hero__bottom">
        <figure>
        </figure>
      </section>
    </section>
  </div>
  <DienstenView></DienstenView>
  <ContactView></ContactView>
  <OverView></OverView>
  <partners-view></partners-view>
</template>

<script>

import ContactView from "@/views/Contact.vue";
import DienstenView from "@/views/Diensten.vue";
import OverView from "@/views/Over.vue";
import PartnersView from "@/views/Partners.vue";

export default {
  name: 'HomeView',
  components: {PartnersView, OverView, DienstenView, ContactView},
  data() {
    return {
      backgroundImage: "/assets/images/hero/hero_image.png"
    };
  }
}
</script>

<style scoped>
.hero__wrapper{
  height: 75vh;
  max-height: 620px;
  display: flex;
  flex-direction: column;
}
.hero__header{
  position: absolute;
  color: white;
}
.hero__header-text{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 13em 1em;

  height: 100%;
}
.hero__header h1{
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 225px;
}
.hero__header h2{
  font-size: 20px;
  font-weight: bold;
}

.hero__top{
  height: 50%;
  width: 100%;
  background-size: cover;
  background-position-y: -25px;
  /*Placeholder styling*/
  /*background: #14151A no-repeat;*/
}
.hero__bottom{
  height: 50%;
  width: 100%;
  background: #0096D7;

  display: flex;
  justify-content: center;
  padding: 2em;
}
.hero__bottom figure{
  width: 100%;
  height: 191px;
  background: #BAC6FF;
  border-radius: 18px;
}
@media screen and (min-width: 750px) {
  .hero__wrapper {
    flex-direction: row;
  }

  .hero__top {
    height: 100%;
    width: 100%;
  }

  .hero__bottom {
    height: 100%;
    width: 100%;
    align-items: center;
  }
  .hero__bottom figure {
    width: 361px;
    height: 461px;
  }
  .hero__header {
    display: flex;
    justify-content: center;
  }
  }
@media screen and (min-width: 1200px) {
  .hero__wrapper{
    max-height: none;
  }
}
</style>