//Spareroom-Service.js
import axios from "axios";
import { user } from "../stores";

export class spareroomService {

  constructor(baseUrl) {
    
    this.baseUrl = "https://spareroom-hapi.onrender.com";
    this.setupAuthorizationHeader();
  }

    setupAuthorizationHeader() {
      const spareroomCredentials = localStorage.spareRoom;
      if (spareroomCredentials) {
        const savedUser = JSON.parse(spareroomCredentials);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + savedUser.token;
      }
    }

    updateAxiosHeaders(token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    async login(email, password) {
      try {
        const response = await axios.post(
          `${this.baseUrl}/api/users/authenticate`,
          { email, password }
        );
  
        console.log('Login response:', response);
  
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
          this.updateAxiosHeaders(response.data.token);
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
        role: "",
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
          role: role,
        };
        await axios.post(`${this.baseUrl}/api/users`, userDetails);
        return true;
      } catch (error) {
        return false;
      }
    }
  
    reload() {
      this.setupAuthorizationHeader();
    }
  
    async makeAdvert(advert) {
      try {
        const response = await axios.post(`${this.baseUrl}/api/advert`, advert);
        return response.status === 200;
      } catch (error) {
        return false;
      }
    }
  
    async getAdverts() {
      try {
        const response = await axios.get(`${this.baseUrl}/api/advert`);
        return response.data;
      } catch (error) {
        return [];
      }
    }

    async getAdvertById(AdvertId) {
      try {
        const response = await axios.get(`${this.baseUrl}/api/advert/${AdvertId}`)
        return response.data;
      } catch (error) {
        return [];
      }
    }
  
    async makeStudentDetail(studentDetail) {
      try {
        const response = await axios.post(
          `${this.baseUrl}/api/student`,
          studentDetail
        );
        return response.status === 200;
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
  }
