import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const {IsTheme,theme, toggle } = useContext(ThemeContext);
  
  return (
    <div className={`navbar ${IsTheme ? "white" : "black"}`}>
      <div>
        <h4>Logo</h4>
      </div>

      <div>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Skills</h4>
        <h4>About</h4>
      </div>

      <div>
        <button>Login</button>
        <button onClick={toggle}> {IsTheme ? "dark" : "light"} </button>
      </div>
    </div>
  );
};

export default Navbar;
