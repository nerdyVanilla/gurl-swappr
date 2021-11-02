<script>
  export let dark;

  import { Sun, Moon } from "svelte-hero-icons";

  import Icon from "svelte-hero-icons/Icon.svelte";
</script>

<nav class="flex justify-between items-center">
  <a href="/">Be The Girl+</a>
  <a href="/stats">Player Stats</a>
  <a href="/girls">Girls</a>
  <a href="/about">About</a>
  <button
    on:click|preventDefault={() => {
      dark = !dark;
    }}
  >
    {#if dark == true}
      <Icon src={Moon} size="1em" solid />
    {:else}
      <Icon src={Sun} size="1em" solid />
    {/if}
  </button>
</nav>
<hr />
