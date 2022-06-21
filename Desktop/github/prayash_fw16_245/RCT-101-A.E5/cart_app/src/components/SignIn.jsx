import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const SignIn = () => {
    const { cartData ,isAuth,setIsAuth} = useContext(CartContext);
    useEffect(() => {
        setIsAuth(true)
    },[])
    const navigate = useNavigate()
    const handleClick = () => {
        
        if(isAuth){
          return  navigate("/cart")
        }
    }
  return (
    <div>SignIn
        <button onClick={handleClick}>signIn</button>
    </div>
  )
}

export default SignIn