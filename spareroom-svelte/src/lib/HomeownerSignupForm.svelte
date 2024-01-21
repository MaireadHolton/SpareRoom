<script lang="ts">
	import { goto } from "$app/navigation";
    import { spareroomService } from "../services/spareRoom-service";

	let email = '';
	let password = '';
	let errorMessage = '';


	async function signup() {
		console.log(`attempting to sign up email: ${email}`);
		let success = await spareroomService.signup(email, password)
		if (success) {
			goto ('/advert');
		} else {
			errorMessage = "Error trying to signup";
		}
	}


</script>

<form on:submit|preventDefault={signup} style="color: rgb(40, 103, 134)">
	<div class="field">
		<label class="label" style="color: white" for="email">Email</label>
		<input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
	</div>
	<div class="field">
		<label class="label" style="color: white" for="password">Password</label>
		<input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
	</div>
	<div class="field is-grouped">
		<button class="button is-link"style="background-color: rgb(103, 168, 233);">Homeowner Sign up</button>
	</div>
</form>
{#if errorMessage}
  <div class="section" style="color: white">
    {errorMessage}
  </div>
{/if}