<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount, getContext } from "svelte";

    const spareroomService = getContext("spareroomService");

    const mapConfig = {
        location: { lat: 51.99, lng: -8.73 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("adverts-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Adverts');
        map.showLayerControl();

        const adverts = await spareroomService.getAdverts();
        adverts.forEach((advert) => {
            addAdvertMarker(map, advert);
        });
    });

    export function addAdvertMarker(map, advert){
        const advertStr = `${advert.college} €${advert.price} ${advert.available}`;
        map.addMarker({ latitude: advert.latitude, longitude: advert.longitude }, advertStr, "Adverts");    
        map.moveTo(11, { latitude: advert.latitude, longitude: advert.longitude })
    }

</script>

<div class="box" id="adverts-map" style="height:75vh"> </div>