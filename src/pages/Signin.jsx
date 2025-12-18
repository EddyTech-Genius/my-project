import React from "react";
import { Link } from "react-router-dom";
import "../main/styles/signin.css";

const Signin = () => {
  return (
    <div>
      <form>
        <h2>
          SIGN IN <span> HERE</span>
        </h2>
        <br />
        <input
          class="text"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
        />
        <br />
        <br />
        <input
          class="email"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
        />
        <br />
        <br />
        <input
          class="password"
          type="password"
          id="password"
          name="password"
          placeholder="Your Password"
        />
        <br />
        <br />
        <button className="sign_in_button">Submit query</button>
        <br />
        <br />
        <input type="checkbox" id="checkbox1" name="checkbox1" />
        <label>
          I agree to the
          <span>  </span>
          <a class="blue" to="">
            terms & conditions
            <span>  </span>
          </a>
        </label>
        <Link to={"/signup"} style={{color: "#7772c5"}}>Sign up</Link>
      </form>
    </div>
  );
};

export default Signin;
