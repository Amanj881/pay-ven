import React from 'react'

function AddUser() {
	return (
		<div class="lg:w-1/3 lg:mx-auto w-full  mt-12  flex flex-col">
			<div className="col-span-6 my-2">
                <label for="name_of_organisation" className="block text-sm font-medium leading-5 text-gray-700">Name Of Organisation </label>
                <input 
                id="name_of_organisation" 
                className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2">
                <label for="address" className="block text-sm font-medium leading-5 text-gray-700">Address</label>
                <input 
                id="address" 
                className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2">
                <label for="gst_number" className="block text-sm font-medium leading-5 text-gray-700">Gst Number</label>
                <input 
                id="gst_number" 
                className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2">
                <label for="street_address" className="block text-sm font-medium leading-5 text-gray-700">Street address</label>
                <input id="street_address" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2">
                <label for="nature_of_business" className="block text-sm font-medium leading-5 text-gray-700">Nature Of Business</label>
                <input id="nature_of_business" 
                className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2 ">
                <label for="mobile" className="block text-sm font-medium leading-5 text-gray-700">Mobile</label>
                <input id="mobile" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2">
                <label for="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                <input id="email" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="col-span-6 my-2">
                <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                <input id="password" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-blue-300 rounded h-8"/>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
              Save
            </button>
            </div>
		</div>
	)
}

export default AddUser