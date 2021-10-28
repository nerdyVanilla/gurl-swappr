<script>
	import { player } from '../stores/playerStore';

	export let attributeNames = Object.keys($player).map((attribute) => {
		return [
			attribute,
			attribute
				.split('_')
				.map((word) => word[0].toUpperCase() + word.substr(1))
				.join(' ')
		];
	});

	export function upperCaseWords(words) {
		// console.log(words);
		return words
			.split(' ')
			.map((word) => word[0].toUpperCase() + word.substr(1))
			.join(' ');
	}

	export function isString(obj) {
		return Object.prototype.toString.call(obj) === '[object String]';
	}
</script>

{#if $player.race !== true}
	<div class="border rounded w-full p-4">
		<h3 class="text-2xl">Player Stats:</h3>
		<div class="px-2">
			{#each attributeNames as attribute}
				<strong>{attribute[1]}:</strong>
				{#if Array.isArray($player[attribute[0]]) == true}
					{$player[attribute[0]].map((value) => upperCaseWords(value)).join(', ')}
				{:else}
					{upperCaseWords($player[attribute[0]])}
				{/if}<br />
			{/each}
		</div>
	</div>
{/if}
