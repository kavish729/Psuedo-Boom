import React from "react";
import "./App.css";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="left_content">
          <h3>{props.date}</h3>
          <div>Case study</div>
          <h1>{props.heading}</h1>
          <h3>{props.subHeading}</h3>
        </div>

        <div className="right_content">
          <img src={props.logo} alt="" />
          <img src={props.arrow} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
