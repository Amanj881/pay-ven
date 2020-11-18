import React,{useState} from 'react'
import TextInput from "../components/TextInput/TextInput";
import TextPassword from "../components/Password/Password";
import swal from 'sweetalert'
import axios from '../http-common';
import { useHistory } from "react-router-dom";

function AddStaff() {

  const history = useHistory();

  const validate = (value) => {
  const errors = {}

  if(!value.name)
  {
    errors.name="Name field is Required"
  }
  
   if(!value.mobile)
  {
    errors.mobile="mobile field is Required"
  }
  if(!value.email)
  {
    errors.email="email field is Required"

  }
   if(!value.password)
  {
    errors.password="password field is Required"
  }
 
  return(errors);
} 
   const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState(true);

  const handleSubmit = (e) => {
   e.preventDefault();
    const payload = {
      name:name,
      mobile:mobile,
      email:email,
      password:password,

    }
     let errors = validate(payload);
      setErrors(errors);

     axios.post('admin/addStaff',payload).then((res)=>{
      swal({
          title: "Done!",
          text: "User is added to database",
          icon: "success",
          timer: 2000,
          button: false
        })

      history.push("/staff")
    }).catch(
        error => { console.log(error.response) }
    );
    
  }

	return (
		<div class="lg:w-1/3 lg:mx-auto w-full  mt-12  flex flex-col">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Add User
          </h2>
        </div>
    <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <TextInput
            id="name"
            labelText="Name"
            name="name"
            onChange={(e => setName(e.target.value))}
            value={name}
            invalid={errors.name}
            invalidText={errors.name}
            />
            </div>
            
         
            <div className="mt-6">
          <TextInput
            id="mobile"
            labelText="Mobile"
            name="mobile"
            onChange={(e => setMobile(e.target.value))}
            value={mobile}
            invalid={errors.mobile}
            invalidText={errors.mobile}
            />
            </div>  
            <div className="mt-6">
          <TextInput
            id="email"
            labelText="Email"
            name="email"
            onChange={(e => setEmail(e.target.value))}
            value={email}
            invalid={errors.email}
            invalidText={errors.email}
            />
            </div> 
            <div className="mt-6">
          <TextPassword
            id="password"
            labelText="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            name="password"
            autoComplete="new-password"
            invalid={errors.password}
            invalidText={errors.password}

                />
            </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 ">
            <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
              Save
            </button>
            </div>
      </form>
      </div>
	)
}

export default AddStaff