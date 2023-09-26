
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//rutas
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import RegistroEmpleado from './pages/RegistroEmpleado/RegistroEmpleado';
import RegistroEmpleador from './pages/RegistroEmpleador/RegistroEmpleador';
//Elementos
import './index.css';
const router = createBrowserRouter([{
    path: "/Aarkitex",
    element: <Home/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Aarkitex/RegistroEmpleado",
    element: <RegistroEmpleado/>
  },
  {
    path: "/Aarkitex/RegistroEmpleador",
    element: <RegistroEmpleador/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
