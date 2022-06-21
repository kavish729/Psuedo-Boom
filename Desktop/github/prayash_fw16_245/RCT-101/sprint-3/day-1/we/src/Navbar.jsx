import React, { useContext, useState } from "react";
import { AuthContext } from "./contextApi/AuthContext";
import Form from "./Form";

const Navbar = () => {
  const { payload, isAuth, setIsAuth, token } = useContext(AuthContext);
 
  
  return (
    <>
    
      <div className="navbar">
        <h4>Logo</h4>
        <button>{isAuth ? "log out" : "login"}</button>
      </div>
       {
           isAuth ?  <h1>Token: {token.token} </h1> :  <Form/> 
       }
      
    </>
  );
};

export default Navbar;
