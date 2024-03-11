import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
  role: ""
});


export const markerLocation = writable({
  lat: 51.89,
  lng: -8.47
});