
import "./home.css";
import "./contact.css"
import "./service.css"
import React, {useState} from "react";
import {all_product, productImages} from "../utilities/all-products"

function Home() {
  const [products, setProducts] = useState(all_product);

  console.log(products);
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
        {/* <!-- <aside> --> */}
        {/* <!-- <div className="side__gaming">
          <h2>Gaming Accessories</h2>
          <p>Headset</p>
          <p>Oculus</p>
          <p>Laptops</p>
          <p>Mouse</p>
          <p>Keyboard</p>
          <p>Consoles</p>

          <h2>Clothes</h2>
          <p>Trousers</p>
          <p>Skirt</p>
          <p>T-Shirts</p>
          <p>Shoes</p>
          <p>Coats</p>
          <p>Bags</p>

          <h2>Gym</h2>
          <p>Treadmill</p>
          <p>Dumbbells</p>
          <p>Jump Rope</p>

          <h2>Sports</h2>
          <p>Football</p>
          <p>Football Boots</p>
          <p>Basketball</p>
          <p>Gloves</p>
          <p>Tennis</p>
          <p>Socks</p>

          <h2>Electronics</h2>
          <p>Fridge</p>
          <p>Mobile Phones</p>
          <p>AirPods</p>
          <p>Blenders</p>
          <p>Microwaves</p>
          <p>Television</p>

          <button className="back-home">Go Back Home</button>
        </div>
      </aside> --> */}
        <div className="container">
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card Image" />
            <h3>Black Jeans</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
          </div>
          {/* <div className="card">
            <img src="https://via.placeholder.com/300" alt="Card Image" />
            <h3>Card Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Card Image" />
            <h3>Card Title 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Card Image" />
            <h3>Card Title 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Card Image" />
            <h3>Card Title 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Card Image" />
            <h3>Card Title 6</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
          </div> */}
        </div>
      </section>
      <section id="contact">
        <div className="contact__container">
          <div className="img__contact">
            <img src="/Assets/contact-image.png" alt="" />
          </div>
          <div className="contact__text">
            <h2>CONTACT US</h2>

            <input placeholder="Your name..." type="text" className="inputs" />
            <input placeholder="Your email..." type="email" className="inputs" />
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
