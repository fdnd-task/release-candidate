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
		height: 100%;
	}
</style>
