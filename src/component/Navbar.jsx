import React from 'react';
import { Link } from 'react-router-dom';
import "../main/styles/navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <div>
            <h2 className='logo'><i>Ed's</i></h2>
          </div>
          <div className='after__logo'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>

          <span>|</span>

          <li className="sign__up">
            <Link style={{color: "#7772c5"}} to={'/signin'}>Sign in</Link>
          </li>
          <li className="sign__in">
            <Link style={{color: "#fff"}} to={'/signup'}>Sign up</Link>
          </li>
          <li>
            <Link to="/cart" className='cart'>
              <i className="fa-solid fa-cart-shopping"></i>
              <p className='cart__quantity'>{cartItems.length}</p>
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
