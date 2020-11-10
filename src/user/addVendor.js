import React,{useState,useEffect} from 'react'
import TextInput from "../components/TextInput/TextInput";
import Btn from '../components/Button/Button';
import axios from '../http-common';
import Select from '../components/SelectInput/SelectInput'
import Loader from '../components/Loader/Loader.js'
import Upload from '../components/UploadFile/UploadFile'
import {Link,useHistory} from "react-router-dom";

function AddVendor({label}) {

const history = useHistory();
const validate = (value) => {
  const errors = {}

  if(!value.issue)
  {
    errors.issue="Issue field is Required"
  }
  if(!value.volume)
  {
    errors.volume="Volume field is Required"

  }
  return(errors);
} 

const [issue,setIssue] = useState('');
const [volume,setVolume] = useState('');
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

  // setVolume(e.target.value)
  const data = new FormData();
  data.append('issue',issue);
  data.append('volume_uuid',volume);
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
  //    volume_uuid:volume,
  //    pdfData:d.append("file",selectedFile)
  //  };
  //  console.log(payload);
  //  let errors = validate(payload);
  //  setErrors(errors);
  //  console.log("volume",payload);

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

  return (
    <>

    {loader ? 

      <Loader className="py-32"/> : 
      <div className=" w-1/2 mx-auto ">
          <label className="text-center font-bold text-4xl ">Add Vendor</label>  
          <hr className="w-full h-4" />
          <form onSubmit={handleSubmit}  encType='multipart/form-data' >
             
                    <div className="mt-6">
                      <TextInput
                        id="issue_name"
                        labelText="Issue Name"
                        name="issue"
                        onChange={(e => setIssue(e.target.value))}
                        value={issue}
                        invalid={errors.issue}
                        invalidText={errors.issue}
                
                      />
                    <div className="mt-6">

                      <input 
                        type="file"
                        accept=".pdf"
                        styleclass="w-full border border-blue-800 rounded h-12 shadow-lg"
                        onChange= {(e)=> handleFile
                          (e)}
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

export default AddVendor