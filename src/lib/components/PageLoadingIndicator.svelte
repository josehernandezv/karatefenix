<script lang="ts">
	import { navigating } from '$app/stores';
	import { onNavigate } from '$app/navigation';

	let visible = false;
	let progress = 0;
	let loadDurations: number[] = [];
	$: averageLoad = loadDurations.reduce((a, b) => a + b, 0) / loadDurations.length;
	const increment = 1;
	onNavigate((navigation) => {
		const typical_load_time = averageLoad || 200; //ms
		const frequency = typical_load_time / 100;
		let start = performance.now();
		// Start the progress bar
		visible = true;
		progress = 0;
		const interval = setInterval(() => {
			// Increment the progress bar
			progress += increment;
		}, frequency);
		// Resolve the promise when the page is done loading
		$navigating?.complete.then(() => {
			progress = 100; // Fill out the progress bar
			clearInterval(interval);
			// after 100 ms hide the progress bar
			setTimeout(() => {
				visible = false;
			}, 500);
			// Log how long that one took
			const end = performance.now();
			const duration = end - start;
			loadDurations = [...loadDurations, duration];
		});
	});
</script>

<div
	class="fixed top-0 z-10 w-full -translate-y-full transition-transform duration-500"
	class:transition-none={visible}
	class:translate-y-0={visible}
	style:--progress={progress}
>
	<div
		class="track h-1 w-[calc(var(--progress,_0)_*_1%)] bg-primary transition-all duration-75"
		class:transition-none={visible}
	></div>
</div>
