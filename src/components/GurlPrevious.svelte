<script>
	import { currentGurl } from '../stores/currentGurlStore';
	import { gurls } from '../stores/gurlStore';

	function previousGurl() {
		$currentGurl--;
		console.log('previousGurl', $currentGurl);
		if ($currentGurl < 0) {
			$currentGurl = $gurls.length - 1;
		}
		console.log('previousGurl', $currentGurl);
	}
</script>

<button
	class="mt-1 w-full border
  border-gray-300 dark:border-gray-600
  text-gray-600 dark:text-gray-400
  hover:bg-gray-300 dark:hover:bg-gray-600
  hover:text-gray-900 dark:hover:text-gray-200
  rounded px-4 py-2"
	on:click={previousGurl}
>
	Previous
</button>
