<script>
	import { player } from '../stores/playerStore';
	import { attributes } from '../stores/attributeStore';

	function randomPlayer() {
		Object.keys($player).forEach((attribute) => {
			// console.log(attribute);
			const randIndex = Math.floor(Math.random() * $attributes[attribute].length);

			if (Array.isArray($player[attribute])) {
				$player[attribute] = $player[attribute]
					.map((subAttribute) => {
						if (subAttribute) {
							return $attributes[attribute][randIndex];
						}
					})
					.filter((subAttribute) => subAttribute);
			} else {
				$player[attribute] = $attributes[attribute][randIndex];
			}
		});
	}
</script>

<button
	class="mt-1 w-full border border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-900 rounded px-4 py-2"
	on:click={randomPlayer}
>
	Random
</button>
