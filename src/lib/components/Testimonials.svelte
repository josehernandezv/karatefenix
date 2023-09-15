<script lang="ts">
	import { page } from '$app/stores';
	import type { Testimonials } from '$lib/db/queries';

	const testimonials: Testimonials = $page.data.testimonials;

	function move(direction: number) {
		const carousel = document.querySelector('.carousel');
		if (!carousel) return;
		carousel.scrollTo({
			left: carousel.scrollLeft + carousel.clientWidth * direction,
			behavior: 'smooth'
		});
	}
</script>

<div
	class="carousel carousel-center w-screen max-w-7xl space-x-4 p-4 pt-6 sm:carousel-end md:space-x-6 lg:space-x-12 lg:pt-12"
>
	{#each testimonials as testimonial}
		<div class="carousel-item block">
			<div class="card w-full bg-base-100 shadow sm:max-w-sm">
				<div class="card-body">
					<iconify-icon
						class="inline-block stroke-current text-4xl text-secondary"
						icon="fe:quote-left"
					/>
					<p class="mt-6 text-base-content/75">
						{testimonial.content}
					</p>
					<p class="font-display text-lg font-semibold">{testimonial.author}</p>
				</div>
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
