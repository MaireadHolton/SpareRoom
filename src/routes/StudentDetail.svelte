<script>
	import LoggedInHeader from '../lib/LoggedInHeader.svelte';
    import StudentForm from '../lib/StudentForm.svelte';
 	import MainNavigator from '../lib/MainNavigator.svelte';
</script>

<LoggedInHeader> 
    <MainNavigator/>
</LoggedInHeader>

<div class="columns is-vcentered">
	<div class="column has-text-centered">
		<img alt="" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704550400/SpareRoomText_boxvkw.png" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Create a profile</h1>
		<StudentForm />
	</div>
</div>