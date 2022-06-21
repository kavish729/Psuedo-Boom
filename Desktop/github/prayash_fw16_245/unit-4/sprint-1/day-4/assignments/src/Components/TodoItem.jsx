import React from "react";

const TodoItem = (props) => {
  const { id, title, hatao } = props;

  return (
    <>
      <h1>{title}</h1>
      <button onClick={()=>hatao(id)}>Delete</button>
    </>
  );
};

export default TodoItem;
