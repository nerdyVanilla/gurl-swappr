<script>
	import { player } from '../stores/playerStore';
	import { defaultPlayer } from '../stores/defaultPlayerStore';

	function setToDefaultPlayer() {
		$player = Object.assign($player, $defaultPlayer);
		// $player = Object.create($defaultPlayer);
	}
</script>

<button
	class="mt-1 w-full border border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-900 rounded px-4 py-2"
	on:click={setToDefaultPlayer}
>
	Default
</button>
