import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import Product from "./Product/Product.jsx";


const Products = () => {
  const [data, setData] = useState([]);
  
  // const {setCartCount,cartCount} = useContext(CartContext)
  const getData = async () => {
    let res = await axios(" http://localhost:8080/products ");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='productmain'>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <Product product={product} data={data} setData={setData}/>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
