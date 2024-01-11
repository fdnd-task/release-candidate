<script>
	import { HeadTitle } from '$lib/index.js';
	import { base } from '$app/paths';
</script>

<!-- HEADER  -->

<section class="header-main">
	<HeadTitle />

	<div class="hero-video">
		<video playsinline autoplay muted loop>
			<source src="{base}/assets/Temporary-video.mp4" type="video/mp4" />
		</video>
	</div>
</section>

<style>
	/* ============== HEADER - SECTION START ============== */

	.header-main {
		display: inline-flex;
		overflow: hidden;
		margin: 2em;
	}

	/* ============== HEADER VIDEO ============== */

	.hero-video {
		position: absolute;
		top: 0;
		right: 0;
		width: 45%;
		height: 65vw;
		overflow: hidden;
		z-index: -1;
	}
	.hero-video video {
		width: fit-content;
		-webkit-mask-image: url(/assets/hero-pattern.svg);
		mask-image: url(/assets/hero-pattern.svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: contain;
		mask-size: contain;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
