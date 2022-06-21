import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './AllStyle.css'
const Navbar = () => {
    const { cartData ,isAuth,setIsAuth} = useContext(CartContext);
  return (
    <div>
      <div className="navbar">
        <div>
        <i className="fa-brands fa-amazon"></i>
          <h3>
         Aweshop
          </h3>
         

          <NavLink style={{textDecoration:"none"}} to="/">
            {" "}
            <h3>Home</h3>{" "}
          </NavLink>
          <NavLink style={{textDecoration:"none"}} to="/login">
       
            <h3>SignIn</h3>{" "}
          </NavLink>
        </div>
        <div>
        <NavLink style={{textDecoration:"none",color:"white"}} to="/cart">
            <span>{cartData.length}</span>
        <img
                  width="17px"
                  height="17px"
                  src={process.env.PUBLIC_URL + "/bag.png"}
                  alt=""
                />
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
