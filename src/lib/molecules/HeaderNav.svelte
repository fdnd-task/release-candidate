<script>
	import { NavLogo, NavLink, BtnPrimary } from '$lib/index.js';
	import { base } from '$app/paths';
</script>

<nav>
	<NavLogo href="{base}/"></NavLogo>

	<input class="menu-btn" type="checkbox" id="menu-btn" aria-label="Navigation menu" />
	<label class="menu-icon" for="menu-btn">
		<span class="navicon"></span>
	</label>

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
	/* header */

	nav {
		background-color: var(--Bg-Dark-Blue);
		box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
		position: fixed;
		width: 100%;
		z-index: 3;
		padding: 0 1em;
	}

	nav ul {
		margin: 0;
		padding: 0;
		list-style: none;
		overflow: hidden;

		clear: both;
		max-height: 0;
		transition: max-height 0.2s ease-out;
	}

	nav li {
		padding: 2em 0;
		display: flex;
		justify-content: center;
	}

	nav li:nth-last-child(1) {
		display: flex;
		justify-content: center;
	}

	/* Hamburger Menu */

	nav .menu-icon {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		float: right;
		width: 3em;
		height: 3em;
		position: relative;
		top: 1.3em;
		right: 1em;
		user-select: none;
		background-color: var(--Yellow-Primary);
		border-radius: 50%;
	}

	nav .menu-icon .navicon {
		background: var(--Bg-Dark-Blue);
		display: block;
		height: 3px;
		position: relative;
		transition: background 0.2s ease-out;
		width: 24px;
	}

	nav .menu-icon .navicon:before,
	nav .menu-icon .navicon:after {
		background: var(--Bg-Dark-Blue);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		transition: all 0.2s ease-out;
		width: 100%;
	}

	nav .menu-icon .navicon:before {
		top: 5px;
	}

	nav .menu-icon .navicon:after {
		top: -5px;
	}

	/* menu btn */

	nav .menu-btn {
		display: none;
	}

	nav .menu-btn:checked ~ ul {
		max-height: 60em;
	}

	nav .menu-btn:checked ~ .menu-icon .navicon {
		background: transparent;
	}

	nav .menu-btn:checked ~ .menu-icon .navicon:before {
		transform: rotate(-45deg);
	}

	nav .menu-btn:checked ~ .menu-icon .navicon:after {
		transform: rotate(45deg);
	}

	nav .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
	nav .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
		top: 0;
	}

	/* 48em = 768px */

	@media (min-width: 48em) {
		nav ul {
			display: flex;
			align-items: center;
			padding: 0 3em;
			clear: none;
			float: right;
			max-height: none;
		}

		nav li {
			float: left;
			padding: 1em 0;
		}

		nav .menu-icon {
			display: none;
		}
	}
</style>
