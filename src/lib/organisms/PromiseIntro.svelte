<script>
	import { BtnSecondary } from '$lib/index.js';
	import { base } from '$app/paths';
	// export let data;
</script>

<!-- {#each data.homepages as homepage} -->
	<section  class="introPromise">
			<p class="introText">
				<!-- {homepage.mainIntroAboutUs.introTextAbout} -->
			</p>
			<BtnSecondary href="{base}/promise" title="Promise"></BtnSecondary>
	</section>
<!-- {/each} -->

<style>
	section {
		display: inline-block;
		margin: 4em 0;
	}

	/* ============== INTRO PROMISE - SECTION START ==============*/

	.introPromise {
		width: 100%;
		height: 75vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		background-image: url(/assets/temporary-blue-background.svg);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;

		margin: 12vw 0 0 0;
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

	@media only screen and (max-width: 550px) {
		.introPromise {
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
		.introText {
			font-size: 1.5em;
		}
	}

	@media (min-width: 800px) {
		.introText {
			font-size: 1.7em;
		}
	}

	@media (min-width: 1000px) {
		.introText {
			font-size: 2em;
		}
	}

	@media (min-width: 1000px) {
		.introText {
			font-size: 2.7em;
		}
	}

	@media (min-width: 1500px) {
		.introText {
			font-size: 2.5em;
		}
	}
</style>
