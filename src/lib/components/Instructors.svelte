<script lang="ts">
	import { page } from '$app/stores';
	import Image from '$lib/components/Image.svelte';
	import type { Senseis } from '$lib/db/queries';

	const senseis: Senseis = $page.data.senseis;
</script>

<div
	class="grid w-screen max-w-7xl grid-cols-1 gap-6 p-4 pt-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:pt-12"
>
	{#each senseis as sensei}
		<div class="background card w-full border-2 bg-base-200">
			{#if sensei.image}
				<figure>
					<Image
						file={sensei.image}
						alt={sensei.name || 'Sensei'}
						class="aspect-square object-cover"
					/>
				</figure>
			{/if}
			<div class="card-body items-center text-center">
				<h3 class="card-title text-2xl font-bold">{sensei.name}</h3>
				<p class="text-lg font-bold text-primary">{sensei.grade}</p>
			</div>
		</div>
	{/each}
</div>
