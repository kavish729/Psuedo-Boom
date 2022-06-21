import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext/products";
import styles from "./Bag.module.css";
const Bag = () => {
  const { wishListData,handleRemove} = useContext(ProductContext);
  
  return (
    <div className={styles.products_list}>
      <div className={styles.leftSide}>
       
        <p className={styles.totalItems}>TOTAL ITEMS : {wishListData.length}</p>
        <div className={styles.singleItemleftDiv}>
          {wishListData.map((item) => {
            return (
              <div className={styles.singleLeftItem} key={item.id}>
               <div className={styles.imageAndtitle}>
                <div>
                <img src={item.image} alt="product_image" />
                </div>
                <div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.categ}>{item.category}</p>
                <p className={styles.price}>Rs. {item.price}</p>
                <p className={styles.rating}>rating: {item.rating}</p>
                </div>
                </div>
                <div>
                  <button onClick={()=>handleRemove(item.id)} className={styles.removeBtn}>x</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.rightSide}>
          
      </div>
    </div>
  );
};

export default Bag;
