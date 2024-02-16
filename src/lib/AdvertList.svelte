<script>
  import { getContext, onMount } from "svelte";

  const spareroomService = getContext("spareroomService");
  /**
   * @type {any[]}
   * 
   */
  let AdvertList = [];

  onMount(async () => {
    AdvertList = await spareroomService.getAdverts();
  });

</script>

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