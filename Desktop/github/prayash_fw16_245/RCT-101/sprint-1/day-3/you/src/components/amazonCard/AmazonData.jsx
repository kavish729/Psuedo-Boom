import React from 'react'
import AmazonItem from './AmazonItem';
import { v4 as uuidv4 } from 'uuid';

const AmazonData = ({data}) => {
    
  return (
    <div>
      {
          data.map((item) => {
              return <AmazonItem key={uuidv4()} data={item}/>
          })
      }
    </div>
  )
}

export default AmazonData