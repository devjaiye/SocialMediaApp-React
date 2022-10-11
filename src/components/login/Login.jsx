import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
          <h3 className="loginLogo">DevSocial</h3>  
          <span className="loginDesc">Build a community of friends and connect on DevSocial</span>  
        </div>
        <div className="loginRight">
        <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegistrationButton">Create an Account</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login