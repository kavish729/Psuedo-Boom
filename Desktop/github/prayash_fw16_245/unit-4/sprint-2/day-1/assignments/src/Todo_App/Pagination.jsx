import React from "react";
import styles from "./Todo.module.css"
const Pagination = ({ todosPerPage, totalTodos,paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
 
  console.log(totalTodos)
  return (
    <div className={styles.todoBtn}>
      {pageNumbers.map((numbers) => {
        return <button onClick={() => paginate(numbers)} key={numbers} >{numbers}</button>;
      })}
    </div>
  );
};

export default Pagination;
