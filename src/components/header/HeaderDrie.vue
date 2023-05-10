<template>
  <header :class="{ 'blur': isBlur }">
    <nav>
      <router-link to="/" class="logo__link">
        <logo-s-v-g></logo-s-v-g>
      </router-link  >

      <div class="nav__menu">
        <ul class="nav__list"  :class="{'nav__list--open' : isNavOpen}" >
          <li class="nav__item"
              v-for="(route, index) in router().options.routes" :key="index">
            <router-link class="nav__link" :to="route.path" @click="clickNav"> {{ route.name}}</router-link>
          </li>
          <li>
            <call-button></call-button>
          </li>
        </ul>
      </div>

      <hamburger-menu  @click="openNav" class="menu__trigger"></hamburger-menu>
    </nav>
  </header>
</template>

<script>
// import HamburgerMenu from "@/components/HamburgerMenu.vue";
import router from '/src/router/index.js'
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import CallButton from "@/components/CallButton.vue";
import LogoSVG from "@/components/LogoSVG.vue";

export default {
  name: "HeaderDrie.vue",
  components: {LogoSVG, CallButton, HamburgerMenu},
  data() {
    return {
      isBlur: true,
      isNavOpen: false
    }
  },
  methods: {
    openNav(){
      this.isNavOpen = !this.isNavOpen
    },
    clickNav(){
      this.isNavOpen = !this.isNavOpen
    },
    router() {
      return router
    },
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
  top: 0;
  width: 100%;
  z-index: 999;
  padding: 0.75rem 1rem;

  /*padding: 1.5rem 1.875rem 1rem;*/
}

/*Nav*/
nav{
  position: relative;
  height: 45px;

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
.logo__link{
  z-index: 999999;
}

.nav__link{
  color: #192321;

}

.nav__link:hover {
  text-decoration: underline;
  color: red;
}

.menu__trigger{
  display: none;
  z-index: 99999;
}


.blur{
  backdrop-filter: blur(24px);
  background-color: rgba(61, 149, 209, 0.4);

}

@media screen and (max-width: 1024px) {
  .menu__trigger{
    display: block;
  }

  header{
    padding: 0.75rem 1rem;
  }

  nav {
    height: 32px;
  }
  .nav__menu{
    transition: .4s;
    margin-top: 2em;
  }
  .nav__list{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100vh;
    padding: 4rem 1rem;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: rgba(61, 149, 209, 0.8);
    backdrop-filter: blur(24px);

    transition: transform .3s ease-out;
    transform: translateY(-100%);
  }
  .nav__list--open{
    transform: translateY(0);
  }
  .nav__item{
    font-size: 48px;
    font-weight: bold;
    font-family: Inter, sans-serif;
  }
}






</style>