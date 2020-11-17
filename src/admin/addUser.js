import React,{useState,useEffect} from 'react'
import TextInput from "../components/TextInput/TextInput";
import TextPassword from "../components/Password/Password";
import Loader from '../components/Loader/Loader.js'
// import axios from "axios";
import { useHistory } from "react-router-dom";
import axios from '../http-common';

function AddUser() {

  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gst_number, setGstNumber] = useState('')
  const [nature_of_business, setNatureOfBusiness] = useState('')
  const [street_address, setStreetAddress] = useState('')
  const [loader, setLoader] = useState(true);

  const validate = (value) => {
  const errors = {}

  if(!value.name)
  {
    errors.name="Name field is Required"
  }
  if(!value.address)
  {
    errors.address="address field is Required"

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
  if(!value.gst_number)
  {
    errors.gst_number="gst_number field is Required"

  }
   if(!value.nature_of_business)
  {
    errors.nature_of_business="nature_of_business field is Required"
  }
  if(!value.street_address)
  {
    errors.street_address="street_address field is Required"

  }
  return(errors);
} 
  const history = useHistory();


 useEffect(() => {

    new Promise((resolve) => {

        setTimeout(() => {
        setLoader(!loader);
        }, 1000)
    })
  }, [])

 const handleSubmit = (e) =>{
  
    e.preventDefault();
    const payload = {
      name:name,
      address:address,
      mobile:mobile,
      email:email,
      password:password,
      gst_number:gst_number,
      street_address:street_address,
      nature_of_business:nature_of_business

    }
    console.log(payload);
      let errors = validate(payload);
      setErrors(errors);

     axios.post('admin/addUser',payload).then((res)=>{
      // console.log("response",response.data);
      console.log("res",res);

      history.push("/user-organisation")
    }).catch(
        error => { console.log(error.response) }
    );
    

  
 }
	return (
    <>
    {loader ? 

      <Loader className="py-32"/> : 
		<div className="lg:w-1/3 lg:mx-auto w-full   flex flex-col">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Add User
          </h2>
        </div>
			<form onSubmit={handleSubmit}>
        <div className="mt-6">
          <TextInput
            id="name_of_organisation"
            labelText="Name Of Organisation"
            name="name_of_organisation"
            onChange={(e => setName(e.target.value))}
            value={name}
            invalid={errors.name}
            invalidText={errors.name}
            />
            </div>
             <div className="mt-6">
          <TextInput
            id="address"
            labelText="Address"
            name="address"
            onChange={(e => setAddress(e.target.value))}
            value={address}
            invalid={errors.address}
            invalidText={errors.address}
            />
            </div>
             <div className="mt-6">
          <TextInput
            id="gst_number"
            labelText="Gst Number"
            name="gst_number"
            onChange={(e => setGstNumber(e.target.value))}
            value={gst_number}
            invalid={errors.gst_number}
            invalidText={errors.gst_number}
            />
            </div>
             <div className="mt-6">
          <TextInput
            id="name_of_organisation"
            labelText="Street Address"
            name="street_address"
            onChange={(e => setStreetAddress(e.target.value))}
            value={street_address}
            invalid={errors.street_address}
            invalidText={errors.street_address}
            />
            </div> <div className="mt-6">
          <TextInput
            id="nature_of_business"
            labelText="Nature Of Business"
            name="nature_of_business"
            onChange={(e => setNatureOfBusiness(e.target.value))}
            value={nature_of_business}
            invalid={errors.nature_of_business}
            invalidText={errors.nature_of_business}
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

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
              Save
            </button>
            </div>
      </form>
		</div>}
    </>
	)
}

export default AddUser