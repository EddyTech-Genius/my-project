import React from 'react'
import "../main/styles/navbar.css"

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar
