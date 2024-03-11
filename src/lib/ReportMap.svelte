<script>
    import { onMount, getContext } from "svelte";
    import LoadScript from "svelte-google-maps-api/LoadScript.svelte";
    import GoogleMap from "svelte-google-maps-api/GoogleMap.svelte";
    import Marker from "svelte-google-maps-api/Marker.svelte";
  
    const spareroomService = getContext("spareroomService");
    let adverts = [];
  
    const options = {
      zoom: 8,
      center: {lat: 51.82, lng: -8.39},
    };

    async function getAdverts() {
      adverts = await spareroomService.getAdverts();
    }
  
  </script>
  
  <LoadScript apiKey={'AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM'}>
  <GoogleMap {options} mapContainerStyle= "height: 600px;">
    {#each adverts as advert (advert.id)}
      <Marker position={{ lat: advert.latitude, lng: advert.longitude }} />
    {/each}
  </GoogleMap>
  </LoadScript>