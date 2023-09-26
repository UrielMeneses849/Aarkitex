
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//rutas
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import RegistroEmpleado from './pages/RegistroEmpleado/RegistroEmpleado';
import RegistroEmpleador from './pages/RegistroEmpleador/RegistroEmpleador';
import RegistroEmpleado2 from './pages/RegistroEmpleado/RegistroEmpleado2';
//Elementos

import './index.css';

const router = createBrowserRouter([{
    path: "/Aarkitex",
    element: <Home />
  },
  {
    path: "Arkitex/Login",
    element: <Login />
  },
  {
    path: "/Arkitex/RegistroEmpleado",
    element: <RegistroEmpleado />
  },
  {
    path: "/Arkitex/RegistroEmpleador",
    element: <RegistroEmpleador />
  },
  {
    path: "/Aarkitex/RegistroEmpleado2",
    element: <RegistroEmpleado2/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
