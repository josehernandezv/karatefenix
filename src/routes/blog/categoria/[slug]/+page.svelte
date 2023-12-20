<script lang="ts">
	import PostsList from '../../PostsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="container mx-auto h-full max-w-4xl px-4 pt-8">
	{#if data.category}
		<header class="border-b border-primary pb-12 md:pb-16">
			<h1 class="text-5xl font-bold">
				{data.category.title}
			</h1>
			<p class="mt-2 max-w-prose text-lg text-base-content/70">
				{data.category.description}
			</p>
		</header>
	{/if}
	<PostsList posts={data.posts} />
</main>
