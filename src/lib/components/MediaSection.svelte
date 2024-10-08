<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Circle from '$lib/components/shapes/Circle.svelte';
	import Dots from '$lib/components/shapes/Dots.svelte';
	import type { Block, BlockMediaSection } from '$lib/db/queries';
	import { inview } from 'svelte-inview';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';

	export let data: Block;
	let mediaSectionData: BlockMediaSection = data as BlockMediaSection;

	let isInView: boolean;
</script>

<div
	class="hero relative py-4 sm:py-10 lg:py-16"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<div
		class:invisible={!isInView}
		class:fade-in={isInView}
		class:animate-in={isInView}
		class="gap:6 hero-content flex-col delay-200 duration-500 ease-emphasize lg:grid lg:grid-flow-dense lg:grid-cols-2 lg:gap-12 xl:gap-20"
	>
		{#if mediaSectionData.video_url}
			<div
				class="flex h-52 w-full max-w-xl items-center justify-center sm:h-72 md:h-96 lg:h-full lg:max-w-5xl"
				class:lg:col-start-2={mediaSectionData.layout === 'textmedia'}
			>
				<VideoPlayer src={mediaSectionData.video_url} title="Video Academia Karate Fenix" />
			</div>
		{/if}
		{#if mediaSectionData.image}
			<div
				class="flex w-full justify-center justify-self-center"
				class:lg:col-start-2={mediaSectionData.layout === 'textmedia'}
			>
				<Image
					file={mediaSectionData.image}
					alt={mediaSectionData.image.title || 'Media logo'}
					class="w-full max-w-lg rounded-md"
				/>
			</div>
		{/if}
		<div
			class="py-12 text-lg delay-200 duration-500 ease-emphasize"
			class:animate-in={isInView}
			class:slide-in-from-left={isInView && mediaSectionData.layout === 'textmedia'}
			class:slide-in-from-right={isInView && mediaSectionData.layout === 'mediatext'}
		>
			{#if mediaSectionData.pre_headline}
				<p class="mb-2 font-semibold text-base-content/80 fluid-lg">
					{mediaSectionData.pre_headline}
				</p>
			{/if}
			<h2 class="text-4xl font-black lg:text-5xl">{mediaSectionData.headline}</h2>
			{#if mediaSectionData.content}
				<div class="prose pb-3 pt-6 lg:prose-lg">
					{@html mediaSectionData.content}
				</div>
			{/if}
		</div>
	</div>
	{#if mediaSectionData.layout === 'mediatext'}
		<Circle
			class="absolute -bottom-20 -right-20 !h-48 !w-48 xl:-right-40 xl:!h-80 xl:!w-80 2xl:-right-32 2xl:!h-96 2xl:!w-96"
			filled
		/>
	{/if}
	{#if mediaSectionData.layout === 'textmedia'}
		<Dots class="absolute -left-44 bottom-0 xl:!h-full 2xl:-left-20" />
		<Circle
			class="absolute -left-16 bottom-0 xl:-left-28 xl:!h-52 xl:!w-52 2xl:-left-48 2xl:!h-96 2xl:!w-96"
		/>
	{/if}
</div>
