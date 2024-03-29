import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, username: "admin123", password: "123", eMail: "admin@123.com", isAdmin: true },
    { id: 2, username: "user123", password: "123", eMail: "user@123.com", isAdmin: false },
  ],
  loggedInUser: null,
  showCredentsEror: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser(state, action) {
      const { username, password, eMail } = action.payload;
      const newUser = {
        id: Math.floor(Math.random() * 10000),
        username,
        password,
        eMail,
        isAdmin: false,
      };
      state.users.push(newUser);
    },

    logInUser(state, action) {
      const { username, password } = action.payload;
      const existingUser = current(state.users).find((user) => user.username === username && user.password === password);
      if (!existingUser) {
        state.showCredentsEror = true;
      }
      state.loggedInUser = existingUser;
      console.log(state.loggedInUser);
    },

    logOutUser(state) {
      state.loggedInUser = null;
      console.log(state.loggedInUser);
    },
  },
});

export const { registerUser, logInUser, logOutUser } = usersSlice.actions;

export default usersSlice.reducer;
