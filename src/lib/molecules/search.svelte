<script>
    import { Card } from "$lib/index.js"
    export let cardData;
    let value = '';
    let error = '';
    let showDialog = false;

function openDialog() {
  showDialog = true;
}

function closeDialog() {
  showDialog = false;
  error = '';
}

function submitted(event) {
    event.preventDefault();

    // // Filter the cardData based on the search value
    const searchValue = value.toLowerCase();
    const filteredCards = Object.values(cardData).filter(card => card.title.toLowerCase().indexOf(searchValue) !== -1);

    if (filteredCards.length === 0) {
      // Als er geen overeenkomende resultaten zijn, toon een foutmelding
      error = 'Geen resultaten gevonden';
    } else {
      // Update de cardData met de gefilterde resultaten en reset de foutmelding
      cardData = filteredCards;
      error = '';
    }
  }

</script>
<section>

  <button on:click={openDialog}>Zoeken</button>
  {#if showDialog}
        <div class="model">
            <form action="" on:submit={submitted}>
                <input type="text" placeholder="Search.." name="search" bind:value >
                <button type="submit">Search</button>
                <p>You are searching: <span>{value}</span></p>
             </form> 
            {#if error}
                <h2>{error}</h2>
                {:else}
              <ul>
              {#each Object.values(cardData) as card}
                    <li>
                        <img src="{card.image.url}" alt="foto van {card.title}" loading="lazy" width="50" height="50">
                        <p>{card.title}</p>
                    </li>
              {/each}
            </ul>
            {/if}
        </div>
     

   <button on:click={closeDialog}>Sluiten</button>
{/if}

</section>

<style>
    button{
        all: unset;
        position: fixed;
        right: 2%;
        top: 80%;
        padding: 2rem;
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
        text-decoration: none;
        
          
    }
    .model{
        background-color: var(--primary-background-color);
        position: fixed;
        right: 2%;
        top:50%;
        width: 70vw;
        height: 50vh;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border-radius: 10px;
        padding: 2px;
        overflow-y: auto;
    }
    form{
    text-align: center;
    }

    .model input{
        width: 50vw;
        padding: 1rem .5rem;
        margin: .5rem 0;
    
    }
    .model button{
        all: unset;
        padding: 1rem .5rem;
       background-color: var(--primary-accent-color);
       color: var(--primary-light-color);
    }
    ul{
        padding: 1.5rem ;
    }
    li{
        list-style: none;
        border-bottom: 1px solid rgb(172, 171, 171);
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: .5rem;

    }
    span{
        color: var(--primary-accent-color);
        font-weight: 900;
    }
    h2{
        padding: 1.5rem ;
        text-align: center;
    }
</style>