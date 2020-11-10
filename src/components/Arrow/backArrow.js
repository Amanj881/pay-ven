import React from 'react'
import {Link} from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

function BackArrow({url}) {
	return (
		<div>
			<Link to={url}><AiOutlineArrowLeft /></Link> 
		</div>
	)
}

export default BackArrow