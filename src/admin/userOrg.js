import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
// import axios from '../http-common';
import Table from "../components/Table/Table.js";
import UserService from "../services/user-service";
import Header from '../components/header'

function UserOrg() {

  const [data, setData] = useState();

  useEffect(() => {
     getUser()
  }, [])

const Schema = {
  "Id":"",
  "Organisation": "",
  "Type": "",
  "Mobile":"",
  "Email":"",
  "Wallet Amount":"",
  "Actions":""
  }
    const getUser = () => {
     UserService.getAdminBoard().then((result) => {
      let res = result.data.map((e)=>{
       return{ 
                Id:e.id,
               Organisation:e.name,
               Type:e.name,
               Mobile:e.mobile,
               Email:e.email,
               WalletAmount:0,
               file:e.file,
               Actions:(
                <div className="flex w-full">
                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4">KYC Approved</Link>
                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Delete</Link>
                <Link to="#" className="text-indigo-600 hover:text-indigo-900 mr-4">View KYC</Link>
                </div>
                )
             }
      })
     
      setData(res);
    })

  }

  

	return (

<div className="lg:mx-auto  md:px-16 py-6">
   <ul className=" flex  flex-wrap  py-1 text-gray-500 text-sm lg:text-base space-x-1"
    >
      <li className="py-4">
        <Link to="/add-user" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">ADD user  </Link>
      </li >
      <li className="py-4">
        <Link to="/kyc" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">Kyc Approved  </Link>
      </li >
      <li className="py-4">
        <Link to="/pay-out-request" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">Pay Out Request</Link>
      </li> 
       <li className="py-4">
        <Link to="/pay-in" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">Pay in</Link>
      </li>              
  </ul>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
    <Table headers={Object.keys(Schema)} rows={data} />

  </div>
</div>

	)
}

export default UserOrg