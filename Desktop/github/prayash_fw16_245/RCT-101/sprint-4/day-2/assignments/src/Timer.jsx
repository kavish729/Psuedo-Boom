import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };
  const handleStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  useEffect(() => {
    return handleStop();
  }, []);

  return (
    <div className="main_div">
      <h1>
        {" "}
        <u>Stop Watch</u>{" "}
      </h1>
      <div className="timer_div">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span> &nbsp;
        :&nbsp;
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        &nbsp;:&nbsp;
        <span>{("0" + ((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <br />
      <div className="btn_div">
        <button className="btn start_btn" onClick={handleStart}>
          START
        </button>
        <button className="btn stop_btn" onClick={handleStop}>
          PAUSE
        </button>
        <button className="btn reset_btn" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;
