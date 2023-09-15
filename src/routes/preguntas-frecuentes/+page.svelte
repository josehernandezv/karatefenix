<script lang="ts">
	import PageBlocks from '$lib/components/PageBlocks.svelte';
	import Circle from '$lib/components/shapes/Circle.svelte';
	import Dots from '$lib/components/shapes/Dots.svelte';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	export let data;
	let activeFaq: number | null = data?.faqs[0]?.id;

	let isInView: boolean;
</script>

<PageBlocks blocks={data?.page?.pages_blocks || []} />

<div
	class="relative h-full"
	use:inview={{ unobserveOnEnter: true }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			class="container mx-auto max-w-5xl pt-4"
			in:fade={{
				delay: 100,
				duration: 500
			}}
		>
			{#each data.faqs as faq}
				<div class="border-t-2 border-base-300 first:border-t-0">
					<button
						class="collapse collapse-plus border-r-0 text-left"
						on:click={() => (activeFaq = activeFaq === faq.id ? null : faq.id)}
					>
						<input type="radio" name="faq-accordion" checked={activeFaq === faq.id} />
						<div class="collapse-title py-6 text-xl font-semibold after:!top-6">
							{faq.question}
						</div>
						<div class="prose collapse-content">
							{@html faq.answer}
						</div>
					</button>
				</div>
			{/each}
		</div>
		<Dots
			class="absolute -left-44 bottom-0 hidden lg:-left-36 lg:block lg:!h-96 2xl:-left-20 2xl:!h-[45rem]"
		/>
		<Circle
			class="absolute -left-16 bottom-20 hidden lg:-left-28 lg:block lg:!h-52 lg:!w-52 2xl:-left-48 2xl:!h-96 2xl:!w-96"
		/>
		<Circle
			class="absolute -right-28 top-20 hidden !h-48 !w-48 lg:block 2xl:-right-36 2xl:!h-96 2xl:!w-96"
			filled
		/>
	{/if}
</div>
