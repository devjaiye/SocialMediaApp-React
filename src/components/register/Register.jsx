  import React from 'react'
  import "./Register.css"

  const Register = () => {
    return (
      <div className="register">
          <div className="registerWrapper">
              <div className="registerLeft">
            <h3 className="registerLogo">DevSocial</h3>  
            <span className="registerDesc">Build a community of friends and connect on DevSocial</span>  
          </div>
          <div className="registerRight">
          <div className="registerBox">
              <input placeholder="Username" className="registerInput" />
              <input placeholder="Email" className="registerInput" />
              <input placeholder="Password" className="registerInput" />
              <input placeholder="Confirm Password" className="registerInput" />
              <button className="registerButton">Register</button>
              <button className="loginRegistrationButton">Login your account</button>
          </div>
          </div>
          </div>
      </div>
    )
  }

  export default Register