import React from "react";

const ShowForm = ({ value }) => {
    console.log(value)
  return (
    <>
      <tr>
        <td> {value.name} </td>
        <td> {value.age} </td>
        <td> {value.address} </td>
        <td> {value.department} </td>
        <td> {value.salary} </td>
        {value.maritial ? <td>Married</td> : <td>Not Married</td> }
      </tr>
    </>
  );
};

export default ShowForm;
