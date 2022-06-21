import React, { createContext, useState } from "react";
import axios from "axios";

export const CityContext = createContext();
export const CityProvider = ({ children }) => {
  const [isDark, setIsDark] = useState("light");
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState({
    name: "",
    population: "",
  });

  // Dark mode

  const handleDarkMode = () => {
    if (isDark === "light") {
      setIsDark("dark");
    } else {
      setIsDark("light");
    }
  };

  const deletePost = (value) => {
    axios({
      url: `https://62a33e325bd3609cee665c35.mockapi.io/cities/${value}`,
      method: "DELETE",
      body: {
        data,
      },
    });
  };

  const handleDelete = (id) => {
    let newData = cities.filter((item) => {
      return item.id !== id;
    });
    setCities(newData);
    deletePost(id);
  };

  //  sort by population

  const handleSort = (e) => {
    if (e.target.value === "lth") {
      let lowToHigh = cities.sort((a, b) => {
        return a.population - b.population;
      });
      setCities([...lowToHigh]);
    } else {
      let highToLow = cities.sort((a, b) => {
        return b.population - a.population;
      });
      setCities([...highToLow]);
    }
  };

  return (
    <CityContext.Provider
      value={{
        isDark,
        handleDelete,
        cities,
        setData,
        data,
        setCities,
        filter,
        setFilter,
        handleSort,
        handleDarkMode,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
