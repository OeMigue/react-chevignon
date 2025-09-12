import { Children } from "react";
import Productos from "../pages/Productos";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PaginaProducto from "../pages/PaginaProducto";

export let routerApp = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "productos/",
                element: <Productos />,
                children: [
                    {
                        path: "paginaproductos",
                        element: <PaginaProducto />
                    }
                ]
                
            },
            {
                path: "login",
                element: <Login />,
            },
        ]

    }
]