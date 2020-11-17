import React from 'react'
import Dash from '../components/Dashboard/Dashboard'

function Dashboard() {

  const options = [

  //  {
  //   label:"Dashboard",
  //   value:"dashboard",
  //   url:"/admin-dashboard"
  // },
  {
    label:"User/Organization",
    value:"user-organisation",
    url:"/user-organisation"
  },
  {
    label:"Vendors",
    value:"vendors",
    url:"/vendors"
  },
  {
    label:"Staff",
    value:"staff",
    url:"/staff"
  },
  {
    label:"Payment Setup",
    value:"payment-setup",
    url:""
  },

  ]
	return (
		<div>
      <Dash options={options} DashName="Admin Dashboard"/> 
    </div>
	)
}

export default Dashboard