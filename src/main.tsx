import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

if (document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  )
}