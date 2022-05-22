import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://bestowinfotech.com/payVendor-backend/public/api/';

class UserService {
 

  getUserBoard() {
    return axios.get(API_URL + 'user/getUser', { headers: authHeader() });
  }


  getAdminBoard() {
    return axios.get(API_URL + 'admin/getUser', { headers: authHeader() });
  }

  // getStaffBoard() {
  //   return axios.get(API_URL + 'admin/getStaff', { headers: authHeader() });
  // }
}

export default new UserService();