<script>
	import { player } from '../stores/playerStore';
	import { initPlayer } from '../stores/initPlayerStore';

	import { gurls } from '../stores/gurlStore';
	import { defaultGurls } from '../stores/defaultGurlsStore';
	import { currentGurl } from '../stores/currentGurlStore';
	import { display } from '../stores/displayStore';
	import { tradeHistory } from '../stores/tradeHistoryStore';

	function restartGame() {
		display.set({
			setupPlayer: true,
			swappr: false,
			gurl: false
		});
		player.set(Object.assign($player, $initPlayer));
		gurls.set([...$defaultGurls]);
		currentGurl.set(0);
		tradeHistory.set([]);
	}
</script>

<button
	class="mt-1 w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-200 dark:border-red-700 dark:text-red-700 dark:hover:bg-red-700 dark:hover:text-gray-400 rounded px-4 py-2 mt-8"
	on:click={restartGame}
>
	Restart Game
</button>
