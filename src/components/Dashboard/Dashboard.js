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
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
    
                    <Link to={option.url} className="hover:text-gray-500"><span className="mx-3">{option.label}</span>
               </Link></span>

			)
	})
	return (
		<div className="flex bg-red-800 w-1/2 ">
		  <div x-data="{ sidebarOpen: false }" className="flex h-screen bg-gray-200 h-12 ">
        <div className="sidebarOpen ? 'block' : 'hidden'" click="sidebarOpen = false" className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
    
        <div className="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" className="lg:fixed lg:block hidden z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <svg className="h-12 w-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                    </svg>
                    
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