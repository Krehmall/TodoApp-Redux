import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import SelectedTodo from "./pages/selected-todo";
import TodoApp from "./pages/todo-app";
import Root from "./pages/root";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ProfilePage from "./pages/profile-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<TodoApp />} />
      <Route path="todo/:id" element={<SelectedTodo />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
);

export default router;
