import React, { createContext, useState } from 'react';

export const TodoContext = createContext()
export const TodoProvider = ({children}) => {
    const [task,setTask] = useState("")
    const  handleChange = (e) => {
        setTask(e.target.value)
        console.log(e.target.value)
     }
    return (
        <TodoContext.Provider value={{handleChange,task,setTask}}>
            {children}
        </TodoContext.Provider>
    )
}