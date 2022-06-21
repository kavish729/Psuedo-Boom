import React from 'react';

const Todo = () => {

   const [task,setTask] = React.useState("") 
   
   const [todo,setTodo] = React.useState([])
   const handleChange = (e) => {
   
    // console.log(e.target.value)
    setTask(e.target.value)

   }

   const handleClick = () => {
    
    
    setTodo([...todo,task])

   }
  

 return (
     <>
      
     
      <input type= {"text"}  placeholder="Add something here" 
      onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>
      {todo.map((item) => {

        return <h1>{item}</h1>

      })}
     </>
 )


}

export default Todo;