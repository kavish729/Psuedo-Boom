import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = ({init}) => {
  // sample value to be replaced
  let [count,setCount] = useState(init)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    {init && 
      <div className={styles.counter}>
      <button onClick={()=>setCount(count+1)} data-cy="task-counter-increment-button">+</button>
      {count> 0 ? <span data-cy="task-counter-value">{count}</span> : <span data-cy="task-counter-value">0</span>}
      <button onClick={()=>setCount(count-1)} data-cy="task-counter-decrement-button">-</button>
    </div>
    }  
    </>
  );

};

export default Counter;
