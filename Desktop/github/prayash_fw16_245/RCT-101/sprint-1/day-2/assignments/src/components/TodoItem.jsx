import React from 'react'

const TodoItem = (props) => {
    console.log(props)
  return (
       <div>
        <p>{props.item}</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLn0PFXUG3FGGlVFrgRxbj3z3XAU6rYU19Q&usqp=CAU" alt="" />
        </div>
   
  )
}

export default TodoItem