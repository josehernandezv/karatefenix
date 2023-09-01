<script lang="ts">
	import Dots from '$lib/components/shapes/Dots.svelte';
	import Image from '$lib/components/Image.svelte';
	import type { BlockHero, Block } from '$lib/db/queries';
	import Circle from '$lib/components/shapes/Circle.svelte';

	export let data: Block;
	let heroData: BlockHero = data as BlockHero;
	type Button = { label: string; href: string };
	let buttons = (heroData.buttons as Button[]) || [];
</script>

<div class="header" class:full-height={!!heroData.image}>
	<div class="hero pb-8">
		<div class="hero-content flex-col lg:flex-row-reverse">
			{#if heroData.image}
				<Image
					file={heroData.image}
					alt={heroData.image.title || 'Karate do'}
					class="w-full max-w-xl lg:w-6/12 lg:max-w-5xl"
				/>
			{/if}
			<div class:lg:text-center={!heroData.image} class:pt-8={!heroData.image}>
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
	<Dots class="absolute -right-44 bottom-0 !w-72 lg:-right-40 lg:bottom-10 lg:!h-96" />
	<Circle class="absolute -right-40 bottom-0 !h-24 !w-72 lg:-right-36 lg:!h-32" />
	<Dots class="absolute -left-20 top-0 hidden lg:block" />
	{#if heroData.image}
		<Circle class="absolute -left-16 top-24 hidden !h-96 lg:block" />
	{/if}
</div>

<style lang="postcss">
	.header {
		position: relative;
	}
	.full-height {
		min-height: calc(100vh - 9rem);
	}
</style>
