import { useEffect, useState } from "react";
import axios from "axios";

const useCrudNameAction = (API) => {
    
    const [nameItemAction,setNameItemAction] =  useState([])
	
	useEffect(async()=>{
		const response = await axios(API);
		setNameItemAction(response.data);
	},[])

    return nameItemAction
}

export default useCrudNameAction;