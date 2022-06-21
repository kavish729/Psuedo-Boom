import React, { useState } from "react";
import styles from "./Todo.module.css";

export const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const postTodos = async (value) => {
    let res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value,
        completed: false,
      }),
    });
    let data = await res.json();
    onAdd(data);
  };

  return (
    <div className={styles.todoItem}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add something..."
      />

      <button
        onClick={() => {
          let value = task.trim();
          if (value) {
            postTodos(value);
            setTask("");
          }
        }}
      >
        +
      </button>
    </div>
  );
};
