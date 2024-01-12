<script>
    import {LinkButton} from '$lib/index'
    export let bookUrl
    export let bookTitle
    export let bookAuthor
</script>

<article>
    <img src="{bookUrl}" alt="foto van {bookTitle}" loading="lazy">
    <section class="info">
        <p class="p__title">{bookTitle}</p>
        <p>{bookAuthor}</p>
    </section>
</article>

<style>

    article {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 1rem 3rem 1rem 0;
        width: 12rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
        scroll-snap-align: start;
        transition: 0.3s;
        justify-content: space-between;
        flex-basis: 100%;
    }

    article img {
        object-fit: cover;
        height: 50%;
    }
    
    article:hover {
        scale: 103%;
        /* background-color:red; */
        color: #FFFFFF;
        box-shadow: var(--primary-dark-color) 0px 0px 10px 0px;
    }

    .info > p {
        font-size: 0.9rem;
    }

    .p__title {
        font-weight: bold;
    }

    .info  {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 40em) {

        article {
            scroll-snap-align: center;
            width: 13rem;
        }

        .info > p {
        font-size: 0.75rem;
        }
}

@media (max-width: 68em) {

    .info > p {
        font-size: 0.8rem;
    }

    article {
        width: 13rem;
    }
}
</style>