<script>
    export let tableData;
</script>

<section>
    <table>
        <tbody>
            {#each Object.values(tableData) as row}
                <tr>
                    {#if 'image' in row}
                        <td><img src={row.image.url} width="50px" alt="afbeelding van {row.title}" loading="lazy"></td>
                    {/if}
                    {#each Object.values(row) as cell}
                        {#if typeof cell !== 'object' || !('url' in cell)}
                            <td>{cell}</td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
    
    table {
        /* border: 1px solid var(--primary-dark-color); */
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 70vw;
        table-layout: fixed;
        border-radius: var(--primary-table-border-radius);
    }

    table td {
        background-color: var(--primary-light-color);
        border: 1px solid var(--primary-table-border-color);
        padding: .35rem;
    }

    table td:first-of-type {
        border-top-left-radius: var(--primary-table-border-radius);
        border-top-right-radius: var(--primary-table-border-radius);
    }

    table td:last-of-type {
        border-bottom-left-radius: var(--primary-table-border-radius);
        border-top-right-radius: var(--primary-table-border-radius);
    }

    table td:first-child {
        padding: .625rem;
        text-align: center;
    }

    table td:not(:first-child) {
        padding: .625rem;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

@media screen and (max-width: 40rem) {
section{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

    table td:nth-of-type(1) {
        border-radius: var(--primary-table-border-radius);
    }

    table {
        border: 0;
    }

    /* table td:first-of-type {
        display: none;
    } */

    table tr {
        border-bottom: 1px solid var(--primary-table-border-color);
        display: block;
        margin-bottom: .625rem;
    }

    table td {
        border-bottom: 1px solid var(--primary-table-border-color);
        display: block;
        font-size: .8rem;
        text-align: left;
    }

    table td:last-child {
        border-bottom: 0;
    }
}

</style>