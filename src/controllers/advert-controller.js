export const advertController = {
    index: {
      handler: async function (request, h) {
        //const loggedInUser = request.auth.credentials;
        return h.view("Advert", { title: "Make an advert", /*user: loggedInUser */});
      },
    },
    report: {
      handler: async function (request, h) {
        //const loggedInUser = request.auth.credentials;
        return h.view("Report", {
          title: "Adverts to Date",
          user: loggedInUser,
        });
      },
    },
    advert: {
      handler: async function (request, h) {
        try {
          //const loggedInUser = request.auth.credentials;
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
    profile: {
      handler: async function (request, h) {
        try {
          //const loggedInUser = request.auth.credentials;
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
    profileHome: {
      handler: async function (request, h) {
        try {
          //const loggedInUser = request.auth.credentials;
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };