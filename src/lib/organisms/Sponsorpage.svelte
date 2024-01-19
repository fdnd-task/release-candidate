<script>
	import { Sponsoroptions } from '$lib/index.js';
</script>
  
  <main>
	<section id="hero1" class="hero">
	  <div class="inner">
		<h2 class="sponsorpage-span-h2">
		  Become a <span class="yellow">sponsor</span>
		</h2>
		<a href="#sponsorpage">
		  <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="#ff0" height="50" viewBox="0 -960 960 960" width="50">
			<path d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
		  </svg>
		</a>
	  </div>
	</section>
  
	<div class="sponsorpage-wrapper">
	  <div class="sponsoroptions material">
		<svg width="100%" height="539" viewBox="0 0 1512 539" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M1513 0 0 69.428v406.284L1513 539V0Z" fill="#FFDA1D" />
		</svg>
		<div class="options-text-wrapper">
		  <h4 class="black">MATERIAL</h4>
		  <p class="black">
			Sponsor football materials, change the Game! Your generous donation can provide crucial equipment to aspiring athletes. <br />
			Help us make a difference today.
		  </p>
		  <a href="/payment">
			<button class="sponsor-button sponsor-page-button green">
			  Choose sponsor
			</button>
		  </a>
		</div>
	  </div>
  
	  <div class="sponsoroptions financial">
		<svg width="100%" height="530" viewBox="0 0 1512 530" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M-5 0L1536 68.2689V467.769L-5 530V0Z" fill="#3DBAE1" />
		</svg>
		<div class="options-text-wrapper">
		  <h4>FINANCIAL</h4>
		  <p>
			Support Financially, Empower Dreams! Your generous donation can provide vital financial support to individuals in need. <br />
			Help us make a difference today
		  </p>
		  <a href="/payment">
			<button class="sponsor-button sponsor-page-button">
			  Choose sponsor
			</button>
		  </a>
		</div>
	  </div>
  
	  <div class="sponsoroptions clothing">
		<svg width="100%" height="557" viewBox="0 0 1508 557" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M1508 0L-5 71.7468V491.598L1508 557V0Z" fill="#163A3A" />
		</svg>
		<div class="options-text-wrapper">
		  <h4>CLOTHING</h4>
		  <p>
			Sponsor clothing, transform Lives! Your generous donation can provide essential clothing to those in need.<br />
			Help us make a difference today.
		  </p>
		  <a href="/payment">
			<button class="sponsor-button sponsor-page-button">
			  Choose sponsor
			</button>
		  </a>
		</div>
	  </div>
	</div>
  
  </main>
  
  <style>
	/* Common styles for all screen sizes */
	* {
	  box-sizing: border-box;
	  margin: 0;
	  padding: 0;
	}
  
	section {
	  padding: 0 6em;
	  overflow: hidden;
	}
  
	.arrow {
	  fill: var(--candelLight);
	}
  
	h2 {
	  font-family: var(--paragraph-font);
	  font-size: 5.5em;
	  color: var(--justWhite);
	}
  
	.sponsorpage-span-h2 {
	  margin-top: 4em;
	}
  
	p {
	  font-family: var(--copy-font);
	  font-size: 1em;
	  color: var(--justWhite);
	}
  
	.yellow {
	  color: var(--candelLight);
	}
  
	.sponsorpage-wrapper {
	  position: relative;
	  display: flex;
	  flex-direction: column;
	}
  
	.sponsoroptions {
	  position: relative;
	}
  
	.material svg,
	.financial svg,
	.clothing svg {
	  position: relative;
	  width: 100%;
	  height: auto;
	}
  
	.options-text-wrapper {
	  position: absolute;
	  top: 20%;
	  left: 18%;
	  width: 60%;
	}
  
	h4 {
	  font-size: 2em;
	  font-family: var(--paragraph-font);
	  margin-bottom: 1em;
	}
  
	.sponsor-button {
	  text-decoration: none;
	  color: var(--charcoal);
	  background-color: var(--candelLight);
	  font-family: var(--copy-font);
	  font-weight: bold;
	  border: none;
	  border-radius: 3em;
	  padding: 1em 2em;
	  text-transform: uppercase;
	  transition: .2s;
	  cursor: pointer;
	}
  
	.sponsor-button:hover {
	  background-color: var(--button-hover-color);
	  color: var(--charcoal);
	}
  
	.sponsor-page-button {
	  z-index: 3;
	  margin-top: 9%;
	}
  
	.black {
	  color: var(--charcoal);
	}
  
	.green {
	  background-color: var(--justWhite);
	  color: var(--charcoal);
	}
  
	.green:hover {
	  background-color: var(--pictonBlue);
	  color: var(--justWhite);
	}
  
	*,
	*:after,
	*:before {
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
	}
  
	#hero1 {
	  background-image: url("brasilvoetbalveld.png");
	  background-size: cover;
	  background-position: center center;
	  background-attachment: fixed;
	}
  
	.hero {
	  text-align: center;
	  position: relative;
	  width: 100%;
	}
  
	.inner {
	  min-height: 600px;
	  position: relative;
	}
  
	@media screen and (max-width: 768px) {
	  section {
		padding: 0 2em; /* Adjust padding for smaller screens */
	  }
  
	  .hero {
		text-align: center;
		padding: 2em 0; /* Adjust padding for smaller screens */
	  }
  
	  h2 {
		font-size: 3em; /* Adjust font size for smaller screens */
	  }
  
	  .sponsorpage-span-h2 {
		margin-top: 6em; /* Adjust margin for smaller screens */
	  }
  
	  .options-text-wrapper {
		top: 15%; /* Adjust position for smaller screens */
		left: 5%; /* Adjust position for smaller screens */
		width: 90%; /* Adjust width for smaller screens */
	  }
  
	  p {
		font-size: 0.9em; /* Adjust font size for smaller screens */
	  }
  
	  h4 {
		font-size: 1.5em; /* Adjust font size for smaller screens */
		margin-bottom: 0.5em; /* Adjust margin for smaller screens */
	  }
  
	  .sponsor-button {
		padding: 0.8em 1.5em; /* Adjust padding for smaller screens */
	  }
  
	  .sponsor-page-button {
		margin-top: 4%; /* Adjust margin for smaller screens */
	  }
  
	  .sponsoroptions {
		margin-bottom: 2em; /* Add margin between sponsor options for smaller screens */
	  }
  
	  .material svg,
	  .financial svg,
	  .clothing svg {
		width: 100%; /* Adjust width for smaller screens */
		height: auto; /* Maintain aspect ratio for SVG on smaller screens */
	  }
	}
  </style>