<script>
	import { BtnArrow } from '$lib/index.js';
    import { base } from '$app/paths';
	// export let data;
</script>


<section class="our-values">

    <h1 class="title"> <span style=" color: white;">Our</span> <span style=" color: var(--Blue-Secondary);">Values</span> <img class="morale" src="/assets/Morale.png" alt="morale"> </h1>
 
<div class="values">

    <div class="values-1"> 
      <h4>  <img src="/assets/Checkbox.png" alt=""> Respect </h4>
      <h4>  <img src="/assets/Checkbox.png" alt=""> Protect</h4>
      <h4>  <img src="/assets/Checkbox.png" alt=""> Humanity </h4>

    </div>

    <div class="values-2"> 

        <h4>  <img src="/assets/Checkbox.png" alt="">Transparency </h4>
        <h4>  <img src="/assets/Checkbox.png" alt=""> Fairness</h4>
        <h4>  <img src="/assets/Checkbox.png" alt=""> Equality</h4>
        
    </div>

</div>

<div class="paragraph-intro"> 
    <div class="line-2">  <img class= "line" src="/assets/Line-blue.png" alt="line"> </div>
  <div class="paragraph"> <p class="intro-paragraph-1"> At INK, we believe that these values are the foundation of a just and equitable society. 
  
      </p>

      <p class="intro-paragraph-2">  We are committed to upholding these values in all of our work, including our programs, our partnerships, and our interactions with our stakeholders.</p>

      </div>
</div>

</section>

<style>

    

    h1 {
        font-size: 50px;
        float: center;
        padding-top: 3em;
        
    }



    .values {
        display: flex;
        justify-content: space-between;
        padding: 1em;
    }

    h4 {
        font-family: var(JubilatMedium-Roman);
        padding: 1em;
        align-content: center;
        font-size: 1.1em;
    }

    .our-values {
        background-image: url(/assets/Group-1.png);
        height: 1000px;
    }

    .paragraph-intro {
        display: flex;
    justify-content: space-between;
    padding: 2em;
    }

    .paragraph {
        padding-left: 1em;
    }

    .intro-paragraph-1 {
margin-bottom: 1em;
    }
    .intro-paragraph-2 {
        margin-top: 1em;
    }

    .line-2 {
        margin-top: 10px;
    }

    

</style>