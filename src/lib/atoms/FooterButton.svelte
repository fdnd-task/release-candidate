<script>
	import { base } from '$app/paths';
</script>

<a class="sponsor-button" id="footer-sponsor-button" href="{base}/becomeSponsor">
	Become a sponsor <svg
		class="sponsor-icon"
		width="6"
		height="11"
		viewBox="0 0 6 11"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1.1417 0.25L0 1.48375L3.7085 5.5L0 9.51625L1.1417 10.75L6 5.5L1.1417 0.25Z"
			fill="#051A1A"
		/>
	</svg>
</a>

<style>
	@media only screen and (min-width: 768px) {
		.sponsor-button {
			text-decoration: none;
			background-color: var(--Yellow-Primary);
			color: var(--Black);
			font-family: var(--Apercu-Font);
			font-weight: bold;
			border: none;
			border-radius: 3em;
			padding: 1em 2em;
			text-transform: uppercase;
			transition: 0.2s;
			cursor: pointer;
		}

		.sponsor-button:hover {
			background-color: var(--White);
		}

		#footer-sponsor-button {
			font-weight: bold;
		}

		.sponsor-button:hover svg {
			transform: translateY(1px) translateX(3px);
		}

		.sponsor-button svg {
			transform: translateY(1px);
		}

		a {
			color: white;
		}
	}

	@media only screen and (max-width: 600px) {
		.sponsor-button {
			text-decoration: none;
			background-color: var(--Yellow-Primary);
			color: var(--justWhite);
			font-family: var(--copy-font);
			font-weight: bold;
			border: none;
			border-radius: 3em;
			padding: 1em 2em;
			text-transform: uppercase;
			transition: 0.2s;
			cursor: pointer;
			margin-bottom: 1em;
			margin-top: 1em;
			display: flex;
			justify-content: center;
			padding-bottom: 1em;
		}

		svg {
			margin-left: 10px;
		}
	}

	@media only screen and (max-width: 768px) {
		.sponsor-button {
			text-decoration: none;
			background-color: var(--Yellow-Primary);
			color: var(--justWhite);
			font-family: var(--copy-font);
			font-weight: bold;
			border: none;
			border-radius: 3em;
			padding: 1em 2em;
			text-transform: uppercase;
			transition: 0.2s;
			cursor: pointer;
			margin-bottom: 1em;
			margin-top: 1em;
			display: flex;
			justify-content: center;
			padding-bottom: 1em;
		}
	}
</style>
