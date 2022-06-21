import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const [todo, setTodo] = useState([]);
  const handleClick = () => {
    setTodo([
      ...todo,
      {
        task,
        id: Date.now(),
      },
    ]);
  setTask("")
  };
  return (
    <>
      <TodoList value={todo} />
      <div className="inputItems">
      <input value={task} className="realInput" onChange={handleChange} placeholder="Add something here" />
      <button onClick={()=>handleClick()}>+</button>
    </div>

    </>
  );
};

export default Todo;
