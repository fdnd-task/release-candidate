<script>
    // @ts-nocheck
	export let href, title;
</script>


	<a class="nav-link" {href}>{title}</a>


<style>

    a {
        color: var(--White);
        font-family: var(--Apercu-Font);
        text-transform: uppercase ;
        font-size: 2em;
        display: inline-block;
        text-decoration: none;
        text-align: center;
    }

    a:hover, a:focus {
        color: var(--Yellow-Primary);
    }

    @media (min-width: 48em) {


        a {
            font-size: 1em;
        }

    }


</style>