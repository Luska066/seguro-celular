import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import SectionHomeMain from './component/pages/Home/SectionHomeMain.jsx';
import CoberturaMain from './component/pages/Cobertura/CoberturaMain.jsx';
import VantagemMain from './component/pages/Vantagem/VantagemMain.jsx';
import DuvidasMain from './component/pages/Duvidas/DuvidasMain.jsx';
import CorretorMain from './component/pages/Corretor/CorretorMain.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SectionHomeMain/>,
  },
  {
    path: "/seguro-celular/vantagens",
    element: <VantagemMain/>,
  },
  {
    path: "/seguro-celular/coberturas",
    element: <CoberturaMain/>,
  },
  {
    path: "/seguro-celular/duvidas-frequentes",
    element: <DuvidasMain/>,
  },
  {
    path: "/seguro-celular/localize-um-corretor",
    element:<CorretorMain/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
