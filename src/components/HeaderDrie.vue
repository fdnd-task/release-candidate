<template>
  <header class="blur">
    <nav>
      <router-link to="/">
        <svg class="logo__svg" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.41 171.94">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <g>
              <path class="default-1" d="m224.94,29.33v12.23c0,1.83,1.48,3.31,3.31,3.31h14.4c1.83,0,3.31,1.48,3.31,3.31v73.15c0,4.93-2.84,9.48-7.36,11.46-.04.02-.09.04-.13.06l-.07.03c-2.52,1.06-5.32,1.35-7.97.69-11.94-2.97-11.3-12.56-11.3-12.56v-10.46c0-1.83-1.48-3.31-3.31-3.31h-19.48c-1.83,0-3.31,1.48-3.31,3.31v14.95c0,2.47.62,4.89,1.82,7.04,3.57,6.37,13.54,17.68,39.5,18.2,1.27.03,20.27,1.4,33.34-12.16,3-3.12,5.06-6.35,6.47-9.13,1.01-2,1.51-4.21,1.51-6.45V48.18c0-1.83,1.48-3.31,3.31-3.31h6.43c1.83,0,3.31-1.48,3.31-3.31v-12.95c0-1.83-1.48-3.31-3.31-3.31h-56.45c-2.23,0-4.04,1.81-4.04,4.04Z"/>
              <path class="default-1" d="m397.66,85.67c-2.74-1.24-3.02-4.99-.49-6.61,6.03-3.86,12.56-10.86,12.94-23.19.72-23.2-24.65-30.45-31.17-30.45h-75.99c-2.07,0-3.76,1.68-3.76,3.76v9.16c0,2.07,1.68,3.76,3.76,3.76h9.89c2.07,0,3.76,1.68,3.76,3.76v80.21c0,2.07-1.68,3.76-3.76,3.76h-9.89c-2.07,0-3.76,1.68-3.76,3.76v11.34c0,2.07,1.68,3.76,3.76,3.76h74.39c.09,0,.18,0,.27,0,1.98.15,29.74,1.65,33.24-31.91,2.05-19.72-5.9-27.8-13.18-31.1Zm-15.82,26.02c-.68,15.71-18.09,17.91-20.11,18.11-.12.01-.24.02-.36.02h-17.1c-2.07,0-3.76-1.68-3.76-3.76v-28.74c0-2.07,1.68-3.76,3.76-3.76h17.27c2.9,0,21.02,1.45,20.3,18.12Zm0-51.47c-.68,15.71-18.09,17.91-20.11,18.11-.12.01-.24.02-.36.02h-17.1c-2.07,0-3.76-1.68-3.76-3.76v-28.74c0-2.07,1.68-3.76,3.76-3.76h17.27c2.9,0,21.02,1.45,20.3,18.12Z"/>
              <path class="default-1" d="m428.6,25.41h53.65c1.8,0,3.26,1.46,3.26,3.26v12.33c0,1.8-1.46,3.26-3.26,3.26h-10.15c-1.8,0-3.26,1.46-3.26,3.26v79.02c0,1.8,1.46,3.26,3.26,3.26h10.15c1.8,0,3.26,1.46,3.26,3.26v12.33c0,1.8-1.46,3.26-3.26,3.26h-53.65c-1.8,0-3.26-1.46-3.26-3.26v-12.33c0-1.8,1.46-3.26,3.26-3.26h10.15c1.8,0,3.26-1.46,3.26-3.26V45.35c0-1.8-1.46-3.26-3.26-3.26h-10.15c-1.8,0-3.26-1.46-3.26-3.26v-10.15c0-1.8,1.46-3.26,3.26-3.26Z"/>
            </g>
            <path id="Icon_metro-fire-2" data-name="Icon metro-fire-2" class="default-1" d="m39.79,168.68c.54.31,1.17-.25.91-.82-10.17-22.46-4.22-35.6,4.26-47.99,5.46-7.98,9.41-16.89,11.66-26.29.13-.56.86-.68,1.16-.19,1.74,2.89,5.51,10.61,4.05,21.45-.09.65.73,1.01,1.14.5,11.26-13.98,13.87-34.4,12.5-43.9-.08-.56.55-.96,1.01-.62,28.47,20.9,40.73,64.11,25.13,96.99-.27.56.37,1.14.91.82,86.5-50.45,24.5-124.34,10.08-136.34-.28-.24-.7.06-.56.41,3.38,8.53,3.81,21.62-3.05,28.69-.35.36-.96.21-1.09-.28C95.47,15.39,67.34,2.26,61.7.04c-.45-.18-.91.2-.85.68,3.31,25.93-14.16,54.08-31.43,75.49-.37.46-1.1.21-1.14-.37-.57-9.13-1.37-15.93-5.78-24.64-.29-.57-1.14-.42-1.21.21-2.14,18.4-16.01,33.74-19.87,52.42-5.34,25.85,3.76,44.88,38.37,64.84Z"/>
          </g> a
        </g>
      </svg>
      </router-link>

      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item"
              v-for="(route, index) in router().options.routes" :key="index">
            <router-link class="nav__link" :to="route.path"> {{ route.name}}</router-link>
          </li>
          <li>
            <button class="phone__button">
              <svg class="phone__svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
              </svg>
              <span class="phone__text">
                Bellen
              </span>
            </button>
          </li>
        </ul>
      </div>
      <button @click="openNav" style="display: none"></button>
    </nav>
  </header>
</template>

<script>
// import HamburgerMenu from "@/components/HamburgerMenu.vue";
import router from '/src/router/index.js'

export default {
  name: "HeaderDrie.vue",
  methods: {
    openNav(){
      console.log('click op de button')
    },
    router() {
      return router
    }
  },
  data() {
    return {
      isMenuOpen: false,
      scroll: true,
    }
  },

}

</script>

<style scoped>
/*global*/
a {
  text-decoration: none;
}

header{
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 0.75rem 1rem;
}

/*Nav*/
nav{
  position: relative;
  height: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__menu{
  display: flex;
  justify-content: center;
}
.nav__list{
   margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__item{
margin-right: 2em;
}

/*svg style*/
.logo__svg{
  max-height: 32px;
  width: 100%;
}
.default-1 {
  fill: #192321;
}
.scroll-1 {
  fill: #fff;

}


.nav__link{
  color: #192321;

}

.nav__link:hover {
  text-decoration: underline;
  color: red;
}

.phone__button{
  background: #14151a;
  border-radius: 22px;
  width: 140px;
  height: 43px;


  display: flex;
  justify-content: center;
  align-items: center;
}
.phone__svg{
  width: 18px;
  height: 18px;
  fill: #FFFFFF;
}
.phone__text{
font-size: 18px;
  margin-left: .25em;
}

.blur{
  backdrop-filter: blur(24px);
}

@media screen and (min-width: 1024px) {
  header{
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 1.5rem 1.875rem 1rem;
  }

  nav {
    position: relative;
    height: 45px;
  }
}

</style>