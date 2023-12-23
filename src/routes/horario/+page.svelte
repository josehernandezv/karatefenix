<script lang="ts">
	import type { Schedule } from '$lib/db/queries';
	import type { PageData } from './$types';
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import '@event-calendar/core/index.css';

	export let data: PageData;

	let plugins = [TimeGrid];

	const allSchedules = data.classes.flatMap((clase) => clase.schedule) as Schedule[];

	function getStartTime(): string {
		let startTime: string = '';
		allSchedules.forEach((schedule) => {
			if (!startTime) startTime = schedule.startTime;
			else if (startTime > schedule.startTime) startTime = schedule.startTime;
		});
		// take 30 minutes off
		const hours = Number(startTime.split(':')[0]);
		const minutes = Number(startTime.split(':')[1]);
		if (minutes === 0) {
			startTime = `${hours - 1}:30:00`;
		} else {
			startTime = `${hours}:${minutes - 30}:00`;
		}
		return startTime;
	}

	function getEndTime(): string {
		let endTime: string = '';
		allSchedules.forEach((schedule) => {
			if (!endTime) endTime = schedule.endTime;
			else if (endTime < schedule.endTime) endTime = schedule.endTime;
		});
		// add 30 minutes
		const hours = Number(endTime.split(':')[0]);
		const minutes = Number(endTime.split(':')[1]);
		if (minutes === 0) {
			endTime = `${hours + 1}:30:00`;
		} else {
			endTime = `${hours}:${minutes + 30}:00`;
		}
		return endTime;
	}

	let events: any[] = [];

	data.classes.forEach((clase) => {
		(clase.schedule as Schedule[])?.forEach((schedule) => {
			// based on the schedule day and time, create an event, make the day a day in the current week
			const day = Number(schedule.day);
			const start = new Date();
			start.setDate(start.getDate() - start.getDay() + day);
			start.setHours(Number(schedule.startTime.split(':')[0]));
			start.setMinutes(Number(schedule.startTime.split(':')[1]));
			const end = new Date();
			end.setDate(end.getDate() - end.getDay() + day);
			end.setHours(Number(schedule.endTime.split(':')[0]));
			end.setMinutes(Number(schedule.endTime.split(':')[1]));

			let title = clase.title;
			if (clase.caption) title += '\n' + clase.caption;
			events.push({
				title,
				start,
				end,
				allDay: false,
				backgroundColor: '#312F2E',
				textColor: '#FDFBFA'
			});
		});
	});

	let options = {
		view: 'timeGridWeek',
		dayHeaderFormat: { weekday: 'long' },
		locale: 'es-ES',
		events,
		slotMinTime: getStartTime(),
		slotMaxTime: getEndTime(),
		slotDuration: '00:15:00',
		headerToolbar: { start: '', center: '', end: '' },
		allDaySlot: false,
		hiddenDays: [0, 6],
		height: '100%',
		slotLabelFormat: {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true
		},
		eventTimeFormat: {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true
		}
	};
</script>

<main class="container mx-auto h-full px-4 pt-8 lg:pt-16">
	<div class="h-full overflow-x-auto">
		<div class="fenix-ec h-full min-w-[768px]">
			<Calendar {plugins} {options} />
		</div>
	</div>
</main>
