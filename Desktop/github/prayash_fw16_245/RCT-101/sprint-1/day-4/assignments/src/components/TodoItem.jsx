import React from "react";

const TodoItem = ({ item, handleDelte, handleComplted, editFun }) => {
  return (
    <div className="inputAllItems">
      <div>
        <input onChange={() => handleComplted(item.id)} type="checkbox" />
        <p
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            color: item.completed ? "grey" : "black",
          }}
        >
          {item.title}
        </p>
      </div>
      <div>
        <button
          onClick={() => editFun(item.id, item.title)}
          className="editBtn"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDelte(item.id)} className="delelteBtn">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
