import React from 'react'
import Dash from '../components/Dashboard/Dashboard'
import Vendor from './vendor'

function UserDashboard() {

	const options = [
	{
		value:"vendor",
		label:"Vendor",
		url:"/vendors"
	},
	{
		label:"Pay Request",
		value:"pay request",
		url:'/payout-request'
	}
	]
	return (
		<div>
			<Dash options={options} DashName="User Dashboard"/>
		</div>
	)
}

export default UserDashboard