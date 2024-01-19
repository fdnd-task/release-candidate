<script>
    export let buttonText;
</script>

<button>
    {buttonText}
</button>

<style>
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em;
        border: none;
        background-color: var(--primary-dark-color);
        color: var(--primary-light-color);
        text-decoration: none;
    }

    button:hover {
        background-color: var(--primary-accent-color);
        color: var(--primary-light-color);
    }

    @media (min-width: 40em) {
        button {
            width: 250px;
            height: fit-content;
        }  
    }

    @media (min-width: 68em) {
        button {
            width: 200px;
            height: fit-content;
        }   
    }
</style>