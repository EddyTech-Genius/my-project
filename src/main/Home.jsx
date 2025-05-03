import React from "react";
import "./styles/home.css";
import "./styles/contact.css";
import "./styles/service.css";
import ProductList from "./ProductList";

const Home = ({ products }) => {
  return (
    <>
      <section id="home">

        <h1>Welcome To Ed's Sales Site</h1>
        <p>
          Here we give you the best experience. Just sit back and enjoy shopping
        </p>

        <button className="intro__button">Let's Start</button>
      </section>
      <section id="services">
        {/* <div className="service-title">
          <h1>Latest Products</h1>
        </div> */}
        {/* <div className="container">
          {products.map((products) => (
            <div key={products.id} className="card">
              <img src={`/assets/${products.image}`} alt={products.name} />
              <h3>{products.name}</h3>
              <div className="prices">
                <strike style={{ color: "red" }}>
                  ${products.price + Math.floor(Math.random() * 50)}
                </strike>
                <p>${products.price}</p>
              </div>
              <Link to={`/product/${products.id}`}>
                <p className="read_more">Read More</p>
              </Link>
              <p className="buy">Buy Now</p>
            </div>
          ))}
          <div />
        </div> */}
        <ProductList products={products} />
      </section>
    </>
  );
};

export default Home;
