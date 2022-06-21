import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cartData,setCartData] = useState([])
    const [isAuth,setIsAuth] = useState(false)
    const AddToCart = (item) => {
      setCartData([...cartData,item])
    }

    return (
        <CartContext.Provider value={{AddToCart,cartData,isAuth,setIsAuth,setCartData}}>{children}</CartContext.Provider>
    )
}