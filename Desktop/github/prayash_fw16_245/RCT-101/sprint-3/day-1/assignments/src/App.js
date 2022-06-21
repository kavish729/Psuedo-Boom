import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import React,{ useContext } from 'react';


function App() {
 
  const {IsTheme,theme} = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={IsTheme ? "light" : "dark"}>
      
     <Navbar/>
     <Form/>
     <Footer/>
 
    </div>
  );
}

export default App;
