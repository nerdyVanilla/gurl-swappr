<script>
  import MakeTrade from "./MakeTrade.svelte";

  import { player } from "../stores/playerStore";

  export let tradeActive = true;
  export let gurl;

  export function upperCaseWords(words) {
    // console.log(words);
    if (words) {
      return words
        .split(/[_ ]/)
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(" ");
    } else {
      return "";
    }
  }

  export function tradingAttribute(thePlayer, attribute) {
    // console.log('tradingAttribute', gurl.name, attribute, thePlayer[attribute]);
    if (Array.isArray(thePlayer[attribute]) == true) {
      return upperCaseWords(thePlayer[attribute][0]);
    } else {
      return upperCaseWords(thePlayer[attribute]);
    }
  }
</script>

{#if gurl !== null}
  <div
    class="p-8 border rounded bg-primary-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  >
    <div
      class="flex flex-col-reverse lg:flex-row justify-between items-center "
    >
      <div class="">
        <img alt={gurl.name} src={gurl.image_url} class="" />
      </div>
      <div class="p-4">
        <div class="flex flex-col lg:flex-row justify-between">
          <div>
            <strong>Name:</strong>
            {gurl.name}<br />
          </div>
          <div>
            <strong>Last Trade:</strong>
            {gurl.last_trade}<br />
          </div>
        </div>
        {#each gurl.description_1 as description}
          <p class="mt-2">{description}</p>
        {/each}
        <div class="mt-4">
          <strong>{gurl.name}</strong> is trading<br />
          <ul class="px-5 list-outside list-disc">
            {#each Object.keys(gurl.to_trade) as attribute}
              <li>
                {#if Array.isArray(gurl.to_trade[attribute]) == true}
                  <strong>{upperCaseWords(attribute)}:</strong>
                  {gurl.to_trade[attribute]
                    .map((value) => upperCaseWords(value))
                    .join(", ")}
                {:else}
                  <strong>{upperCaseWords(attribute)}:</strong>
                  {upperCaseWords(gurl.to_trade[attribute])}
                {/if}
              </li>
            {/each}
          </ul>
          for<br />
          <ul class="px-5 list-outside list-disc">
            {#each Object.keys(gurl.want) as attribute}
              <li>
                {#if Array.isArray(gurl.want[attribute]) == true}
                  <strong>{upperCaseWords(attribute)}:</strong>
                  {gurl.want[attribute]
                    .map((value) => upperCaseWords(value))
                    .join(", ")}
                {:else if gurl.want[attribute] == true}
                  any <strong>{upperCaseWords(attribute)}</strong>
                  {#if tradeActive == true}
                    (would give {tradingAttribute($player, attribute)} away)
                  {/if}
                {:else if gurl.want[attribute] == false}
                  any other <strong>{upperCaseWords(attribute)}</strong>
                  {#if tradeActive == true}
                    (would give "{tradingAttribute($player, attribute)}" away)
                  {/if}
                {:else}
                  <strong>{upperCaseWords(attribute)}:</strong>
                  {upperCaseWords(gurl.want[attribute])}
                {/if}
              </li>
            {/each}
          </ul>
        </div>
        {#if gurl.description_2.length > 0}
          <div class="py-4">
            <hr />
            {#each gurl.description_2 as description}
              <p>{description}</p>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    {#if tradeActive == true}
      <div class="py-4">
        <MakeTrade bind:gurl />
      </div>
    {/if}
  </div>
{:else}
  And you may ask yourself, "Well, how did I get here?"
{/if}
