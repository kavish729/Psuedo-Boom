import React from 'react';
import styles from "./Todo.module.css";

const TaskItem = ({id,title,status,isEven,bhagao}) => {
 
  return (
    <>
    <h1 style={{color: isEven ? "green" : "red"}}>{title}</h1>
    <button className={styles.logout} onClick={() => bhagao(id) }>Delete</button>
    </>
  )
}

export default TaskItem