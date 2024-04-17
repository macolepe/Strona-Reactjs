import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Market from './Market.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/market",
    element: <Market />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <RouterProvider router={router} />

);
