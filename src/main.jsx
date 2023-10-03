
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//rutas
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegistroEmpleado from './pages/RegistroEmpleado/RegistroEmpleado';
import RegistroEmpleador from './pages/RegistroEmpleador/RegistroEmpleador';
import RegistroEmpleado2 from './pages/RegistroEmpleado/RegistroEmpleado2';
//Elementos

import './index.css'
import RegistroEmpleado3 from './pages/RegistroEmpleado/RegistroEmpleado3';
import Inicio from './pages/Inicio/Inicio'
const router = createBrowserRouter([{
    path: "/Aarkitex",
    element: <Home />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/RegistroEmpleado",
    element: <RegistroEmpleado />
  },
  {
    path: "/RegistroEmpleador",
    element: <RegistroEmpleador />
  },
  {
    path: "/RegistroEmpleado2",
    element: <RegistroEmpleado2/>
  },
  {
    path:"/RegistroEmpleado3",
    element:<RegistroEmpleado3/>
  },
  {
    path:"/Inicio",
    element:<Inicio/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
