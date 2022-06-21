import React, { useReducer, useState } from "react";

let initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { name: action.name, completed: true }];

    case "REMOVE_TODO":
      return state.filter((item, id) => {
        return id !== action.index;
      });

    default:
      return state;
  }
};

const Todo = () => {
  const [task, dispatch] = useReducer(reducer, initialState);
  //   console.log(task)

  const [input, setInput] = useState("");
  const handleClick = () => {
    dispatch({
      type: "ADD_TODO",
      name: input,
      completed: false,
    });
    setInput("");
  };

  return (
    <div className="main-div">
      <h1>Todo App</h1>
      <div className="input-div">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Add something here"
        />
        <button onClick={handleClick}>+</button>
      </div>
      <div className="items_div">
          
        {task.map((item, index) => {
            if(item.name.length === 0){
                return null;
            }
            else{
                return (
                    <ul className="list-items" key={index}>
                        <div>
                      <li>
                        {item.name}
                        
                      </li>
                      <button
                          onClick={() => dispatch({ type: "REMOVE_TODO", index })}
                        >
                          Remove
                        </button>
                        </div>
                    </ul>

                  );
                }
                })}
            
          
      </div>
    </div>
  );
};

export default Todo;
