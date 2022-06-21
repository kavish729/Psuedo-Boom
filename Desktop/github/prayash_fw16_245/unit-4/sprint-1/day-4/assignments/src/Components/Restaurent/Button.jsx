import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";

const Button = () => {
  const { filterByStar, filterByPayment, filterByAll } = useContext(Context);

  return (
    <>
      <div className="buttons">
        <button onClick={() => filterByStar(1)}>1 ⭐</button>
        <button onClick={() => filterByStar(2)}>2 ⭐⭐</button>
        <button onClick={() => filterByStar(3)}>3 ⭐⭐⭐</button>
        <button onClick={() => filterByStar(4)}>4 ⭐⭐⭐⭐ </button>
        <button onClick={() => filterByPayment("cash only")}>cash only</button>
        <button onClick={() => filterByPayment("card accepted")}>
          card only
        </button>
        <button onClick={() => filterByAll("card accepted", "cash only")}>
          All
        </button>
      </div>
    </>
  );
};

export default Button;
