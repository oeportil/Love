import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root'
import Album from './Album'
import NotFound from './NotFound'
import Principal from './Principal'
import AboutUs from './AboutUs'
import Songs from './Songs'
import Somethings from './Somethings'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Principal/>
      },
      {
        path: "/album",
        element: <Album/>
      },
      {
        path: "/nosotros",
        element: <AboutUs/>
      },
      {
        path: "/canciones",
        element: <Songs/>
      },
      {
        path: "/curiosidades",
        element: <Somethings/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
