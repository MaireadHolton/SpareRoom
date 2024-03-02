<!-- AdvertForm.svelte-->
<script>
  import { createEventDispatcher, getContext } from "svelte";
  import { push } from "svelte-spa-router";
  import Map from "./AdvertMap.svelte";
  
  const dispatch = createEventDispatcher();
  const spareroomService = getContext("spareroomService");

  let firstName = "";
  let college = "";
  let latitude = 51.82;
  let longitude = -8.39;
  let description = "";
  let rules = "";
  let price = 0;
  let available = "";
  let message = "Please enter details to post an advert";

  async function makeAdvert() {
    if (firstName && college && latitude && longitude && description && price && available) {
      const advert = {
        firstName: firstName,
        college: college,
        latitude: latitude,
        longitude: longitude,
        price: price,
        available: available
      };
      const success = await spareroomService.makeAdvert(advert);

      if (!success) {
        message = "Advert not created - some error occured";
       return; }

       message = `Thanks ${firstName} your advert was posted`;
       dispatch("message", {advert});
    } else {
      push ("/report")
      message = "Please fill all details to post an advert";
    }
}

// Handle the event dispatched by the map component
function handleLocationSelected(event) {
    latitude = event.detail.latitude;
    longitude = event.detail.longitude;
  }
</script>

<form on:submit|preventDefault={makeAdvert}>
<div class="field" style="text-align: center;">
      <input type="image" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704630335/image_aspe84.png" alt="upload image" width="100" height="100">
      <div class="field is-grouped, vertical-center">
        <button class="button is-link" style="background-color: rgb(49, 94, 124);">Upload image</button>
      </div>
    </div>
  <div class ="field" style="text-align: center;">
    <Map on:locationSelected={handleLocationSelected}/>
</div>
  <div class="field is-horizontal"></div>
      <div class="field">
          <label for="firstname" style="color: black" class="label">Homeowner Name</label>
          <input bind:value={firstName} class="input" id="firstname" type="text" placeholder="Enter first name" name="firstName">
      </div>
      <div class="field">
          <label for="college" style="color: black" class="label">College Nearby</label>
          <input bind:value={college} class="input" id="college" type="text" placeholder="Enter college" name="college">
       </div>
       <div class="field">
          <label for="Description" style="color: black" class="label">Description of accommodation</label>
          <input bind:value={description} class="input" id="description"type="text" placeholder="" name="description">
       </div>
    <div class="box">
      <label for="rules" style="color: black" class="label">House rules</label>
      <input  bind:value={rules} class="input" id="rules"type="text" placeholder="Enter any house rules" name="rules">
    </div>
    <div class="field">
          <label for="price" style="color: black" class="label">Price</label>
          <input bind:value={price} class="input" id="price" type="number" placeholder="Enter price per month" name="price">
    </div>
    <div class="field">
          <label for="available" style="color: black" class="label">Availability</label>
          <input bind:value={available} class="input" id="available" type="date" placeholder="" name="available">
    </div>
    <div class="field is-grouped">
      <button class="button is-link" style="background-color: rgb(49, 94, 124); ">Post Advert</button>
    </div>
    <div class="box">
      {message}
    </div>
  </form>