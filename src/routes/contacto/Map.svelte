<script lang="ts">
	import Leaflet from '$lib/components/map/Leaflet.svelte';
	import Marker from '$lib/components/map/Marker.svelte';
	import Popup from '$lib/components/map/Popup.svelte';
	import type { LatLngExpression } from 'leaflet';

	const initialView: LatLngExpression = [10.0344414, -84.4529081];
</script>

<Leaflet view={initialView} zoom={15}>
	<Marker latLng={initialView} width={40} height={40}>
		<iconify-icon icon="mdi:map-marker" class="text-4xl text-primary" />
		<Popup>Ubicación de la Academia</Popup>
	</Marker>
</Leaflet>
