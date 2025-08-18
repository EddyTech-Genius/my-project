import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./main/Home";
import ProductDetail from "./main/ProductDetail";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import { all_product } from "./utilities/all-products";
import Cart from "./pages/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  
  return (
    <div>
      <Router>
        <Navbar cartItems={cartItems}/>
        <Routes>
          <Route
            path="/"
            element={<Home products={all_product} addToCart={addToCart}/>}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail products={all_product} addToCart={addToCart} />
            }
          />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart cartItems={cartItems} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
