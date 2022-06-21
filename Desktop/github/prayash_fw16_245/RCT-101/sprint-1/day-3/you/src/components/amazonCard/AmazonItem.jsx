import React from "react";

const AmazonItem = ({ data }) => {
  return (
    <div className="container">
      <div className="rightSide">
        <p>{data.date}</p>
        <button>{data.button}</button>
        <h1>{data.heading}</h1>
        <p>{data.subHeading}</p>
      </div>
      <div className="leftSide">
        <i className="fa-brands fa-amazon"></i>
        <i style={{fontSize:"35px"}} className="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  );
};

export default AmazonItem;
