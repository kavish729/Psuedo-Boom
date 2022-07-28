import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import Cart from '../Pages/Cart'
import Checkoutpage from '../Pages/Checkoutpage'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const Mainroutes = () => {
  return (
    <Box>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkoutpage/>}/>
        
       </Routes>
  
    </Box>
  )
}

export default Mainroutes
