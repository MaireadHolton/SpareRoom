<script>
    import {setContext} from "svelte";
    import {spareroomService} from "./services/spareRoom-service";
    import Main from "./routes/Main.svelte";
    import Login from "./routes/Login.svelte";
    import Advert from "./routes/Advert.svelte";
    import Post from "./routes/Post.svelte";
    import Signup from "./routes/Signup.svelte";
    import StudentDetail from "./routes/StudentDetail.svelte";
    import Report from "./routes/Report.svelte";
    import Router from "svelte-spa-router";
  
    setContext("spareroomService", new spareroomService("https://spareroom-hapi.onrender.com/"));
  
    let routes = {
      "/": Main,
      "/login": Login,
      "/advert": Advert,
      "/post/:id": Post,
      "/signup": Signup,
      "/studentDetail": StudentDetail,
      "/report": Report,
      "/logout": Main,
    }
  </script>
  
  <div class="container">
    <Router {routes}/>
  </div>
