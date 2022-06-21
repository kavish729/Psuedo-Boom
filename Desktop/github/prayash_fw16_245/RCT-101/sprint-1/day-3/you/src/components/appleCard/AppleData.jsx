import React from 'react'
import AppleItem from './AppleItem';
import { v4 as uuidv4 } from 'uuid';

const AppleData = ({data}) => {
  
  return (
    <div>
    {
        data.map((item) => {
            return <AppleItem key={uuidv4()} data={item}/> 
        })
    }
  </div>
  )
}

export default AppleData