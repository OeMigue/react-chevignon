import { Children } from "react";
import Productos from "../pages/Productos";
import Home from "../pages/Home";
import Login from "../pages/LoginRegistro";
import PaginaProducto from "../pages/PaginaProducto";

export let routerApp = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "productos/",
        element: <Productos />,
      },
      {
        path: "productos/paginaproductos/:id",
        element: <PaginaProducto />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];
