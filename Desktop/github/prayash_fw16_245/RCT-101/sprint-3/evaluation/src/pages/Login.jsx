import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

 const {isAuth,setIsAuth,payload} = useContext(AuthContext);
  const navigate = useNavigate()

  const [input,setInput] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    const {value,name} = e.target;
    setInput({...input , [name]:value})

  }
 
  const handleClick = (e) => {
     e.preventDefault()
     if(payload.email === input.email && payload.password === input.password){
       setIsAuth(true)
       navigate('/')
      
     }else{
      setIsAuth(false)

     }
  }
  
  return (
    <div>
      <form onSubmit={handleClick} className="form-div">
      <input name="email" onChange={handleChange} data-cy="login-email" placeholder="enter email..." />
      <input name="password" onChange={handleChange} data-cy="login-password" placeholder="enter password..."/>
      <button type="submit" data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
