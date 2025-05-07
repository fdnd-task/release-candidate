<script>
    import { base } from '$app/paths';
	// export let data;
</script>

<section class="ourValues">

    <h1 class="title"> 
        <span style=" color: white;">Our</span> 
        <span style=" color: var(--Blue-Secondary);">Values</span> 
        <img class="morale" src="{base}/assets/Morale.png" alt="morale"> 
    </h1>
    <div class="values">
        <div class="values1"> 
            <h4>  
                <img src="{base}/assets/Checkbox.png" alt=""> 
                Respect 
            </h4>
            <h4>  
                <img src="{base}/assets/Checkbox.png" alt=""> 
                Protect
            </h4>
            <h4>  
                <img src="{base}/assets/Checkbox.png" alt=""> 
                Humanity 
            </h4>
        </div>
        <div class="values2"> 
            <h4>  
                <img src="{base}/assets/Checkbox.png" alt="">
                Transparency 
            </h4>
            <h4>  
                <img src="{base}/assets/Checkbox.png" alt=""> 
                Fairness
            </h4>
            <h4>  
                <img src="{base}/assets/Checkbox.png" alt=""> 
                Equality
            </h4>
        </div>
    </div>

    <div class="paragraphIntro"> 
        <div class="line2">  
            <img class= "line" src="{base}/assets/Line-blue.png" alt="line"> 
        </div>
        <div class="paragraph"> 
            <p class="introParagraph1"> 
                At INK, we believe that these values are the 
                foundation of a just and equitable society. 
            </p>
            <p class="introParagraph2">  
                We are committed to upholding these values in all of our work, 
                including our programs, our partnerships, and our interactions 
                with our stakeholders.
            </p>
        </div>
    </div>
</section>

<style>

    h1 {
        font-size: 50px;
        float: center;
        padding-top: 3em;
        display: flex;
        justify-content: center;
    }

    .values {
        display: flex;
        justify-content: space-between;
        padding: 1em;
    }

    h4 {
        font-family: var(--JubilatMedium-Roman);
        padding: 1em;
        align-content: center;
        font-size: 1.1em;
    }

    .ourValues {
        background-image: url(/assets/Group-1.png);
        height: 1000px;
    }

    .paragraphIntro {
        display: flex;
        justify-content: space-between;
        padding: 2em;
    }

    .paragraph {
        padding-left: 1em;
    }

    .introParagraph1 {
        margin-bottom: 1em;
    }

    .introParagraph2 {
        margin-top: 1em;
    }

    .line2 {
        margin-top: 10px; 
    } 

    p {
        font-family: var(--Paragraph-Font);
    }
    
    @media (min-width: 48em) {

        .ourValues{
            background-image: url(/assets/Group-84.svg);
            padding-left: 10em;
            padding-right: 10em;
            padding-bottom: 5em;
            height: 1500px;
        }

        .values {
            padding: 9em;
        }

        p {
            font-size: 35px;
        }

        h4 {
            font-size: 30px;
        }

        .paragraph {
            width: 1189px;
            padding-right: 9em;
        
        }

        .line {
            height: 169px;
        }

        .paragraphIntro {
            padding-bottom: 8em;
        }

        h1 {
            font-size: 80px;
            display: flex;
            justify-content: center;
        }

        .morale {
            width: 79px;
            height: 79px;
        }
    }

    
</style>