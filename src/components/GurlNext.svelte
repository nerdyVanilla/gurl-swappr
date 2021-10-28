<script>
	import { currentGurl } from '../stores/currentGurlStore';
	import { gurls } from '../stores/gurlStore';

	function nextGurl() {
		$currentGurl++;
		if ($currentGurl >= $gurls.length) {
			$currentGurl = 0;
		}
	}
</script>

<button
	class="mt-1 w-full border
  border-gray-300 dark:border-gray-600
  text-gray-600 dark:text-gray-400
  hover:bg-gray-300 dark:hover:bg-gray-600
  hover:text-gray-900 dark:hover:text-gray-200
  rounded px-4 py-2"
	on:click={nextGurl}
>
	Next
	<!-- ({$currentGurl + 1} of {$gurls.length}) -->
</button>
