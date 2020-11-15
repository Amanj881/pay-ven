import React from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {removeUser} from '../../utils/Common';
import Avatar from 'react-avatar';

function Dashboard({options,DashName}) {
  
  	const history = useHistory();

	 const logout = () => {
  		removeUser();
   		history.push('/admin-login');
}

	const menu = options.map((option,index)=>{
		return(		
			<li key={index} className="list-none items-center"><Link to={option.url} className="text-pink-800 hover:text-pink-600 text-lg uppercase py-3 font-bold block">{option.label}</Link></li>
			)
	})
	return (
		<div className="flex">
		<nav className=" md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
			<div className="font-bold pb-8">
			<h1 className="text-2xl">{DashName}</h1>
				<ul className="py-4 md:flex-col md:min-w-full flex flex-col list-none">{menu}
				</ul>
			</div>	
			 <div className="font-bold pb-8">
        <Avatar  name="LawShastra Journal" size="50" round={true} className="mr-2"/>

        <label className="cursor-pointer text-red-800"  onClick={logout}>Logout </label>
        </div>
		</nav>
		</div>
	)
}

export default Dashboard