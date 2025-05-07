<script>
    // @ts-nocheck
    import { Stats } from '$lib/index.js'
    export let data
</script>

<section>

    {#each data.homepages as homepage }

        <div class="textArea">
            <h2>{homepage.growingNumbers.titleNumbers}  
                <span class="yellow">{homepage.growingNumbers.titleNumbers2}</span> 
                <span>{homepage.growingNumbers.titleNumbers3}</span> 
            </h2>
            <p>{homepage.growingNumbers.textNumbers}</p>
        </div>

    {/each}

</section>

<Stats />

<style>

    section{
        padding: 10em 6em 0 6em;
        font-family: var(--Paragraph-Font);
    }

    .textArea {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    h2 {
        max-width: 50%;
        font-size: 3em;
    }

    .textArea p {
        max-width: 35%;
        border-left: solid 1px var(--Yellow-Primary);
        height: max-content;
        padding-left: 1%;
        font-family: var(--Apercu-Font);
    }

    .yellow{
        color: var(--Yellow-Primary);
    }
    
    /* 600px */
    @media (max-width: 37.5em) {

        section {
            padding: 2em;
        }

        .textArea {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20%;
        }

        h2 {
            max-width: 100%;
            font-size: 2.5em;
        }

        .textArea p {
            margin-left: 0;
            margin-top: 10%;
            max-width: 90%;
            border: none;
            padding-left: 0;
        }
    }

</style>

