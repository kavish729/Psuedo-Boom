import {useState} from 'react'

function Button () {

 const [count,setCount] = useState(0);
 

 const handleInc = (value) => {

  setCount(count+value);

 }

 const handleDec = (value) => {
     setCount(count-value)
    
 }


 return (

    <>
     <h1>{count}</h1>

    <button onClick= { () => handleInc (2)}>+</button>
    <button onClick= { () => handleDec (2)}>-</button>
    </>

 )

}
export default Button;