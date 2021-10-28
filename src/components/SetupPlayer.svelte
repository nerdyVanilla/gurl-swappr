<script>
	import RandomPlayer from './RandomPlayer.svelte';
	import DefaultPlayer from './DefaultPlayer.svelte';
	import AcceptPlayer from './AcceptPlayer.svelte';
	import ShowPlayer from './ShowPlayer.svelte';

	import { player } from '../stores/playerStore';
</script>

<h1 class="text-4xl text-center my-8">Welcome to Be The Girl+</h1>

<div class="container py-4">
	<div class="border rounded p-4 w-full">
		<h2 class="text-2xl">Player Setup:</h2>
		<DefaultPlayer />
		<RandomPlayer />
		<div class="py-4">
			<ShowPlayer />
		</div>
		<div>
			{#if $player.race !== true}
				<AcceptPlayer />
			{/if}
		</div>
	</div>
</div>
