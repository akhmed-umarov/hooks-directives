import { useState } from "react";


export const useValidation = (text)=>{ 
    const [value , setValue] = useState(text);
    const regD = /\d/ig; 

    const setValidationValue = (event)=>{ 
        setValue(()=>event.target.value.replace(regD , ""))
    }
    
    return [value , setValidationValue]
}