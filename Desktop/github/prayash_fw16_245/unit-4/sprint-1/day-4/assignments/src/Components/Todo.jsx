import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

export const Todo = () => {
  const [todo, setTodo] = React.useState("");
  const [task, setTask] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    let payload = {
      title: todo,
      id: uuidv4(),
      status: false,
    };

    setTask([payload, ...task]);

   
    // console.log(payload)
  };

  const handleDelete = (id) => {
    // console.log(id)

    // filter for deleting particular task
    let newTask = task.filter((item) => item.id !== id);
    setTask(newTask);
  };

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <h1>
        Not Logged in <button onClick={handleLoggedIn}>LOGIN</button>
      </h1>
    );
  }
  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <button onClick={handleLogOut}>LOGOUT OUT</button>
      <input
        type="text"
        value={todo}
        placeholder="Add something here..."
        onChange={handChange}
      />
      <button onClick={handleClick}>ADD</button>
      {task.length ? (
        task.map((item) => {
          return <TodoItem key={item.id} {...item} hatao={handleDelete} />;
        })
      ) : (
        <h2>Box is emty...please add something</h2>
      )}
    </>
  );
};
