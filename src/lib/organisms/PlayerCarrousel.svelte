<!-- <script>
    // @ts-nocheck
    export let data
    import { CarrouselButton } from '$lib/index.js';
   
  
</script> 


<section class="playerCards"> 

     <div class="text-area">
        {#each data.homepages as homepage }
            <h2>{homepage.playerCards.title} 
                <span>{homepage.playerCards.subTitle}</span>
            </h2>
        {/each}
    </div>

    <ul>
        {#each data.homepages as homepage }
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
            <li>
                <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
            </li>
        {/each}
    </ul>
  </section>
   
<CarrouselButton />
<style>

    /* ============== PLAYER CARDS - SECTION START ============== */

    .playerCards{
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin-right: 2rem;
        flex: 0 0 auto;
        /* overflow: hidden; */
        margin-right: 16px;
        scroll-snap-type: x mandatory;
        overflow-x: auto;
  
    }

    .text-area {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }

    h2{
        margin-bottom: 2em;
        font-size: 3em;
        color: var(--White);
        font-family: var( --Paragraph-Font);
    }

    h2 span{
        padding-left: .2em;
        color: var(--Yellow-Primary);
    }

    .playerCards ul{
        display: flex;
        gap: .5em;
        padding: 0 2em ;
        margin: 2em;
        overflow: hidden;
    }
    
    

.playerCards ul li {
    flex: 0 0 auto;
    scroll-snap-align: start;
}

.playerCards ul li img {
    width: 100%; 
    height: auto;
}




    @media only screen and (max-width: 700px) {

        section{
            width: 90vw;
        }

        h2 {
            max-width: 100%;
            font-size: 2.5em;
        }

        h2 span{
            padding-left: 0.2em;
        }
    }

    @media only screen and (max-width: 700px) {

        section{
            width: 90vw;
        }

        h2 {
            max-width: 100%;
            font-size: 2em;
        }
    }




</style> -->