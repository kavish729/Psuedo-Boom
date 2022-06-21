import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink


const Navbar = () => {

  const {isAuth} = useContext(AuthContext)


  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/login")
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px", borderBottom:"2px solid black"}} data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">logo</Link>
      <span data-cy="navbar-cart-items-count">Count(0)</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button">
       {isAuth ? "Logout":"Login"}

      </button>
    </div>
  );
};

export default Navbar;
