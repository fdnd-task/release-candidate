<script>
    export let buttonText;
    export let buttonLink;
</script>

<a href='{buttonLink}' class="oba-button">{buttonText}</a>

<style>
    .oba-button{
        padding: 1em 2em;
        border: none;

        background-color: var(--primary-dark-color);
        color: var(--primary-light-color);
        text-align: center;
        text-decoration: none;
    }

    .oba-button:hover {
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
    }

    @media (min-width: 40em) {
        .oba-button {
            width: 250px;
        }  
    }

    @media (min-width: 68em) {
        .oba-button {
            width: 200px;
        }   
    }
</style>