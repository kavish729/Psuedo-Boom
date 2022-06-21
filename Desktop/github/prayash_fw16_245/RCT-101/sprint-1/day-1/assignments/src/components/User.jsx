import React from 'react'

const User = ({name}) => {
    console.log(name)
  return (
    <div>
        <h1 key={name.id}>My name is {name.name}, from {name.from}</h1>
    </div>
  )
}

export default User