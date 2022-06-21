import React, { useContext } from 'react';
import { ProductContext } from '../../ProductContext/products';
import styles from './Body.module.css';
const Body = () => {
    const {data,AddData} = useContext(ProductContext)

    const handleSortByPrice = (e) => {
      if(e.target.value==='htl'){
        let shortedhighData = data.sort((a,b) => {
          return b.price - a.price;
        })
        AddData([...shortedhighData])
      }
      if(e.target.value==='lth'){
        let shortedLowData = data.sort((a,b) => {
          return a.price - b.price;
        })
        AddData([...shortedLowData])
      }
      
    }
  return (

    <div className={styles.mainDiv}>
      <div className={styles.selected}>
        <select onChange={handleSortByPrice}>
          <option>Short by price</option>
          <option value="htl">High to Low</option>
          <option value="lth">Low to High</option>
        </select>
      </div>

    <div className={styles.products_list}>
      
      {
        data.map((item) => {
            return (
                <div key={item.id}>
                    <img src={item.image} alt="product_image" />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.categ}>{item.category}</p>
                    <p className={styles.price}>Rs. {item.price}</p>
                    <p className={styles.rating}>rating: {item.rating}</p>
                    <button onClick={()=>AddData(item)} className={styles.button_wishlist}>ADD TO BAG</button>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Body