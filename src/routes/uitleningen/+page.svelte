<script>
    import { SmallCarrousel, Table } from '$lib/index.js';
    export let data;
</script>


<section>
<h1>Uitleningen</h1>

<SmallCarrousel cardData={data.uitleengeschiedenis1}/>
</section>

<section>
<h2>Uitleengeschiedenis</h2>

<Table tableData={data.uitleengeschiedenis1}/>
</section>


<style>
    section {
        margin: 2rem 3rem;
        padding: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
    }
</style>