<script>
	import { NavLogo, NavLink, BtnPrimary } from '$lib/index.js';
	import { base } from '$app/paths';
    import { onMount } from 'svelte';

    // Mobile Navbar closing 

    let checked = false; 

    onMount(() => {

        let navLinks = document.querySelectorAll('ul a');

        // Function to close the menu
        function closeMenu() {
            checked = false;
        }

        // Event listener for link clicks
        navLinks.forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    });
    
</script>


<nav>
	<!-- INK-logo -->
	<a href="{base}/">
		<NavLogo />
	</a>

    <!-- Hamburger -->
    <input bind:checked={checked} class="menuBtn" type="checkbox" id="menuBtn" aria-label="Navigation menu" />
    <label class="menuIcon" for="menuBtn">
        <span class="navicon"></span>
    </label>

    <!-- Nav-list -->
	<ul>
		<li>
			<NavLink href="{base}/about" title="About"></NavLink>
		</li>
		<li>
			<NavLink href="{base}/promise" title="Promise"></NavLink>
		</li>
		<li>
			<BtnPrimary href="{base}/becomeSponsor" title="Become sponsor"></BtnPrimary>
		</li>
	</ul>
</nav>

<style>

    nav{
        display: block;
        position: relative;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100%;
    }

    nav > a{
        position: absolute;
        z-index: 99;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        clear: both;
        height: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3em;

    }

    /* Background Hamburger */
    .menuIcon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        float: right;
        width: 1.6em;
        height: 1.6em;
        position: relative;
        z-index: 99;
        top: .6em;
        right: 0em;
        user-select: none;
        background-color: var(--Yellow-Primary);
        border-radius: 50%;
    }

    /* Middle line - Hamburger */
    .menuIcon .navicon {
        background: var(--Black);
        display: block;
        height: 0.1em;
        position: relative;
        transition: background .1s ease-out;
        width: 1.1em;
    }

    /* Top/bottom line - Hamburger */
    .menuIcon .navicon:before,
    .menuIcon .navicon:after {
        background: var(--Black);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .2s ease-out;
        width: 100%;
    }

    .menuIcon .navicon:before {
        top: .3em;
    }

    .menuIcon .navicon:after {
        top: -.3em;
    }

   /* Checklist hide */
    .menuBtn {
        display: none;
    }

    /* Mobile nav-list when checked */

    .menuBtn:checked ~ ul {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--Bg-Dark-Blue);
        transition: all .2s ease-out;
    }

    .menuBtn:checked ~ .menuIcon .navicon {
        background: transparent;
    }

   /* Close - Rotation menu */
    .menuBtn:checked ~ .menuIcon .navicon:before {
        transform: rotate(-45deg);
    }

    .menuBtn:checked ~ .menuIcon .navicon:after {
        transform: rotate(45deg);
    }

    .menuBtn:checked ~ .menuIcon:not(.steps) .navicon:before,
    .menuBtn:checked ~ .menuIcon:not(.steps) .navicon:after {
        top: 0;
    }

    /* 640px */

    @media (min-width: 40em) {

        .menuIcon {
            width: 2em;
            height: 2em;
        }

        .menuIcon .navicon {
            width: 1.3em;
        }

    }

    /* 48em = 768px */

    @media (min-width: 48em) {

        nav ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            clear: none;
            float: right;
            height: 5em;
            background-color: transparent;
        }

        nav li {
            float: left;
        }

        nav .menuIcon {
            display: none;
        }

        nav .menuIcon {
            width: 3em;
            height: 3em;
        }

    }



</style>