import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Parent from "./context/Parent";
import Todo from "./projects/todoapp/Todo.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Price from "./components/Price.jsx";
import Categories from "./components/Categories.jsx";
import Admin from './components/Admin.jsx'
import User from './components/User.jsx'
import Notfound from "./components/Notfound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <>
        <Nav />
        <About />
      </>
    ),
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "/price",
    element: (
      <>
        <Nav />
        <Price />
      </>
    ),
  },
  {
    path: "/Categories/:id",
    element: (
      <>
        <Nav />
        <Categories />
      </>
    ),
  },
  {
    path:'*',
    element:<Notfound/>
  }
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
