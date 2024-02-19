<script>
	import { push } from "svelte-spa-router";
    import { getContext} from 'svelte';
 
	let firstName = '';
	let lastName ='';
	let email = '';
	let password = '';
	let role =  'Homeowner';
	let errorMessage = '';

	const spareroomService = getContext("spareroomService");


	async function signup() {
		console.log(`attempting to sign up email: ${email}`);
		let success = await spareroomService.signup(email, password)
		if (success) {
			if (role= 'Homeowner') {
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
		<label class="label" style="color: white" for="firstName">First Name</label>
		<input bind:value={firstName} class="input" id="firstName" name="firstName" placeholder="Enter first name" type="text" />
	</div>
	<div class="field">
		<label class="label" style="color: white" for="lastName">Last Name</label>
		<input bind:value={lastName} class="input" id="lastName" name="lastName" placeholder="Enter last name" type="text" />
	</div>
	<div class="field">
		<label class="label" style="color: white" for="email">Email</label>
		<input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
	</div>
	<div class="field">
		<label class="label" style="color: white" for="password">Password</label>
		<input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
	</div>
	<div class="field" style="color:white">
		<strong> Selected: {role}</strong>
		<label>
			<input type="radio" value="Homeowner" bind:group={role} /> Homeowner
		</label>
		<label>
			<input type="radio" value="Student" bind:group={role} /> Student
		</label>
	</div>
	<div class="field is-grouped">
		<button class="button is-link" style="background-color: rgb(103, 168, 233);">Sign up</button>
	</div>
</form>
{#if errorMessage}
  <div class="section" style="color: white">
    {errorMessage}
  </div>
{/if}