import React from 'react'

const Square = ({className,state,onClick}) => {
    const classes = className ? `${className} square`: "square" ;
    
  return (
    <span onClick={onClick} className={classes} style={{color: state==="0" ? "white" : "#f309db"}}>
      {state}
    </span>
   
  )
}

export default Square;