import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice"
import todoReducer from "./todosSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todoReducer,
  },
});

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

export default store;

window.gStore = store;
