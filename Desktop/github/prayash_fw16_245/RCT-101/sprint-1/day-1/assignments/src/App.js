
import './App.css';
import Mobile from './components/Mobile';
import User from './components/User';


function App() {
  let info = [
    {name:"prayash",from:"siliguri",id:23},
    {name:"govind",from:"jaipur",id:21},
    {name:"kavish",from:"bijoliya",id:26},
    {name:"varun",from:"jodhpur",id:12},
  ]

  return (
    <div className="divPad">
      {/* <Mobile/> */}
     { info.map((item) => {
       return  <User name={item}/>
      })

    }
      
    </div>
  );
}

export default App;
