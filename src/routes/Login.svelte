<script>
	import Header from '../lib/Header.svelte';
	import LoginForm from '../lib/LoginForm.svelte';
	import WelcomeNavigator from '../lib/WelcomeNavigator.svelte';
</script>

<Header>
	<WelcomeNavigator/>
</Header>

<div class="columns">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550408/spareroom_logo_i9f9in.png" width="300" />
		<h1 class="title" style="color: rgb(40, 103, 134)">A Web Application dedicated to providing student accommodation</h1>
	</div>
	<div class="column">
		<div class="box" style="background-color: rgb(40, 103, 134)">
			<LoginForm />
		</div>
	</div>
</div>