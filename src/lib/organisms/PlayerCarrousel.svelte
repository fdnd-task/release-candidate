<script>
    export let data
</script>

<!-- PLAYER CARDS -->

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

    <div class="btn-wrap legends-btn">
        <button class="news-prev-btn" onclick="prevBtn()">
            <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="carroussel-button"
                    d="M49.8779 2.96158C48.6231 10.7315 47.8388 18.5687 46.5289 26.3357C45.6401 31.6034 45.1725 36.9415 44.4812 42.2443C44.0165 45.8088 43.6098 49.3879 42.9621 52.9203C42.3231 56.394 41.9484 56.5579 38.7883 55.2322C33.8883 53.1778 29.0377 51.0063 24.1464 48.9197C17.5734 46.1161 10.9859 43.3476 4.40129 40.5645C4.31415 40.5264 4.2183 40.503 4.12826 40.4679C1.3883 39.3714 0.0192805 37.3151 0.0212169 34.2988V23.4824H0.00379026C0.00379026 19.3911 -0.00782227 15.2998 0.00960504 11.2085C0.0183187 8.68588 0.285537 8.25568 2.6237 7.85183C9.08342 6.73389 15.5925 5.86762 22.0145 4.57117C25.9908 3.76638 30.002 3.20157 33.9783 2.42311C38.3323 1.56857 42.7036 0.801817 47.0866 0.114085C49.6803 -0.292702 50.3019 0.327715 49.8779 2.96158Z"
                    fill="white" />
                <path
                    d="M24.4777 20.9999L26 22.6449L21.0553 27.9999L26 33.3549L24.4777 34.9999L18 27.9999L24.4777 20.9999Z"
                    fill="#051A1A" />
            </svg>
        </button>
        <button class="news-next-btn" onclick="nextBtn()">
            <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="carroussel-button"
                    d="M0.122151 53.0384C1.37692 45.2685 2.16116 37.4313 3.47111 29.6643C4.3599 24.3966 4.82752 19.0585 5.5188 13.7557C5.98353 10.1912 6.39019 6.61206 7.03791 3.07975C7.67691 -0.394031 8.0516 -0.557926 11.2118 0.767788C16.1117 2.82221 20.9623 4.99371 25.8536 7.08032C32.4266 9.88392 39.0141 12.6524 45.5987 15.4355C45.6859 15.4736 45.7817 15.497 45.8718 15.5321C48.6117 16.6286 49.9807 18.6849 49.9788 21.7012L49.9788 32.5177L49.9962 32.5177C49.9962 36.6089 50.0078 40.7002 49.9904 44.7915C49.9817 47.3141 49.7145 47.7443 47.3763 48.1482C40.9166 49.2661 34.4075 50.1324 27.9855 51.4288C24.0092 52.2336 19.998 52.7984 16.0217 53.5769C11.6677 54.4314 7.29639 55.1982 2.91342 55.8859C0.319656 56.2927 -0.301914 55.6723 0.122151 53.0384Z"
                    fill="white" />
                <path 
                    d="M22.5223 20.9999L21 22.6449L25.9447 27.9999L21 33.3549L22.5223 34.9999L29 27.9999L22.5223 20.9999Z"
                    fill="#051A1A" />
            </svg>
        </button>
    </div>
</section>

<style>

    /* ============== PLAYER CARDS - SECTION START ============== */

    section{
        width: 80vw;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
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
    
    .legends-btn{
        background: none;
        display: flex;
        justify-content: center;
        margin: 2em 0;
    }

    .btn-wrap {
        text-align: center;
        width: 100%;
    }

    .btn-wrap>button {
        background-color: transparent;
        border: none;
    }

    .btn-wrap button svg:hover .carroussel-button{
        cursor: pointer;
        fill: var(--Yellow-Primary);
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




</style>