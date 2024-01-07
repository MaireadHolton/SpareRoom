<script>
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';

	async function login() {
		console.log(`attemting to log in email: ${email} with password: ${password}`);
		goto('/advert');
	}
</script>

<form on:submit|preventDefault={login} style="color: rgb(40, 103, 134);">
	<div class="field">
		<label class="label" style="color: white" for="email">Email</label>
		<input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
	</div>
	<div class="field">
		<label class="label" style="color: white" for="password">Password</label>
		<input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
	</div>
	<div class="field is-grouped">
		<button class="button is-link" style="background-color: rgb(103, 168, 233);" >Log In</button>
	</div>
</form>