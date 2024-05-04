import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Market from './Market.jsx'
import Dlaczegomy from './Dlaczegomy.jsx';
import Kontakt from './Kontakt.jsx';
import Onas from './Onas.jsx';
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
  {
    path: "/dlaczegomy",
    element: <Dlaczegomy />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
  {
    path: "/onas",
    element: <Onas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <RouterProvider router={router} />

);
