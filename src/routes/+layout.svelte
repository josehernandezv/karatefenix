<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	import { LINKS } from '$lib/const';
	import MenuLinks from './MenuLinks.svelte';

	let isDrawerOpen = false;

	export const prerender = true;
</script>

<!-- <div class="background flex min-h-screen flex-col">
	<Navbar />
	
	
</div> -->
<div class="drawer">
	<input id="root-drawer" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
	<div class="background drawer-content flex min-h-screen flex-col overflow-x-hidden">
		<!-- Navbar -->
		<Navbar />
		<!-- Page content here -->
		<slot />
		<Footer />
	</div>
	<div class="drawer-side">
		<label for="root-drawer" class="drawer-overlay" />
		<ul class="menu h-full w-80 bg-base-200 p-4 font-display">
			<MenuLinks
				links={LINKS}
				on:link-clicked={() => {
					isDrawerOpen = false;
				}}
			/>
		</ul>
	</div>
</div>

<style lang="postcss">
	.background {
		background: radial-gradient(
				at bottom right,
				theme(colors.base-100) 0,
				theme(colors.base-100) 2.5px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 7.5px,
				hsla(0, 0%, 98%, 0.25) 0,
				hsla(0, 0%, 98%, 0.25) 10px,
				hsla(0, 0%, 98%, 0.3) 0,
				hsla(0, 0%, 98%, 0.3) 12.5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 15px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 17.5px,
				transparent 0,
				transparent 20px
			),
			radial-gradient(
				at top left,
				transparent 0,
				transparent 2.5px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 7.5px,
				hsla(0, 0%, 98%, 0.3) 0,
				hsla(0, 0%, 98%, 0.3) 10px,
				hsla(0, 0%, 98%, 0.25) 0,
				hsla(0, 0%, 98%, 0.25) 12.5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 15px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 17.5px,
				theme(colors.base-100) 0,
				theme(colors.base-100) 20px,
				transparent 0,
				transparent 50px
			);
		background-blend-mode: multiply;
		background-color: theme(colors.base-200);
		background-size: 20px 20px, 20px 20px;
		/* fix pattern cropping on iOS Safari */
	}
</style>
