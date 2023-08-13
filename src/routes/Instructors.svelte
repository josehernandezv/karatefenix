<script lang="ts">
	export let items = Array.from({ length: 3 }, (_, i) => i + 1);
</script>

<div class="mx-auto overflow-hidden pb-8 lg:pt-8">
	<h2 class="mx-4 text-4xl font-bold md:text-center lg:text-5xl">Entrenadores</h2>
	<div
		class="grid w-screen max-w-7xl grid-cols-1 gap-6 p-4 pt-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:pt-12"
	>
		{#each items as t, index}
			<div class="card w-full bg-base-100 shadow">
				<figure>
					<img
						class="aspect-square object-cover"
						src="https://source.unsplash.com/featured/500×500/?karate"
						alt="Sensei"
					/>
				</figure>
				<div class="card-body items-center text-center">
					<h3 class="card-title text-2xl">Sensei John Lawrence</h3>
					<p class="text-bold text-lg text-primary">4 Dan</p>
				</div>
			</div>
		{/each}
	</div>
</div>
