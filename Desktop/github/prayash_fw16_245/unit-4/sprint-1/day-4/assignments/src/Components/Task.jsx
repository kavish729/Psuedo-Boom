import React from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "./TaskItem";
import styles from "./Todo.module.css"

const Task = () => {
  const [task, setTask] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    let payload = {
      title: task,
      id: uuidv4(),
      status: false,
    };

    setTodo([payload, ...todo]);
  };

  const handleDelete = (id) => {
    // console.log(id)
    let newTodo = todo.filter((item) => item.id != id);
    setTodo(newTodo);
  };
  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <h2>
        Logged in➡️<button  className={styles.login} onClick={handleLogin}>Login</button>
      </h2>
    );
  }
  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <button onClick={handleLogOut}>LOG OUT</button>
      <input
        type="text"
        value={task}
        placeholder="Add something....."
        onChange={handleChange}
      />
      <button onClick={() => handleClick()}>ADD</button>
      {todo.length ? (
        todo.map((item, index) => {
          return (
            <TaskItem
              key={item.id}
              {...item}
              bhagao={handleDelete}
              isEven={index % 2 == 0}
            />
          );
        })
      ) : (
        <h2>There is no task...add something😟</h2>
      )}
    </>
  );
};

export default Task;
