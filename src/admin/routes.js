import React from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import AdminLogin from './adminLogin'
import Dashboard from './dashboard'
import UserOrganisation from './userOrg'
import Staff from './staff'
import Vendor from './vendor'
import AddUser from './addUser'
import Kyc from './kyc'
import Por from './por'
import PayIn from './payIn'
import AddStaff from './addStaff'

function Routes() {
	return (
		 <BrowserRouter>
      <div classname="w-full flex flex-row justify-between">
        <Dashboard />
      <Switch>
        <Route path="/user-organisation" component={UserOrganisation} />
        <Route path="/staff" component={Staff} />
        <Route path="/vendors" component={Vendor} />
        <Route path="/add-user" component={AddUser} />
        <Route path="/kyc" component={Kyc} />
        <Route path="/pay-out-request" component={Por} />
        <Route path="/pay-in" component={PayIn} />
        <Route path="/add-staff" component={AddStaff} />

      </Switch>
      </div>
    </BrowserRouter>
	)
}

export default Routes