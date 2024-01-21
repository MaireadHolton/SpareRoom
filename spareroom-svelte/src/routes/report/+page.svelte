<script>
	import Header from '$lib/Header.svelte';
	import AdvertList from '$lib/AdvertList.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<Header>
 <MainNavigator/>
</Header> 



<div class="columns">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Available accommodation</h1>
		<AdvertList />
	</div>
</div>