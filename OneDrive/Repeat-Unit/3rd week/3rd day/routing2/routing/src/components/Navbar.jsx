import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {isAuth, logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = () => {
        
        if(isAuth) {
          logout()
          navigate("/")
        } else{
            navigate("/login")
        }
    }

  return (
    <div className="navbar">
        <h4>Logo</h4>
     <Link to="">Home</Link>
     <Link to="/feed">Feed</Link>
     <button onClick={handleLogin}> {isAuth ? "logout" : "login"} </button>
    </div>
  )
}

export default Navbar