<script>
  import { page } from "$app/stores";

  // Oude nav
  import Nav from "../components/+nav.svelte";
  import PortNav from "../components/+nav-portfolio.svelte";

  import Hero from "../components/+hero.svelte";

</script>

<header>
  <PortNav />
  <!-- <Nav></Nav> -->
  <Hero />
</header>

<slot />
