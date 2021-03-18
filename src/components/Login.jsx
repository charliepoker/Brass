import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="login-page">
        <div className="form-container">
          <form action="">
            <h2>Log in to your account</h2>
            <input
              type="text"
              placeholder="Email Address"
              className="email-input"
              name="email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="text"
              placeholder="Enter Password"
              className="password-input"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <Link to="/welcome">
              <Button btnStlye="btn-login" text="Log me in" />
            </Link>
          </form>
          <div className="form-text">
            <p>Forgot your password?</p>
            <span>
              <Link to="#">Reset it here</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
