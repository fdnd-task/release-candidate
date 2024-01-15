<script>
	import Input from '$lib/atoms/input.svelte';
	import InputRequired from '$lib/atoms/input-required.svelte';
	import UplaodInput from '$lib/atoms/UploadInput.svelte';

	export let FormID, Method, Action;
</script>

<form id={FormID} method={Method} action={Action}>
	<InputRequired
		InputType="text"
		InputID="TeamName"
		LableFor="TeamName"
		LableText="* Team name..."
	/>

	<Input
		InputType="text"
		InputID="CountryOfOrigin"
		LableFor="CountryOfOrigin"
		LableText="Country of origin..."
	/>

	<UplaodInput
		InputType="file"
		InputID="Upload"
		LableFor="Upload"
		LableText="Add logo"
	/>
</form>

<style>
	form {
		grid-area: form;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	section {
		display: flex;
		gap: 2rem;
	}
</style>
