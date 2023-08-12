<script lang="ts">
	import heroImg from '$lib/images/hero-md.png';
	import Testimonials from './Testimonials.svelte';
</script>

<!-- HERO SECTION -->
<div class="header">
	<div class="hero pb-8">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src={heroImg} alt="Karate Do" class="w-full max-w-xl lg:w-6/12 lg:max-w-5xl" />
			<div>
				<h1 class="text-4xl font-bold lg:text-5xl">
					Bienvenido a<br /><span class="text-5xl text-primary lg:text-7xl"
						>Academia de Karate Do Fénix</span
					>
				</h1>
				<p class="py-6 text-lg">
					Karate Tradicional y Deportivo impartido por instructores amigables en un ambiente seguro,
					divertido y amigable
				</p>
				<button class="btn btn-primary">Comienza hoy mismo</button>
			</div>
		</div>
	</div>
</div>
<!-- VIDEO AND ABOUT SECTION -->
<div class="hero pb-8">
	<div class="gap:6 hero-content flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20">
		<div class="relative h-52 w-full max-w-xl sm:h-72 md:h-96 lg:h-full lg:max-w-5xl">
			<iframe
				src="https://player.vimeo.com/video/853057455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				style="position:absolute;top:0;left:0;width:100%;height:100%;"
				title="Video Academia Karate Fenix"
			/>
			<script src="https://player.vimeo.com/api/player.js"></script>
		</div>
		<div class="py-12 text-lg">
			<h2 class="text-4xl font-bold lg:text-5xl">Sobre nosotros</h2>
			<p class="pb-3 pt-6">
				Desde nuestros inicios en el 2006, enseñamos el Karate como una forma de vida, fomentando
				los valores y principios propios de la disciplina, inspirando a las personas a alcanzar su
				máximo potencial.
			</p>
			<p>
				Nos hemos caracterizado por innumerables logros deportivos, con participación en los eventos
				nacionales e internacionales más importantes, además de aportar constantemente atletas a las
				Selecciones Nacionales de nuestro país.
			</p>
		</div>
	</div>
</div>
<!-- TESTIMONIALS SECTION -->
<Testimonials />

<style lang="postcss">
	.header {
		min-height: calc(100vh - 9rem);
	}
</style>
