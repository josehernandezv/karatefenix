<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { Block, BlockMediaSection } from '$lib/db/queries';

	export let data: Block;
	let mediaSectionData: BlockMediaSection = data as BlockMediaSection;
</script>

<div class="hero pb-8">
	<div
		class="gap:6 hero-content flex-col lg:grid lg:grid-flow-dense lg:grid-cols-2 lg:gap-12 xl:gap-20"
	>
		{#if mediaSectionData.video_url}
			<div
				class="relative h-52 w-full max-w-xl sm:h-72 md:h-96 lg:h-full lg:max-w-5xl"
				class:lg:col-start-2={mediaSectionData.layout === 'textmedia'}
			>
				<iframe
					src={mediaSectionData.video_url}
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					style="position:absolute;top:0;left:0;width:100%;height:100%;"
					title="Video Academia Karate Fenix"
				/>
				<!-- <script src="https://player.vimeo.com/api/player.js"></script> -->
			</div>
		{/if}
		{#if mediaSectionData.image}
			<div
				class="justify-self-center"
				class:lg:col-start-2={mediaSectionData.layout === 'textmedia'}
			>
				<Image
					file={mediaSectionData.image}
					alt={mediaSectionData.image.title || 'Media logo'}
					class="max-w-sm"
				/>
			</div>
		{/if}
		<div class="py-12 text-lg">
			{#if mediaSectionData.pre_headline}
				<p class="mb-2 text-base-content/70">{mediaSectionData.pre_headline}</p>
			{/if}
			<h2 class="text-4xl font-bold lg:text-5xl">{mediaSectionData.headline}</h2>
			{#if mediaSectionData.content}
				<div class="prose pb-3 pt-6">
					{@html mediaSectionData.content}
				</div>
			{/if}
		</div>
	</div>
</div>