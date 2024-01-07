<script>
	let email = '';
	let password = '';
</script>

<form style="color: rgb(40, 103, 134)">
	<div class="field">
		<label class="label" style="color: white" for="email">Email</label>
		<input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
	</div>
	<div class="field">
		<label class="label" style="color: white" for="password">Password</label>
		<input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
	</div>
    <div class="field is-grouped">
        <button class="button is-link" style="background-color: rgb(103, 168, 233);">Create Student Account</button>
      </div>
	<div class="field is-grouped">
		<button class="button is-link"style="background-color: rgb(103, 168, 233);">Create homeowner Account</button>
	</div>
</form>