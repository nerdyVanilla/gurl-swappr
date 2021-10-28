<script>
	export let dark;

	export function toggleTheme() {
		console.log('toggleTheme');
	}
</script>

<nav class="flex justify-between items-center">
	<a href="/">Be The Girl+</a>
	<a href="/stats">Player Stats</a>
	<a href="/girls">Girls</a>
	<a href="/about">About</a>
	<button
		on:click|preventDefault={() => {
			dark = !dark;
		}}>{dark ? 'dark' : 'light'}</button
	>
</nav>
<hr />
