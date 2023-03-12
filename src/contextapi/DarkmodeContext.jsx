import {createContext, useEffect, useState} from 'react'


export const DarkmodeContext = createContext()


export const DarkmodeContextProvider = ({children}) => {
    const [darkMode, setDarkmode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

    const toggle = ()=>{
        setDarkmode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    return(
        <DarkmodeContext.Provider value={{darkMode, toggle}}>{children}</DarkmodeContext.Provider>
    )
}