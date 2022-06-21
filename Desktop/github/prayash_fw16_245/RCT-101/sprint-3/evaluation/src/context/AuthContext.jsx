import React, {useState, useEffect,createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false)
  //   {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }


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
        }).then(r => r.json()).then(d =>(d) ) 
        
    }
    
    useEffect(() => {
        postData()
    },[])



  return <AuthContext.Provider value={{payload,setIsAuth,isAuth}}>{children}</AuthContext.Provider>;
};
