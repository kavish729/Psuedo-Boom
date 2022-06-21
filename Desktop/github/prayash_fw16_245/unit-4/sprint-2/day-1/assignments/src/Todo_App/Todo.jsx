import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, onDelete }) => {
  const deleteTodo = async () => {
    let res = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    let data = await res.json();
    onDelete(todo.id);
  };
  return (
   
    <div className={styles.deleteTodo}>
      {todo.value}
      <button onClick={() => deleteTodo()}>
      <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
   
  );
};

export default Todo;
