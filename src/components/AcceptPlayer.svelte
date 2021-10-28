<script>
	import { display } from '../stores/displayStore';
	import { gurls } from '../stores/gurlStore';
	import { player } from '../stores/playerStore';
	import { defaultGurls } from '../stores/defaultGurlsStore';
	import { canTrade, shuffleArray } from '../lib/gurlSwapper';

	function acceptPlayer() {
		gurls.set($defaultGurls.filter((aGurl) => canTrade($player, aGurl)));
		shuffleArray($gurls);

		$display.setupPlayer = false;
		$display.swappr = true;
	}
</script>

<button
	class="mt-1 w-full border
	border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-200
	dark:border-blue-800 dark:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-gray-300
	rounded px-4 py-2"
	on:click={acceptPlayer}
>
	Start
</button>
