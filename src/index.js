import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CONSUMERPAGE,
  MYCARTPAGE,
  REGISTERPAGE,
  SELLONPAGE,
  SIGNINPAGE,
} from "./Paths/paths";
import Sellon from "./components/SellOn/Sellon";
import Register from "./components/Register/Register";
import Consumer from "./components/Consumer/Consumer";
import SignIn from "./components/Sign-In/SignIn";
import MyCart from "./components/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: SELLONPAGE,
    element: <Sellon />,
  },
  {
    path: REGISTERPAGE,
    element: <Register />,
  },
  {
    path: CONSUMERPAGE,
    element: <Consumer />,
  },
  {
    path: SIGNINPAGE,
    element: <SignIn />,
  },
  {
    path: MYCARTPAGE,
    element: <MyCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
