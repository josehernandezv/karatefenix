<script lang="ts">
	import Dots from '$lib/components/shapes/Dots.svelte';
	import Image from '$lib/components/Image.svelte';
	import type { BlockHero, Block } from '$lib/db/queries';
	import Circle from '$lib/components/shapes/Circle.svelte';
	import { inview } from 'svelte-inview';

	export let data: Block;
	let heroData: BlockHero = data as BlockHero;
	type Button = { label: string; href: string };
	let buttons = (heroData.buttons as Button[]) || [];

	let isInView: boolean;
</script>

<div
	class="header"
	class:full-height-hero={!!heroData.image}
	use:inview={{ unobserveOnEnter: true }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<div
		class:invisible={!isInView}
		class:fade-in={isInView}
		class:animate-in={isInView}
		class="hero pb-8 duration-500 ease-emphasize"
	>
		<div class="hero-content grid" class:lg:grid-cols-2={heroData.image}>
			{#if heroData.image}
				<Image
					file={heroData.image}
					alt={heroData.image.title || 'Karate do'}
					class="w-full max-w-xl justify-self-center lg:order-last lg:max-w-full"
				/>
			{/if}
			<div
				class:lg:text-center={!heroData.image}
				class:pt-12={!heroData.image}
				class:slide-in-from-left={isInView}
				class:animate-in={isInView}
				class="duration-500 ease-emphasize"
			>
				<h1 class="font-bold fluid-3xl">
					{#if data.pre_headline}
						{data.pre_headline}<br />
					{/if}
					<strong class="font-black !leading-none text-primary fluid-5xl">{data.headline}</strong>
				</h1>
				{#if data.content}
					<div class="prose py-6 !leading-8 fluid-lg" class:lg:text-justify={!heroData.image}>
						{@html data.content}
					</div>
				{/if}
				{#each buttons as button}
					<a class="btn btn-primary" href={button.href || '/'}>{button.label}</a>
				{/each}
			</div>
		</div>
	</div>

	{#if heroData.image || heroData.content}
		<Dots class="absolute -right-40 bottom-10 hidden !h-96 !w-72 xl:block" />
		<Circle class="absolute -bottom-8 -right-36 hidden !h-32 !w-72 xl:block" />
		<Dots class="absolute -left-20 top-0 hidden xl:block" />
	{/if}
	{#if heroData.image}
		<Circle class="absolute -left-16 top-24 hidden !h-96 xl:block" />
	{/if}
</div>

<style lang="postcss">
	.header {
		position: relative;
	}
	.full-height-hero {
		min-height: calc(100vh - 14rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
