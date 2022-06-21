import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  //   useEffect(() => {
  //     console.log("Mounted and Rendered");
  //   });

  useEffect(() => {
    console.log("mounted []");

    if (count1 > 7) {
      setCount2(100);
    }
    return () => {
      console.log("unmounted []");
    };
  }, [count1]);
  return (
    <div>
      <h1>
        Counter : {count1} : {count2}
      </h1>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
