import axios from "axios";


export const getUser = () => {
	const user = sessionStorage.getItem('token');
	if(user)
	{
		return user;
	} 
	else{
		return null;
	}
} 

export const  getToken = () => {
	return sessionStorage.getItem('token') || null ;
}

export const removeUser = () => {
	sessionStorage.removeItem('token');
} 

export const setToken = (token,user="") => {
	sessionStorage.setItem('token',token);
	 // axios.defaults.headers.common['authorization']=`Bearer ${token}`;
}


export const login=(email,password) =>{
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


