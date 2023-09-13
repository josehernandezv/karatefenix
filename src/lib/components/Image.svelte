<script lang="ts">
	import type { DirectusFiles } from '$lib/db/queries';
	// import { downloadImage } from '$lib/db/storage';
	import { supabase } from '$lib/db/supabaseClient';
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface $$Props extends HTMLImgAttributes {
		file: DirectusFiles;
		alt: string;
	}

	export let file: DirectusFiles;
	export let alt: string;

	let imageUrl: string | null = null;
	if (file?.filename_disk) {
		const url = supabase.storage.from('images').getPublicUrl(file.filename_disk);
		imageUrl = url.data.publicUrl;
	}
</script>

<!-- {#await downloadImage(file.filename_disk || '') then imageUrl}
	<img src={imageUrl} {alt} {...$$restProps} />
{/await} -->
{#if imageUrl}
	<img src={imageUrl} {alt} {...$$restProps} />
{/if}
