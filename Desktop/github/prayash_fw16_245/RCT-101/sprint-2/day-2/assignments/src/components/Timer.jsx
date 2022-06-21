import React, { useEffect } from "react";

const Timer = ({ endTime, startTime, setStartTime }) => {
  useEffect(() => {

    let id = setInterval(() => {
      if (startTime >= endTime) {
        clearInterval(id);
      } else {
        setStartTime((startTime) => startTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
    
  }, [endTime,startTime]);
  return (
    <div>
      <h1>{startTime}</h1>
    </div>
  );
};

export default Timer;
