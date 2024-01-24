<script>
	import { base } from '$app/paths';
</script>

<main>
  <section id="hero1" class="hero">
    <div class="inner">
      <h2 class="sponsorpage-span-h2">
        Become a <span class="yellow">sponsor</span>
      </h2>
      <a href="{base}#sponsorpage">
        <svg
          class="arrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ff0"
          height="50"
          viewBox="0 -960 960 960"
          width="50"
        >
          <path
            d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>
      </a>
    </div>
  </section>

  <div class="sponsorpage-wrapper">
    <div class="sponsoroptions material">
      <svg
        width="1513"
        height="539"
        viewBox="0 0 1513 539"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path d="M1513 0 0 69.428v406.284L1513 539V0Z" fill="#FFDA1D" /><path
          d="M84 142.097c0-8.139 6.49-14.793 14.627-14.995l1316.003-32.72c8.42-.21 15.37 6.565 15.37 14.996V431.46c0 8.492-7.04 15.291-15.53 14.991l-1316-46.535c-8.073-.285-14.47-6.913-14.47-14.99V142.097Z"
          fill="#FFE356"
        /></svg
      >
      <div class="options-text-wrapper">
        <h4 class="black">MATERIAL</h4>
        <p class="black">
          Sponsor football materials, change the Game! Your generous donation
          can provide crucial equipment to aspiring athletes. <br />
          Help us make a difference today.
        </p>
        <a href="{base}/payment">
          <button class="sponsor-button sponsor-page-button green">
            Choose sponsor
          </button>
        </a>
      </div>
    </div>

    <div class="sponsoroptions financial">
      <svg
        width="1541"
        height="530"
        viewBox="0 0 1541 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L1541 68.2689V467.769L0 530V0Z" fill="#3DBAE1" />
        <path
          d="M1434 143.097C1434 134.958 1427.51 128.304 1419.37 128.102L103.373 95.3822C94.9452 95.1727 88 101.947 88 110.378V432.46C88 440.952 95.0433 447.751 103.53 447.451L1419.53 400.916C1427.6 400.631 1434 394.004 1434 385.926V143.097Z"
          fill="#1980A0"
        />
      </svg>
      <div class="options-text-wrapper">
        <h4>FINANCIAL</h4>
        <p>
          Support Financially, Empower Dreams! Your generous donation can
          provide vital financial support to individuals in need. <br />
          Help us make a difference today
        </p>
        <a href="{base}/payment">
          <button class="sponsor-button sponsor-page-button">
            Choose sponsor
          </button>
        </a>
      </div>
    </div>

    <div class="sponsoroptions clothing">
      <svg
        width="1513"
        height="557"
        viewBox="0 0 1513 557"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1513 0L3.8147e-06 71.7468V491.598L1513 557V0Z"
          fill="#163A3A"
        />
        <path
          d="M88 158.097C88 149.958 94.4907 143.304 102.627 143.102L1418.63 110.382C1427.05 110.173 1434 116.947 1434 125.378V447.46C1434 455.952 1426.96 462.751 1418.47 462.451L102.47 415.916C94.3971 415.631 88 409.003 88 400.926V158.097Z"
          fill="#1F4F4F"
        />
      </svg>

      <div class="options-text-wrapper">
        <h4>CLOTHING</h4>
        <p>
          Sponsor clothing, transform Lives! Your generous donation can provide
          essential clothing to those in need.<br />
          Help us make a difference today.
        </p>
        <a href="{base}/payment">
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
    fill: var(--Yellow-Primary);
  }

  h2 {
    font-family: var(--Paragraph-Font);
    font-size: 5.5em;
    color: var(--White);
  }

  .sponsorpage-span-h2 {
    margin-top: 4em;
  }

  p {
    font-family: var(--Apercu-Font);
    font-size: 1em;
    color: var(--White);
  }

  .yellow {
    color: var(--Yellow-Primary);
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
    font-family: var(--Paragraph-Font);
    margin-bottom: 1em;
	margin-top: 2em;
  }

  .sponsor-button {
    text-decoration: none;
    color: var(--Charcoal);
    background-color: var(--Yellow-Primary);
    font-family: var(--Apercu-Font);
    font-weight: bold;
    border: none;
    border-radius: 3em;
    padding: 1em 2em;
    text-transform: uppercase;
    transition: 0.2s;
    cursor: pointer;
	margin-bottom: 3em;
  }

  .sponsor-button:hover {
    background-color: var(--White);
    color: var(--Charcoal);
  }

  .sponsor-page-button {
    z-index: 3;
    margin-top: -5%;
	margin-right: -5%;
	float: right;
  }

  .black {
    color: var(--Charcoal);
  }

  .green {
    background-color: var(--White);
    color: var(--Charcoal);
  }

  .green:hover {
    background-color: var(--Blue-Secondary);
    color: var(--White);
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #hero1 {
    background-image: url("/assets/brasilvoetbalveld.png");
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
      margin-top: -2%; /* Adjust margin for smaller screens */
	  margin-left: 50%;
    }

    .sponsoroptions {
      margin-bottom: -1em; /* Add margin between sponsor options for smaller screens */
    }

  }
</style>
