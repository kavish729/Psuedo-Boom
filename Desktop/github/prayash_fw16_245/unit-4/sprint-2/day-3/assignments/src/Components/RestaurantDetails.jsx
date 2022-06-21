import React, { useState } from "react";
import data from "../data.json";
const RestaurantDetails = () => {
  const [allData, setAllData] = useState(data);
  const handleRating = (value) => {
    const updated = data.filter((elem) => {
      return elem.rating >= value;
    });

    setAllData(updated);
  };
const handlePayment = (value) => {
    const afterPay = data.filter((elem) => {
        return elem.payment === value;
        
    })
    setAllData(afterPay);
}


// shorting


  return (
    <div className="mainDiv">
      <div className="btn">
        <button onClick={() => handleRating(1)} className="btn btn-primary">
          1 Rating
        </button>
        <button onClick={() => handleRating(2)} className="btn btn-primary">
          2 Ratings
        </button>
        <button onClick={() => handleRating(3)} className="btn btn-primary">
          3 Ratings
        </button>
        <button onClick={() => handleRating(4)} className="btn btn-primary">
          4 Ratings
        </button>

        <button className="btn btn-warning bott_margin" onClick={()=>handlePayment("cash only")}>Cash Only</button>
        <button className="btn btn-warning" onClick={()=>handlePayment("card accepted")}>Card Only</button>
        <button className="btn btn-warning" onClick={()=>handlePayment("card and cash")}>Accepts All</button>

        <button className="btn btn-success">High To Low</button>
        <button className="btn btn-success">Low To High</button>
      </div>
      <div className="container">
        {allData.map((item, id) => {
          return (
            <div key={id}>
              <img src={item.image} alt="" />
              <p className="name">{item.name}</p>
              <p className="cat">Cat : {item.category}</p>
              <p>Cost for 1 ₹{item.cost}</p>
              <p className="rate">rating: {item.rating}</p>
              <p>Pay: {item.payment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
