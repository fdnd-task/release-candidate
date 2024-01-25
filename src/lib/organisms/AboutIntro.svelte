<script>
	import { BtnSecondary } from '$lib/index.js';
	import { base } from '$app/paths';
	// export let data;
</script>


<section class="intro-about"> 

   <h1 class="title"> <span style=" color: black;"> Our Ultimate </span>  <span style=" color: white;"> goal</span> <img class="morale" src="/assets/Accuracy.png" alt="icon"></h1> 
 
   <div class="paragraph-intro"> 
          <div>  <img class= "line" src="/assets/Line.png" alt="line"> </div>
        <div> <p class="intro-paragraph-1"> Our ultimate goal is to provide a secure and nurturing environment where the youth can flourish. By engaging them in sports and community activities, we are sowing the seeds of hope and optimism. 
        
            </p>

            <p class="intro-paragraph-2">  Together, we can score a goal for education, empowerment, and a brighter future.</p>

            </div>
    </div>
</section>


<style> 

.intro-about {
    height: 492px;
    background-image: url(/assets/Group-165.png);
}

.title {
    padding-top: 100px;
    font-size: 50px;
    padding-left: 1em;
}


p {
    color: black;
    width: 25em;
    padding-left: 1em;
    padding-right: 2em;
    float: right;
    font-size: 12px;
    
}

.intro-paragraph-2 {
    padding-top: 1em;
}

.paragraph-intro {
    display: flex;
    justify-content: space-between;
}

.line {
    padding-left: 4.5em;
    padding-top: 0.6em;
}

@media (min-width: 48em) {

    .intro-about {
    background-image: url(/assets/Group-168.svg);
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    height: 1158px;
    flex-direction: column;
}


.title {
    
    font-size: 80px;
    display: flex;
    padding-top: 4em;
    padding-left: 35%;
    
    
}

p {
    
    font-size: 35px;
    
}

.line {
    display: none;
    visibility: hidden;
}

.morale {
    display: none;
    visibility: hidden;
}

.paragraph-intro {
    display: flex;
    justify-content: center;
    
}

.intro-paragraph-1 {
    float: left;
    padding-left: 7em;
    width: 37em;
}

.intro-paragraph-2 {
    float: left;
    padding-left: 7em;
    width: 37em;
}

}




</style>





