<script>
	import Header from '$lib/Header.svelte';
	import AdvertForm from '$lib/AdvertForm.svelte';
</script>

<Header />

<div class="columns is-vcentered">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550400/SpareRoomText_boxvkw.png" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Advertise your spare room</h1>
		<AdvertForm />
	</div>
</div>