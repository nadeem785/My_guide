import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Roots from './Roots'
import Login from './Login'
import Guides from './Guides'
import Navbar from './Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
  
  const router= createBrowserRouter([{
    path: '/',element:<Roots/>,
    children:[{
      path:'/',element:<Login/>
    },
    {
      path:'/guide',
      element:<Guides/>
    }
  ]
  }])

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
