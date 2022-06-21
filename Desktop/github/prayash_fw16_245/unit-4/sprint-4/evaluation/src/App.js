import React, { useState,useEffect } from "react";
import "./App.css";

function App() {


const [gdata,setGData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          "https://movie-fake-server.herokuapp.com/products"
        );
        let data = await res.json();
         setGData(data)
         console.log(data)
      } catch (err) {
        console.log(err);
      }

  
    };
    getData()
  }, []);

  

  return <div className="container">
   {
     gdata.map((item) => {
       return (
         <div  className="gridDiv" key={item.id}>
           <h3>  {item.title} </h3>
            <img src={item.image} alt= ""/>
            <h2> {item.brand} </h2>
            <p> Price: {item.price} </p>
         </div>
       )
     })
   }
  </div>;
}

export default App;
