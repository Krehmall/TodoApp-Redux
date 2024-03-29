import React from "react";
import { logOutUser } from "../store/usersSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    dispatch(logOutUser());
    navigate("/login");
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <button className="btn-logout" onClick={() => dispatch(handleLogOut())}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
