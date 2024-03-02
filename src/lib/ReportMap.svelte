<script>
    import { onMount, getContext } from "svelte";
    import LoadScript from "svelte-google-maps-api/LoadScript.svelte";
	import GoogleMap from "svelte-google-maps-api/GoogleMap.svelte";

    const spareroomService = getContext("spareroomService");

    const options = {
		zoom: 8,
		center: {lat: 51.82, lng: -8.39},
	};

	
</script>

<LoadScript apiKey={'AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM'}>
	<GoogleMap {options} mapContainerStyle= "height: 600px;"/>
</LoadScript>

