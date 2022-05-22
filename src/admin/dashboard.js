import React from 'react'
import Dash from '../components/Dashboard/Dashboard'
import { AiOutlineUser } from 'react-icons/ai';
import { GiVendingMachine } from 'react-icons/gi';
import { BiGroup } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { RiDashboard3Line } from 'react-icons/ri';


function Dashboard() {

  const options = [

   {
    label:"Dashboard",
    value:"dashboard",
    url:"/admin-dashboard",
    svg:<RiDashboard3Line size={30}/>
   
  },
  {
    label:"User/Organization",
    value:"user-organisation",
    url:"/user-organisation",
     svg:<AiOutlineUser size={30}/>
  },
  {
    label:"Vendors",
    value:"vendors",
    url:"/vendors",
    svg:<GiVendingMachine  size={30}/>
  },
  {
    label:"Staff",
    value:"staff",
    url:"/staff",
    svg:<BiGroup size={30}/>
  },
  {
    label:"Payment Setup",
    value:"payment-setup",
    url:"",
    svg:<MdPayment size={30}/>
  },

  ]
	return (
		<div className="w-1/6">
      <Dash options={options} DashName="Admin Dashboard"/> 
      
    </div>
	)
}

export default Dashboard