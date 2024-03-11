<script>
  import { createEventDispatcher, setContext, onMount } from "svelte";
  import { Loader } from "@googlemaps/js-api-loader";
  import { markerLocation } from "../stores";

  const dispatch = createEventDispatcher();

  onMount(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM",
      version: "weekly",
    });
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.89, lng: -8.47 },
        zoom: 12,
      });

      const marker = new google.maps.Marker({
        position: { lat: 51.89, lng: -8.47 },
        map: map,
        title: "Share accommodation location",
        draggable: true,
      });

      marker.addListener("dragend", (event) => {
        const newPosition = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        markerLocation.set(newPosition);
      });
      setContext('map', map);
      setContext('marker', marker);
      dispatch("mapReady", { map, marker });
    });
  });
</script>

<div id="map"></div>
<style>
  #map {
    height: 400px;
    width: 100%;
  }
</style>

