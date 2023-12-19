<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { Tables } from '$lib/db/supabaseClient';
	import type { PageData } from './$types';
	import CategoryBadge from './CategoryBadge.svelte';

	export let data: PageData;

	function formatDate(date: string | null) {
		if (!date) return '';
		const d = new Date(date);
		return d.toLocaleDateString('es-cr', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function isCategory(cat: any): cat is Tables<'post_categories'> {
		return cat?.slug !== undefined;
	}

	// Remove HTML tags from string and returns string with no more than 140 characters.
	// Finishes with an ellipsis if the string is longer than 140 characters but do not cut words
	function getExcerpt(content: string) {
		let excerpt = content.replace(/<[^>]*>/g, '');
		if (excerpt.length > 140) {
			excerpt = excerpt.slice(0, 140).trim();
			const lastSpace = excerpt.lastIndexOf(' ');
			if (lastSpace > 0) {
				excerpt = excerpt.slice(0, lastSpace) + '...';
			}
		}
		return excerpt;
	}
</script>

<main class="container mx-auto h-full max-w-4xl px-4 pt-8">
	{#if data.category}
		<header class="pb-12 md:pb-16">
			<h1 class="text-5xl font-bold">
				{data.category.title}
			</h1>
			<p class="mt-2 text-lg text-base-content/70">
				{data.category.description}
			</p>
		</header>
	{/if}
	{#each data.posts as post}
		<a href={`/blog/${post.slug}`} class="group block border-b border-primary last:border-b-0">
			<article class="gap-12 space-y-4 py-12 md:grid md:grid-cols-[30%_1fr] md:space-y-0 md:py-16">
				{#if post.cover}
					<Image
						file={post.cover}
						alt={post.title || post.cover?.filename_disk || 'Cover'}
						class="aspect-video w-full object-cover md:aspect-square"
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
					>
						{post.title}
					</h2>
					{#if post.content}
						<p>
							{getExcerpt(post.content)}
						</p>
					{/if}
				</div>
			</article>
		</a>
	{/each}
</main>
