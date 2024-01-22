<script>
	export let number;
	export let type = 'goals';
</script>

<span class={type}>{number || ''}</span>

<style>
	span {
		--color: white;

		display: inline-block;
		vertical-align: middle;
		box-sizing: content-box;
		border: 1px solid var(--color);
		border-radius: calc(var(--border-radius) - 0.5em);
		background: var(--color);
		padding: 0.5em;
		width: 1rem;
		height: 1rem;
		color: white;
		line-height: 1;
		text-align: center;
	}

	.goals {
		--color: #18d02b;
		
		@supports (--css: variables) {
		--color: var(--scored-by-color-enhanced);
	}
	}
	

	.assists {
		--color: #2974e4;

		@supports (--css: variables) {
			--color: var(--assisted-by-color-enhanced);
		}
	}


	.blocks {
		--color: #ed4444;

		@supports (--css: variables) {
			--color: var(--blocked-by-color-enhanced);
		}
	}

	.turnovers {
		--color: #ffc738;

		@supports (--css: variables) {
			--color: var(--turnover-by-color-enhanced);
		}
	}

	span:empty {
		--color: #f4f5fa;
	}
</style>
