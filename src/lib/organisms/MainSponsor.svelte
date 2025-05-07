<script>
	// @ts-nocheck
	import { BtnPrimary } from '$lib/index.js';
	import { base } from '$app/paths';
	export let data;
</script>

<section>
	{#each data.homepages as homepage}
		<article>
			<div class="sponsorCenterText">
				<h2>
					{homepage.becomeSponsor.titleSponsor}
				</h2>
				<p>
					{homepage.becomeSponsor.subTextSponsor}
				</p>
				<BtnPrimary href="{base}/becomeSponsor" title="Become sponsor"></BtnPrimary>
			</div>
		</article>
	{/each}
</section>

<style>
	section {
		height: clamp(42em, 130vw, 52em);
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-image: url(/assets/BlueBg1.svg);
		background-repeat: no-repeat;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		padding: 0 14vw;
	}

	.sponsorCenterText {
		text-align: center;
		max-width: 37.5em;
		height: 16em;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		font-weight: 200;
		line-height: 1.3em;
		font-size: clamp(24px, 4.1vw, 60px);
		font-family: var(--Paragraph-Font);
	}

	p {
		padding-top: 2rem;
		padding-bottom: 2rem;
		font-family: var(--Apercu-Font);
	}

    /* 425px */
    @media (min-width: 26.5em)  {

		.sponsorCenterText{
			height: 12em;
		}
	}

	/* 1000px */
	@media (min-width: 62.5em)  {

		section{
			height: clamp(60em, 130vw, 75em);
		}

		.sponsorCenterText{
			height: 18em;
		}
	}

</style>
