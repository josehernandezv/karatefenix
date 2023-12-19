<script lang="ts">
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
</script>

<main class="container mx-auto px-4 pt-8">
	{#each data.posts as post}
		<a href={`/blog/${post.slug}`} class="group">
			<article class="space-y-4">
				<div class="flex items-center gap-6">
					<span class="text-sm text-base-content/70">{formatDate(post.date_created)}</span>
					{#if isCategory(post.category)}
						<CategoryBadge category={post.category} />
					{/if}
				</div>
				<h2 class="text-xl transition-colors duration-300 ease-in-out group-hover:text-primary">
					{post.title}
				</h2>
			</article>
		</a>
	{/each}
</main>
