import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page2 from "./Page2"
import Page3 from './Page3';
import {DataProvider} from "./context/DataContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Page2",
    element: <Page2/>,
  },
  {
    path: "/Page3",
    element: <Page3/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
)
