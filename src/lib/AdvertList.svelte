<script>
  import { getContext, onMount } from "svelte";

  const spareroomService = getContext("spareroomService");
  /**
   * @type {any[]}
   * 
   */
  let AdvertList = [];
  let error = null;

  onMount(async () => {
    try {
    AdvertList = await spareroomService.getAdverts();
   } catch (e) {
      console.error("Error fetching adverts:", e);
      error = "Error fetching adverts. Please try again later.";
    }
  });

</script>

{#if error}
  <p>{error}</p>
{:else if AdvertList.length === 0}
  <p>Loading...</p>
{:else}
<table class="table is-fullwidth">
	<thead>
    <th style="text-align: center;">College</th>
    <th style="text-align: center;">Price</th>
    <th style="text-align: center;">Available</th>
 </thead>  
 <tbody>
  {#each AdvertList as advert}
    <tr>
      <td>{advert.college}</td>
      <td>€{advert.price}</td>
      <td>{advert.available}</td>
    </tr>
  {/each}
 </tbody>
</table>
{/if}