<script>
	import {
		MainHero,
		MainAbout,
		PlayerCarrousel,
		MainStats,
		MainSponsor,
		MainStory
	} from '../lib/index.js';
	// import { PUBLIC_HYGRAPH_URL } from '$env/static/public';
	export let data;
</script>

<svelte:head><title>INK - Legends</title></svelte:head>

<MainHero />
<MainAbout {data} />
<PlayerCarrousel {data} />
<MainStats {data} />
<MainSponsor {data} />
<MainStory {data} />

<!-- <p>PUBLIC_HYGRAPH_URL: {PUBLIC_HYGRAPH_URL}</p> -->
