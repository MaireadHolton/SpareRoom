<script>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import LoadScript from "svelte-google-maps-api/LoadScript.svelte";
  import GoogleMap from "svelte-google-maps-api/GoogleMap.svelte";
  import Marker from 'svelte-google-maps-api/Marker.svelte';

  const location = writable({ latitude: 51.82, longitude: -8.39 });
  
  const options = {
    zoom: 12,
		center: {lat: 51.82, lng: -8.39},
    draggable: true,
  };
 const dispatch = createEventDispatcher();

  function handleMapClick(event) {
    const newLocation = {latitude: event.latLng.lat(), longitude: event.latLng.lng()};
    location.set(newLocation);
    dispatch('locationSelected', newLocation);
  } 

  function handleMarkerDragEnd(event) {
    const newLocation = {latitude: event.latLng.lat(), longitude: event.latLng.lng()};
    location.set(newLocation);
    dispatch('locationSelected', newLocation);
  }

</script>

<LoadScript apiKey={'AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM'}>
<GoogleMap 
  {options}
  on:click={handleMapClick}
  mapContainerStyle="height: 600px;">

{#if $location.latitude !== null && $location.longitude !== null}
      {#if $location.latitude !== undefined && $location.longitude !== undefined}
        {#if $location.latitude !== undefined && $location.longitude !== undefined}
          <Marker
            position={{ lat: $location.latitude, lng: $location.longitude }}
            {options}
            on:dragend={handleMarkerDragEnd} />
        {/if}
      {/if}
    {/if}
  </GoogleMap>

<!-- Emit the latitude and longitude values for two-way binding -->
{#if $location.latitude !== undefined && $location.longitude !== undefined}
{$location.latitude}
{$location.longitude}
{/if}

</LoadScript>


