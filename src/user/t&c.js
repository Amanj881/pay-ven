import React,{useState} from 'react'
import Modal from '../components/Modal/modal' 
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";

function TermsConditions() {

	const [modal, setCloseModal] = useState(true)
	const [checked, setUnChecked] = useState(false)
	console.log(checked)
	return (
		<div className="mt-12 pb-8 rounded">
		{modal && 
		<Modal setCloseModal={setCloseModal} modal={modal}>
			<span className="text-xl font-bold ">AGREEMENT TO TERMS</span><br /><br/>
			<span className="text-lg text-right ">
			These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and [business entity name] (“we,” “us” or “our”), concerning your access to and use of the [website name.com] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
			<br/><br/>

			You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.

			Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason.

			We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.

			It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted.

			The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.

			Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.

			These terms and conditions were generated by Termly’s Terms and Conditions Generator.

			Option 1: The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to register for the Site.

			Option 2: [The Site is intended for users who are at least 13 years of age.] All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms and Conditions prior to you using the Site.
			</span>
			<div className="text-justify py-12">
				<input type="checkbox" onClick={()=>setUnChecked(!checked)}/>
				<span className="font-semibold mx-6">
				 	Accept All The Terms & Conditions.
				</span>
				
			</div>
			{checked && <Link to="/" className="px-12 py-2 shadow-xl float-right  rounded-lg border-2 hover:border-teal-400 text-gray-800 shadow-xs" >
							<span className="text-xl font-bold ">Next</span> </Link>	}
		</Modal>}
		</div>
	)
}

export default TermsConditions