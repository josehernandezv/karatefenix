<script lang="ts">
	import Dots from '$lib/components/shapes/Dots.svelte';
	import Image from '$lib/components/Image.svelte';
	import type { BlockHero, Block } from '$lib/db/queries';
	import Circle from '$lib/components/shapes/Circle.svelte';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';

	export let data: Block;
	let heroData: BlockHero = data as BlockHero;
	type Button = { label: string; href: string };
	let buttons = (heroData.buttons as Button[]) || [];

	let isInView: boolean;
</script>

<div
	class="header"
	class:full-height={!!heroData.image}
	use:inview={{ unobserveOnEnter: true }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			class="hero pb-8"
			in:fade={{
				delay: 200,
				duration: 500,
				easing: quintOut
			}}
		>
			<div class="hero-content flex-col lg:flex-row-reverse">
				{#if heroData.image}
					<Image
						file={heroData.image}
						alt={heroData.image.title || 'Karate do'}
						class="w-full max-w-xl lg:w-6/12 lg:max-w-5xl"
					/>
				{/if}
				<div
					class:lg:text-center={!heroData.image}
					class:pt-8={!heroData.image}
					transition:fly={{
						duration: 500,
						x: -200,
						opacity: 0.5,
						delay: 200,
						easing: quintOut
					}}
				>
					<h1 class="text-4xl font-bold lg:text-5xl">
						{#if data.pre_headline}
							{data.pre_headline}<br />
						{/if}
						<span class="text-5xl text-primary lg:text-7xl">{data.headline}</span>
					</h1>
					{#if data.content}
						<div class="prose py-6 text-lg">
							{@html data.content}
						</div>
					{/if}
					{#each buttons as button}
						<a class="btn btn-primary" href={button.href || '/'}>{button.label}</a>
					{/each}
				</div>
			</div>
		</div>
	{:else}
		<div class="h-40" />
	{/if}
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
	.full-height {
		min-height: calc(100vh - 9rem);
	}
</style>
