<script>
	import NavigationBar from '$lib/organisms/NavigationBar.svelte';
</script>

<header>
	<NavigationBar />
</header>

<slot />

<style>
	@import '$lib/styles/global.css';

	header {
		height: 100vh;
		height: 100svh;
		grid-area: 1/2;
		position: sticky;
		top: 0;
	}
</style>
