import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/usersSlice";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleRegister = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    if (!username.trim() || !password.trim() || !email.trim()) return;
    dispatch(registerUser({ username, password, email }));
    navigate("/login");
  };

  return (
    <div className="app">
      <div className="form-container">
        <h2 className="heading">Register form</h2>

        <form className="form-wrapper" onSubmit={handleRegister}>
          <div className="input-wrapper">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" ref={emailRef} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" ref={usernameRef} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} />
          </div>

          <button className="btn-register">Register</button>
        </form>
        <div className="auth-switch">
          <p>
            Already have an account?{"  "}{" "}
            <button className="button-text" onClick={() => navigate("/login")}>
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
