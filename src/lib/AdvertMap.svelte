<!-- AdvertMap.svelte-->
<script>
  import { onMount, createEventDispatcher } from "svelte";
  import LoadScript from "svelte-google-maps-api/LoadScript.svelte";
  import GoogleMap from "svelte-google-maps-api/GoogleMap.svelte";
  import Marker from 'svelte-google-maps-api/Marker.svelte';

  let latitude = 51.82;
  let longitude = -8.39;
  
  const options = {
    zoom: 12,
		center: {lat: 51.82, lng: -8.39},
    draggable: true,
  };
 const dispatch = createEventDispatcher();

  function handleMapClick(event) {
    latitude = event.latLng.lat();
    longitude = event.latLng.lng();
    dispatch('locationSelected', { latitude, longitude });
  }

  function handleMarkerDragEnd(event) {
    latitude = event.latLng.lat();
    longitude = event.latLng.lng();
    dispatch('locationSelected', { latitude, longitude });
  }

</script>

<LoadScript apiKey={'AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM'}>
<GoogleMap 
  {options}
  on:click={handleMapClick}
  mapContainerStyle="height: 600px;">
  {#if latitude !== null && longitude !== null}
      <Marker
        position={{lat: latitude, lng: longitude}}
        {options}
        on:dragend={handleMarkerDragEnd} />
      {/if}
  </GoogleMap>
</LoadScript>


