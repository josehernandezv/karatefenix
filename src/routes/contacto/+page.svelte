<script lang="ts">
	import { enhance } from '$app/forms';
	import ContactInfo from './ContactInfo.svelte';
	import Map from './Map.svelte';

	export let form;
</script>

<main class="container mx-auto px-4 pt-8 lg:pt-16">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-20">
		<ContactInfo />
		<form method="POST" class="space-y-4" use:enhance>
			{#if form?.problem}
				<div class="alert alert-error">
					<iconify-icon icon="lucide:x-circle" class="text-2xl" />
					<span>{form.problem}</span>
				</div>
			{/if}
			{#if form?.success}
				<div class="alert alert-success">
					<iconify-icon icon="lucide:check-circle-2" class="text-2xl" />
					<span>{form.success}</span>
				</div>
			{/if}
			<div class="form-control w-full">
				<label class="label" for="name">
					<span class="label-text">Nombre</span>
				</label>
				<input
					name="name"
					type="text"
					required
					class="input input-bordered w-full"
					value={form?.data?.name ?? ''}
				/>
			</div>
			<div class="form-control hidden w-full">
				<label class="label" for="lastName">
					<span class="label-text">Apellido</span>
				</label>
				<input name="lastName" type="text" class="input input-bordered w-full" />
			</div>
			<div class="form-control w-full">
				<label class="label" for="email">
					<span class="label-text">Correo electrónico</span>
				</label>
				<input
					name="email"
					type="email"
					required
					class="input input-bordered w-full"
					value={form?.data?.email ?? ''}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="email">
					<span class="label-text">Mensaje</span>
				</label>
				<textarea
					class="textarea textarea-bordered w-full"
					rows={4}
					required
					name="content"
					value={typeof form?.data?.content === 'string' ? form.data.content : ''}
				/>
			</div>
			<button class="btn btn-primary float-right">Enviar mensaje</button>
		</form>
	</div>
	<div class="h-[50vh] w-full py-12">
		<Map />
	</div>
</main>
