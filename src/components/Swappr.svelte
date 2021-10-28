<script>
	import Gurl from './Gurl.svelte';
	import Restart from './Restart.svelte';
	import ShowPlayer from './ShowPlayer.svelte';
	import GurlNext from './GurlNext.svelte';
	import GurlPrevious from './GurlPrevious.svelte';

	import { currentGurl } from '../stores/currentGurlStore';
	import { gurls } from '../stores/gurlStore';
	import { tradeHistory } from '../stores/tradeHistoryStore';
</script>

<div class="">
	<div>
		<!-- {#if anyTrades($player, $gurls) == true} -->
		{#if $gurls.length > 0}
			<div class="py-4 flex space-x-4">
				<GurlPrevious />
				<!-- <div class="item-center"><nobr>({$currentGurl + 1} of {$gurls.length})</nobr></div> -->
				<GurlNext />
			</div>
			<Gurl gurl={$gurls[$currentGurl]} />
		{:else}
			<div class="mt-4 p-8 w-full border rounded">
				<h2 class="text-4xl text-center">Looks like there are no more trades available.</h2>
				<h3 class="text-2xl">Trade History ({$tradeHistory.length}):</h3>
				<ul class="px-6 list-outside list-disc">
					{#each $tradeHistory as trade}
						<li>{trade}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
	<div class="mt-4">
		<ShowPlayer />
	</div>
	<div class="mt-4">
		<Restart />
	</div>
</div>
