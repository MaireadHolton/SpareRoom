<script>
	import LoggedInHeader from '$lib/LoggedInHeader.svelte';
	import AdvertList from '$lib/AdvertList.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
	import { onMount } from "svelte";
	import { spareroomService } from '../services/spareRoom-service';

	onMount(async () =>{
		let AdvertList = await spareroomService.getAdverts();
	})
</script>

<LoggedInHeader>
 <MainNavigator/>
</LoggedInHeader> 



<div class="columns">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" width="300" />
	</div>
	<div class="column box has-text-centered">
		<button class="button is-link" style="background-color: rgb(49, 94, 124); margin: 45px; padding: 30px;"
		>Table view</button>
		<button class="button is-link" style="background-color: rgb(49, 94, 124); margin: 45px; padding: 30px;"
		>map View</button>

		<h1 class="title is-4">Available accommodation</h1>
		<AdvertList />
	</div>
</div>