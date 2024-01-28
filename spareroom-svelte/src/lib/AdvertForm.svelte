<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import AdvertList from "./AdvertList.svelte";
  
  const dispatch = createEventDispatcher();

  const spareroomService = getContext("spareroomService");

  let firstName = "";
  let college = "";
  let description = "";
  let rules = "";
  let price = 0;
  let available = "";
  let AdvertList = [];

  let message = "Please enter details to post an advert";

  onMount(async () => {
    AdvertList = await spareroomService.getAdverts()
  });

  async function advert() {
    if (firstName && college && description && price && available) {
      const advert = {
        firstName: firstName,
        college: college,
        price: price,
        available: available
      };
      const success = await spareroomService.makeAdvert(advert);
      if (!success) {
        message = "Advert not created - some error occured";
       return; }
       message = `Thanks ${firstName} your advert was posted`;
    } else {
      message = "Please fill all details to post an advert";
    }
}
</script>

<form on:submit|preventDefault={advert}>
<div class="field">
      <input type="image" src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704630335/image_aspe84.png" alt="upload image" width="200" height="200">
      <div class="field is-grouped, vertical-center">
        <button class="button is-link" style="background-color: rgb(49, 94, 124);">Upload image</button>
      </div>
    </div>
  <div id="map" style="height:500px;width:500px; color:#9E9E9E"></div>
  <div class="field is-horizontal"></div>
      <div class="field">
          <label for="firstname" style="color: black" class="label">Homeowner Name</label>
          <input class="input" id="firstname" type="text" placeholder="Enter first name" name="firstName">
      </div>
      <div class="field">
          <label for="college" style="color: black" class="label">College Nearby</label>
          <input class="input" id="college" type="text" placeholder="Enter college" name="college">
       </div>
       <div class="field">
          <label for="Description" style="color: black" class="label">Description of accommodation</label>
          <input class="input" id="description"type="text" placeholder="" name="description">
       </div>
    <div class="box">
      <label for="rules" style="color: black" class="label">House rules</label>
      <input class="input" id="rules"type="text" placeholder="Enter any house rules" name="rules">
    </div>
    <div class="field">
          <label for="price" style="color: black" class="label">Price</label>
          <input class="input" id="price" type="number" placeholder="Enter price per month" name="price">
    </div>
    <div class="field">
          <label for="available" style="color: black" class="label">Availability</label>
          <input class="input" id="available" type="date" placeholder="" name="available">
    </div>
    <div class="field is-grouped">
      <button class="button is-link" style="background-color: rgb(49, 94, 124);">Post Advert</button>
    </div>
    <div class="box">
      {message}
    </div>
  </form>