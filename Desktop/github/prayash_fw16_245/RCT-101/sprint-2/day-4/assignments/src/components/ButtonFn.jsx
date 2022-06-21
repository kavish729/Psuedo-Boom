import React, { useContext } from "react";
import { DarkContext } from "../darkContext/DarkContext";
import styles from './Button.module.css';

const ButtonFn = ({ ratingShort, paymentShort, lowToHigh, highToLow }) => {
  const {handleClick,isDark} = useContext(DarkContext)
  return (
    <>
    <button className={isDark==="light" ? `${styles.light} ` : `${styles.dark} `} onClick={handleClick}> {isDark==="light" ? "light" : "dark"} </button>
    <div className="btnDiv">
    
      <div>
        <p>Sort by ratings</p>
        <div className="ratingColor">
          <button onClick={() => ratingShort(1)}>⭐</button>
          <button onClick={() => ratingShort(2)}>⭐⭐</button>
          <button onClick={() => ratingShort(3)}>⭐⭐⭐</button>
          <button onClick={() => ratingShort(4)}>⭐⭐⭐⭐</button>
        </div>
      </div>
      <div className="payDIv">
        <p>Sort by payment methods</p>
        <div className="payColor">
          <button onClick={() => paymentShort("cash only")}>Cash Only</button>
          <button onClick={() => paymentShort("card accepted")}>
            Card Accepted
          </button>
          <button onClick={() => paymentShort("card and cash")}>
            Card & Cash
          </button>
        </div>
      </div>
      <div className="filterDiv">
        <p>Filter By Rating</p>
        <div className="filterColor">
          <button onClick={highToLow}>High To Low</button>
          <button onClick={lowToHigh}>Low To High</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ButtonFn;
