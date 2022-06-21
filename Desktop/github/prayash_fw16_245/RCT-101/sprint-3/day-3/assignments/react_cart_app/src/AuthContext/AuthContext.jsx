import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [inputData,setInputData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        gender:"",
    })
    let name = {}
const [signUpdata,setSignupData] = useState({})
    const handleFormSubmit = (e) => {
       e.preventDefault()
       localStorage.setItem(inputData, inputData);
    }

    const handleChange = (e) => {
     const {value,type,name} = e.target;
     setInputData({...inputData,[name]:value})
    }

    console.log(inputData)

    const [isAuth,setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={{isAuth,handleFormSubmit,handleChange}}>{children}</AuthContext.Provider>
    )
}