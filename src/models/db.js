import { userMongoStore } from "./user-mongo-store.js";
import { connectMongo } from "./connect.js";

export const db = {
  userStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};