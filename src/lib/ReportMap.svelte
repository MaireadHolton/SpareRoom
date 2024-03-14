<script>
    import { onMount, getContext } from "svelte";
    import { Loader } from "@googlemaps/js-api-loader";

    const spareroomService = getContext("spareroomService");
    let AdvertList = [];
    let infoWindow = null;
    let error = null;

    onMount(async() => {
      try {
        AdvertList = await spareroomService.getAdverts();
        } catch (e) {
        console.error("Error fetching adverts:", e);
        error = "Error fetching adverts. Please try again later.";
      }
    const loader = new Loader({
      apiKey: "AIzaSyCz5DqAQyUmoPqH43OYAK_wxWxWmpNz8pM",
      version: "weekly",
    });
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.89, lng: -8.47 },
        zoom: 7,
        scrollwheel: true,
      });
      AdvertList.forEach(advert => {
        const marker = new google.maps.Marker({
          position: { lat: advert.lat, lng: advert.lng },
          map: map,
          title: advert.college
        });

        infoWindow = new google.maps.InfoWindow();

        marker.addListener("click", () => {
          const content = 
          `<div>
            <h3>Name: ${advert.firstName}</h3>
            <p>Price: €${advert.price}</p>
              <p>Description: ${advert.description}</p>
              </div>`
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });
      });

    });
  });

  </script>
  
  <div id="map"></div>
  <style>
    #map {
      height: 600px;
      width: 100%;
    }
  </style>

