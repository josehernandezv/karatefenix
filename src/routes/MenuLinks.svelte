<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let links: { href: string; label: string }[] = [];

	function onLinkClick() {
		dispatch('link-clicked');
	}
</script>

{#each links as { href, label }}
	{@const isActive = $page.url.pathname === href}
	<li
		class="text-xl font-semibold after:absolute after:-bottom-2.5 after:block after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-['']"
		class:after:lg:scale-x-100={isActive}
	>
		<a
			{href}
			on:click={onLinkClick}
			class:text-primary={isActive}
			class:font-black={isActive}
			class="transition-colors hover:text-primary"
		>
			{label}</a
		>
	</li>
{/each}

<style>
	a:hover {
		background: url(../lib/images/blackgrit.png);
		background-size: 600px;
		animation: ashes 2s steps(10) infinite;
	}
	a:active,
	a:focus {
		background-color: transparent !important;
		color: oklch(var(--p)) !important;
	}
</style>
