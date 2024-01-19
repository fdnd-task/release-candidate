<script>
	import Input from '$lib/atoms/input.svelte';
	import InputRequired from '$lib/atoms/input-required.svelte';
	import {InputTextarea} from '$lib';
	import InputDate from '$lib/atoms/InputDate.svelte';

	export let FormID, Method, Action;
</script>

<form id={FormID} method={Method} action={Action}>
	<InputRequired
		InputType="text"
		InputID="AddPlayer"
		LableFor="AddPlayer"
		LableText="* Add player ..."
	/>
	<section>
		<InputDate />
		<InputRequired
			InputType="text"
			InputID="JerseyNumber"
			LableFor="JerseyNumber"
			LableText="* Jersey number..."
		/>
	</section>
	<Input
		InputType="text"
		InputID="BirthCountry"
		LableFor="BirthCountry"
		LableText="* Country of birth..."
	/>
	<Input
		InputType="text"
		InputID="ResidencePlace"
		LableFor="ResidencePlace"
		LableText="Place of residence..."
	/>

	<InputTextarea InputID="Bio" LableFor="Bio" LableText="Bio..." />
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
		flex-direction: column;
		gap: inherit;
	}

	@media only screen and (min-width: 1350px){
		section{
			flex-direction: row;
		}
	}

</style>
