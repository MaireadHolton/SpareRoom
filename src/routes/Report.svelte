<script>
	import LoggedInHeader from '../lib/LoggedInHeader.svelte';
	import AdvertList from '../lib/AdvertList.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
	import Map from '../lib/ReportMap.svelte';

	let table = true;

</script>

<LoggedInHeader>
 <MainNavigator />
</LoggedInHeader> 



<div class="columns">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Available accommodation  <a href="/#/report"> 
			<i class="button is link; fas fa-filter fa-1.5x" style="float:right; width: 90px; height: 50px; color: floralwhite; background-color:rgb(49, 94, 124)"> <br> Filter</i>
		  </a></h1>
		
		<button on:click={() => (table = !table)} style="background-color: rgb(49, 94, 124); color: white; margin: 45px; padding: 30px;"
		>Switch view  </button>
		{#if table}
		 <AdvertList />
		 {:else }
		 <Map />
		 {/if}
		
	</div>
</div>