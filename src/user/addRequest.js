import React,{useState,useEffect} from 'react'
import TextInput from "../components/TextInput/TextInput";
import Btn from '../components/Button/Button';
import axios from '../http-common';
import Select from '../components/SelectInput/SelectInput'
import Loader from '../components/Loader/Loader.js'
import Upload from '../components/UploadFile/UploadFile'
import {Link,useHistory} from "react-router-dom";

function AddRequest({label}) {

const history = useHistory();
const validate = (value) => {
  const errors = {}

  if(!value.issue)
  {
    errors.issue="Issue field is Required"
  }
  if(!value.vendor)
  {
    errors.vendor="vendor field is Required"

  }
  return(errors);
} 

const [issue,setIssue] = useState('');
const [vendor,setvendor] = useState('');
const [loader, setLoader] = useState(true);
const [filePath, setFilePath] = useState([]);
const [errors, setErrors] = useState({})
const [ data, setData] = useState(null);
const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {

    new Promise((resolve) => {

        setTimeout(() => {
        setLoader(!loader);
        }, 1000)
    })
  }, [])






const handleSubmit = (e) => {
  e.preventDefault();
  // console.log("f",filePath);
  //  console.log("f",selectedFile);

  // setvendor(e.target.value)
  const data = new FormData();
  data.append('issue',issue);
  data.append('vendor_uuid',vendor);
  data.append('pdfData',filePath);
  console.warn(data);
  axios.post('/add-issue',data).
    then((res)=>{
      // swal("Good job!", "Created SuccessFully", "success");
        setIssue('');
      history.push('/issues');

    })
  // let payload = {
  //    issue: issue,
  //    vendor_uuid:vendor,
  //    pdfData:d.append("file",selectedFile)
  //  };
  //  console.log(payload);
  //  let errors = validate(payload);
  //  setErrors(errors);
  //  console.log("vendor",payload);

  //  axios.post('/add-issue',payload).
  //  then((res)=>{
  //    // swal("Good job!", "Created SuccessFully", "success");
  //      setIssue('');
  //    history.push('/issues');

  //  }).
    
  //  catch((e)=>{
  //    return e;
  //  })
    
}

  const handleFile = (e) =>{
    setFilePath(e.target.files[0]);
    
  }
  const options = [
	{
		value:"vendor",
		label:"Vendor",
		
	},
	{
		label:"Pay Request",
		value:"pay request",
		
	}
	]

	const date = [
	{
		value:"4-12",
		label:"4-12",
		
	},
	{
		label:"12-4",
		value:"12-4",
	}
	]
  return (
    <>

    {loader ? 

      <Loader className="py-32"/> : 
      <div className=" w-1/2 mx-auto ">
          <label className="text-center font-bold text-4xl ">Add Request</label>  
          <hr className="w-full h-4" />
          <form onSubmit={handleSubmit}  encType='multipart/form-data' >
             
                    <div className="mt-6">

                      <Select
						 	label="Select Vendor"
							value={vendor}
							styleClass="w-full border border-blue-800 rounded h-12 shadow-lg"
							name="vendor"
							options={options}
							onChange={(e)=>setvendor(e.target.value)}

		              	/>
		              	<div className="mt-6">
                      <TextInput
                        id="amount"
                        labelText="Amount"
                        name="amount"
                        onChange={(e => setIssue(e.target.value))}
                        value={issue}
                        invalid={errors.issue}
                        invalidText={errors.issue}
                
                      />
                      </div>
                    <div className="mt-6 ">
                    	<Select
						 	label="Select Vendor"
							value={vendor}
							styleClass="w-full border border-blue-800 rounded h-12 shadow-lg"
							name="vendor"
							options={date}
							onChange={(e)=>setvendor(e.target.value)}
		              	/>
                      
                    </div>
                    </div>
                    <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <Btn type="submit" width="full" 
              >
                       Add Issue
                      </Btn>
                    </span>
                  </div>
    
    
    
          </form>
        </div>}
        </>
  )
}

export default AddRequest