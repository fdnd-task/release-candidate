<script>
	// export let data;
</script>


	<section  class="introPromise">
		<h2>Our <span style=" color: var(--Yellow-Primary);">commitment</span></h2>
			<img src="/assets/HandInHeart.svg" alt="">
			<p>At INK, we are committed to embedding our values into the very fabric of our work.</p>
			<p>Ensuring they permeate every aspect of our programs, initiatives, and interactions with our stakeholders.</p>
	</section>


<style>
.introPromise {
	width: 100%;
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(/assets/BlueBackground800x1200.svg);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
}

.introPromise > img {
	margin-bottom: 2em;
}

.introPromise > h2 {
	color: var(--White);
	font-family: var(--Header-Font);
	font-size: 3em;
	font-weight: 500;
}

.introPromise > p {
	color: var(--White);
	font-family: var(--Paragraph-Font);
	text-align: center;
	width: 80%;
	border-left: 3px var(--Yellow-Primary) solid;
}

	@media only screen and (min-width: 560px) { 
		.introPromise {
			height: 100vh;
		}
		.introPromise > p {
			width:26em;
		}
}

@media only screen and (min-width: 640px) { 		
		.introPromise > p {
			width: 40em;
		}
}



</style>
