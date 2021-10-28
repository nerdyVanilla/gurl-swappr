<script>
	import Nav from '../components/nav.svelte';

	let dark = true;
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1f2938" />
	<meta name="msapplication-TileColor" content="#ffc40d" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class:dark>
	<main
		class="px-6 py-4 bg-primary-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 min-h-screen"
	>
		<Nav bind:dark />
		<slot />
	</main>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
