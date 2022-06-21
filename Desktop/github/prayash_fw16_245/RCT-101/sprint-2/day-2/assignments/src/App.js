import "./App.css";
import Timer from "./components/Timer";
import React, { useState } from "react";
function App() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState("");
  return (
    <div className="main-div">
      <h1 className="header">TIMER APP</h1>
      <div className="inputDiv">
        <div>
          <label>INITIAL TIME:</label>
          <input
            type="number"
            onChange={(e) => setStartTime(Number(e.target.value))}
          />
        </div>
        <div>
          <label>END TIME:</label>
          <input
            type="number"
            onChange={(e) => setEndTime(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="App">
        <Timer
          endTime={endTime}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      </div>
    </div>
  );
}

export default App;
