import styles from "./Button.module.css";

function ButtonComponent({ page,title, onClick, disabled, id }) {
  
  return (
    <button id={id} disabled={page === 1} onClick={()=>onClick(page)} data-testid="button-component" className={styles.button}>
      {title}
    </button>


  );
}

export default ButtonComponent;
