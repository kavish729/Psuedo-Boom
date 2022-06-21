import React from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from 'uuid';
import { Task } from "../Task";
import { Tasks } from "../Tasks";


const AddTask = ({todo,task,setTodo,setTask}) => {
  // NOTE: do not delete `data-cy` key value pair

  const handleChange = (e) => {
    setTask(e.target.value)
}
 const handleClick = () => {
   setTodo([...todo,{
     text:task,
     id:uuidv4(),
     count: 1
   }])
   
 }
  return (
    <>
    <div className={styles.todoForm}>
      <input onChange={handleChange} data-cy="add-task-input" type="text" />
      <button onClick={()=>handleClick()} data-cy="add-task-button">+</button>
    </div>
  
    </>

  );
};

export default AddTask;
