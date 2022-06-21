import React, { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import axios from "axios";
import CityRow from "./components/CityRow";
export default function App() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const [page, perPage] = useState(1);
  const getData = () => {
    setLoading(true);
    axios
    
      .get(`https://json-server-mocker-masai.herokuapp.com/cities?_page=${page}&_limit=10`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    getData();
  }, [page]);

  if (loading) {
    return <h1 style={{ textAlign: "center", color: "teal" }}>Loading...</h1>;
  }

  if (error) {
    return (
      <h1 style={{ textAlign: "center", color: "red" }}>
        404 Error : Page is Not Found
      </h1>
    );
  }

  const handleSort = () => {
    setLoading(true);
    setButtonState(!buttonState);
    if (buttonState === true) {
      axios
        .get(
          `https://json-server-mocker-masai.herokuapp.com/cities?_page=${page}&_limit=10&_sort=population&_order=ASC`
        )
        .then((r) => {
          setLoading(false);
          setData(r.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      axios
        .get(
          `https://json-server-mocker-masai.herokuapp.com/cities?_page=${page}&_limit=10&_sort=population&_order=DESC`
        )
        .then((r) => {
          setLoading(false);
          setData(r.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
      // console.log(data)
    }

    // console.log(data)
  };

  const handlePrev = (page) => {
    perPage(page - 1);
  };
  const handleNext = () => {
    perPage(page + 1);
    console.log("next button clicked");
  };
  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>
        <tr>
          <th>ID</th>
          <th>CITY NAME</th>
          <th>COUNTRY NAME</th>
          <th>POPULATION</th>
        </tr>
        <tbody>
          {data.map((item) => {
            return <CityRow key={item.id} item={item} />;
          })}
        </tbody>
      </table>

      <div>
        <ButtonComponent
          id="SORT_BUTTON"
          onClick={handleSort}
          title={
            buttonState
              ? `Sort by Increasing Population`
              : `Sort by Decresing Population`
          }
        />

        <ButtonComponent
          onClick={() => {
            handlePrev(page);
          }}
          page={page}
          title="PREV"
          id="PREV"
        />
        <ButtonComponent
          onClick={() => {
            handleNext(page);
          }}
          id="NEXT"
          title="NEXT"
        />
      </div>
    </div>
  );
}
