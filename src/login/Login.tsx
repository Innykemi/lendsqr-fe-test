import React, { useRef, useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LoginImage } from "../assets/images/login-img.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email) {
      setError("Email is required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long!');
      return;
    }

    navigate("/users");
  }

  return (
    <div className="login-wrapper" onSubmit={handleSubmit}>
      <div className="logo-banner">
        <Logo className="logo-img" />
      </div>
      <div className="login-img-wrapper">
        <LoginImage className="login-img" />
      </div>

      <div className="form-wrapper">
        <div className="header">
          <h1 className="title">Welcome!</h1>
          <div className="sub-title"> Enter details to login.</div>
        </div>

        <form>
          <div className="input-fields">
            <input type="email" ref={emailRef} placeholder="Email" className="email-input" />
            <input type="password" ref={passwordRef} placeholder="Password" className="password-input" />
          </div>
          {error && (
            <div className="error-text">{error}</div>
          )}
          <div className="forgot-password">Forgot Password?</div>
          <button className="login-btn" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
