<script>
	import TitleBar from './TitleBar.svelte';
</script>

<div class="columns is-vcentered">
	<div class="column is-two-thirds">
		<TitleBar title={'Find or post student accommodation'} subTitle={'Please Sign up or Log in to continue'} />
	</div>
	<div class="column">
		<slot />
	</div>
</div>