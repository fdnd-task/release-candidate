<script>
	import { base } from '$app/paths';
</script>

<div class="footer-container">
	<div class="navigatie">
		<nav>
			<ul class="footer-navbar">
				<li class="contact">More</li>
				<div class="link-container">
					<li><a href="{base}/">Home</a></li>
				</div>
				<div class="link-container">
					<li><a href="{base}/about">About</a></li>
				</div>
				<div class="link-container">
					<li><a class="promise" href="{base}/promise">Promise</a></li>
				</div>
			</ul>
		</nav>
	</div>
</div>

<style>
	@media only screen and (min-width: 768px) {
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			text-transform: uppercase;
			font-family: var(--Paragraph-Font);
		}

		a {
			text-decoration: none;
			color: var(--White);
			text-transform: uppercase;
			font-size: 1em;
			transition: 0.2s;
		}

		.link-container {
			height: 2.5em;
			width: 15em;
			line-height: 1;
			cursor: pointer;
		}

		.link-container:hover a {
			font-size: 1.5rem;
			line-height: 0.8;
			color: var(--Yellow-Primary);
		}

		.footer-container {
			padding: 5em 6em 0em 6em;
		}

		.contact {
			color: var(--White);
			font-size: 25px;
			margin-bottom: 25px;
			font-weight: 200;
			margin-top: -2em;
		}
	}

	@media only screen and (max-width: 600px) {
		.contact {
			text-transform: uppercase;
			display: flex;
			justify-content: center;
			margin-bottom: 25px;
		}

		a {
			text-decoration: none;
			color: var(--White);
			font-family: var(--Paragraph-Font);
			text-transform: uppercase;
			font-size: 1em;
			display: inline-block;
			transition: 0.2s;
			margin-bottom: 5px;
		}

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		.link-container:hover a {
			font-size: 1.5rem;
			line-height: 0.8;
			color: var(--Yellow-Primary);
		}

		.link-container {
			display: flex;
			justify-content: center;
		}

		.promise {
			margin-bottom: 3rem;
		}

		.footer-container {
			color: #ffffff;
			font-size: 25px;
			margin-bottom: 25px;
			font-weight: 200;
			display: flex;
			justify-content: center;
		}
	}

	@media only screen and (max-width: 768px) {
		a {
			text-decoration: none;
			color: var(--White);
			text-transform: uppercase;
			font-size: 1em;
			transition: 0.2s;
		}

		.contact {
			text-transform: uppercase;
			margin-bottom: 5px;
		}
	}
</style>
