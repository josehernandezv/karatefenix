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
	<li class="text-xl text-base-content/70">
		<a {href} on:click={onLinkClick} class:text-primary={isActive} class:font-bold={isActive}
			>{label}</a
		>
	</li>
{/each}
