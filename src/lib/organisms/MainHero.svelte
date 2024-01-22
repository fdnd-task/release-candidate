<script>
	import { HeroTitle, BtnArrow } from '$lib/index.js';
	import { base } from '$app/paths';
</script>

<!-- HEADER  -->

<section>
    <div class="buildings" aria-label="building illustration">
        <div class="circle">
            <HeroTitle />
			<BtnArrow href="{base}#intro-about" />
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
