import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
  } from "react-router-dom";
import '@assets/css/App.css'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";    
import { router } from './route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
