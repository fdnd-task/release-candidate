<script>
	import { HeroTitle } from '$lib/index.js';
	import { base } from '$app/paths';
</script>

<!-- HEADER  -->

<section>
    <div class="buildings" aria-label="building illustration">
        <div class="circle">
            <HeroTitle />
            <a href="#about-section"> 
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="Yellow" height="50" viewBox="0 -960 960 960" width="50">
                    <path 
                        d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 
                        0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 
                        0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 
                        0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                    />
                </svg>
            </a>
        </div>
    </div>
</section>

<style>

    section {
        background-image: url(/assets/bg-brazillian-kids.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-position-y: 0em;
        background-size: cover;
        overflow: hidden;
        height: clamp(16em, 120vw, 90em);
        padding-top: 5em;
        display: flex;
        justify-content: center;
        align-items: top;
    }

    .buildings{
        position: relative;
        z-index: 3;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-image: url(/assets/building.svg);
        background-position-x: -1.5em;
        background-repeat: no-repeat;
        background-size: cover;
        width: clamp(14em, 90vw, 60em);
        height: clamp(14em, 90vw, 60em);
    }

    .circle{
        position: absolute;
        width: clamp(10em, 40vw, 35em);
        height: clamp(10em, 40vw, 35em);
        border-radius: 50%;
        background-color: #0B3A35;

        display: flex;
        justify-content: center;
        flex-wrap: wrap-reverse;
        align-content: flex-start;
    }

    .circle > a{
        position: inherit;
        z-index: 12;

        display: flex;
        align-items: end;
        padding: 1em;

    }

    .arrow{
        fill: var(--Yellow-Primary);
    }

    /* 1000px */
    @media (min-width: 62.5em)  {

        .buildings{
            background-position-x: -2em;
        }
    }

    /* 1400px */
    @media (min-width: 87.5em)  {

        .buildings{
            background-position-x: -3em;
        }
    }

    /* 1600px */
    @media (min-width: 100em)  {

        .buildings{
            background-position-x: -4em;
        }
    }


</style>
