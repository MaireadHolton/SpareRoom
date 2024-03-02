<script>
	import { user } from "../stores";
  
	let userRole = $user.role;
  </script>

<div class="box has-text-centered columns m-2">
 {#if userRole === "Homeowner"}
  <a href="/#/advert" class="column is-4">
    <i class="fas fa-address-card fa-3x" style="color:rgb(153, 196, 74)" />
  </a>

 {:else if userRole === "Student"}
  <a href="/#/studentDetail" class="column is-4">
    <i class="fas fa-address-card fa-3x" style="color:rgb(63, 122, 139)" />
  </a>
 {/if}

	<a href="/#/report" class="column is-4">
		<i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)" />
	</a>

	<a href="/#/logout" class="column is-4">
		<i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)" />
	</a>
</div>