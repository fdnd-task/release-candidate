<script>
	import NavigationBar from '$lib/organisms/NavigationBar.svelte';
</script>

<header>
	<NavigationBar />
</header>

<div>
	<slot />
</div>

<style>
	@import '$lib/styles/global.css';

	:global(body) {
		display: grid;
		grid-template-columns: auto min-content;
		grid-template-areas: 'div header';
		background-color: var(--background-color);
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		font-family: var(--primary-font-family);
	}

	header {
		grid-area: header;
		padding: 1rem 1rem 1rem 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	div {
		display: contents;
		grid-area: div;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
