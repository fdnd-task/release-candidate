<script>
    import { onMount } from "svelte";

    onMount(() => {
        const buttons= document.querySelectorAll('.button');
        const models= document.querySelectorAll('.model');
        
        const allemodels =[]
        
        for(let i=0; i<models.length; i++){
            allemodels.push(models[i]);

            //element uit de DOM verwijderen.
            models[i].remove();
        }


   
});
</script>
<section>
<a href="/" class="button">Zoek</a>
<div class="model">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iste, enim! Eius quam pariatur culpa quae nesciunt velit dolor 
        quo eaque dolore magni fugiat sapiente tenetur incidunt iusto, ducimus ex sunt.</p>
</div>
</section>

<style>
    a{
        position: fixed;
        right: 2%;
        top: 80%;
        padding: 2rem;
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
        text-decoration: none;
    }
</style>