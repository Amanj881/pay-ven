import React,{useState} from 'react'
import { GiSplitCross } from 'react-icons/gi';

function Modal(props) {

	return (
		<div className="flex flex-col md:w-1/2 mx-auto shadow-xl" style={{height:"40rem"}}>
			<div className="self-center md:px-4 md:self-end my-8">
				<GiSplitCross onClick={()=>props.setCloseModal(!props.modal)}/>	
			</div>	
			<div className="text-justify overflow-y-auto p-12">
			{props.children}
			</div>
			
		</div>
	)
}

export default Modal
