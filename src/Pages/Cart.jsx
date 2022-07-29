import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartitem = useSelector((state) => state.app.cart)

 
// console.log(cartitem)

  return (
    <Box>
      {
        cartitem.length>0 && cartitem.map((item) => {
          return (
            <Image src={item.cover_photo} />
          )
        })
      }
    </Box>
  )
}

export default Cart
