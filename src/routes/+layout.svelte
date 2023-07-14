<script lang="ts">
	import '../app.css';
</script>

<div class="background">
	<slot />
</div>

<style lang="postcss">
	.background {
		background: radial-gradient(
				at bottom right,
				theme(colors.base-100) 0,
				theme(colors.base-100) 2.5px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 7.5px,
				hsla(0, 0%, 98%, 0.25) 0,
				hsla(0, 0%, 98%, 0.25) 10px,
				hsla(0, 0%, 98%, 0.3) 0,
				hsla(0, 0%, 98%, 0.3) 12.5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 15px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 17.5px,
				transparent 0,
				transparent 20px
			),
			radial-gradient(
				at top left,
				transparent 0,
				transparent 2.5px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 7.5px,
				hsla(0, 0%, 98%, 0.3) 0,
				hsla(0, 0%, 98%, 0.3) 10px,
				hsla(0, 0%, 98%, 0.25) 0,
				hsla(0, 0%, 98%, 0.25) 12.5px,
				hsla(0, 0%, 98%, 0.75) 0,
				hsla(0, 0%, 98%, 0.75) 15px,
				hsla(0, 0%, 98%, 0.2) 0,
				hsla(0, 0%, 98%, 0.2) 17.5px,
				theme(colors.base-100) 0,
				theme(colors.base-100) 20px,
				transparent 0,
				transparent 50px
			);
		background-blend-mode: multiply;
		background-size: 20px 20px, 20px 20px;
	}
</style>
