import React,{useContext} from "react";
import { Context } from "../../context/ContextProvider";

const Restaurent = () => {

  const {AllData} = useContext(Context)
  return (
    <div className="container">
      {AllData.map((item, index) => {
        return (
          <div className="items" key={index}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h2 style={{ color: "red" }}> {item.name} </h2>
              <h3> {item.category} </h3>
              <h4> Min ₹{item.cost} </h4>
              <h4> {item.payment} </h4>
            </div>
            <div>
              <div className="rating">{item.rating}</div>
              <p style={{ fontSize: "12px" }}> {item.votes} Votes </p>
              <p style={{ fontSize: "12px" }}> {item.reviews} Reviews</p>
            </div>
          </div>

          
        );
      })}
    </div>
  );
};

export default Restaurent;
