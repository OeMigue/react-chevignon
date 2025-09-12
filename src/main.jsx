import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerApp } from "./routes/routerApp";
import './index.css'
import Productos from './pages/Productos';
import Home from './pages/Home';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routerApp)} />
  </StrictMode>,
)
