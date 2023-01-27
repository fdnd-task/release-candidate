<script>
  import { page } from "$app/stores";
</script>

  <header class="header">
    <div class="header__inner">
      <nav class="nav">
        <a href="/" class="nav__link">
          <img alt="Vue logo" class="logo" src="@/assets/images/nav_logo.png" />
        </a>

        <ul class="nav___list">
          <li class="nav__item">
            <a href="/" class="nav__link">
              <div class="nav__text-container"><span class="nav__text">Home</span></div>
            </a>
          </li>
          <li class="nav__item">
            <a href="/dienst-1" class="nav__link">
              <div class="nav__text-container">
                <span class="nav__text">Diensten</span>
              </div>
            </a>
          </li>
          <li class="nav__item">
            <a href="/partners" class="nav__link">
              <div class="nav__text-container">
                <span class="nav__text">Partners</span>
              </div>
            </a>
          </li>
          <li class="nav__item">
            <a href="over" class="nav__link">
              <div class="nav__text-container">
                <span class="nav__text">Over ons</span>
              </div>
            </a>
          </li>
          <li class="nav__item">
            <a href="contact" class="nav__link">
              <div class="nav__text-container">
                <span class="nav__text">Contact</span>
              </div>
            </a>
          </li>
          <li class="nav__item">
            <a href="./" class="nav__link">
              <div class="nav__text-container">
                <span class="nav__text">
                
                  Bellen
                </span>
              </div>
            </a>
          </li>
        </ul>

        <button class="nav__trigger"></button>
      </nav>
    </div>
  </header>


<style>
  /* NAV MENU */
  nav {
    display: flex;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
  ul{
    display: flex;
  }
</style>
