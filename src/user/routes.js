import React,{lazy,Suspense} from 'react'
import Login from './index'
import Terms from './t&c'
import Dash from './userDashboard'
import Vendor from './vendor'
import AddVendor from './addVendor'
import PayoutRequest from './payoutRequest'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import AddRequest from './addRequest'
import NotFound from '../components/notFound'
import PublicRoute from '../services/PublicRoute'
import AdminLogin from '../admin/adminLogin'

function Routes() {

	
	return (
		<BrowserRouter basename={'/reactest'}>
		
			<Switch>
			<Route path="/" exact component={Login} />
			 <Route path="/admin-login"  component={AdminLogin}/>
			<PublicRoute path="/vendors" exact component={Vendor} />
			<PublicRoute path="/dashboard" exact component={Dash} />
			<PublicRoute path="/add-vendor" exact component={AddVendor} />
			<PublicRoute path="/" exact component={Vendor} />
			<PublicRoute path="/terms-conditions" exact component={Terms} />
			<PublicRoute path="/payout-request" exact component={PayoutRequest} />
			<PublicRoute path="/add-request" exact component={AddRequest} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes