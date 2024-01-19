<script>
    export let data;
    console.log(data.results)
    const results = data.results
</script>

<section>
    {#each results as result}
    <h1>{result.frabl.key1}</h1>
    {/each}
    {data}
</section>