import { onUpdated } from "vue";


export const useValidation =(current)=>{ 
    const regD = /\d/ig; 
    let text = current;
    const valueValidation = (event)=>{ 
        event.target.value = event.target.value.replace(regD , "");
        text = event.target.value;
        console.log(text);
    }
    onUpdated(valueValidation);

    return [ text , valueValidation ]
}