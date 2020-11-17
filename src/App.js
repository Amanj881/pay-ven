import React,{Suspense,lazy} from 'react'

import './App.css';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Login from './user/index'
import Terms from './user/t&c'
import Dash from './user/userDashboard'
import Vendor from './user/vendor'
import AddVendor from './user/addVendor'
import PayoutRequest from './user/payoutRequest'
import AddRequest from './user/addRequest'
import NotFound from './components/notFound'
import PublicRoute from './services/PublicRoute'
import AdminLogin from './admin/adminLogin'
import Dashboard from './admin/dashboard'
import UserOrganisation from './admin/userOrg'
import Staff from './admin/staff'
import AdminVendor from './admin/vendor'
import AddUser from './admin/addUser'
import Kyc from './admin/kyc'
import Por from './admin/por'
import PayIn from './admin/payIn'
import AddStaff from './admin/addStaff'
import PrivateRoute from './services/PrivateRoute'

function App() {
  return (
    <BrowserRouter basename={'/reactest/'} >
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin-login"  component={AdminLogin}/>
        <PrivateRoute path="/user-organisation" component={UserOrganisation} />
        <PrivateRoute path="/staff" component={Staff} />
        <PrivateRoute path="/vendors" component={AdminVendor} />
        <PrivateRoute path="/add-user" component={AddUser} />
        <PrivateRoute path="/kyc" component={Kyc} />
        <PrivateRoute path="/pay-out-request" component={Por} />
        <PrivateRoute path="/pay-in" component={PayIn} />
        <PrivateRoute path="/add-staff" component={AddStaff} />
        <PrivateRoute path="/admin-dashboard" component={Dashboard} />
    		<PublicRoute path="/vendors" exact component={Vendor} />
    		<PublicRoute path="/user-dashboard" exact component={Dash} />
    		<PublicRoute path="/add-vendor" exact component={AddVendor} />
    		<PublicRoute path="/" exact component={Vendor} />
    		<PublicRoute path="/terms-conditions" exact component={Terms} />
    		<PublicRoute path="/payout-request" exact component={PayoutRequest} />
    		<PublicRoute path="/add-request" exact component={AddRequest} />
            <PublicRoute path="/user-vendors" component={Vendor} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
