import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const [loginData,setLoginData] = useState()
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name,value} = e.target;
        setLoginData({
            ...loginData,[name]:value
            
        })
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        login()
        navigate("/feed")

    }
  return (
    <div className="login">
        Login
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="email" type="text" placeholder="add email..." />
        <input onChange={handleChange} name="password" type="password" placeholder="add password..." />
        <input type="submit"/>
        
        </form>
    </div>
  )
}

export default Login