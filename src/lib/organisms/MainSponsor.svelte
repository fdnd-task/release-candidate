<script>
	// @ts-nocheck
	import { BtnPrimary } from '$lib/index.js';
	import { base } from '$app/paths';
	export let data;
</script>

<section>
	{#each data.homepages as homepage}
		<section>
			<div class="sponsorCenterText">
				<h2>
					{homepage.becomeSponsor.titleSponsor}
				</h2>
				<p>
					{homepage.becomeSponsor.subTextSponsor}
				</p>
				<BtnPrimary href="{base}/becomeSponsor" title="Become sponsor"></BtnPrimary>
			</div>
		</section>
	{/each}
</section>

<style>
	section {
		height: 75vw;
		width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-image: url(/assets/blue-mask.svg);
		background-repeat: no-repeat;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
		padding: 0 14vw;
	}

	.sponsorCenterText {
		text-align: center;
		max-width: 37.5em;
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

</style>
