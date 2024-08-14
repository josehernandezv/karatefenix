<script lang="ts">
	import '@vime/core/themes/default.css';
	import { onMount } from 'svelte';
	let showPlayer = false;

	onMount(async () => {
		const { defineCustomElements } = await import('@vime/core');
		defineCustomElements();
		showPlayer = true;
	});

	export let src: string;
	export let title: string;
</script>

{#if showPlayer}
	<vm-player style="--vm-player-theme: #D32614" class="w-full" media-title={title}>
		<!-- Loading a YouTube video. -->
		<!-- <vm-youtube video-id="WQ0DMyD39JI" /> -->
		<vm-vimeo video-id={src.split('/').pop()} />
		<vm-default-ui />
	</vm-player>
{/if}
