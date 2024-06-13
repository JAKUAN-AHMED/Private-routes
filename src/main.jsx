import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Component/Root/Root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import ProviderContext from './Component/ProviderContext/ProviderContext.jsx'
import Orders from './Component/Orders/Orders.jsx'
import PrivateRoutes from './PrivetRoute/PrivateRoutes.jsx'
import Deshboard from './Component/Deshboard/Deshboard.jsx'
import Profile from './Component/Profile/Profile.jsx'

const router=createBrowserRouter([
  {
    path:'',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:'/deshboard',
        element:<PrivateRoutes><Deshboard></Deshboard></PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </ProviderContext>
  </React.StrictMode>
);
