<script>
	import Form from '$lib/organisms/NewPlayerForm.svelte';
	import Button from '$lib/atoms/button.svelte';
	import InputRequired from '$lib/atoms/input-required.svelte';
</script>

<main>
	<h1>New Player</h1>

	<h2 class="sub-header-left">Add player content</h2>

	<h2>Add player to team</h2>

	<section>
		<Form FormID="FormID" Method="get" Action="/AllPlayers" />
	</section>

	<section>
		<InputRequired
			InputType="search"
			InputID="FindTeam"
			LableFor="FindTeam"
			LableText="* Search team ..."
		/>
	</section>
	<footer><Button ButtonType="submit" FormID="FormID" ButtonText="save" /></footer>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 2rem;
		row-gap: 1rem;
		padding: 4rem 4%;
		width: 100%;
		height: 100%;
	}

	h1,
	footer {
		grid-column: span 2;
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	section {
		overflow-x: auto;
		padding: 7px;
		padding-right: 1rem;
		margin-right: 0;
	}

	section::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	section::-webkit-scrollbar {
		width: 12px;
	}

	section::-webkit-scrollbar-thumb {
		border-radius: 10px;
		/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
		background-color: #a7a7a7;
	}
</style>
