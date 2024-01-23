<script>
    export let data;
    console.log(data.results)
    const results = data.results
    import { Card } from '$lib/index.js'
    
</script>

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