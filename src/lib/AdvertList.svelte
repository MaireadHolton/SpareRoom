<!-- AdvertList.svelte -->
<script>
  import { getContext, onMount } from "svelte";
  import { push } from "svelte-spa-router";

  const spareroomService = getContext("spareroomService");

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

  function viewAdvertDetails(advert) {
    push(`/post/${advert._id}`);
  }
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
          <td>
            {#if advert._id}
              <button on:click={() => viewAdvertDetails(advert)} class="button is link" style="background-color:rgb(49, 94, 124)">
                <i class="fas fa-folder-open fa-1.5x" style="color: floralwhite;"></i>
              </button>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}


