<script lang="ts">
	import type { Schedule } from '$lib/db/queries';
	import type { Json } from '$lib/db/types';
	import type { PageData } from './$types';

	export let data: PageData;

	const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

	function formatDate({
		day,
		startTime, // 18:00:00
		endTime // 19:00:00
	}: Schedule) {
		const dayName = days[Number(day)];
		const start = new Date(`2021-01-01T${startTime}`).toLocaleTimeString('es-ES', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});
		const end = new Date(`2021-01-01T${endTime}`).toLocaleTimeString('es-ES', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});

		return `${dayName} de ${start} a ${end}`;
	}

	function getFormattedSchedule(scheduleProp: Json) {
		const schedule = scheduleProp as Schedule[];
		if (schedule.length === 0) return 'No hay horario disponible';
		if (schedule.length === 1) return formatDate(schedule[0]);
		//Check if all times are the same
		const sameTime = schedule.every(
			({ startTime, endTime }) =>
				startTime === schedule[0].startTime && endTime === schedule[0].endTime
		);

		if (sameTime) {
			const { startTime, endTime } = schedule[0];
			const start = new Date(`2021-01-01T${startTime}`).toLocaleTimeString('es-ES', {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			});
			const end = new Date(`2021-01-01T${endTime}`).toLocaleTimeString('es-ES', {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			});

			if (schedule.length === 2) {
				const day1 = days[Number(schedule[0].day)];
				const day2 = days[Number(schedule[1].day)];
				return `${day1} y ${day2} de ${start} a ${end}`;
			}

			if (['1', '2', '3', '4', '5'].every((day) => schedule.some((s) => s.day === day))) {
				return `Lunes a Viernes de ${start} a ${end}`;
			}
			return `${schedule.map((day) => days[Number(day.day)]).join(', ')} de ${start} a ${end}`;
		}

		return schedule.map((day) => formatDate(day)).join(', ');
	}
</script>

<main class="container mx-auto h-full max-w-5xl px-4 pt-8">
	<header class="border-b border-primary pb-12 md:pb-16">
		<h1 class="text-5xl font-bold">Clases</h1>
		<p class="mt-2 max-w-prose text-lg text-base-content/70">
			Información sobre nuestras clases de karate, defensa personal y entrenamiento funcional.
		</p>
	</header>
	<div class="flex flex-col gap-12 pt-12 lg:grid lg:grid-cols-2">
		{#each data.classes as karateClass}
			<div class="card bg-base-100 shadow">
				<div class="card-body">
					<h2 class="card-title text-3xl font-semibold">{karateClass.title}</h2>
					{#if karateClass.caption}
						<h3 class="text-xl">{karateClass.caption}</h3>
					{/if}
					<p class="mt-2 max-w-prose text-base">
						{karateClass.description}
					</p>
					<div class="flex items-center gap-2 pt-2">
						<iconify-icon icon="lucide:calendar" class="text-xl text-primary" />
						<p class="text-base text-base-content/70">
							{getFormattedSchedule(karateClass.schedule)}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
