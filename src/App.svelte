<script>
    import {setContext} from "svelte";
    import {spareroomService} from "./services/spareRoom-service";
    import Main from "./routes/Main.svelte";
    import Login from "./routes/Login.svelte";
    import Advert from "./routes/Advert.svelte";
    import Signup from "./routes/Signup.svelte";
    import StudentDetail from "./routes/StudentDetail.svelte";
    import Report from "./routes/Report.svelte";
    import Router from "svelte-spa-router";
    import Map from "./routes/Map.svelte";
  
    setContext("spareroomService", new spareroomService("http://localhost:4000"));
  
    let routes = {
      "/main": Main,
      "/login": Login,
      "/advert": Advert,
      "/signup": Signup,
      "/studentDetail": StudentDetail,
      "/report": Report,
      "/logout": Main,
      "/map" : Map,
    }
  </script>
  
  <div class="container">
    <Router {routes}/>
  </div>