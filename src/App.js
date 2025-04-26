import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './main/Home';
import ProductDetail from './main/ProductDetail';
import {all_product} from "./utilities/all-products"

function App() {
  return (
  <div>
    <Router>
       <Routes>
        <Route path="/" element={<Home products={all_product}/>} />
        <Route path="/product/:id" element={<ProductDetail products={all_product}/>} />
       </Routes>
    </Router>
  </div>
  );
}

export default App;
