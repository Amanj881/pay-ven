import React from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";

function Dashboard({options,DashName}) {

	const menu = options.map((option,index)=>{
		return(		
			<li key={index} className="list-none items-center"><Link to={option.url} className="text-pink-800 hover:text-pink-600 text-lg uppercase py-3 font-bold block">{option.label}</Link></li>
			)
	})
	return (
		<nav className=" md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
			<div className="font-bold pb-8">
			<h1 className="text-2xl">{DashName}</h1>
				<ul className="py-4 md:flex-col md:min-w-full flex flex-col list-none">{menu}
				</ul>
			</div>	
			
		</nav>
	)
}

export default Dashboard