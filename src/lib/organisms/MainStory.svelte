<script>
    // @ts-nocheck
    export let data
</script>

<section>

    {#each data.homepages as homepage }

        <div class="storyWrapper">
            <h2>
                {homepage.ourStory.titleStory}
                <span class="yellow">{homepage.ourStory.titleStory2}</span> 
                <span>{homepage.ourStory.titleStory3}</span> 
            </h2>
            <p>{homepage.ourStory.subTextStory}</p>    
        </div>

        <div class="storyVideo">
            <video width="100%" height="100%" loop muted autoplay>
                <source src="{homepage.ourStory.storyVideo.url}" type="video/mp4">
            </video>
        </div>
        
    {/each}

    <div class="rollContainer">
        <p class="rollText">Where the real <span class="yellow">legends</span> begin</p>
    </div>

</section>


<style>

    section{
        padding: 4em 6em 0 6em;
        overflow: hidden;
    }

    .storyWrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    h2 {
        max-width: 50%;
        font-size: 3em;
    }

    .yellow{
        color: var(--Yellow-Primary);
    }

    .storyWrapper p{
        max-width: 35%;
        border-left: solid 1px var(--Yellow-Primary);
        padding-left: 1%;
        font-family: var(--Apercu-Font);
    }

    .storyVideo {
        margin-top: 7em;
        display: flex;
        justify-content: center;
    }

    .storyVideo video {

        width: fit-content;
        -webkit-mask-image: url(/assets/story-shape.svg);
        mask-image: url(/assets/story-shape.svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        width: 75vw;
        height: 100%;
        object-fit: cover;
        margin-bottom: 12em;
    }

    .rollContainer {
        height: 15em;
    }

    .rollText {
        font-size: 5.5em;
        font-family: var(--Paragraph-Font);
        margin-bottom: 8em;
    
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        
        -moz-animation: my-animation 9s linear infinite;
        -webkit-animation: my-animation 9s linear infinite;
        animation: my-animation 9s linear infinite;
    }

    /* for Firefox */
    @-moz-keyframes my-animation {
        from { -moz-transform: translateX(-100%); }
        to { -moz-transform: translateX(100%); }
    }

    /* for Chrome */
    @keyframes my-animation {
        from { -webkit-transform: translateX(-100%); }
        to { -webkit-transform: translateX(100%); }
    }
    
    /* 900px */
    @media  (max-width: 56.25em) {
        .rollText {
        font-size: 4em;
        }

        .rollContainer {
        height: 8em;
    }
    }

    /* 600px */
    @media (max-width: 37.5em) {
        
        section {
            padding: 2em;
        }

        h2 {
            max-width: 100%;
            font-size: 2.5em;
        }

        .storyWrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20%;
        }

        .storyWrapper p{
            max-width: 100%;
            margin-left: 0;
            margin-top: 10%;
            max-width: 90%;
            border: none;
            padding-left: 0;
        }

        .rollText {
        font-size: 3em;
        }
    }


</style>
