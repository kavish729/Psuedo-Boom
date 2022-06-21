import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './AllStyle.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Home = () => {
  const [data, setData] = useState(null);
  const {AddToCart} = useContext(CartContext)
  const getData = () => {
    axios("http://localhost:8080/products")
      .then((res) => {
        //   console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main_container">
      {data?.map((prod) => {
        return (
          <div className="single_prod" key={prod.id}>
            <div>
              <h3>{prod.title}</h3>
              <p>{prod.description}</p>
              <button onClick={()=>AddToCart(prod)} type="button" className="btn btn-primary">
                ADD
              </button>
            </div>

            <div>
                
              <img src={prod.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
