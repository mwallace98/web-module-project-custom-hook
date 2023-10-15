import { useState } from "react"
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (intitialValue) => {
    const [darkMode,setDarkMode] = useLocalStorage('darkMode',intitialValue)
    return[darkMode,setDarkMode];
}

export default useDarkMode;