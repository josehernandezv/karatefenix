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

<div class="flex justify-between px-4 pt-6">
	<button class="btn btn-circle btn-ghost" on:click={() => move(-1)}>
		<iconify-icon class="inline-block stroke-current text-xl" icon="lucide:arrow-left" />
	</button>
	<button class="btn btn-circle btn-ghost" on:click={() => move(1)}
		><iconify-icon class="inline-block stroke-current text-xl" icon="lucide:arrow-right" /></button
	>
</div>
<div
	class="carousel carousel-center w-screen max-w-7xl space-x-4 p-4 pt-2 sm:carousel-end md:space-x-6 lg:space-x-12"
>
	{#each testimonials as testimonial}
		<div class="carousel-item block w-full sm:max-w-sm">
			<div class="background card border-2 bg-base-200">
				<div class="card-body gap-6">
					<iconify-icon
						class="inline-block stroke-current text-4xl text-primary"
						icon="lucide:quote"
					/>
					<p class="leading-relaxed text-base-content">
						"{testimonial.content}"
					</p>
					<p class="font-display text-lg font-semibold">{testimonial.author}</p>
				</div>
			</div>
		</div>
	{/each}
</div>
