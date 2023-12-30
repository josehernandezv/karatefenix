<script lang="ts">
	import type { Tables } from '$lib/db/supabaseClient';

	export let category: Tables<'post_categories'>;
</script>

<a href={`/blog/categoria/${category.slug}`} class="badge badge-neutral hover:badge-primary"
	>{category?.title}</a
>
