import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/cart" element={<Login/>} />
        
      </Routes>
    </div>
  );
}

export default App;
