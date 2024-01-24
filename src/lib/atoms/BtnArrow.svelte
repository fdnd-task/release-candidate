<script>
// @ts-nocheck
	export let href;
</script>

<a {href}> 
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="Yellow" height="25" viewBox="0 -960 960 960" width="25">
        <path 
            d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 
            0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 
            0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 
            0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
        />
    </svg>
</a>

<style>

    a{
        position: inherit;
        z-index: 12;

        display: flex;
        align-items: end;
        padding: .5em;

    }

    .arrow{
        fill: var(--Yellow-Primary);
    }

    svg{
        width: clamp(2em, 4vw, 10em);
        height: clamp(2em, 4vh, 10em);    
    }

    /* 500px */
    @media (min-width: 31em)  {

        svg{
            width: clamp(1.5em, 6vw, 10em);
            height: clamp(1.5em, 6vh, 10em);   
        }
    }

    /* 500px */
    @media (min-width: 31em)  {

        a{
            padding: 1em;
        }

        svg{
            width: clamp(1.5em, 6vw, 10em);
            height: clamp(1.5em, 6vh, 10em);   
        }

    }


    /* 768px */
    @media (min-width: 48em)  {

    a{
        padding: 1.5em;
    }

    }


</style>