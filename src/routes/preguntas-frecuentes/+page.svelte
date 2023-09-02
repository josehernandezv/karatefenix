<script lang="ts">
	import PageBlocks from '$lib/components/PageBlocks.svelte';

	export let data;
</script>

<PageBlocks blocks={data?.page?.pages_blocks || []} />
