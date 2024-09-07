<script lang="ts">
	import logo from '$lib/images/akf-logo-sm.png';
	import { LINKS } from '$lib/const';
	import MenuLinks from './MenuLinks.svelte';
</script>

<header class="font-display">
	<div class="navbar relative min-h-fit font-display lg:py-4">
		<div class="navbar-start">
			<label for="root-drawer" class="btn btn-square btn-ghost lg:hidden">
				<iconify-icon
					class="inline-block stroke-current text-4xl text-primary"
					icon="lucide:align-left"
				/>
			</label>
		</div>
		<div class="navbar-center">
			<a href="/">
				<img
					src={logo}
					alt="logo"
					class="logo h-28 w-auto transition duration-500 md:h-32 lg:h-36"
				/>
			</a>
		</div>
		<div class="navbar-end justify-start"></div>
	</div>
	<div class="navbar hidden min-h-0 pt-0 lg:flex">
		<ul class="menu menu-horizontal flex-1 justify-center gap-6 p-0">
			<MenuLinks links={LINKS} />
		</ul>
	</div>
</header>

<style>
	.logo:hover {
		background: url(../lib/images/blackgrit.png);
		background-size: 600px;
		animation: ashes 2s steps(10) infinite;
		/* filter: drop-shadow(0 0 0.75rem oklch(var(--p))); */
		filter: drop-shadow(0 0 0.75rem #e6373a);
	}
</style>
