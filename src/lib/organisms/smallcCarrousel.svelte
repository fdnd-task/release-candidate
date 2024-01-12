<script>
    import {Card} from '$lib/index.js';
    export let cardData;
</script>

<section>
    {#each (cardData) as book}
        <Card 
            bookUrl="{book.image.url}"
            bookTitle="{book.title}"
            bookAuthor="{book.author}"
        />
    {/each}
</section>

<style>
    section  {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        height: 50%;
    }
</style>