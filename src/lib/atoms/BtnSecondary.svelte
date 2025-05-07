<script>
    // @ts-nocheck
	export let href, title;
</script>

    <a {href}> 
        {title}
        <span class="arrow"><span/>
    </a>

<style>

    a{
        display: inline-block;
        margin: 2em 0;
        border: none;
        border-radius: 3em;
        padding: 1em 2em;
        background-color: var(--White);
        color: var(--Bg-Dark-Blue);
        font-weight: bold;
        font-family: var(--Apercu-Font);
        text-transform: uppercase;
        transition: .2s ease-in-out;
    }

    a:hover{
        background-color: var(--Blue-Secondary);
        color: var(--White);
    }

</style> 

