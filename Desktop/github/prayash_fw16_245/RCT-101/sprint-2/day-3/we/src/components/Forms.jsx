import React, { useState, useEffect, useRef } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: 0,
    marriege: false,
  });
  const ref = useRef();
  const handleChange = (e) => {
    let { type, files, checked, name, value } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(form);
  };
  return (
    <div>
      <form className="formInput" onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            value={form.username}
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="enter name..."
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            value={form.email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="enter email..."
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            value={form.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="enter password..."
          />
        </div>
        <div>
          <label>Age :</label>
          <input value={form.age} onChange={handleChange} type="number" />
        </div>
        <div>
          <input
            checked={form.marriege}
            type="checkbox"
            onChange={handleChange}
            name="marriege"
          />
          <label> : Married</label>
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
            name="resume"
            value={form.resume}
            type="file"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Forms;
