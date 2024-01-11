<script>
	import { base } from '$app/paths';
	export let href;
</script>

<a class="nav-link" {href}>
	<img class="logo" src="{base}/assets/INK-logo.svg" alt="The INK logo" />
</a>

<style>
	.logo {
		height: 5em;
		width: 5em;
		padding: 0.4em;
	}

	.logo:hover {
		scale: 1.1;
	}
</style>
