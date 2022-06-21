import React,{useState} from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = ({item,handleDelete,todo,setTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
   const [change,setChange] = useState(false)

   const handleCheck = () => {
    setChange(!change)
   }
  return (
  
   <>
   {item &&   
     
     <li data-cy="task" className={styles.task}>

     <input type="checkbox" onChange={handleCheck} data-cy="task-checkbox" />
     <div data-cy="task-text" style={{textDecoration: change ? "line-through":"none"  }}>
     {item.text}
     </div>
     {/* Counter here */}
     <Counter  init={item.count}/>
     <button onClick={()=>handleDelete(item.id)} data-cy="task-remove-button">delete</button>
   </li>
   }
   
    </>
  );
};

export default Task;
