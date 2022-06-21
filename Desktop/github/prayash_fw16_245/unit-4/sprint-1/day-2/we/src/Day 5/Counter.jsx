import React from 'react'

const Counter = () => {
 
    const [count,setCount] = React.useState(0)
  
  return (
    <div>
     
     <h1>Counter :{count}</h1>
     <button onClick={() => setCount(count+1)}>Increment</button>
     <button onClick={() => setCount(count-1)}>Increment</button>

    </div>
  )
}


