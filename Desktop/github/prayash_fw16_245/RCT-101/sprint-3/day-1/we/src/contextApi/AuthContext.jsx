import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [token,setToken] = useState("")
    let payload = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    const postData = () => {
       
        fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(r => r.json()).then(d => setToken(d) ) 
        
    }
    
    useEffect(() => {
        postData()
    },[])

  const [isAuth,setIsAuth] = useState(false)

    const toggle = () => {
       
    }
    return (
        <AuthContext.Provider value={{toggle,setIsAuth,isAuth,token,payload}} >{children}</AuthContext.Provider>
    )
}