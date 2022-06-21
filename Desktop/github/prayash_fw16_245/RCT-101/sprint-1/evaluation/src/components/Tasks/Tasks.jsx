import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todo,setTodo,setTask}) => {

  // NOTE: do not delete `data-cy` key value pair;
  const handleDelete = (value) => {
    let newArr = todo.filter((elem) => {
      return elem.id !== value;
    })
    setTodo(newArr)
  }
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        
        {
           todo.map((item) => {
             return <Task item={item} handleDelete={handleDelete} key={item.id}/>
           })
        }
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
