<script lang="ts">
	import Leaflet from '$lib/components/map/Leaflet.svelte';
	import Marker from '$lib/components/map/Marker.svelte';
	import Popup from '$lib/components/map/Popup.svelte';
	import type { LatLngExpression } from 'leaflet';

	const initialView: LatLngExpression = [10.0344414, -84.4529081];
</script>

<main class="container mx-auto px-4 pt-8 lg:pt-16">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<div>
			<h2 class="text-3xl font-semibold lg:text-4xl">Academia de Karate Do Fénix</h2>
			<div class="flex flex-col gap-4 pt-6 text-base">
				<a
					href="https://www.google.com/maps/search/?api=1&query=@10.0344414,-84.4529081&query_place_id=ChIJ494vHvZPoI8RFpUrWKRLcu0"
					target="_blank"
					class="flex text-sm text-base-content/80"
				>
					Del bar Fory Fay 50 mts oeste, 25 mts norte y 200 mts oeste. Segunda entrada a mano
					izquierda 20702 Palmares, Alajuela Province, Costa Rica
				</a>
				<a href="tel:+50688899110" target="_blank" class="flex items-center gap-2">
					<iconify-icon icon="mdi:phone" class="text-2xl text-primary" />
					+506 8889 9110
				</a>
				<a href="mailto:contacto@karatefenix.com" target="_blank" class="flex items-center gap-2">
					<iconify-icon icon="mdi:email" class="text-2xl text-primary" />
					contacto@karatefenix.com
				</a>
				<div class="flex items-center gap-4 text-2xl text-primary">
					<a href="https://www.facebook.com/KaratePalmares" target="_blank">
						<iconify-icon icon="mdi:facebook" />
					</a>
					<a href="https://www.instagram.com/academiadekaratefenix" target="_blank">
						<iconify-icon icon="mdi:instagram" />
					</a>
				</div>
			</div>
		</div>
		<div class="bg-secondary">
			<h1>Contact Form</h1>
		</div>
	</div>
	<div class="mt-4 h-[50vh] w-full">
		<Leaflet view={initialView} zoom={15}>
			<Marker latLng={initialView} width={40} height={40}>
				<iconify-icon icon="mdi:map-marker" class="text-4xl text-primary" />
				<Popup>Ubicación de la Academia</Popup>
			</Marker>
		</Leaflet>
	</div>
</main>
