<script>
	import { push } from "svelte-spa-router";
    import { getContext } from 'svelte';

	let email = '';
	let password = '';
	let errorMessage = '';
	let role = '';

	const spareroomService = getContext("spareroomService");

 	function onChange(event){
		role = event.currentTarget.value;
 	}

	async function signup() {
		console.log(`attempting to sign up email: ${email}`);
		let success = await spareroomService.signup(email, password)
		if (success) {
			if (role = "Homeowner") {
			push("/advert");
		} else { 
			push("/studentDetail");
		}
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
	<div class="field">
		<label class="label" style="color: white" for="role">Account Type</label>
		<input checked={role==="Student"} on:change={onChange} type="radio" name="role" value="Student">
		<label style="color: white"for="Student">Student</label>
		<input checked={role==="Homeowner"} on:change={onChange} type="radio" name="role" value="Homeowner">
		<label style="color: white" for="Homeowner">Homeowner</label>

		<!--
		<label>
			<input bind:group={role} type="radio" name="role" value="Student" /> Student
		</label>
		<label>
			<input bind:group={role} type="radio" name="role" value="Homeowner" /> Homeowner
		</label>
		-->
	</div>
	<div class="field is-grouped">
		<button class="button is-link"style="background-color: rgb(103, 168, 233);">Sign up</button>
	</div>
</form>
{#if errorMessage}
  <div class="section" style="color: white">
    {errorMessage}
  </div>
{/if}