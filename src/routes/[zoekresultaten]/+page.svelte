<script>
    export let data;
    console.log(data.results)
    const results = data.results
    import { Card } from '$lib/index.js';
</script>

<h1>Uw resultaten voor:</h1>

<section>
    {#each results as result}
    <a href={result.detailLink}>
        <Card             
            bookAuthor={result.authors[0]}
            bookTitle={result.frabl.key1}
            bookUrl={result.coverimages[0]}/>
        <!-- <h1>{result.frabl.key1}</h1> -->
    </a>
    {/each}
</section>


<style>

    h1{
        padding: 2rem;
    }

    section{
        display: grid;
        grid-template-columns:repeat(auto-fit, minmax(15em, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    a{  
        display: block;
    }
</style>