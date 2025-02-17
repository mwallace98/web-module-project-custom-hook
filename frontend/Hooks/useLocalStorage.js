
import {useState} from 'react'

const useLocalStorage = (key,intitialValue) => {
    const [state,setState] = useState(() => {
        if(localStorage.getItem(key)){
            return(JSON.parse(localStorage.getItem(key)));
        }

        localStorage.setItem(key,JSON.stringify(intitialValue));
        return intitialValue;
    });

    const setStoredState = (value) => {
        localStorage.setItem(key,JSON.stringify(value));
        setState(value);
    }

    return ([state,setStoredState]);

}

export default useLocalStorage