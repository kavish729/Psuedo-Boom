import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1
        style={{ color: count % 2 == 0 ? "green" : "red", fontSize: "50px" }}
        className="counter"
      >
        {count}
      </h1>
      <div>
        <button
          style={{ marginRight: "5px" }}
          onClick={() => {
            setCount(count * 2);
          }}
        >
          Increment
        </button>
        <button
          style={{ marginLeft: "5px" }}
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
