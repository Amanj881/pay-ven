import React from 'react'
import Login from './index'
import Terms from './t&c'
import Dash from './userDashboard'
import Vendor from './vendor'
import AddVendor from './addVendor'

import { BrowserRouter, Route, Link,Switch } from "react-router-dom";

function Routes() {
	return (
		<BrowserRouter>

		<Dash />
			<Switch>
			<Route path="/" exact component={Vendor} />
			<Route path="/terms-conditions" exact component={Terms} />
			<Route path="/vendors" exact component={Vendor} />
			<Route path="/dashboard" exact component={Dash} />
			<Route path="/add-vendor" exact component={AddVendor} />

			</Switch>
		</BrowserRouter>
	)
}

export default Routes