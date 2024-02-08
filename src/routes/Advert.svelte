<script>
	import LoggedInHeader from '$lib/LoggedInHeader.svelte';
	import AdvertForm from '$lib/AdvertForm.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<LoggedInHeader >
  <MainNavigator />
</LoggedInHeader>

	<div class="flex-container" style="text-align: center;">
		<h1 class="title is-4">Advertise your spare room</h1>
		<AdvertForm />
	</div>
