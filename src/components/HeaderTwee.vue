<template>
  <header class="header header.is-active">
    <div class="header__inner">
      <nav class="nav nav--top blur" aria-label="Top navigation">
        <a class="nav__logo" href="/">
        </a>
        <ul class="nav__list nav__list--parent mobile__nav blur">
          <li class="nav__item inter ">
            <div class="nav__text-container">
              <router-link to="/" class="nav__link">
                <span class="nav__text">Home</span>
              </router-link>
            </div>
          </li>
<!--          <li class="nav__item inter has-children">-->
<!--            <div class="nav__text-container">-->
<!--              <router-link to="/diensten" class="nav__link">-->
<!--                <span class="nav__text">Diensten</span>-->
<!--              </router-link>-->
<!--              <button class="nav__submenu-trigger" aria-hidden="">-->
<!--                <svg viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                        d="M7.82322 1.17678C7.92085 1.07915 7.92085 0.920854 7.82322 0.823223L7.37678 0.376777C7.27915 0.279146 7.12085 0.279145 7.02322 0.376776L4 3.4L0.976777 0.376777C0.879146 0.279146 0.720854 0.279146 0.623223 0.376777L0.176777 0.823224C0.0791456 0.920855 0.0791453 1.07915 0.176776 1.17678L3.37678 4.37678L3.82322 4.82322C3.92085 4.92085 4.07915 4.92085 4.17678 4.82322L4.62322 4.37678L7.82322 1.17678Z"></path>-->
<!--                </svg>-->
<!--              </button>-->
<!--            </div>-->
<!--            <ul class="nav__list nav__list&#45;&#45;children">-->
<!--              <li class="nav__item nav__item&#45;&#45;child inter">-->
<!--                <div class="nav__text-container">-->
<!--                  <router-link to="/diensten" class="nav__link">-->
<!--                    <span class="nav__text">Diensten</span>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--              </li>-->
<!--              <li class="nav__item nav__item&#45;&#45;child inter">-->
<!--                <div class="nav__text-container">-->
<!--                  <router-link to="/diensten" class="nav__link">-->
<!--                    <span class="nav__text">Diensten</span>-->
<!--                  </router-link>-->
<!--                </div>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </li>-->
          <li class="nav__item inter ">
            <div class="nav__text-container">
              <router-link to="/partners" class="nav__link">
                <span class="nav__text">Partners</span>
              </router-link>
            </div>
          </li>
          <li class="nav__item inter ">
            <div class="nav__text-container">
              <router-link to="/over" class="nav__link">
                <span class="nav__text">Over ons</span>
              </router-link>
            </div>
          </li>
          <li class="nav__item inter ">
            <div class="nav__text-container">
              <router-link to="/contact" class="nav__link">
                <span class="nav__text">Contact</span>
              </router-link>
            </div>
          </li>
          <li class="nav__item inter">
            <div class="nav__text-container">
              <button class="nav__button-prm">
                <span class="nav__text">
                  Bellen
                </span>
              </button>
            </div>
          </li>
        </ul>
        <HamburgerMenu @click="toggleNav"></HamburgerMenu>
        <button class="nav__trigger js-trigger" aria-label="open mobile navigation">
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default {
  name: "HeaderTwee",
  components: {HamburgerMenu},
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      console.log('toggle nav')
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>

<style scoped>
a{
  position: relative;
  text-decoration: none;
  display: block;
}
/*Header*/
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 32px;
  padding: 12px 16px;
}

.header, nav__logo {
  height: 2rem;
}

.header__inner {

}

/*Navigation*/
.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: auto;
}

.nav__logo {
  height: 2rem;
}

.header .nav__logo svg {
  height: 100%;
  width: auto;
}

svg {
  fill: currentColor;
}

.nav__list {
}

.nav__list--parent {

}

.nav__text-container {
  display: flex;
  align-items: center;
}

.inter {
  font-family: Inter, sans-serif;
}

.has-children {
  position: relative;
}

@media only screen and (min-width: 0px) and (max-width: 1024px) {
  .header .nav__list--children {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    max-height: 0;
    flex-direction: column;
    height: 100%;
    overflow-y: hidden;
    transition: max-height .4s ease-out;
    opacity: 1;
    color: inherit;
    padding: 0;
    width: 100%;
    clip-path: unset;
    box-shadow: none;
    transform: none;
    background: none;
  }
}
.nav__item--child {
  margin-left: 0;
  white-space: nowrap;
}

/*Hamburger menu*/
.nav__trigger {
  position: relative;
  display: none;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
}

.nav__trigger::before {
  content: "";
  position: absolute;
  top: -1rem;
  bottom: -1rem;
  left: 0;
  right: 0;
}

.js-trigger {

}

@media only screen and (min-width: 0px) and (max-width: 1024px){
  .header .nav__trigger {
    display: block;
  }
}
@media only screen and (min-width: 0px) and (max-width: 1024px) {
  .header.is-active {
    color: #14151a;
  }

  .header {
  }
}

@media only screen and (min-width: 0px) and (max-width: 750px) {
  .header .nav__logo {
    min-height: 1.5rem;
  }
}

    @media only screen and (min-width: 0px) and (max-width: 1024px) {
      .header .nav__list {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        flex-direction: column;
        align-items: flex-start;
        height: 100vh;
        padding: 4rem 1rem;
        pointer-events: none;
      }

      .header .nav__list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding-left: 0;
      }
    }
.headerScroll{
  color: #14151a;
  background: rgba(255,255,255,.5);
}

.header__logo{
  height: 100%;
  width: auto;
}

.nav__trigger {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  right: 8px;
  top: 8px;
}



/*has-background {*/
/*  background: rgba(255,255,255,.5);*/
/*  -webkit-backdrop-filter: blur(24px);*/
/*  backdrop-filter: blur(24px);*/
/*  transform: translateY(-0.5rem);*/
/*}*/

.mobile__nav > li{
  font-size: 48px;
  font-weight: bold;
}
.blur{
  backdrop-filter: blur(24px);
}

</style>