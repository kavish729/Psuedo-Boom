
import React from 'react'

import {TodoItem} from "./TodoItem.jsx";


import './Todo.css';

function Todo() {
    const[query,setQuery]=React.useState("")
    const [tasks, setTasks]=React.useState([]);
    const handleChange=(e)=>{
     const {value} = e.target;
     setQuery(value);
     
};

const handleaddItem=()=>{

const payload={
title:query,
status:false

};
let newTask =[...tasks,payload]
setTasks(newTask);
}
  return (
    <div id="container">
    
    <div >
    {tasks.map((item)=>{
       
       return <TodoItem {...item} />;



    })}
     </div>
      <div>
   <input  type="text" value={query}
   onChange={handleChange}
    placeholder="Write Something" />
    <button onClick={handleaddItem}>+</button>

   </div>
   
    </div>
  )
}

export default Todo