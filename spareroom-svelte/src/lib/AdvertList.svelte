<script>
  import { onMount } from "svelte";
  import { spareroomService } from "../services/spareRoom-service";

  let advertsList = [];
  onMount(async () => {
    advertsList = await spareroomService.getAdverts();
  });
</script>

<table class="table is-fullwidth">
	<thead>
    <th>College</th>
    <th>Price</th>
    <th>Available</th>
 </thead>  
 <tbody>
  {#each advertsList as advert}
    <tr>
      <td>{advert.college}</td>
      <td>{advert.price}</td>
      <td>{advert.available}</td>
    </tr>
  {/each}
 </tbody>
</table>