import React,{useState} from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Avatar from 'react-avatar';

function Dashboard({options,DashName}) {
	const [dropdownOpen, setDropDownOpen] = useState(false)
  
  	const history = useHistory();

	

	const menu = options.map((option,index)=>{
		return(		

			 <span className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"  key={index}>
                    {option.svg}
    
                    <Link to={option.url} className="hover:text-gray-500"><span className="mx-3">{option.label}</span>
               </Link></span>

			)
	})
	return (
		<div className="flex bg-red-800 w-1/2 ">
		  <div x-data="{ sidebarOpen: false }" className="flex  bg-gray-200 ">
        <div className="sidebarOpen ? 'block' : 'hidden'" click="sidebarOpen = false" className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
    
        <div className="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" className="rounded-lg lg:fixed lg:block hidden z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                  
                    
                    <span className="text-white text-2xl mx-2 font-semibold">Dashboard</span>
                </div>
            </div>
            <nav className="mt-10">
               <span className="mx-3">{menu}</span>
            </nav>
            </div>
            </div>
           

		</div>
		
	)
}

export default Dashboard