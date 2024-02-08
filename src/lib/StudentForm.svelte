<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import { push } from "svelte-spa-router";
  
  const dispatch = createEventDispatcher();

  const spareroomService = getContext("spareroomService");

  let firstName = "";
  let college = "";
  let year = "";
  let information = "";

  let message = "Please enter details to create your profile";


  async function studentDetail() {
    if (firstName && college && year) {
      const studentDetail = {
        firstName: firstName,
        college: college,
        year: year,
      };
      const success = await spareroomService.makestudentDetail(studentDetail);
      if (!success) {
        message = "Profile not created - some error occured";
       return; }
       message = `Thanks ${firstName} your profile was saved`;
       dispatch("message", {
      studentDetail: studentDetail,
      });
    } else {
      push ("/report")
      message = "Please fill all details to create a profile";
    }
}

</script>

<form on:submit|preventDefault={studentDetail}>
<div class="field">
  <input
    type="image"
    src="https://res.cloudinary.com/ddrhze6ov/image/upload/v1704630335/image_aspe84.png"
    alt="upload image"
    width="200"
    height="200"
  />
  <div class="field is-grouped, vertical-center">
    <button class="button is-link" style="background-color: rgb(49, 94, 124);"
      >Upload image</button
    >
  </div>
</div>
<div class="field is-horizontal"></div>
<div class="field">
  <label for="firstname" style="color: black" class="label">First Name</label>
  <input
    class="input"
    id="firstname"
    type="text"
    placeholder="Enter first name"
    name="firstName"
  />
</div>
<div class="field">
  <label for="college" style="color: black" class="label">College</label>
  <input
    class="input"
    id="college"
    type="text"
    placeholder="Enter college"
    name="college"
  />
</div>
<div class="field">
  <label for="year" style="color: black" class="label">Year of study</label>
  <input
    class="input"
    id="year"
    type="number"
    placeholder="Enter Year of study"
    name="year"
  />
</div>
<div class="box">
  <label for="information" style="color: black" class="label"
    >Relevant information</label
  >
  <input
    class="input"
    id="information"
    type="text"
    placeholder="Enter relevant information"
    name="information"
  />
</div>
<div class="field is-grouped, vertical-center">
  <button class="button is-link" style="background-color: rgb(49, 94, 124);"
    >Save profile</button
  >
</div>
</form>