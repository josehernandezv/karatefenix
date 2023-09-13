<script lang="ts">
	import Testimonials from '$lib/components/Testimonials.svelte';
	import type { Block, BlockCardGroup } from '$lib/db/queries';
	import Instructors from '$lib/components/Instructors.svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	export let data: Block;
	let cardGroupData: BlockCardGroup = data as BlockCardGroup;

	let isInView: boolean;
</script>

<div
	class="mx-auto min-h-[200px] overflow-hidden pb-8 lg:pt-8"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fade={{
				delay: 100,
				duration: 500
			}}
		>
			<div class="px-4">
				{#if cardGroupData.pre_headline}
					<p class="mb-2 text-base-content/70 md:text-center">{cardGroupData.pre_headline}</p>
				{/if}
				{#if cardGroupData.headline}
					<h2 class="text-4xl font-bold md:text-center lg:text-5xl">{cardGroupData.headline}</h2>
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
	{/if}
</div>
