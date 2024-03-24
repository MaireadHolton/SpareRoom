<script>
	import LoggedInHeader from '../lib/LoggedInHeader.svelte';
	import AdvertList from '../lib/AdvertList.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
	import Map from '../lib/ReportMap.svelte';

	let table = true;

	function applyCollegeFilter() {
		//@ts-ignore
    const collegeFilterValue = document.getElementById('collegeFilter').value.toLowerCase();
    
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
		//@ts-ignore
      const collegeName = row.querySelector('td:nth-child(1)').innerText.toLowerCase();

      if (collegeName.includes(collegeFilterValue)) {
		//@ts-ignore
        row.style.display = ''; 
      } else {
		//@ts-ignore
        row.style.display = 'none'; 
      }
    });
  }
</script>

<LoggedInHeader>
 <MainNavigator />
</LoggedInHeader> 



<div class="columns">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Available accommodation  
			<div style="float:right;"> 
				<input type="text" style="height: 50px;" id="collegeFilter" placeholder="Filter by college">
				<button class="fas fa-filter fa-1.5x" on:click={applyCollegeFilter} style="border-radius: 5px; height: 50px; color: floralwhite; 
				background-color: rgb(49, 94, 124)"><br>Filter</button>
			</div>
		</h1>
		
		<button on:click={() => (table = !table)} style="border-radius: 5px; background-color: rgb(49, 94, 124); 
			color: white; margin: 45px; padding: 30px;"
		>Switch view </button>
		{#if table}
		 <AdvertList/>
		 {:else }
		 <Map />
		 {/if}
		
	</div>
</div>