<script lang="ts">
	import CardGroup from '$lib/components/CardGroup.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import MediaSection from '$lib/components/MediaSection.svelte';
	import type { PageBlocks } from '$lib/db/queries';

	export let blocks: PageBlocks;
</script>

{#each blocks as block}
	{#if block.collection === 'block_hero' && block.item}
		<Hero data={block.item} />
	{/if}
	{#if block.collection === 'block_mediasection' && block.item}
		<MediaSection data={block.item} />
	{/if}
	{#if block.collection === 'block_cardgroup' && block.item}
		<CardGroup data={block.item} />
	{/if}
{/each}
