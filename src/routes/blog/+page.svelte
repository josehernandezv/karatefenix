<script lang="ts">
	import type { PageData } from './$types';
	import PostsList from './PostsList.svelte';

	export let data: PageData;
</script>

<main class="container mx-auto h-full max-w-4xl px-4 pt-8">
	<PostsList posts={data.posts} />
</main>
