<script>
	import { goto } from "$app/navigation";
	import { spareroomService } from "../../services/spareRoom-service";

	spareroomService.logout();
	goto("/");
</script>