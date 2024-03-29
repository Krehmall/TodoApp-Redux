import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../store/usersSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showCredentsEror = useSelector((state) => state.users.showCredentsEror);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    dispatch(logInUser({ username, password }));
    navigate("/");
  };

  return (
    <div className="app">
      <div className="form-container">
        <h2 className="heading">Login form</h2>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" ref={usernameRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          {showCredentsEror ? <p className="eror-text">*Invalid credentials!!!</p> : <p></p>}

          <button className="btn-login">Login</button>
        </form>
        <div className="auth-switch">
          <p>
            Don't have an account?{" "}
            <button className="button-text" onClick={() => navigate("/register")}>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
