import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ProductContext } from '../../ProductContext/products'
import Home from '../home/Home'
import styles from './WishList.module.css'
const WishList = () => {
  const {data,searched,entered} = useContext(ProductContext)
  const [filteredData,setFilteredData] = useState(data)
  

    
if(!entered){
  return <Home/>
}

  return (
    <div className={styles.products_list}>
    {filteredData.filter((item) => {
      console.log(searched)
        if (searched === "") {
          return item;
        } else if (
          item.category.toLowerCase().includes(searched.toLowerCase())
        ) {
          return item;
        }
        
      })
     .map((item) => {
          return (
              <div key={item.id}>
                  <img src={item.image} alt="product_image" />
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.categ}>{item.category}</p>
                  <p className={styles.price}>Rs. {item.price}</p>
                  <p className={styles.rating}>rating: {item.rating}</p>
                  <button className={styles.button_wishlist}>BUY</button>
              </div>
          )
      })
    }
  </div>
  )
}


export default WishList