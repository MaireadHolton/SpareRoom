<script>
	import Header from '../lib/Header.svelte'
  import { getContext } from 'svelte';

  const spareroomService = getContext("spareroomService");
  spareroomService.logout();

</script>

<Header>
</Header> 

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
      <img width="200" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" alt=""/>
    </div>
    <div class="column">
      <h1 class="title" style="color: rgb(40, 103, 134)">Advertise your spare bedroom</h1>
      <p style="color: rgb(40, 103, 134)">Post available accommodation for students</p>
    </div>
  </div>