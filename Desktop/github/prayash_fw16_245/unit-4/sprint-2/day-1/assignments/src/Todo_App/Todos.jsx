import React, { useState, useEffect } from "react";
import { AddTodo } from "./AddTodo";
import Pagination from "./Pagination";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(3);

  const lastTodoInd = currentPage * todosPerPage;
  const firtstTodoInd = lastTodoInd - todosPerPage;
  const currentTodos = todos.slice(firtstTodoInd, lastTodoInd);

  // creating paginations
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onAdd = (task) => {
    //    POST API

    setTodos([task,...todos]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //   getTodos();

  useEffect(() => {
    const getTodos = async () => {
      try {
        let res = await fetch("http://localhost:3000/todos");
        let data = await res.json();
        console.log(data);
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      <div className="main_pagi">
        <AddTodo onAdd={onAdd} />
        {currentTodos.map((item) => (
          <Todo key={item.id} todo={item} onDelete={onDelete} />
        ))}
      </div>

      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Todos;
