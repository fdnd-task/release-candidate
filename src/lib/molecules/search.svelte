<script>
    import { Card } from "$lib/index.js"
    import { onMount } from 'svelte';
    
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
    const filteredCards = Object.values(cardData).filter(card => card.frabl.key1.toLowerCase().includes(searchValue));
    // const filteredCards = Object.values(cardData).filter(card => card.frabl.key1.toLowerCase() === searchValue);

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
  <div on:click={openDialog} class="button">
    <form action="" on:submit={submitted}>
      <input type="text" placeholder="Search.." name="search" bind:value autocomplete="off">
      <button type="submit">Search</button>
   </form> 
  </div>
  {#if showDialog}
        <div class="model">
                <p>You are searching: <span>{value}</span></p> 
            {#if error}
                <h2>{error}</h2>
                {:else}
              <ul>
              {#each Object.values(cardData) as card}
                    <li>
                        <img src="{card.coverimages[0]}" alt="foto van {card.frabl.key1}" loading="lazy" width="50" height="50">
                        <p>{card.frabl.key1}</p>
                    </li>
              {/each}
            </ul>
            {/if}
            <a href={value}>Toon meer</a>
            <button on:click={closeDialog} class="close-button">Sluiten</button>
            
        </div>   
{/if}

</section>

<style>
    .button{
        all: unset;
        position: fixed;
        left: 25%;
        top: 0;
        padding: 2rem;
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
        text-decoration: none;
        
          
    }
    .model{
        background-color: var(--primary-background-color);
        position: fixed;
        left: 25%;
        top:9.5%;
        width: 70vw;
        height: 50vh;
        box-shadow: rgba(0, 0, 0, 0.25) 0 0.875rem 1.75rem, rgba(0, 0, 0, 0.22) 0px 0.625rem 0.625rem;
        border-radius: 0.625rem;
        padding: 1rem;
        overflow-y: auto;
    }
    form{
    text-align: center;
    }

    input{
        padding: 1rem .5rem; 
    }
    button{
        all: unset;
        padding: 1rem .5rem;
       background-color: var(--primary-accent-color);
       color: var(--primary-light-color);
    }
    .close-button{
      position: absolute;
      right: 3%;
      bottom: 3%;
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