<script>
	import Input from '$lib/atoms/input.svelte';
	import Textarea from '$lib/atoms/Textarea.svelte';
	import InputDate from '$lib/atoms/InputDate.svelte';


	export let FormID, Method, Action;
</script>

<form id={FormID} method={Method} action={Action}>
	<Input
		InputType="text"
		InputID="AddPlayer"
		LableFor="AddPlayer"
		LableText="name"
	/>
	<section>
		<InputDate />
		<Input
			InputType="text"
			InputID="JerseyNumber"
			LableFor="JerseyNumber"
			LableText="Jersey number"
		/>
	</section>
	<Input
		InputType="text"
		InputID="BirthCountry"
		LableFor="BirthCountry"
		LableText="Country of Birth"
	/>
	<Input
		InputType="text"
		InputID="ResidencePlace"
		LableFor="ResidencePlace"
		LableText="Place of residence"
	/>

	<Textarea TextareaID="Bio" LableFor="Bio" LableText="Bio" />
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
		gap: inherit;
	}
</style>
