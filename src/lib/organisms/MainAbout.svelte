<script>
	import { BtnSecondary } from '$lib/index.js';
	import { base } from '$app/paths';
	export let data;
</script>

{#each data.homepages as homepage}
	<section class="intro-about">
		<div class="intro">
			<p class="intro-text">
				{homepage.mainIntroAboutUs.introTextAbout}
			</p>
			<BtnSecondary href="{base}/about" title="About Us " class="btn-About"></BtnSecondary>
		</div>
	</section>
{/each}

<style>
	section {
		display: inline-block;
		margin: 4em 0;
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

		margin: 12vw 0 0 0;
		padding: 0 14vw;
	}

	.intro-text {
		display: flex;
		flex-direction: column;
		color: var(--Black);
		font-family: var(--Paragraph-Font);
		font-size: clamp(2vw, 4vw, 57px);
		line-height: 96%;
	}

	@media only screen and (max-width: 550px) {
		.intro {
			padding: 0 9vw;
			background-size: cover;
			height: 80vh;
		}
	}

	@media only screen and (max-width: 950px) {
		section {
			background-size: cover;
			height: 100vh;
		}
	}

	@media (min-width: 600px) {
		.intro-text {
			font-size: 1.5em;
		}
	}

	@media (min-width: 800px) {
		.intro-text {
			font-size: 1.7em;
		}
	}

	@media (min-width: 1000px) {
		.intro-text {
			font-size: 2em;
		}
	}

	@media (min-width: 1000px) {
		.intro-text {
			font-size: 2.7em;
		}
	}

	@media (min-width: 1500px) {
		.intro-text {
			font-size: 2.5em;
		}
	}
</style>
