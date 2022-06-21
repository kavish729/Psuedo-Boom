import React, { useContext } from 'react'
import { CityContext } from '../context/CityContext'

const City = ({details,index}) => {
 const {handleDelete,isDark} = useContext(CityContext)
  return (
    <tr>
    <td>{index+1}</td>
    <td> {details.name} </td>
    <td> {details.population} </td>
    <td> {details.country} </td>
    <td>
    <button onClick={()=>handleDelete(details.id)} className={isDark==="light" ? `btn btn-dark` : `btn btn-danger`} >Delete</button>
    </td>
    
  </tr>
  )
}

export default City