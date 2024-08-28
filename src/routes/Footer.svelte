<script lang="ts">
	const CURRENT_YEAR = new Date().getFullYear();
</script>

<footer class="mt-8 w-full px-6 py-12 text-base-300">
	<div class="container mx-auto flex flex-col items-center md:flex-row-reverse md:justify-between">
		<div class="flex items-center gap-6 text-4xl">
			<a
				href="https://www.facebook.com/KaratePalmares"
				target="_blank"
				class="transition-colors hover:text-base-100"
			>
				<iconify-icon icon="lucide:facebook" />
			</a>
			<a
				href="https://www.instagram.com/academiadekaratefenix"
				target="_blank"
				class="transition-colors hover:text-base-100"
			>
				<iconify-icon icon="lucide:instagram" />
			</a>
			<a
				href="https://wa.me/50688899110"
				target="_blank"
				class="transition-colors hover:text-base-100"
			>
				<iconify-icon icon="mdi:whatsapp" />
			</a>
		</div>
		<span class="mt-8 text-sm font-semibold md:mt-0"
			>© {CURRENT_YEAR} Academia de Karate Do Fénix</span
		>
	</div>
</footer>

<style lang="postcss">
	footer {
		background: #000 url('../lib/images/background/endless-clouds.svg');
		background-size: theme(space.20);
	}
</style>
