import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todoReducer,
  },
});

export default store;

window.gStore = store;
