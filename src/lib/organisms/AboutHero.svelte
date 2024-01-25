<script>
	import { BtnArrow } from '$lib/index.js';
    import { base } from '$app/paths';
	// export let data;
</script>

<section class="heroAbout">
    <div class="heroAboutWrapper">
        <h1>
            ABOUT 
            <span style=" color: var(--Yellow-Primary);">US</span>
        </h1>
        <p> At INK, we're on a mission to transform the lives of young individuals.</p>
        <div class="btnArrow">
            <BtnArrow  href="{base}#introAbout" />
        </div>
    </div>
</section>

<style>

    h1 {
        font-size: 7.5em;
    }

    .heroAbout {
        width: 100%;
        height: 50vh;
        display: block;
        text-align: center;
    }

    .heroAbout::before {
        content: "";
        background: url(/assets/INK-content3.png) ;
        background-position: center;
        background-size: cover;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;   
    }

    .heroAboutWrapper {
        /* width: 80%; */
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -30%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .heroAboutWrapper > h1 {
        color: var(--White);
    }

    .heroAboutWrapper > p {
        width: 80%;
    }

    .btnArrow {
        display: flex;
        justify-content: center;
    }

</style>