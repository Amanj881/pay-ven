import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/admin",
   headers: {
        'Content-Type': 'application/json'
    },
 
});