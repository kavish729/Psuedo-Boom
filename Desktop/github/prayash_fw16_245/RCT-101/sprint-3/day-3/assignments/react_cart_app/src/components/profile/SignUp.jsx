import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import "./SignUp.css";
const SignUp = () => {
  const { handleFormSubmit, handleChange } = useContext(AuthContext);
  return (
    <div>
      <form  className="sign-in-form" onSubmit={handleFormSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="add first name"
            name="first_name"
        
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="add last name"
            name="last_name"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="email"
            placeholder="add email address"
            name="email"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="password"
            placeholder="add password"
            name="password"
          />
        </div>
       
        <div>
          <input
            name="gender"
            value="male"
            type="radio"
            onChange={handleChange}
          />
          <label> : Male</label>
        </div>
        <div>
          <input
            name="gender"
            value="female"
            type="radio"
            onChange={handleChange}
          />
          <label> : Female</label>
        </div>
        <div>
          <input
            name="gender"
            value="others"
            type="radio"
            onChange={handleChange}
          />
          <label> : others</label>
        </div>
        <div>
          <input type="submit" value="SIGNUP" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
