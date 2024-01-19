<script>
	import { onMount } from 'svelte';
	export let ButtonType, ButtonText, Routing;
</script>

<a href="{Routing}" type={ButtonType} id="Delete" >{ButtonText}</a>

<style>
	a {
		grid-area: button;
		box-shadow: var(--box-shadow);
		border: none;
		border-radius: 50rem;
		background-color: hsl(0, 46%, 58%);
		padding: 0.5rem 1.2rem;
		width: fit-content;
		height: fit-content;
		color: white;
		font-size: 1rem;
		text-decoration: none;
	}

	a:hover {
		background-color: hsl(0, 46%, 40%);
	}
</style>
