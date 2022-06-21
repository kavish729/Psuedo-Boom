import React,{useState} from "react";
import AddTask from "./AddTask/AddTask";

import data from '../data/tasks.json'
import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair;
  
  const [task,setTask] = useState("")
  const [todo,setTodo] = useState(data)
  
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
       <TaskHeader todo={todo}/>
      {/* Add Task */}
      <AddTask todo={todo} task={task} setTask={setTask} setTodo={setTodo}/>
      {/* Tasks */}
      <Tasks todo={todo} setTask={setTask} setTodo={setTodo} />
    </div>
  );
};

export default TaskApp;
