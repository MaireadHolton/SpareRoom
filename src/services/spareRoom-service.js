// @ts-nocheck
import axios from "axios";
import { user } from "../stores";

export class spareroomService {

  constructor(baseUrl) {
    
    this.baseUrl = "http://localhost:3000";

    console.log(this.baseUrl);
    const spareroomCredentials = localStorage.spareRoom;
    if (spareroomCredentials) {
      const savedUser = JSON.parse(spareroomCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
        role: savedUser.role,
      });
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + savedUser.token;
    }
  }

 

  async login(email, password) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/users/authenticate`,
        { email, password }
      );

        console.log('Login response:' + response);

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.token;

      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
          role: response.data.role,
        });
        localStorage.spareRoom = JSON.stringify({
          email: email,
          token: response.data.token,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("spareRoom");
  }

  async signup(firstName, lastName, email, password, role) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role
      };
      await axios.post(`${this.baseUrl}/api/users`, userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getUserRole() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/users/role`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      return response.data.role;
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  }

  reload() {
    const spareroomCredentials = localStorage.spareRoom;
    if (spareroomCredentials) {
      const savedUser = JSON.parse(spareroomCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
        role: savedUser.role,
      });
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + savedUser.token;
    }
  }

  async makeAdvert(advert) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/${advert}/adverts`,
      advert
      );
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getAdverts() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/adverts`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async makeStudentDetail(studentDetail) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/ ${studentDetail}/student`,
        studentDetail
      );
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getStudentDetails() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/student`);
      return response.data;
    } catch (error) {
      return [];
    }
  }
};
