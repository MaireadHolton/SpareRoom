<!-- Post.svelte -->
<script>
  import { getContext, onMount, setContext } from 'svelte';
  import { Loader } from "@googlemaps/js-api-loader";
  import LoggedInHeader from '$lib/LoggedInHeader.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';


  const spareroomService = getContext('spareroomService');
  
  let error = null;
  let advertDetails= {};

  onMount(async () => {
    try {
      const urlId = window.location.hash;
      const advertId = urlId.split('/').pop();;
      console.log('Selected advertId:', advertId);

      if (advertId) {
        advertDetails = await spareroomService.getAdvertById(advertId);
        console.log('Fetched advertDetails:', advertDetails);
      }
    } catch (e) {
      console.error('Error fetching advert details:', e);
      error = 'Error fetching advert details. Please try again later.';
    }
    const loader = new Loader({
      apiKey: "AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM",
      version: "weekly",
    });
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: parseFloat(advertDetails.lat), lng: parseFloat(advertDetails.lng) },
        zoom: 12,
      });
      const marker = new google.maps.Marker({
        position: { lat: parseFloat(advertDetails.lat), lng: parseFloat(advertDetails.lng) },
        map: map,
        title: `${advertDetails.firstName}'s accomodation location`,
        draggable: false,
      });
      setContext('map', map);
      setContext('marker', marker);
    });
});

</script>

<LoggedInHeader>
  <MainNavigator/>
</LoggedInHeader>

{#if error}
  <p>{error}</p>
{:else}
<div class="wrapper">
  <div class="box" style="float: left; margin: 1.5%; width: 30%; background-color: rgb(75,79,155, 0.75); color: white; "> <center><strong>College:</strong> <br>
   {advertDetails.college}</center>
  </div>
  <div class="box" style="float: left; margin: 1.5%; width: 30%; background-color: rgb(75,79,155, 0.75); color: white; "> <center><strong>Price:</strong> <br>
    €{advertDetails.price}</center>
   </div>
   <div class="box" style="float: left; margin: 1.5%; width: 30%; background-color: rgb(75,79,155, 0.75); color: white; "> <center><strong>Available:</strong> <br>
    {advertDetails.available}</center>
   </div>
</div>
<div class="box" style="float: left; width: 96%; margin: 1.5%; background-color: rgb(75,79,155, 0.75); color: white; "> <center><strong>Description:</strong> <br>
  {advertDetails.description}</center>
 </div>
 <div class="box" style="float: left; width: 96%; margin: 1.5%; background-color: rgb(75,79,155, 0.75); color: white; "> <center><strong>Rules:</strong> <br>
  {advertDetails.rules}</center>
 </div>

 <div class="box" style="float: left; width: 100%; margin: 1.5%; ">
  <img src="{advertDetails.img}" alt="Accommodation Image" style="max-width: 100%; height: auto;">
</div>

 <div id="map"></div>
<style>
  #map {
    height: 400px;
    width: 100%;
  }
</style>

<button style="width: 30%; margin-left: 35%; margin-top: 1%; border-radius: 8px;align:center; background-color: rgb(75,79,155, 0.75); color: floralwhite"><strong>Contact {advertDetails.firstName} </strong><br>
{advertDetails.contactEmail}</button>

{/if}
