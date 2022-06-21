import React from 'react'

const AppleItem = ({data}) => {
  return (
    <div>
         <div className="container2">
      <div className="rightSide">
        <p>{data.date}</p>
        <button>{data.button}</button>
        <h1>{data.heading}</h1>
        <p>{data.subHeading}</p>
      </div>
      <div className="leftSide">
      <i class="fa-brands fa-apple"></i>
        <i style={{fontSize:"35px"}} className="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
    </div>
  )
}

export default AppleItem