<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { BlockHero, Block } from '$lib/db/queries';

	export let data: Block;
	let heroData: BlockHero = data as BlockHero;
	type Button = { label: string; href: string };
	let buttons = (heroData.buttons as Button[]) || [];
</script>

<div class="header">
	<div class="hero pb-8">
		<div class="hero-content flex-col lg:flex-row-reverse">
			{#if heroData.image}
				<Image
					file={heroData.image}
					alt={heroData.image.title || 'Karate do'}
					class="w-full max-w-xl lg:w-6/12 lg:max-w-5xl"
				/>
			{/if}
			<div>
				<h1 class="text-4xl font-bold lg:text-5xl">
					{#if data.pre_headline}
						{data.pre_headline}<br />
					{/if}
					<span class="text-5xl text-primary lg:text-7xl">{data.headline}</span>
				</h1>
				<div class="prose py-6 text-lg">
					{@html data.content}
				</div>
				{#each buttons as button}
					<a class="btn btn-primary" href={button.href || '/'}>{button.label}</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.header {
		min-height: calc(100vh - 9rem);
	}
</style>
