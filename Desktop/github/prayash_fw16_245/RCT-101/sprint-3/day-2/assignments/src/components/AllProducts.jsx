import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch("http://localhost:8080/products");
    let data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`products/${id}`);
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="flex-div" key={item.id}>
            <img src={item.image} alt="" />
            <p> {item.name}</p>
            <p>₹ {item.price}</p>

            <Link to={`${item.id}`}> show more </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
