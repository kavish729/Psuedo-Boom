import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />

      </Routes>
    </div>
  );
}

export default App;
