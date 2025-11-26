
import React from 'react'
import "../main/styles/signup.css"

const Signup = () => {
  return (
    <div className="sign_up_container">
      <h1 className='sign_up_header'>Sign Up Here</h1>

      <div class="inputs">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
      </div>
<br />
      <button type='submit' className='sign_up_button'>Create Account</button>
<br />
      <div class="sign-in">
        <p>Already have an account?</p>
        <a href="signin.html">Sign in</a>
      </div>

      <div class="icons">
        <div class="google">
          <i class="fa-brands fa-google" style={{color: "#74c0fc"}}></i> Google
        </div>
        <div class="apple"><i class="fa-brands fa-apple"></i> Apple</div>
      </div>
    </div>
  )
}

export default Signup;
