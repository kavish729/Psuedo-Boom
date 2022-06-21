import React, { useState } from "react";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <p
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          color: isChecked ? "grey" : "black",
        }}
      >
        {props.item}
      </p>
      <input onChange={handleChecked} type="checkbox"  />
    </div>
  );
};

export default TodoItem;
