<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { Tables } from '$lib/db/types';
	import { formatDate } from '$lib/helper';
	import CategoryBadge from '../CategoryBadge.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function isCategory(cat: any): cat is Tables<'post_categories'> {
		return cat?.slug !== undefined;
	}
</script>

<main class="container mx-auto h-full max-w-4xl px-4 pt-8">
	<header class="flex flex-col items-center gap-6">
		<h1 class="text-center text-5xl font-bold" style:view-transition-name="title-{data.post.slug}">
			{data.post.title}
		</h1>
		<div class="flex items-center gap-6">
			<time class="text-sm text-base-content/70 lg:text-base"
				>{formatDate(data.post.date_created)}</time
			>
			{#if isCategory(data.post.category)}
				<CategoryBadge category={data.post.category} />
			{/if}
		</div>
		{#if data.post.cover}
			<div style:view-transition-name="cover-{data.post.slug}" class="w-full">
				<Image
					file={data.post.cover}
					alt={data.post.title || data.post.cover?.filename_disk || 'Cover'}
					class="aspect-video w-full rounded-lg object-cover"
				/>
			</div>
		{/if}
	</header>
	{#if data.post.content}
		<article class="prose mx-auto py-12 lg:prose-lg prose-img:rounded-xl lg:py-16">
			{@html data.post.content}
		</article>
	{/if}
</main>
