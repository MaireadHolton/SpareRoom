<script>
	import { push } from 'svelte-spa-router';
  	import { getContext } from 'svelte';
    import { user } from '../stores';

	let email = '';
	let password = '';
	let role = '';
	let errorMessage = '';


	const spareroomService = getContext("spareroomService");

	async function login() {
		console.log(`attepmting to log in email: ${email} with password: ${password}`);
		let success = await spareroomService.login(email, password);
		if (success) {
			user.set({ ...$user });
			console.log('User after login:', $user);
			push('/report');
		} else {
			email = "";
			password = "";
			errorMessage = "Invalid Credentials";
		}
		
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
	{#if errorMessage}
  <div class="section" style= "color: white">
    {errorMessage}
  </div>
{/if}
</form>