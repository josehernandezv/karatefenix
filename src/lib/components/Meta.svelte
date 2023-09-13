<script lang="ts">
	import ogImage from '$lib/images/og-image.png';
	import { page } from '$app/stores';

	console.log($page.data);

	$: title = $page.data.meta_title ?? `Academia de Karate Do Fénix`;
	$: description =
		$page.data.meta_description ??
		`Academia de Karate Do, ubicada en Palmares, Alajuela, Costa Rica.`;
	$: image = $page.data.meta_image ?? ogImage;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="theme-color" content="#000000" />
	<meta property="og:type" content="website" />

	<meta property="og:title" content={title} />
	<meta property="twitter:title" content={title} />

	<meta property="og:description" content={description} />
	<meta name="description" content={description} />

	<meta property="og:image" content={image} />
	<meta property="og:image:secure_url" content={image} />
	<meta property="twitter:image" content={image} />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>
