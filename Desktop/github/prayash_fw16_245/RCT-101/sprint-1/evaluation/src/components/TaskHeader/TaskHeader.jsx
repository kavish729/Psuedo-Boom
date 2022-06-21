import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todo}) => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <p>Todo List</p>
     <p>You have <b data-cy="header-remaining-task">{unCompletedTask}</b>
     tasks remaining <b data-cy="header-total-task">{todo.length}</b></p> 
    </div>
  );
};

export default TaskHeader;
