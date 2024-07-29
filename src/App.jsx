import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Home from '../components/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
]);

const App = () => (
  <RouterProvider router={router}>
    <Navbar />
    <div className="content">
      <Outlet />
    </div>
  </RouterProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
