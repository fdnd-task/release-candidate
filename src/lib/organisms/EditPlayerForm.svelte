<script>
	import Input from '$lib/atoms/input.svelte';
	import InputTextarea from '$lib/atoms/InputTextarea.svelte';
	import InputDate from '$lib/atoms/InputDate.svelte';


	export let FormID, Method, Action;

	import { onMount } from 'svelte';

	onMount(async () => {
    document.getElementById("AddPlayer").value = "Sascha Davidson"
    document.getElementById("BirthDate").value = "2000-08-07"
    document.getElementById("JerseyNumber").value = "Number 7"
    document.getElementById("BirthCountry").value = "Netherlands  "
    document.getElementById("ResidencePlace").value = "Alkmaar"

    document.getElementById("Bio").value = "Ik ben sascha, Ik ben 23 jaar oud en kom uit alkmaar. Ik speel vrisbee sinds ik 14 was en speel mee met de tournamenten sinds 2017."
});
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

	<InputTextarea InputTextareaID="Bio" LableFor="Bio" LableText="Bio" />
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
