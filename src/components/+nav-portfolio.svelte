<nav>
  <img src="images/nav/nav_light-shadow.png" alt="" class="personal__logo" />

  <ul class="nav__link--list">
    <li>
      <a
        href="/"
        class="nav__link--anchor link__hover-effect link__hover-effect--black"
        >Technologie</a
      >
    </li>
    <li>
      <a
        href="#projects"
        class="nav__link--anchor link__hover-effect link__hover-effect--black"
        >Projecten</a
      >
    </li>
    <li>
      <a
        href="mailto:matthijs.blauw@gmail.com"
        class="nav__link--anchor nav__link--anchor-primary">Bellen</a
      >
    </li>
  </ul>
</nav>

<style>
  /* NAVIGATION BAR */
  nav {
    height: 100px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    position: sticky;
  }

  .personal__logo {
    width: 100%;
    max-width: 100px;
  }

  .nav__link--anchor {
    margin: 0 12px;
    color: #242424;
    text-decoration: none;
    font-weight: 700;
  }

  .nav__link--list {
    display: flex;
  }

  .nav__link--anchor-primary {
    background-color: #6030b1;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    transition: all 300ms ease;
  }

  .nav__link--anchor-primary:hover {
    background-color: #5d3eff;
  }

  .personal__logo {
    font-size: 24px;
    color: #6030b1;
    margin: 0 12px;
    font-weight: bold;
  }
</style>
