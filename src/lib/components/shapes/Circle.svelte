<script lang="ts">
	import { shapes } from '$lib/components/shapes/shapeStore';
	import { onMount } from 'svelte';

	export let filled = false;

	let visible = true;

	onMount(() => {
		if ($shapes.circles.includes($$restProps.class)) {
			visible = false;
		} else {
			shapes.update((shapes) => {
				shapes.circles.push($$restProps.class);
				return shapes;
			});
		}
	});
</script>

{#if visible}
	<div class={'circle ' + $$restProps.class} class:filled />
{/if}

<style lang="postcss">
	.circle {
		border-radius: 15rem;
		border: 1px solid theme(colors.primary);
		width: 8rem;
		height: 8rem;
		opacity: 0.6;
	}
	.filled {
		background-color: theme(colors.primary);
		opacity: 0.2;
	}
</style>
