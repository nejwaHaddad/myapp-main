import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
      createBrowserRouter ,
      RouterProvider ,
      Route ,
      
}from "react-router-dom";

import  Home  from "./pages/home";
import  Html  from "./pages/html";
import  Css  from "./pages/css";
import  JavaS  from "./pages/javascript";



const router = createBrowserRouter([
  {
    //To go in page Home 
  path: "/",
  element: <Home />,
  errorElement: <h1>SORRY................</h1>,
},
//To go in page HTML 
{
  path: "/html",
  element: <Html />,
},

//To go in page CSS
 {
  path: "/css",
  element: <Css />,
},
//To go in page JavaScript 
{
  path: "/javascript",
  element: <JavaS />,
},
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
