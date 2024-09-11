<script lang="ts">
	import Testimonials from '$lib/components/Testimonials.svelte';
	import type { Block, BlockCardGroup } from '$lib/db/queries';
	import Instructors from '$lib/components/Instructors.svelte';
	import { inview } from 'svelte-inview';

	export let data: Block;
	let cardGroupData: BlockCardGroup = data as BlockCardGroup;

	let isInView: boolean;
</script>

<div
	class="mx-auto overflow-hidden pb-8 lg:pt-8"
	use:inview={{
		unobserveOnEnter: true,
		// negative would delay the animation, e.g. -20%.
		// positive lazy loads the image before it's in view, e.g. 50px.
		rootMargin: '-20%'
	}}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<div
		class:invisible={!isInView}
		class:fade-in={isInView}
		class:animate-in={isInView}
		class="delay-200 duration-500 ease-emphasize"
	>
		<div class="px-4">
			{#if cardGroupData.pre_headline}
				<p class="mb-2 font-semibold text-base-content/80 fluid-lg md:text-center">
					{cardGroupData.pre_headline}
				</p>
			{/if}
			{#if cardGroupData.headline}
				<h2 class="text-4xl font-black md:text-center lg:text-5xl">{cardGroupData.headline}</h2>
			{/if}
			{#if cardGroupData.content}
				<div class="container prose mx-auto pb-3 pt-6">
					{@html cardGroupData.content}
				</div>
			{/if}
		</div>
		{#if cardGroupData.group_type === 'senseis'}
			<Instructors />
		{/if}
		{#if cardGroupData.group_type === 'testimonials'}
			<Testimonials />
		{/if}
	</div>
</div>
