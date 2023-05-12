<template>
  <HeaderDrie></HeaderDrie>
    <main>
        <router-view class="views"/>
    </main>

  <FooterDrie></FooterDrie>
</template>

<script>


import HeaderDrie from "@/components/header/HeaderDrie.vue"
import FooterDrie from "@/components/footer/FooterDrie.vue";

export default {
  name: 'App',
  data() {
    return {
      headerScroll: true,
    }
  },
  components: {
    FooterDrie,
    HeaderDrie
  },
}
</script>

<style>
:root{
  --color-primary-blue: #0096D7;
  --color-secondary-blue: #BAC6FF;
  --color-border: #E5E5E6;
  --color-border-fill: #F9F9FB;
  --color-white: #FFFFFF;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/

}

html {
  scroll-behavior: smooth;
}

body{
  background-color: var(--color-primary-blue);
  max-width: 100vw;
  overflow-x: hidden;
}

img {
  width: 100%;
}

p {
  line-height: 1.5;
}

a {
  text-decoration: none;
}

button {
  background: none;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

ul {
  display: flex;
}

li {
  list-style-type: none;
}


/* Ensure focus highlights are visible */
*:focus {
  outline: 2px solid dodgerblue;
  outline-offset: 4px;
}
/* Default styling for screen readers and non-screen reader users */
.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Override styling for non-screen reader users */
@media not screen and (min-width: 0\0) {
  .sr-only {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
  }
}
</style>
