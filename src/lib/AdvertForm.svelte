<script>
  import { createEventDispatcher, getContext } from "svelte";
  import { push } from "svelte-spa-router";
  import Map from "./AdvertMap.svelte";
  import { markerLocation } from "../stores";
  import app from "../firebase";
  import { getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage"

  
  const dispatch = createEventDispatcher();
  const spareroomService = getContext("spareroomService");
  const storage = getStorage(app);

  let firstName = "";
  let contactEmail = "";
  let college = "";
  let description = "";
  let rules = "";
  let price = 0;
  let available = "";
  let img = null;
  let message = "Please enter details to post an advert";

  function handleDateChange(event) {
    available = event.target.value;
    console.log('Selected date:', available);
    return available;
  }

  function handleLocationSelected(event) {
    markerLocation.set(event.detail);
    console.log("Location: ", markerLocation);
    return markerLocation;
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      img = file;
    }
  }

  async function uploadImage() {
    if (img) {
      const imageName = Date.now() + '_' + img.name;
      const storageRef = ref(storage, 'images/' + imageName);
      await uploadBytes(storageRef, img);
      const imageUrl = await getDownloadURL(storageRef);
      return imageUrl;
    }
    return null;
  }

  async function makeAdvert() {
    const { lat, lng}  = $markerLocation;
    const imageUrl = await uploadImage(); 
    if (firstName && contactEmail && college && description && lat && lng && rules && price && available && img) {
        const advert = {
          firstName: firstName,
          contactEmail: contactEmail,
          college: college,
          description: description,
          lat: lat,
          lng: lng,
          rules: rules,
          price: price,
          available: available,
          img: imageUrl,
        };

      const success = await spareroomService.makeAdvert(advert);

if (!success) {
  message = "Advert not created - some error occurred";
  return;
}

message = `Thanks ${firstName} your advert was posted`;
dispatch("message", { advert });
} else {
push("/report");
message = "Please fill all details to post an advert";
}
}
</script>

<form on:submit|preventDefault={makeAdvert}>
<div class="field" style="text-align: center;">
      <input type="file" id="img" accept="image/*" on:change={handleImageChange}>
      <div class="field is-grouped, vertical-center">
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
      <div class="field is-horizontal"></div>
      <div class="field">
          <label for="contactEmail" style="color: black" class="label">Contact Email</label>
          <input bind:value={contactEmail} class="input" id="contactEmail" type="text" placeholder="Enter a contact email" name="contactEmail">
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
          <input bind:value={available} on:change={handleDateChange} class="input" id="available" type="date" placeholder="" name="available">
    </div> 
    <div class="field is-grouped">
      <button class="button is-link" style="background-color: rgb(49, 94, 124); ">Post Advert</button>
    </div>
    <div class="box">
      {message}
    </div>
  </form>