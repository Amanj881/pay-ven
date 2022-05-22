import axios from "axios";

export default axios.create({
  baseURL: "https://bestowinfotech.com/payVendor-backend/public/api",
   headers: {
        'Content-Type': 'application/json',
        
    },


 
});