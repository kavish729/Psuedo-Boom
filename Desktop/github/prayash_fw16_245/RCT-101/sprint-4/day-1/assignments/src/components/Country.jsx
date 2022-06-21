import React,{useContext, useEffect,useState} from 'react';
import axios from 'axios';
import styles from './Country.module.css'
import Cities from './Cities';
import { CityContext } from '../context/CityContext';

const Country = () => {
    const [countries,setCountries] = useState([])
    const [name,setName] = useState("");
    const {isDark} = useContext(CityContext)

    const getCountries = () => {
       axios({
        url: 'https://62a33e325bd3609cee665c35.mockapi.io/countries',
        method: "GET",
    }).then(res => {
        setCountries(res.data)
    })
    }

    const addCountries = (name) => {
        axios({
         url: 'https://62a33e325bd3609cee665c35.mockapi.io/countries',
         method: "POST",
         data : {
            name
         }
     }).then(res => {
        getCountries(res)
     })

     }

   useEffect(() =>{
    getCountries()
   },[])


   

 const handleAdd = (name) => {
    addCountries(name)
    console.log(countries)
 }

  return (
    <div className={styles.mainDiv}>
    <div className={isDark==="light" ? styles.lightcountry_div : styles.darkcountry_div}>
        <h1>ADD COUNTRY HERE</h1>
        <div>
        <input className={styles.country_input} type="text" onChange={(e) => setName(e.target.value)} placeholder="Add country name" />
        <button onClick={()=>handleAdd(name)}>ADD</button>
        </div>
        <select className={styles.select_option}>
          {
            countries.map(country => {
                return <option key={country.id} value={country.name}> {country.name} </option>
            }) 
          }
        </select>

    </div>

     <div>
        <Cities countries={countries}/>
     </div>
    </div>
  )
}

export default Country