<script lang="ts">
	import { browser } from '$app/environment';
	import type { LatLngExpression, Marker } from 'leaflet';
	import { onMount, onDestroy, getContext, setContext } from 'svelte';

	export let width: number;
	export let height: number;
	export let latLng: LatLngExpression;

	let marker: Marker | undefined;
	let markerElement: HTMLElement;

	const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	const map = getMap();

	setContext('layer', {
		// L.Marker inherits from L.Layer
		getLayer: () => marker
	});

	onMount(async () => {
		if (!browser) return;
		const L = await import('leaflet');
		if (map) {
			let icon = L.divIcon({
				html: markerElement,
				className: 'map-marker',
				iconSize: L.point(width, height)
			});
			marker = L.marker(latLng, { icon }).addTo(map);
		}
	});

	onDestroy(() => {
		marker?.remove();
		marker = undefined;
	});
</script>

<div bind:this={markerElement}>
	{#if marker}
		<slot />
	{/if}
</div>
