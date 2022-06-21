import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todo,
  handleComplted,
  filterTodosByStatus,
  completedTodos,
  handleDelte,
  editFun,
  setCompleteTodos
}) => {

  

const doneDelete = (id) => {
  let deltedItem = completedTodos.filter((elem) => {
    return elem.id !== id;
  })

  setCompleteTodos(deltedItem)
}

  return (
    <>
      <div className="TodoList">
       
        {
         todo.map((item) => {
            return (
              <TodoItem
                handleDelte={handleDelte}
                key={item.id}
                item={item}
                handleComplted={handleComplted}
                editFun={editFun}
              />
            );
          })
           
        }
      </div>
      <div className="completedDiv">
        <button className="completedBtn" onClick={filterTodosByStatus}>
          Show completed items
        </button>
        {completedTodos.map((elem) => {
          return (
            <div key={elem.id}>
              <p>{elem.title}</p>
              <button
                onClick={() => doneDelete(elem.id)}
                className="delelteBtn"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
