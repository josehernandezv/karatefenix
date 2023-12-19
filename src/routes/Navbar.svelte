<script lang="ts">
	import logo from '$lib/images/akf-logo-sm.png';
	import { LINKS } from '$lib/const';
	import MenuLinks from './MenuLinks.svelte';

	const leftLinks = LINKS.slice(0, LINKS.length / 2);
	const rightLinks = LINKS.slice(LINKS.length / 2, LINKS.length);
</script>

<div class="navbar min-h-fit w-full font-display">
	<div class="navbar-start lg:justify-end">
		<label for="root-drawer" class="btn btn-square btn-ghost lg:hidden">
			<iconify-icon
				class="inline-block stroke-current text-4xl text-primary"
				icon="lucide:align-left"
			/>
		</label>
		<ul class="menu menu-horizontal hidden lg:inline-flex">
			<MenuLinks links={leftLinks} />
		</ul>
	</div>
	<div class="navbar-center px-8">
		<a href="/">
			<img src={logo} alt="logo" class="h-28 w-auto md:h-32" />
		</a>
	</div>
	<div class="navbar-end justify-start">
		<ul class="menu menu-horizontal hidden lg:inline-flex">
			<MenuLinks links={rightLinks} />
		</ul>
	</div>
</div>
