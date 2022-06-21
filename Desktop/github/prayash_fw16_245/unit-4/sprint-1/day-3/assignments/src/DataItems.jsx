import React from "react";
import Card from "./Card";

export const DataItems = () => {
  let data = {
    date: "28/10/2020",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUj7HpXfdOqpmY6B7Dkta-0dRFsPiAHzKsQ&usqp=CAU",
    heading: "Amazon Gift Pay",
    subHeading: "Desktop - Mobile",
    arrow: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkx2bG5J8qGZD6kpB7_wv8-yvsUnFWaFBPg&usqp=CAU",
  };
  return (
    <>
      <Card {...data} />
    </>
  );
};
