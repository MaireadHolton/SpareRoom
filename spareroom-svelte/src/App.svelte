<script>
    import {setContext} from "svelte";
    import {spareroomService} from "./services/spareRoom-service";
    import Main from "./routes/Main.svelte";
    import Login from "./routes/Login.svelte";
    import Advert from "./routes/Advert.svelte";
    import StudentSignup from "./routes/StudentSignup.svelte";
    import HomeownerSignup from "./routes/HomeownerSignup.svelte";
    import StudentDetail from "./routes/StudentDetail.svelte";
    import Report from "./routes/Report.svelte";
    //import Map from "./pages/Map.svelte";
    import Router from "svelte-spa-router";
  
    setContext("spareroomService", new spareroomService("http://localhost:4000"));
  
    let routes = {
      "/": Main,
      "/login": Login,
      "/studentSignup": StudentSignup,
      "/advert": Advert,
      "/homeownerSignup": HomeownerSignup,
      "/studentDetail": StudentDetail,
      "/report": Report,
      //"/map": Map,
      "/logout": Main
    }
  </script>
  
  <div class="container">
    <Router {routes}/>
  </div>