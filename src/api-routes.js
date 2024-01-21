import { userApi } from "./api/users-api.js";
import { advertsApi } from "./api/adverts-api.js";
import { studentApi } from "./api/student-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/adverts", config: advertsApi.findAll},
  { method: "POST", path: "/api/{id}/adverts/", config: advertsApi.makeAdvert },
  { method: "DELETE", path: "/api/adverts", config: advertsApi.deleteAll },

  { method: "GET", path: "/api/student", config: studentApi.findAll},
  { method: "POST", path: "/api/{id}/student/", config: studentApi.makeStudent },
  { method: "DELETE", path: "/api/student", config: studentApi.deleteAll },
];