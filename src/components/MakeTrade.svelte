<script>
	import { currentGurl } from '../stores/currentGurlStore';
	import { gurls } from '../stores/gurlStore';
	import { player } from '../stores/playerStore';
	import { tradeHistory } from '../stores/tradeHistoryStore';
	import { defaultGurls } from '../stores/defaultGurlsStore';

	import { canTrade, tradeAttributes, shuffleArray } from '../lib/gurlSwapper';

	export let gurl;

	function makeTrade() {
		// console.log('makeTrade', gurl.name);
		$tradeHistory.push(gurl.name);
		player.set(tradeAttributes($player, gurl));

		// Find available gurls for trades.
		gurls.set(
			$defaultGurls
				.filter((aGurl) => aGurl.name !== gurl.name)
				.filter((aGurl) => !$tradeHistory.includes(aGurl.name))
				.filter((aGurl) => canTrade($player, aGurl))
		);
		shuffleArray($gurls);
		currentGurl.set(0);
	}
</script>

<button
	class="mt-1 w-full border
	border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-200
	dark:border-blue-800 dark:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-gray-300
	rounded px-4 py-2"
	on:click={makeTrade}
>
	Trade
</button>
