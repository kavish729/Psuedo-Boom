import React, { createContext, useState } from "react";
export const DarkContext = createContext()
export const DarkContextProvider = ({children}) => {
    const [isDark,setIsDark] = useState("light")
    const handleClick = () => {
        if(isDark === "light"){
            setIsDark("dark")
        }
        else{
            setIsDark("light")
        }
    }
 return (
    <DarkContext.Provider value={{handleClick,isDark}}>
    {children}
   </DarkContext.Provider>
 ) 
}