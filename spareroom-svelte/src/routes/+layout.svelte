<script>
	import { beforeUpdate } from "svelte";
	import { spareroomService } from "../services/spareRoom-service";

	beforeUpdate(() => {
		spareroomService.reload();
	});
</script>

<div class="container">
	<slot />
</div>