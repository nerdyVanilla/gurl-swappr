<script>
	import { display } from '../stores/displayStore';
	import SetupPlayer from '../components/SetupPlayer.svelte';
	import Swappr from '../components/Swappr.svelte';
</script>

<svelte:head>
	<title>Be the Girl+ (a GurlSwappr prototype)</title>
</svelte:head>

{#if $display.setupPlayer == true}
	<SetupPlayer />
{:else}
	<Swappr />
{/if}
