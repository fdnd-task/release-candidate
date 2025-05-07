<script>
	// export let data;
    import { base } from '$app/paths';
</script>

<section class="principlesPromise">
    <h2>
        Our 
        <span style=" color: var(--Blue-Secondary);">principles</span>
    </h2>
    <img src="{base}/assets/PromisePrinciples.svg" alt="">
    <ol>
        <li>We provide training and resources to our staff to help them understand and respect cultural differences.</li>
        <li>We develop and implement policies that protect children from harm.</li>
        <li>We actively engage with communities to understand their needs and challenges.</li>
        <li>We make our financial statements and other reports publicly available.</li>
        <li>We work to ensure that our programs are accessible to all children, regardless of their background.</li>
        <li>We advocate for policies that promote equality and social justice.</li>
    </ol>
</section>

<style>
    .principlesPromise {
        width: 70%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 3em auto 13em auto;
    }

    .principlesPromise > img {
        margin-bottom: 2em;
    }

    .principlesPromise > h2 {
        color: var(--White);
        font-family: var(--Header-Font);
        font-size: 3em;
        font-weight: 500;
    }

    .principlesPromise > ol {
        padding: 1em;
        font-family: var(--Paragraph2Font);
        list-style-position: inside;
    }

    ol li {
        display: list-item;
        list-style: auto;
    }

    li::marker {
        font-size: 2em;
        color: var(--Blue-Secondary);
    }

    @media (min-width: 560px) { 
        .principlesPromise {
            height: 20vh;
            margin: 3em auto 15em auto;
        }
        .principlesPromise > ol {
            width: 25em;
        }
    }

    @media (min-width: 640px) { 
        .principlesPromise {
            background-image: url(/assets/PromiseprinciplesBackground.svg);
            background-repeat: no-repeat;
            height: 100vh;
        }
    }

</style>
    