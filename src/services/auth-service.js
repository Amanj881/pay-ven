import axios from "axios";
import { useHistory } from "react-router-dom";

const API_URL = "https://bestowinfotech.com/payVendor-backend/public/api/admin/";
const API_USERURL = "https://bestowinfotech.com/payVendor-backend/public/api/user/";

class AuthService {
  login(email,password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
      	console.log(response)
        if (response.data.access_token) {
          sessionStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
 userLogin(email,password) {
    return axios
      .post(API_USERURL + "login", {
        email,
        password
      })
      .then(response => {
        console.log(response)
        if (response.data.access_token) {
          sessionStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    sessionStorage.removeItem("user");
  }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));;
  }
}

export default new AuthService();