import React from "react";

const RestuarentItems = ({ value }) => {
  return (
    <>
      <div>
        <div>
          <div className="imageDiv">
            <img src={value.image} alt="" />
          </div>
          <div className="middleDiv">
            <p className="name">{value.name}</p>
            <p className="cat">{value.category}</p>
            <div className="price">
              <p className="cost">Min ₹{value.cost}</p>
              <ul>
                <li>{value.time}</li>
              </ul>
            </div>
            <p className="pay">{value.payment}</p>
          </div>
          <div className="reviewDiv">
            <p>⭐ {value.rating}</p>
            <p>Votes {value.votes}</p>
            <p>Reviews {value.reviews}</p>
          </div>
        </div>
        <div className="lastOrderDIv">
          <button>Order Online ➡️</button>
        </div>
      </div>
    </>
  );
};

export default RestuarentItems;
