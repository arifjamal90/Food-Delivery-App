import React, { useState } from "react";
import "./Loginpopup.css";

const Loginpopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const toggleState = () => {
    setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
  };

  return (
    <div className="login-popup" id="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src="../../assets/cross_icon.png"
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use and privacy policy
          </p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={toggleState}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={toggleState}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
