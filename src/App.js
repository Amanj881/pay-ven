import React,{Suspense,lazy} from 'react'

import './App.css';
import { HashRouter, Route, Link,Switch } from "react-router-dom";
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
    <HashRouter basename={'/reactest/'} >
      <Switch>
        <Route path="/admin-login" exact  component={AdminLogin}/>
        <PrivateRoute path="/user-organisation" exact component={UserOrganisation} />
        <PrivateRoute path="/staff"exact  component={Staff} />
        <PrivateRoute path="/vendors" exact component={AdminVendor} />
        <PrivateRoute path="/add-user"exact  component={AddUser} />
        <PrivateRoute path="/kyc" exact component={Kyc} />
        <PrivateRoute path="/pay-out-request"exact  component={Por} />
        <PrivateRoute path="/pay-in" exact component={PayIn} />
        <PrivateRoute path="/add-staff"exact  component={AddStaff} />
        <PrivateRoute path="/admin-dashboard" exact component={Dashboard} />
        </Switch>
        <Switch>
                <Route path="/" exact component={Login} />

    		<PublicRoute path="/vendors" exact component={Vendor} />
    		<PublicRoute path="/user-dashboard" exact component={Dash} />
    		<PublicRoute path="user/add-vendor" exact component={AddVendor} />
    		<PublicRoute path="/" exact component={Vendor} />
    		<PublicRoute path="/terms-conditions" exact component={Terms} />
    		<PublicRoute path="/user/payout-request" exact component={PayoutRequest} />
    		<PublicRoute path="/user/add-request" exact component={AddRequest} />
            <PublicRoute path="/user-vendors" component={Vendor} />

      </Switch>
    </HashRouter>
  );
}

export default App;
