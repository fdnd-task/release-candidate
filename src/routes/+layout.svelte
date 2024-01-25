<script>
	import '../lib/styles/fonts.css';
	import { Header, Footer } from '../lib/index.js';
</script>

<Header />

<slot />

<Footer />

<style>
	:global(*) {
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
		margin: 0;
		padding: 0;
		font-family: var(--Apercu-font);
	}

	/* Color variable */

	:global(:root) {
		--Bg-Dark-Blue: #051d1d;
		--Charcoal: #051A1A;

		--Yellow-Primary: #ffda1d;
		--Blue-Secondary: #3dbae1;

		--White: #ffffff;
		--Black: #000;

		--Apercu-Font: 'Apercu pro', sans-serif;
		--Header-Font: 'Kirang Haerang', sans-serif;
		--Paragraph-Font: 'Jubilat', serif;
		--Paragraph2Font: 'Inter', sans-serif;
	}

	:global(html) {
        scroll-behavior: smooth;
    }

	:global(body) {
		background-color: var(--Bg-Dark-Blue);
		color: var(--White);
		width: 100%;
		height: 100vh;
		overflow: hidden;
		overflow-y: scroll;
	}

	:global(h1) {
		font-family: var(--Header-Font);
		font-size: 4em;
		padding: 0.5em;
		color: var(--Yellow-Primary);
	}

	:global(h2) {
		font-family: var(--Paragraph-Font);
	}
</style>
