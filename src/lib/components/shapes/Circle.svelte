<script lang="ts">
	export let filled = false;
</script>

<div class={'circle ' + $$restProps.class} class:filled />

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
