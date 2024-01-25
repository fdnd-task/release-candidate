<script>
// @ts-nocheck
	import { BtnSecondary } from '$lib/index.js';
	import { base } from '$app/paths';
	export let data;
</script>


{#each data.homepages as homepage}
	<section  id="introAbout">
		<div class="intro">
			<p class="introText">
				{homepage.mainIntroAboutUs.introTextAbout}
			</p>
			<BtnSecondary href="{base}/about" title="About Us"></BtnSecondary>
		</div>
	</section>
{/each}

<style>
	section {
		display: inline-block;
		position: relative;
		bottom: 8em;
		background-size: cover;
		height: clamp(20em, 64vw, 62em);
	}

	/* ============== INTRO ABOUT - SECTION START ==============*/

	.intro {
		width: 100%;
		height: 75vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		background-image: url(/assets/intro-mask.svg);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		padding: 0 14vw;
	}

	.introText {
		display: flex;
		flex-direction: column;
		color: var(--Black);
		font-family: var(--Paragraph-Font);
		font-size: clamp(2vw, 4vw, 57px);
		line-height: 96%;
	}


	/* 600px */
	@media (min-width: 37.5em) {
		.introText {
			font-size: 1.5em;
		}
	}
	/* 800px */
	@media (min-width: 50em) {
		.introText {
			font-size: 1.7em;
		}
	}
	
	/* 1000px */
	@media (min-width: 62.5em) {
		.introText {
			font-size: 2em;
		}
	}

	/* 1350px */
	@media (min-width: 84.3em) {
		section {
			bottom: 21em;
		}

		.introText {
			font-size: 2.7em;
		}
	}

	/* 1500px */

	@media (min-width: 93.75em) {
		.introText {
			font-size: 2.5em;
		}
	}



	
</style>
