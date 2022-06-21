import "./Todo.css"
import React from "react"

const TodoList = () => {
 
 const [task,setTask] = React.useState("")
 const [todo,setTodo] = React.useState([])
 
 const handleClick = () => {

  setTodo([...todo,task])
  
 }

 return (

   <>
   <div className="items">
      {

todo.map((item) => {

    return  <h1>{item}</h1>
})
}
</div>

     <div className="todo">
     <input type= {"text"} value={task} placeholder="Write Something"
      onChange={ (e) => setTask(e.target.value) } />
     <button onClick = {handleClick}>+</button>
     </div>



   
   </>

 )

}

export {TodoList}