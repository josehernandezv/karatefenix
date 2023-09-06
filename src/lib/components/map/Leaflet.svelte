<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher } from 'svelte';
	import type { Map, LatLngBoundsExpression, LatLngExpression } from 'leaflet';
	import { browser } from '$app/environment';
	import 'leaflet/dist/leaflet.css';

	export let bounds: LatLngBoundsExpression | undefined = undefined;
	export let view: LatLngExpression | undefined = undefined;
	export let zoom: number | undefined = undefined;

	const dispatch = createEventDispatcher();

	let map: Map | undefined;
	let mapElement: HTMLElement;

	onMount(async () => {
		if (!browser) return;
		const L = await import('leaflet');
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement)
			// example to expose map events to parent components:
			.on('zoom', (e) => dispatch('zoom', e));

		L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	});

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	setContext('map', {
		getMap: () => map
	});

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>

<div class="h-full w-full" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>
