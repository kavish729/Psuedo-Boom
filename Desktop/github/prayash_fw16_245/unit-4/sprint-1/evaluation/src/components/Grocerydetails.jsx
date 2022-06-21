import React from "react"
import data from '../data.json'
import style from "./My.style.css"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <h6>Top Details</h6>
        <div className="container">
            {/* map through the data and display the cards */
             data.map(({id,imgURL,mrp,sellingPrice,title})=>{
                 return <div className={style.main}>
                     <img src={imgURL}/>
                     <p> {title}</p>
                     <div className="price">
                         <p>{sellingPrice}</p>
                         M.R.P
                         <s>{mrp}</s>
                     </div>
                 </div>
             })

          
            }
        </div>
        </>
    )
}
export default GroceryDetails