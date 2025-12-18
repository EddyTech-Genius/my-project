import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <nav class="navbar">
      <ul class="navbar__list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        {/* TODO: replace with search icon */}
        {/* <div className="searchbox">
          <input type="search" placeholder="Search" />
        </div> */}
      </ul>
      {/* Logo */}
      <h3 className="logo">Ed's Sales Site</h3>
      {/* Logo end */}
      <div className="navbar__aside">
        <div className="auth-buttons">
          <button className="signin">
            <Link to={"/Signin"}>Sign in</Link>
          </button>
          <button className="signup">
            <Link to={"/Signup"}>Sign up</Link>
          </button>
        </div>
        <Link to="/cart" className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="cart__quantity" title={`You have ${cartItems.length} items in your cart!`}>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
