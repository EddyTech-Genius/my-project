import React from 'react';
import { Link } from 'react-router-dom';
import "../main/styles/navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>

          <div className="input__container">
            <input type="search" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <span>|</span>

          <li className="sign__in">
            <Link style={{color: "#7772c5"}} to={"/Signin"}>Sign in</Link>
          </li>
          <li className="sign__up">
            <Link style={{color: "#fff"}} to={"/Signup"}>Sign up</Link>
          </li>
          <li>
            <Link to="/cart" className='cart'>
              <i className="fa-solid fa-cart-shopping"></i>
              <p className='cart__quantity'>{cartItems.length}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
