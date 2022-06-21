import React, { useContext, useState } from "react";
import { AuthContext } from "./contextApi/AuthContext";

const Form = () => {
  const { payload, isAuth, setIsAuth, token } = useContext(AuthContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (payload.email === input.email && payload.password === input.password) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };
  return (
    <>
      
      <div>
        <form onSubmit={handleClick}>
          <input
            onChange={handleChange}
            value={input.email}
            name="email"
            type="email"
            placeholder="enter email.."
          />
          <input
            onChange={handleChange}
            value={input.password}
            name="password"
            type="password"
            placeholder="enter password.."
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
