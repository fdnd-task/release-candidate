
<template>
  <header class="header has-background headerScroll">
    <div class="header__container">
      <nav class="navbar navbar-expand-lg navbar-light blur">
      <div class="logo__placeholder d-flex justify-content-center ">
        <router-link to="/" class="logo__link">
<!--          <svg viewBox="0 0 108 32" xmlns="http://www.w3.org/2000/svg" class="header__logo">-->
<!--            <g fill-rule="evenodd">-->
<!--              <polygon points="35.8859966 24.8888889 39.4037528 24.8888889 39.4037528 3.55555556 35.8859966 3.55555556"></polygon>-->
<!--              <polygon points="39.4037528 10.6666667 42.9215091 10.6666667 42.9215091 7.11111111 39.4037528 7.11111111"></polygon>-->
<!--              <path d="M51.716 21.333c-2.914 0-5.277-2.388-5.277-5.333 0-2.945 2.363-5.333 5.277-5.333s5.277 2.388 5.277 5.333c0 2.945-2.363 5.333-5.277 5.333m-.44-14.222c-4.614 0-8.354 3.98-8.354 8.889 0 4.91 3.74 8.889 8.354 8.889 4.614 0 8.355-3.98 8.355-8.889 0-4.91-3.74-8.889-8.355-8.889"></path>-->
<!--              <path d="M79.858 21.333c-2.914 0-5.277-2.388-5.277-5.333 0-2.945 2.363-5.333 5.277-5.333s5.277 2.388 5.277 5.333c0 2.945-2.363 5.333-5.277 5.333m.44-14.222c-4.614 0-8.355 3.98-8.355 8.889 0 4.91 3.74 8.889 8.355 8.889 4.614 0 8.354-3.98 8.354-8.889 0-4.91-3.74-8.889-8.354-8.889"></path>-->
<!--              <polygon points="56.9925342 24.8888889 60.5102904 24.8888889 60.5102904 7.11111111 56.9925342 7.11111111"></polygon>-->
<!--              <path d="M99.206 21.333c-2.915 0-5.277-2.388-5.277-5.333 0-2.945 2.362-5.333 5.277-5.333 2.914 0 5.276 2.388 5.276 5.333 0 2.945-2.362 5.333-5.276 5.333m-.44-14.222c-4.614 0-8.355 3.98-8.355 8.889 0 4.91 3.74 8.889 8.355 8.889 4.614 0 8.355-3.98 8.355-8.889 0-4.91-3.74-8.889-8.355-8.889"></path>-->
<!--              <polygon points="104.482244 24.8888889 108 24.8888889 108 7.11111111 104.482244 7.11111111"></polygon>-->
<!--              <polygon points="64.0280467 24.8888889 67.545803 24.8888889 67.545803 0 64.0280467 0"></polygon>-->
<!--              <polygon points="71.0635592 32 74.5813155 32 74.5813155 7.11111111 71.0635592 7.11111111"></polygon>-->
<!--              <path d="M15.668 16.001c0-1.473-1.181-2.667-2.638-2.667-1.457 0-2.639 1.194-2.639 2.667 0 1.473 1.182 2.667 2.639 2.667 1.457 0 2.638-1.194 2.638-2.667"></path>-->
<!--              <path d="M15.667 26.668c0-1.473-1.181-2.667-2.638-2.667-1.458 0-2.639 1.194-2.639 2.667 0 1.472 1.181 2.666 2.639 2.666 1.457 0 2.638-1.194 2.638-2.666"></path>-->
<!--              <path d="M21.833 22.459a2.619 2.619 0 0 0-3.716-.329 2.687 2.687 0 0 0-.326 3.757 2.619 2.619 0 0 0 3.717.329 2.686 2.686 0 0 0 .325-3.757"></path>-->
<!--              <path d="M23.881 15.229c-1.435-.256-2.803.712-3.056 2.163-.253 1.45.705 2.833 2.14 3.089 1.435.256 2.803-.713 3.056-2.163.253-1.45-.705-2.834-2.14-3.09"></path>-->
<!--              <path d="M15.668 26.668c0-1.473-1.181-2.667-2.638-2.667-1.457 0-2.639 1.194-2.639 2.667 0 1.472 1.182 2.666 2.639 2.666 1.457 0 2.638-1.194 2.638-2.666"></path>-->
<!--              <path d="M21.835 22.459a2.619 2.619 0 0 0-3.717-.329 2.687 2.687 0 0 0-.325 3.757 2.619 2.619 0 0 0 3.716.329 2.686 2.686 0 0 0 .326-3.757"></path>-->
<!--              <path d="M23.882 15.229c-1.435-.256-2.803.712-3.056 2.163-.253 1.45.705 2.833 2.14 3.089 1.435.256 2.803-.713 3.056-2.163.253-1.45-.705-2.834-2.14-3.09"></path>-->
<!--              <path d="M20.853 8.362a2.682 2.682 0 0 0-.966 3.643 2.623 2.623 0 0 0 3.604.976 2.682 2.682 0 0 0 .966-3.643 2.623 2.623 0 0 0-3.604-.976"></path>-->
<!--              <path d="M14.163 5.068c-.498 1.384.208 2.915 1.577 3.418a2.63 2.63 0 0 0 3.382-1.593c.498-1.384-.208-2.915-1.577-3.418a2.63 2.63 0 0 0-3.382 1.593"></path>-->
<!--              <path d="M2.574 12.976c1.262.736 2.875.3 3.604-.976a2.682 2.682 0 0 0-.966-3.643 2.623 2.623 0 0 0-3.604.976 2.682 2.682 0 0 0 .966 3.643"></path>-->
<!--              <path d="M3.097 20.478c1.435-.255 2.393-1.639 2.14-3.089-.253-1.45-1.621-2.419-3.056-2.163-1.435.256-2.394 1.639-2.14 3.09.253 1.45 1.62 2.418 3.056 2.162"></path>-->
<!--              <path d="M8.268 25.886a2.686 2.686 0 0 0-.325-3.757 2.619 2.619 0 0 0-3.717.328 2.687 2.687 0 0 0 .325 3.757c1.116.947 2.78.8 3.717-.328"></path>-->
<!--              <path d="M6.945 6.891a2.63 2.63 0 0 0 3.381 1.594c1.37-.504 2.075-2.034 1.577-3.418A2.63 2.63 0 0 0 8.52 3.473c-1.369.504-2.075 2.034-1.576 3.418"></path>-->
<!--            </g>-->
<!--          </svg>-->
        </router-link>
      </div>


        <section class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/over" class="nav-link">Over</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/diensten" class="nav-link">Diensten</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/partners" class="nav-link">Partners</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </section>

        <button class="navbar-toggler nav__trigger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    </div>
  </header>
</template>

<script>


export default {
  name: "HeaderComponent",
  data() {
    return {
      navToggle: false,
      }
    }
}


</script>

<style scoped>
.headerScroll{
  color: #14151a;
  background: rgba(255,255,255,.5);
}
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 32px;
  padding: 12px 16px;
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
.logo{
  width: 100%;
}
.logo__wrapper {
  max-width: 108px;
  max-height: 32px;
}
.mobile__nav > li{
  font-size: 48px;
  font-weight: bold;
}
.blur{
  backdrop-filter: blur(24px);
}
</style>