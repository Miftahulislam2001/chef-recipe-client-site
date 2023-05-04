import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routes from './routes/Routes'
import { ApiDataProvider } from './provider/ApiDataProvider'
import { AuthProvider } from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ApiDataProvider>
        <RouterProvider router={Routes}/>
      </ApiDataProvider>
    </AuthProvider>    
    <ToastContainer/>
  </React.StrictMode>
)
