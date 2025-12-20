import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main/styles/navbar.css";

const Navbar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <div className="logo-container">
            <h2 className="logo">
              <i>Ed's</i>
            </h2>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={
                menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </button>

          <div className="searchbar">
            <input type="search" placeholder="Search..." />
            <i
              id="search"
              className="fa-solid fa-magnifying-glass"
            ></i>
          </div>

          <div className={`after__logo ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <span className="divider">|</span>

            <li className="sign__up">
              <Link to="/signin" onClick={() => setMenuOpen(false)}>
                Sign in
              </Link>
            </li>

            <li className="sign__in">
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Sign up
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="cart"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="cart__quantity">
                  {cartItems.length}
                </p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
