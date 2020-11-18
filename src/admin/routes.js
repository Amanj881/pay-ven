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
import PrivateRoute from '../services/PrivateRoute'

function Routes() {
	return (
		 <BrowserRouter basename={'/reactest/'} >
      
      <Switch>
        <Route path="/admin-login"  component={AdminLogin}/>
        <PrivateRoute path="/user-organisation" component={UserOrganisation} />
        <PrivateRoute path="/staff" component={Staff} />
        <PrivateRoute path="/vendors" component={Vendor} />
        <PrivateRoute path="/add-user" component={AddUser} />
        <PrivateRoute path="/kyc" component={Kyc} />
        <PrivateRoute path="/pay-out-request" component={Por} />
        <PrivateRoute path="/pay-in" component={PayIn} />
        <PrivateRoute path="/add-staff" component={AddStaff} />
        <PrivateRoute path="/admin-dashboard" component={Dashboard} />

      </Switch>
    </BrowserRouter>
	)
}

export default Routes