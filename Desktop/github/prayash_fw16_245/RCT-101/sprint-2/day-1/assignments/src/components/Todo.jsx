
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");
  const [page, setPage] = useState(1);
  //  get data from input or post data

  const getData = async (page) => {
    try {
      let res = await fetch(
        `http://localhost:8080/todos/?_page=${page}&_limit=4`
      );
      let data = await res.json();
      setTodos(data);
    //   console.log(todos.length)
    } catch (e) {
      console.log(e);
    }
  };
   
  const postData = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: newTodos,
        done: false,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        setTodos([...todos, d]);
        setNewTodos("")
      });
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  //   delete button

  const handleClick = (id) => {
    let newArr = todos.filter((elem) => {
      return elem.id !== id;
    });
    setTodos(newArr);
    deleteLocal(id);
  };

  const deleteLocal = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
  };

  // EDIT FUNCTIONALITY

  const handleEdit = (elem) => {
    setNewTodos(elem.value);
    handleClick(elem.id);
  };



  return (
    <>
      <p className="headingPart">TODO APP</p>
      <div className="addInputDiv">
        <input
          className="Add-input"
          type="text"
          value={newTodos}
          onChange={(e) =>{ setNewTodos(e.target.value)
        
        }}
          placeholder="Add something here"
        />
        <button onClick={postData}>+</button>
      </div>
      <br />
      <div className="itemsMainDiv">
      {todos.map((elem) => {
        if (elem.value.length>1) {
          return (
            <div className="itemDIv" key={elem.id}>
              <p className="main-value">{elem.value}</p>
              <div className="editbtnDiv">
                <button className="editBtn" onClick={() => handleEdit(elem)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="deleteBtn" onClick={() => handleClick(elem.id)}><i className="fa-solid fa-circle-xmark"></i></button>
              </div>
            </div>
          );
        }
      })}
      </div>
      <div className="editDeleteDiv">
      <button disabled={page===1} onClick={() => setPage(page - 1)}>Previous</button>
      <p>{page}</p>
      <button  onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Todo;
