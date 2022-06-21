import React, { useState, createContext } from "react";
import data from "../data.json";
export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [AllData, setAllData] = useState(data);
  const filterByStar = (value) => {
    let neData = data.filter((elem) => {
      return elem.rating >= value;
    });

    setAllData(neData);
  };
  const filterByPayment = (value) => {
    let updatedData = data.filter((elem) => {
      return elem.payment == value;
    });
    setAllData(updatedData);
  };

  const filterByAll = (value1, value2) => {
    let updatedData = data.filter((elem) => {
      if (elem.payment === value1 || elem.payment === value2) {
        return elem;
      }
    });
    setAllData(updatedData);
  };

  return (
    <Context.Provider
      value={{
        AllData,
        setAllData,
        filterByStar,
        filterByPayment,
        filterByAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
