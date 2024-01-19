<script>
    export let data;
</script>

<ul>
    {#each data.readingLists as book}
        <li>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <img src={book.image.url} alt={book.title}>
            <p>{book.description}</p>
        </li>
    {/each}
</ul>