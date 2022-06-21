import React,{useState} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({value}) => {
    
    
  return (
    <div className="TodoList">
          {
            value.map((item) => {
                return (
                    <TodoItem item={item.task} key={item.id}/>
                )
            })
        }
        
        
         
        
    </div>
  )
}

export default TodoList