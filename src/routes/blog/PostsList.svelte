<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { Tables } from '$lib/db/supabaseClient';
	import { formatDate, getExcerpt } from '$lib/helper';
	import type { PageData } from './$types';
	import CategoryBadge from './CategoryBadge.svelte';

	export let posts: PageData['posts'];

	function isCategory(cat: any): cat is Tables<'post_categories'> {
		return cat?.slug !== undefined;
	}
</script>

{#each posts as post}
	<a href={`/blog/${post.slug}`} class="group block border-b border-primary last:border-b-0">
		<article
			class="gap-12 space-y-4 py-12 md:grid md:space-y-0 md:py-16"
			class:md:grid-cols-[30%_1fr]={post.cover}
		>
			{#if post.cover}
				<Image
					file={post.cover}
					alt={post.title || post.cover?.filename_disk || 'Cover'}
					class="aspect-video w-full rounded-lg object-cover md:aspect-square"
				/>
			{/if}
			<div class="space-y-4">
				<div class="flex items-center gap-6">
					<time class="text-sm text-base-content/70">{formatDate(post.date_created)}</time>
					{#if isCategory(post.category)}
						<CategoryBadge category={post.category} />
					{/if}
				</div>
				<h2
					class="text-3xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary md:text-4xl"
					style:view-transition-name={post.slug}
				>
					{post.title}
				</h2>
				{#if post.content}
					<p>
						{@html getExcerpt(post.content)}
					</p>
				{/if}
			</div>
		</article>
	</a>
{/each}
