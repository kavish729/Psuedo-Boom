import React, { useState, useEffect } from "react";
import axios from "axios";
import TableItem from "./TableItem";
const Table = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    address: "",
    salary: "",
    marriege: false,
  });
  const [formData, setFormData] = useState([]);
  const [filter,setFilter] = useState("")

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

  const postData = async (value) => {
    try {
      let res = await fetch("http://localhost:8080/form", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(value),
      });
      let data = await res.json();
      setFormData([...formData, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
    setForm({
      username: "",
      age: "",
      address: "",
      salary: "",
      marriege: false,
    });
    // console.log(formData);
  };
  //   console.log(formData)
  const getData = async () => {
    let res = await axios("http://localhost:8080/form");
    setFormData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // Delete
  const handleDelete = (value) => {
    let deltedValue = formData.filter((elem) => {
      return elem.id !== value;
    });
    setFormData(deltedValue);
    deletePost(value);
  };
  const deletePost = async (value) => {
     await fetch(`http://localhost:8080/form/${value}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  // Filter by Department

  const handleSort = async (e) => {
      let value = e.target.value;
      setFilter(value)
      if(filter === "htl"){
        await axios
        .get(`http://localhost:8080/form?_sort=salary&_order=asc`)
        .then((r) => setFormData(r.data))
        .catch((err) => console.log(err));
      }
      else{
        await axios
        .get(`http://localhost:8080/form?_sort=salary&_order=desc`)
        .then((r) => setFormData(r.data))
        .catch((err) => console.log(err));
      }
   
  };

  return (
    <div className="main-div">
      <div className="formDiv">
        <form className="formInput" onSubmit={handleSubmit}>
          <p>FORM</p>
          <div>
            <label>Name</label>
            <input
              value={form.username}
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="enter name..."
            />
          </div>
          <div>
            <label>Age</label>
            <input
              value={form.age}
              onChange={handleChange}
              name="age"
              type="number"
            />
          </div>
          <div>
            <label>Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="enter your address...."
            />
          </div>
          <div>
            <label>Department</label>
            <select
              onChange={handleChange}
              value={form.department}
              name="department"
            >
              {form.department && <option>choose</option>}
              <option value="frontend">front-end</option>
              <option value="backend">back-end</option>
              <option value="fullstack">fullstack</option>
            </select>
          </div>
          <div>
            <label>Salary</label>
            <input
              checked={form.salary}
              type="number"
              onChange={handleChange}
              name="salary"
            />
          </div>
          <div>
            <label>Maritial State</label>
            <input
              checked={form.marriege}
              type="checkbox"
              onChange={handleChange}
              name="marriege"
              className="check-box-input"
            />
          </div>

          <div>
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              name="resume"
              value={form.resume}
              type="file"
              accept="image/png, image/jpeg"
            />
          </div>
          <input className="btn btn-primary submitDIv" type="submit" />
        </form>
      </div>
      <div className="formItemsDiv">
        <div>
          <select className="salaryDiv" onChange={handleSort}>
              <option>sort by salary</option>
            <option value="lth">low to high</option>
            <option value="htl">high to low</option>
          </select>
        </div>
        <div className="tableDiv">
        <table className="table table-dark table-striped table_div">
          <thead>
            <tr>
              <th scope="col">Sl. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Department</th>
              <th scope="col">salary</th>
              <th scope="col">Married</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item,index) => {
            //   console.log(item)
              return (
                <TableItem
                  handleDelete={handleDelete}
                  key={item.id}
                  item={item}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
