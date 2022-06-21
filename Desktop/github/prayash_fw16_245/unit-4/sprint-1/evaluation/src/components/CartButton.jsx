import React from "react";
// keep the add to cart component here

const CartButton = () => {
    //manage state of the count 
   
    
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div className={style.main}>
      <button onClick={()=>change(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>change(1)}>+</button>
  </div>
  </>;
};
export default CartButton
