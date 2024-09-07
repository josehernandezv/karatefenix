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
	<li class="text-xl font-semibold">
		<a
			{href}
			on:click={onLinkClick}
			class:text-primary={isActive}
			class:font-bold={isActive}
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
