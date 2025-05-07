<script>
	import { base } from '$app/paths';
	// export let data;
</script>

<section id="introAbout">
    <article>
        <h2> 
            <span style=" color: black;"> Our Ultimate </span>  
            <span style=" color: white;"> goal</span> 
            <img class="morale" src="{base}/assets/Accuracy.png" alt="icon">
        </h2> 
        <div class="paragraphIntro"> 
            <div>  
                <img class= "line" src="{base}/assets/Line.png" alt="line"> 
            </div>
            <div> 
                <p class="introParagraph-1"> 
                    Our ultimate goal is to provide a secure and nurturing environment where the youth can flourish. 
                    By engaging them in sports and community activities, we are sowing the seeds of hope and optimism. 
                </p>
                <p class="introParagraph-2">  
                    Together, we can score a goal for education, empowerment, and a brighter future.
                </p>
            </div>
        </div>
    </article>
</section>


<style> 

    #introAbout {
        overflow: hidden;
        margin-top: 3em;
        padding: 8em 1em;
        height: clamp(37em, 74vw, 62em);
        background-image: url(/assets/Group-168.svg);
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 3em 0;
    }

    h2 {
        font-size: 2em;
        padding-left: 1em;
    }

    p {
        color: black;
        width: 25em;
        padding-left: 1em;
        padding-right: 2em;
        float: right;
        font-size: 12px;
        font-family: var(--Paragraph-Font);
        
    }

    .introParagraph-2 {
        padding-top: 1em;
    }

    .paragraphIntro {
        display: flex;
        justify-content: space-between;
        max-width: 20em;
    }

    .paragraphIntro div:nth-of-type(1){
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .line {
        padding-top: 0.6em;
    }

    /* 600px */
    @media (min-width: 37.5em) {

        h2{
            font-size: 2.8em;
            padding: 0;
        }

        .paragraphIntro{
            max-width: 30em;
            padding: 2em 1em;
        }

        p{
            width: 30em;
            font-size: 1em;
        }
    }

    /* 1000px */
    @media (min-width: 62.5em) {

        #introAbout {
            height: clamp(52em, 74vw, 79em);
            margin-top: 6em;
        }

        article{
            margin: 8em 0;
        }

        h2{
            font-size: 3em;
            text-align: left;
            width: 100%;
            padding-left: 1em;
        }

        .paragraphIntro{
            max-width: 47em;
            padding: 2em 1em;
        }

        p{
            width: 30em;
            font-size: 1.5em;
        }

    }



    /* @media (min-width: 48em) {


        .morale {
            display: none;
            visibility: hidden;
        }

        .paragraphIntro {
            display: flex;
            justify-content: center;
        }

        .introParagraph-1 {
            float: left;
            padding-left: 7em;
            width: 37em;
        }

        .introParagraph-2 {
            float: left;
            padding-left: 7em;
            width: 37em;
        }
    }  */

</style>





