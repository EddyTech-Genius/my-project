import React from "react";
import "./styles/home.css";
import "./styles/contact.css";
import "./styles/service.css";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <>
      {" "}
      <section id="home">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>

            <div className="input__container">
              <input type="search" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <span>|</span>

            <li className="sign__in">
              <a href="">Sign in</a>
            </li>
            <button className="sign__up">
              <li>
                <a href="">Sign up</a>
              </li>
            </button>
          </ul>
        </nav>

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
        <div className="container">
          {products.map((products) => (
            <div key={products.id} className="card">
              <img src={`/assets/${products.image}`} alt={products.name} />
              <h3>{products.name}</h3>
              <div className="prices">
                <strike style={{ color: "red" }}>${products.price + Math.floor(Math.random() * 50)}</strike>
                <p>${products.price}</p>
              </div>
              <Link to={`/product/${products.id}`}>
                <p className="read_more">Read More</p>
              </Link>
              <p className="buy">Buy Now</p>
            </div>
          ))}
          <div />
        </div>
      </section>
      <section id="contact">
        <div className="contact__container">
          <div className="img__contact">
            <img src="/assets/contact-image.png" alt="" />
          </div>
          <div className="contact__text">
            <h2>CONTACT US</h2>

            <input placeholder="Your name..." type="text" className="inputs" />
            <input
              placeholder="Your email..."
              type="email"
              className="inputs"
            />
            <textarea
              placeholder="Your message..."
              className="inputs"
              rows="5"
              id=""
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
