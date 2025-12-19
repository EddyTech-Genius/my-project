import React from "react";
import "./styles/home.css";
import "./styles/contact.css";
import "./styles/service.css";
import ProductList from "./ProductList";
// import { Link } from "react-router-dom";

const Home = ({ products, addToCart }) => {
  return (
    <>
      <section id="home">
        
        <div className="home__wrapper"><h1>Welcome To Ed's Sales Site</h1>
        <button className="intro__button" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Let's Start</button></div>
        
      </section>
      <section id="services">
        <ProductList products={products} addToCart={addToCart} />
      </section>
    </>
  );
};

export default Home;
