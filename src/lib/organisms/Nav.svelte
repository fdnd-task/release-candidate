<script>
	import NavLink from '$lib/atoms/nav-link.svelte';
</script>

<div class="nav-container">
	<nav>
		<ul>
			<li>
				<NavLink LinkRoute="/" LinkText="Home" NavIcons="/images/home-icon.svg" NavIconsAls="" />
			</li>
			<li>
				<NavLink
					LinkRoute="/AllPlayers"
					LinkText="All Players"
					NavIcons="/images/all-players-icon.svg"
					NavIconsAls=""
				/>
			</li>
			<li>
				<NavLink
					LinkRoute="/AllTeams"
					LinkText="All Teams"
					NavIcons="/images/all-teams-icon.svg"
					NavIconsAls=""
				/>
			</li>
			<li>
				<NavLink
					LinkRoute="/AllTournaments"
					LinkText="All Tournaments"
					NavIcons="/images/all-tournaments-icon.svg"
					NavIconsAls=""
				/>
			</li>
			<li>
				<NavLink
					LinkRoute="/CurrentTournament"
					LinkText="Current Tournament"
					NavIcons="/images/current-tournament-icon.svg"
					NavIconsAls=""
				/>
			</li>
		</ul>
	</nav>
</div>

<style>
	.nav-container {
		padding: 0.8rem;
		height: 100vh;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: var(--box-shadow);
		border-radius: 10px;
		background-color: var(--element-background-color);
		min-width: 90px;
		height: 100%;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 100%;
		list-style: none;
	}
</style>
