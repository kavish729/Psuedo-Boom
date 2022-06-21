import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [completedTodos, setCompleteTodos] = useState([]);
  
  
  const handleChange = (e) => {
    setTask(e.target.value);
  };


  const filterTodosByStatus = () => {
    let newFilterTodo = todo.filter((elem) => {
      return elem.completed === true;
    });
    setCompleteTodos(newFilterTodo);
  };


  const editFun = (id, value) => {
    handleDelte(id);
    setTask(value);
  };


  const handleComplted = (id) => {
    let newTodoArr = todo.map((elem) => {
      if (elem.id === id) {
        return { ...elem, completed: !elem.completed };
      } else {
        return elem;
      }
    });
    setTodo(newTodoArr);
  };


  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: task,
        completed: false,
      },
    ]);
  setTask("")
  };

  const handleDelte = (id) => {
    let newTodo = todo.filter((elem) => {
      return elem.id !== id;
    });

    setTodo(newTodo);
  };
  return (
    <>
      
      <div className="inputItems">
      <input value={task} className="realInput" onChange={handleChange} placeholder="Add something here" />
      <button className="addItemsBtns"onClick={handleClick}>+</button>
    </div>
    <TodoList 
    editFun={editFun}
    handleDelte={handleDelte}
    completedTodos={completedTodos}
    filterTodosByStatus={filterTodosByStatus}
    handleComplted={handleComplted}
    todo={todo}
    setTodo={setTodo}
    task={task}
    setTask={setTask}
    setCompleteTodos={setCompleteTodos}
     />
    </>
  );
};

export default Todo;
