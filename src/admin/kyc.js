import React from 'react'
import Back from '../components/Arrow/backArrow'
function Kyc() {
	return (
		<div className="lg:w-2/3 lg:mx-auto  md:px-16 px-0 mt-12  flex flex-col">
      <div className="flex justify-between">
      <div className="mt-4 text-3xl">
      <Back url="user-organisation" />
      </div>
			<span className="text-center font-bold text-2xl mb-8 my-3 uppercase">Kyc Approved</span>
      </div>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                S.No.
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
                Adhar
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                PAN
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Agreement
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
               <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">1</div>
              </td>	
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
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Approved</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Disapproved</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Delete</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">View</a>

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

export default Kyc