<script>
	import { onMount } from 'svelte';



	// Component Rollen functie
</script>

<section>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>


	<article>
		<p>
			Deel dit: <a href=""><i style="font-size:24px" class="fa">&#xf08c;</i></a>
			<a href=""><i style="font-size:24px" class="fa">&#xf09a;</i></a>
		</p>
	</article>
</section>

<style>
	.bold {
		font-weight: 700;
	}
	.rollen {
		align-items: 'center';
	}
	#text,
	#text2,
	#text3 {
		display: none;
		background-color: lightgreen;
		justify-content: center;
		font-weight: 600;
		font-size: 1em;
		align-items: center;
		margin-bottom: 15px;
		height: 75px;
		position: relative;
	}
	#text::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 5px;
		background: green;
		animation: lijn 4s linear forwards;
	}
	#text2::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 5px;
		background: green;
		animation: lijn 4s linear forwards;
	}
	#text3::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 5px;
		background: green;
		animation: lijn 4s linear forwards;
	}
	@keyframes lijn {
		100% {
			width: 0;
		}
	}
	article {
		padding: 1em 0 1em 0;
	}
	.active {
		background-color: lightgreen;
		color: black;
	}
	section {
		margin: 30px;
	}

	.titel {
		font-size: 30px;
		margin-top: 20px;
	}

	.btn {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	button {
		background-color: black;
		color: white;
		display: flex;
		align-items: center;
		width: 100%;
		border: unset;
		height: 35px;
		border-radius: var(--unit-micro);
		padding: var(--unit-micro) var(--unit-defalit) var(--unit-micro) 0.8em;
		transition: 0.2s ease-in-out;
		justify-content: center;
	}

	button.special {
		background-color: blueviolet;
	}
	/* button:is(:hover, :focus) {
		background-color: var(--color-blue);
	}
	button:is(:focus) {
		background-color: green;
	} */

	.knop {
		padding: 10px;
	}

	article ul {
		list-style: none;
	}
</style>
