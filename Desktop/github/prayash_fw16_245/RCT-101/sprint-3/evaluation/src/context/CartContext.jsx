import React, { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount,setCartCount] = useState(0);
  const handleCart = () => {
    setCartCount(cartCount+1)
  }
  return <CartContext.Provider value={{setCartCount,cartCount}}>{children}</CartContext.Provider>;
};
