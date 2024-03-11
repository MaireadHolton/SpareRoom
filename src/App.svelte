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
  
    setContext("spareroomService", new spareroomService("http://localhost:3000"));
  
    let routes = {
      "/": Main,
      "/login": Login,
      "/advert": Advert,
      "/signup": Signup,
      "/studentDetail": StudentDetail,
      "/report": Report,
      "/logout": Main,
    }
  </script>
  
  <div class="container">
    <Router {routes}/>
  </div>