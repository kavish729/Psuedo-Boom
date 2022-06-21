import React from 'react'

const Links = ({items}) => {
  return (
    <div className="links">
      {
          items.map((user,index) => {
            
            return  (
                <ul key={index}>
               <li> {user} </li>
            </ul>
            )
          })
      }
    </div>
  )
}

export default Links