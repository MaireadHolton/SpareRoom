import { userMongoStore } from "./user-mongo-store.js";
import { connectMongo } from "./connect.js";
import { advertMongoStore } from "./advert-mongo-store.js";
import { studentMongoStore } from "./student-mongo-store.js";

export const db = {
  userStore: null,
  advertStore:null,
  studentStore:null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.advertStore = advertMongoStore;
        this.studentStore = studentMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};