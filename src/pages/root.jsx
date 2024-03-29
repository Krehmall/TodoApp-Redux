import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  const selectedTodo = useSelector((state) => state.todos.selectedTodo);
  const isUserLoggedIn = useSelector((state) => state.users.loggedInUser);

  useEffect(() => {
    console.log(selectedTodo);
  }, [selectedTodo]);

  return (
    <main className="main">
      <header>
        <div className="header-container">
          <h2 className="logo">Todos</h2>
          {!isUserLoggedIn ? "" : <NavBar />}
        </div>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
