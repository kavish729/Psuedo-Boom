import React from "react";

const TableItem = ({item,handleDelete,index}) => {
  return (
    <>
    <tr>
        <td>{index+1}</td>
        <td> {item.username} </td>
        <td> {item.age} </td>
        <td> {item.address} </td>
        <td> {item.department} </td>
        <td> {item.salary} </td>
        {item.maritial ? <td>Married</td> : <td>Not Married</td> }
        <td>
        <button onClick={()=>handleDelete(item.id)} className="btn btn-danger">Delete</button>
        </td>
        
      </tr>
    </>
  );
};

export default TableItem;
