import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/';

class UserService {
 

  getUserBoard() {
    return axios.get(API_URL + 'user/getUser', { headers: authHeader() });
  }


  getAdminBoard() {
    return axios.get(API_URL + 'admin/getUser', { headers: authHeader() });
  }
}

export default new UserService();