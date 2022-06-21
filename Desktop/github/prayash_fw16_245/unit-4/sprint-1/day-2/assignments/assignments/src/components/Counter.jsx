import React from 'react';

function Counter(props) {

 let [counter,setValue,isEven] = React.useState(0)

//  destructuring
// React.useState =>  [ value, setValue ]

const handleMultiply = (value) => {

    setValue(counter+value)
   

}

  return (
 <>
       <h1>Counter</h1>
       <h1 style={{color:counter%2==0?"green":"red"}}>{counter}</h1>
       <button onClick={ () => handleMultiply(1)}>+</button>
       <button onClick={ () => handleMultiply(-1)}>-</button>
       <button onClick={ () => handleMultiply(counter)}>Double</button>
       
       </>
  );
}

export default Counter;


// git remote add origin https://github.com/prayaschhetri1/Counter_App_Using_React.git

