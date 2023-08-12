<script lang="ts">
	export let items = Array.from({ length: 10 }, (_, i) => i + 1);

	function move(direction: number) {
		const carousel = document.querySelector('.carousel');
		if (!carousel) return;
		carousel.scrollTo({
			left: carousel.scrollLeft + carousel.clientWidth * direction,
			behavior: 'smooth'
		});
	}
</script>

<div class="mx-auto overflow-hidden pb-8 lg:pt-8">
	<h2 class="mx-4 text-4xl font-bold md:text-center lg:text-5xl">Opiniones de nuestros clientes</h2>
	<div
		class="carousel carousel-center w-screen max-w-7xl space-x-4 p-4 pt-6 sm:carousel-end md:space-x-6 lg:space-x-12 lg:pt-12"
	>
		{#each items as t, index}
			<div class="card carousel-item w-full bg-base-100 shadow sm:max-w-sm">
				<div class="card-body">
					<iconify-icon
						class="inline-block stroke-current text-4xl text-secondary"
						icon="fe:quote-left"
					/>
					<p class="mt-6 text-base-content/75">
						{index + 1}: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia
						ad, iusto esse architecto voluptate eligendi doloremque nihil odit similique sequi illum
						suscipit inventore fugiat perferendis cum id possimus nam?
					</p>
					<p class="font-display text-lg font-semibold">John Doe</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex justify-between px-4">
		<button class="btn btn-circle btn-ghost" on:click={() => move(-1)}>
			<iconify-icon class="inline-block stroke-current text-xl" icon="heroicons:arrow-left" />
		</button>
		<button class="btn btn-circle btn-ghost" on:click={() => move(1)}
			><iconify-icon
				class="inline-block stroke-current text-xl"
				icon="heroicons:arrow-right"
			/></button
		>
	</div>
</div>
