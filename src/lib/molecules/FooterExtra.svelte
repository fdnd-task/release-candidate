<script>
	import Socials from "$lib/atoms/Socials.svelte";
	import FooterButton from "$lib/atoms/FooterButton.svelte";
</script>

<div class="icons">

	<Socials/> 	
	<FooterButton/> 

</div>

<style> 

	@media only screen and (min-width: 768px) {

		.icons {
			/* margin-left: 30em; */
			width: 16rem;
			float: right;
			
		}
	}

	@media only screen and (max-width: 1200px) {


	}

</style>