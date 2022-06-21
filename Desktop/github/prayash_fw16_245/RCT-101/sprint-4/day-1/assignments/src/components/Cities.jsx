import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import City from "./City";
import { CityContext } from "../context/CityContext";
const Cities = ({ countries }) => {

  const {cities, setCities,data,setData,filter, setFilter,handleSort,isDark} = useContext(CityContext)
  const [params , setParams] = useState({
    page: 1,
    perPage: 5
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getCities = ({page,perPage}) => {
    axios({
      url: "https://62a33e325bd3609cee665c35.mockapi.io/cities",
      param:{
        page:page,
        per_page:perPage
      }
    }).then((res) => {
      setCities(res.data);
    });
  };

  const addCity = ( value ) => {
    axios({
      url: "https://62a33e325bd3609cee665c35.mockapi.io/countries",
      method: "POST",
      body: {
        value
      },
    }).then((res) => {
      setCities([data,...cities])
    });
  };

  useEffect(() => {
    getCities(params);
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(data);
    setData({
      name: "",
      population: "",
      country: "",
    })
  };

  

  return (
    <div>
      <div className={isDark==="light" ? `lightinputdiv` : `darkinputdiv`}>
        <h2>ADD CITY DETAILS</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>enter name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="enter city name"
              value={data.name}
            />
          </div>
          <div>
            <label>enter name</label>
            <input
              onChange={handleChange}
              name="population"
              type="number"
              value={data.population}
              placeholder="enter city population"
            />
          </div>
          <div>
            <label>enter country name</label>
            <select onChange={handleChange}  name="country">
              {countries.map((country) => {
                return (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
      <br />
      <div>
      <select className="city_details" onChange={handleSort}>
              <option>sort by population</option>
            <option value="lth">low to high</option>
            <option value="htl">high to low</option>
          </select>
      </div>
      <div className="city_details">
        <table className={isDark==="light" ? `table table-success` : `table table-dark`} >
          <thead>
            <tr>
              <th scope="col">Sl. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Population</th>
              <th scope="col">Country</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((details, index) => {
              //   console.log(details)
              return <City key={details.id} details={details} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cities;
