<script>
	import Gurl from '../components/Gurl.svelte';
	import { defaultGurls } from '../stores/defaultGurlsStore';

	export function upperCaseWords(words) {
		// console.log(words);
		return words
			.split(/[_ ]/)
			.map((word) => word[0].toUpperCase() + word.substr(1))
			.join(' ');
	}
</script>

<div class="p-4">
	{#each $defaultGurls as gurl}
		<div class="py-2">
			<Gurl {gurl} tradeActive={false} />
		</div>
	{/each}
</div>
