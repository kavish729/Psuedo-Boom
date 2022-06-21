import React,{useEffect,useState} from 'react';
import axios from 'axios'

const Todos = () => {
    const [todos,setTodos] = useState([])
    useEffect(() => {
      const getData = async () => {
        try{
          let res = await axios(`http://localhost:8080/todos?_page=1&_limit=20`)
          setTodos(res.data)
        }
       catch(e){
         console.log(e)
       }
      }
      getData()
    },[])
    return (
      <div className="App">
        {
          todos.map((elem) => {
            return (
              <div key={elem.id}>
                <p> {elem.value} </p>
              </div>
            )
          })
        }
      </div>
    );
}

export default Todos