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
function Routes() {

	
	return (
		<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>

		<Dash />
			<Switch>
			<Route path="/" exact component={Vendor} />
			<Route path="/terms-conditions" exact component={Terms} />
			<Route path="/vendors" exact component={Vendor} />
			<Route path="/dashboard" exact component={Dash} />
			<Route path="/add-vendor" exact component={AddVendor} />
			<Route path="/payout-request" exact component={PayoutRequest} />
			<Route path="/add-request" exact component={AddRequest} />
			<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
		</Suspense>
	)
}

export default Routes