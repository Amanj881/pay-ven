import React,{useState} from 'react'
import {Link} from "react-router-dom";
function UserOrg() {

  const [modalOpen, setModalClose] = useState(true)
	return (
		
<div className="lg:w-2/3 lg:mx-auto  md:px-16 px-0  mt-12  flex flex-col">
   <ul className=" flex  flex-wrap  py-1 text-gray-500 text-sm lg:text-base space-x-1"
    >
      <li className="py-4">
        <Link to="/add-user" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs">ADD STAFF  </Link>
      </li >
      <li className="py-4">
        <Link to="/kyc" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">Kyc Approved  </Link>
      </li >
      <li className="py-4">
        <Link to="/pay-out-request" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">Pay Out Request</Link>
      </li> 
       <li className="py-4">
        <Link to="/pay-in" className="p-2 mx-2 rounded-lg border-2 border-teal-400 text-gray-800 shadow-xs uppercase">Pay in</Link>
      </li>              
  </ul>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">

    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                S.No
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Organisation
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Wallet Amount
              </th>
              
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                <div className="text-sm leading-5 text-gray-500">Optimization</div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
              </td>

              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">KYC Approved</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Delete</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">View KYC</a>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

	)
}

export default UserOrg