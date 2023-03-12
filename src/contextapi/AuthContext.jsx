import {createContext, useEffect, useState} from 'react'


export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = ()=>{
        //to do

        setCurrentUser ( {
            id:4, 
            name:"saif", 
            profilePic:"https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        })
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )
}