import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home.jsx'
import Skills from './components/skills.jsx'
import Experience from './components/experience.jsx'
import Portfolio from './components/portfolio.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='skills' element={<Skills />}/>
      <Route path='experience' element={<Experience />}/>
      <Route path='portfolio' element={<Portfolio />}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
