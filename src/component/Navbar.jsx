import React from 'react'
import {Link} from 'react-router-dom'
import "../main/styles/navbar.css"

const Navbar = ({cartItems}) => {
  return (
    <div>
      <nav>
          <ul>
            <Link to={'/'}>
              Home
            </Link>
            <Link to={'/contact'}>
              <a href="">Contact</a>
            </Link>

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
            <li>
            <Link to="/cart" className='cart'>
              <i className="fa-solid fa-cart-shopping"></i><p className='cart__quantity'>{cartItems.length}</p>
            </Link>
          </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
