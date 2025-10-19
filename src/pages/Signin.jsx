import React from "react";

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
        <button>Submit query</button>
        <br />
        <br />
        <input type="checkbox" id="checkbox1" name="checkbox1" />
        <label>
          I agree to the
          <Link class="blue" to="">
            terms & conditions
          </Link>
        </label>
        <Link to="">Sign up</Link>
      </form>
    </div>
  );
};

export default Signin;
