import React, { useState, useEffect } from "react";
import AddForms from "./AddForms";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "sales",
    salary: "",
    maritial: false,
  });

  const [fetchData, setFetchData] = useState([]);

  const handleChange = (event) => {
    let name = event.target.name;
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [name]: event.target.value });
    }
  };

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:3000/form_Data");
      let data = await res.json();
      setFetchData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const postData = async (values) => {
    try {
      let res = await fetch("http://localhost:3000/form_Data", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(formData);
    setFormData({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      maritial: false,
    });
    setFetchData([...fetchData, formData]);
  };

  return (
    <div className="formContainer" onSubmit={handleSubmit}>
      <form>
        <div className="input_large">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="enter name"
            onChange={handleChange}
            reuquired
          />
        </div>
        <div className="input_large">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="enter age"
            onChange={handleChange}
            reuquired
          />
        </div>
        <div className="input_large">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            reuquired
          />
        </div>
        <div className="select_employee">
          <select name="department" value={formData.department} >
            <option value="sales">Sales</option>
            <option value="operations">Operations</option>
          </select>
        </div>
        <div>
          <label>Salary</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
        </div>
        <div>
          <input type="checkbox" name="maritial" checked={formData.maritial} onChange={handleChange} />
          <label>Maritial State</label>
        </div>
        <div className="submitForm">
          <input type="submit"/>
        </div>
      </form>
      <AddForms data={fetchData}/>
    </div>
  );
};

export default Forms;
