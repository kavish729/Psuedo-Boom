import styles from "./Card.module.css"

function Card ({name,img_url,qualification,istitute}){

return (

    <div className={styles.card}>

    <div className="left_content">
      <img src={img_url} alt="" />
    </div>

    <div className="right__content">
        <h1 style = {{color:"blue"}}>Name : {name}</h1>
        <h2>Qualification : {qualification}</h2>
        <h2>Institute : {istitute}</h2>
    </div>

</div>

)




}




export default Card;