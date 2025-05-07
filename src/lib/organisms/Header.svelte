<script>
    import { HeaderNav } from '$lib/index.js'
</script>

<header>
    <div class="container">
            <HeaderNav />
    </div>
</header>

<style>

header{
    left: 0;
    position: fixed;
    top: 0;
    transition: transform 400ms ease, -webkit-transform 400ms ease;
    width: 100%;
    z-index: 97;
}

header::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8em;
    opacity: 0.4;
    background: -webkit-gradient(linear, left top, left bottom, from(black), to(rgba(0, 0, 0, 0)));
    background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0));
    -webkit-transition: opacity 0.6s ease-in-out;
    transition: opacity 0.6s ease-in-out;
    pointer-events: none;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: relative;
    margin: 0 auto;
}

/* 650px */
@media (min-width: 40em)  {

    .container{
        padding: 1em 2em;
    }
}

</style>