<script lang="ts">
	import heroImg from '$lib/images/hero-md.png';
</script>

<div class="hero pb-8">
	<div class="hero-content flex-col lg:flex-row">
		<img src={heroImg} alt="Karate Do" class="w-full max-w-xl lg:w-6/12 lg:max-w-5xl" />
		<div>
			<h1 class="text-5xl font-bold">
				Bienvenido a <span class="text-primary">Academia de Karate Do Fénix</span>
			</h1>
			<p class="py-6">
				Karate Tradicional y Deportivo impartido por instructores amigables en un ambiente seguro,
				divertido y amigable
			</p>
			<button class="btn btn-primary">Comienza hoy mismo</button>
		</div>
	</div>
</div>

<!-- <style lang="postcss">
	.hero {
		min-height: calc(100vh - 9rem);
	}
</style> -->
