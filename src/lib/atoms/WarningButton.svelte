<script>
	export let ButtonType, ButtonText, FormID;
</script>

<button type={ButtonType} form={FormID}>{ButtonText}</button>

<style>
	button {
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
	}

	button:hover {
		background-color: hsl(0, 46%, 40%);
	}
</style>
