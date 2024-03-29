import React, { useEffect } from "react";
import AddTodo from "../components/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { setEditedTodo } from "../store/todosSlice";
import { useNavigate } from "react-router-dom";

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);
  const isUserLoggedIn = useSelector((state) => state.users.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);

  const handleEdit = (id) => {
    dispatch(setEditedTodo(id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h2 className="heading">Todo List</h2>
        <AddTodo />
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
