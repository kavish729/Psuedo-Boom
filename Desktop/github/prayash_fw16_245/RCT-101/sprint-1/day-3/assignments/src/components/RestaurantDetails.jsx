import React, { useState } from "react";
import ButtonFn from "./ButtonFn";
import RestuarentItems from "./RestuarentItems";

const RestaurantDetails = ({ data }) => {
  const [item, setItem] = useState(data);

  // Rating filter
  const ratingShort = (value) => {
    let ratedShort = data.filter((elem) => {
      return elem.rating >= value;
    });

    setItem(ratedShort);
  };

  //  Cash filter

  const paymentShort = (value) => {
    let payShort = data.filter((elem) => {
      return elem.payment === value;
    });
    setItem(payShort);
  };

//  High to low 

const highToLow = () => {
 let h2l = data.sort((a,b) => {
   return b.rating - a.rating;
 })
 setItem([...h2l]);
}

// Low to High
const lowToHigh = () => {
  let l2h = data.sort((a,b) => {
    return a.rating - b.rating;
  })
  setItem([...l2h]);
}


  const [inputData, setInputData] = useState({
    reviews: "355",
    rating: "3.5",
    time: "Up to 30 min",
    cost: "455",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    setInputData({ ...inputData, [inputName]: e.target.value });
    
  };

  // console.log(inputData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([inputData, ...item]);
    setInputData("")
  };


 
  return (
    <div>
      <div className="mainHeaderDIv">
        <div>
          <ButtonFn ratingShort={ratingShort} paymentShort={paymentShort} highToLow={highToLow} lowToHigh={lowToHigh} />
        </div>

        {/* form data */}

        <div className="formDiv">
          <p>ADD FOOD DETAILS</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>enter food name</label>
              <input
              value={inputData.name}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="enter food name"
              />
              
            </div>
            <div>
              <label>enter category</label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                placeholder="Enter category"
              />
            </div>
            <div>
              <label> enter food URl </label>
              <input
                value={inputData.url}
                type="url"
                name="image"
                onChange={handleChange}
                placeholder="enter food url"
              />
            </div>
            <div>
              <input className="submitBtn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        {item.map((item, index) => {
          return <RestuarentItems value={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
