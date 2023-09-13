<script lang="ts">
	import { onMount } from 'svelte';
	import { shapes } from '$lib/components/shapes/shapeStore';

	let visible = true;

	onMount(() => {
		if ($shapes.dots.includes($$restProps.class)) {
			visible = false;
		} else {
			shapes.update((shapes) => {
				shapes.dots.push($$restProps.class);
				return shapes;
			});
		}
	});
</script>

{#if visible}
	<div class={'dots ' + $$restProps.class} />
{/if}

<style lang="postcss">
	.dots {
		width: 15rem;
		height: 15rem;
		background-image: radial-gradient(theme(colors.base-content) 1.2px, transparent 1.2px);
		background-size: 13px 13px;
		border-radius: 10rem;
		opacity: 0.3;
		/* position: absolute; */
	}
</style>
