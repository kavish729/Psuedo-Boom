
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RequiredAuth from './hoc/RequiredAuth';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="feed" element={<Feed/>}/>
      <Route  path="posts" element={
       <RequiredAuth>
        
       </RequiredAuth>

      }/>
    </Routes>
    </div>
  );
}

export default App;
