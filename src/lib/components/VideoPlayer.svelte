<script lang="ts">
	import { defineCustomElements } from '@vime/core';
	import '@vime/core/themes/default.css';

	defineCustomElements();

	export let src: string;
	export let title: string;
</script>

<vm-player style="--vm-player-theme: #D32614" class="w-full" media-title={title}>
	<!-- Loading a YouTube video. -->
	<!-- <vm-youtube video-id="WQ0DMyD39JI" /> -->
	<vm-vimeo video-id={src.split('/').pop()} />
	<vm-default-ui />
</vm-player>
