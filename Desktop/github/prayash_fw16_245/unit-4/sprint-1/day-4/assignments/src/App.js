import "./App.css";
import data from "./data.json"

// import Task from './Components/Task';
// import { Todo } from './Components/Todo';
// import Counter from "./Components/useEffect/Counter";
import React from "react";
import Restaurent from "./Components/Restaurent/Restaurent";
import Button from "./Components/Restaurent/Button";

function App() {
  
  // const [showCounter, setShowCounter] = React.useState(true);

  return (
    <div className="main">
      {/* <h1>Events, useRef and Forms</h1> */}
      {/* <button onClick={() => setShowCounter(!showCounter)}>Toggle</button>

      {showCounter && <Counter />} */}
      {/* <button>Add</button> */}
      <Button data = {data}/>
      <Restaurent data = {data}/>
      
    </div>
  );
}

export default App;
