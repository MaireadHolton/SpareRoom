<script>
	import { beforeUpdate, getContext} from "svelte";
	
    const spareroomService = getContext("spareroomService");

	beforeUpdate(() => {
		spareroomService.reload();
	});
</script>

<div class="container">
	<slot />
</div>