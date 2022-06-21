import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();

  const getData = async (id) => {
    let res = await fetch(`http://localhost:8080/products/${id}`);
    let data = await res.json();
    console.log(data)
    setSingleProduct(data);
  };

  useEffect(() => {
    getData(id);
  }, [id]);
  return (
    <div>
      <img src={singleProduct.image} alt="" />
      <p>{singleProduct.name}</p>
      <p>₹ {singleProduct.price}</p>
      <p>{singleProduct.des}</p>
      <p>{singleProduct.rating}</p>


    </div>
  );
};

export default ProductDetails;
