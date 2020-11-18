import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from '../http-common';
import Table from "../components/Table/Table.js";
import Loader from '../components/Loader/Loader.js'

function Staff() {

const [data, setData] = useState()
const [loading, setLoading] = useState(true)

 useEffect(() => {
     getStaff()
  }, [])

 const Schema = {
  "Id":"",
  "Name": "",
  "Email": "",
  "Mobile":"",
  "Password":"",
  "Login":"",
 
  }

 const getStaff = async () => {
     await axios.get('/admin/getStaff').then((result) => {
      let res = result.data.map((e)=>{
       return{ 
               Id:e.id,
               Name:e.name,
               Mobile:e.mobile,
               Email:e.email,
               Password:e.password,
               Login:e.last_login_at,

             }
      })
     
      setData(res);
      setLoading(false)
    })

  }

	return (
    <>
    {loading ? 

      <Loader className="py-32"/>: <div className=" lg:mx-auto px-0 md:px-16 px-0 w-full  mt-12  flex flex-col ">
        <Link to="/add-staff" className=" w-32 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">ADD STAFF   </Link>
    <div className="-my-2 overflow-x-auto  mt-4">
    <Table headers={Object.keys(Schema)} rows={data} />

  </div>
</div>}
		</>
	)
}

export default Staff