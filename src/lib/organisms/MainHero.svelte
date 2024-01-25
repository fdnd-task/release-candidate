<script>
	import { HeroTitle, BtnArrow } from '$lib/index.js';
	import { base } from '$app/paths';
</script>

<!-- HEADER  -->

<section>
    <div class="buildings" aria-label="building illustration">
        <div class="circle">
            <HeroTitle />
			<BtnArrow href="{base}#introAbout" />
        </div>
    </div>
</section>

<style>

    section {
        padding-top: 5em;
        background-image: url(/assets/bg-brazillian-kids.webp);
        background-repeat: no-repeat;
        background-position: center;
        background-position-y: 0em;
        background-position-x: -16em;
        background-size: cover;
        overflow: hidden;
        height: clamp(16em, 155vw, 65em);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 13em;
    }

    .buildings{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-image: url(/assets/building.svg);
        background-position-x: -1.1em;
        background-repeat: no-repeat;
        background-size: cover;
        width: clamp(14em, 84vw, 50em);
        height: clamp(14em, 86vw, 50em);
    }

    .circle{
        position: absolute;
        width: clamp(12em, 55vw, 35em);
        height: clamp(12em, 55vw, 35em);
        border-radius: 50%;
        background-color: #122423;

        display: flex;
        justify-content: center;
        flex-wrap: wrap-reverse;
        align-content: flex-start;
    }

    /* 650px */
    @media (min-width: 40em)  {

        section{
            padding-top: 3em;
        }
    }

    /* 768px */
    @media (min-width: 48em)  {

        section{
            padding-top: 0;
        }
    }

    /* 900px */
    @media (min-width: 56em)  {

        section{
            background-position-x: 0;
            height: clamp(16em, 155vw, 80em);
            padding-bottom: 30em;
        }

        .circle{
            width: clamp(12em, 55vw, 30em);
            height: clamp(12em, 55vw, 30em); 
        }
    }

    /* 1400px */
    @media (min-width: 87.5em)  {


        .circle{
            width: clamp(12em, 55vw, 33em);
            height: clamp(12em, 55vw, 33em);
        }
    }

    /* 1600px */
    @media (min-width: 100em)  {

        .circle{
            width: clamp(12em, 55vw, 36em);
            height: clamp(12em, 55vw, 36em);
        }
    }


    /* 2000px */
    @media (min-width: 125em)  {

        section{
            bottom: 5em;
        }
    }







</style>
