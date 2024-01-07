<script>
	import Header from '$lib/Header.svelte';
	import SignupForm from '$lib/SignupForm.svelte';
</script>

<Header />

<div class="columns">
	<div class="column">
		<div class="box" style="background-color: rgb(40, 103, 134)">
			<h1 class="title" style="color: white">Login</h1>
			<SignupForm />
		</div>
	</div>
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" width="300" />
    <h1 class="title" style="color: rgb(40, 103, 134)">A Web Application dedicated to providing student accommodation</h1>
	</div>
</div>