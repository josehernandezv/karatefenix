<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
	import MenuLinks from './MenuLinks.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { LINKS } from '$lib/const';
	import { onNavigate } from '$app/navigation';
	import PageLoadingIndicator from '$lib/components/PageLoadingIndicator.svelte';

	let isDrawerOpen = false;

	onNavigate(async (navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((oldStateCaptureResolve) => {
			document.startViewTransition(async () => {
				oldStateCaptureResolve();
				await navigation.complete;
			});
		});
	});
</script>

<Meta />

<!-- <div class="background flex min-h-screen flex-col">
	<Navbar />
	
	
</div> -->
<PageLoadingIndicator />

<div class="drawer">
	<input id="root-drawer" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
	<div
		class="background drawer-content flex min-h-screen flex-col overflow-x-hidden border-t-[1px] border-primary bg-base-100"
	>
		<!-- Navbar -->
		<Navbar />
		<!-- Page content here -->
		<slot />
		<Footer />
	</div>
	<div class="drawer-side z-[1]">
		<label for="root-drawer" class="drawer-overlay" />
		<ul class="background menu h-full w-80 bg-base-200 p-4 font-display">
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
	@keyframes -global-ashes {
		from {
			background-position: 0;
		}

		to {
			background-position: -600px;
		}
	}
	:global(.background) {
		background-image: url('../lib/images/background/natural-paper.png');
		/* background-size: contain; */
	}
</style>
