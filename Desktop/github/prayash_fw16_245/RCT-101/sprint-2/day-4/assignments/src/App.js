import logo from './logo.svg';
import './App.css';
import data from './data.json'
import RestaurantDetails from './components/RestaurantDetails';
import { useContext } from 'react';
import { DarkContext } from './darkContext/DarkContext';

function App() {
  const {isDark} = useContext(DarkContext)
  return (
    <div className={isDark==="light" ? "light" : "dark"}>
     <RestaurantDetails data={data} />
  
    </div>
  );
}

export default App;
