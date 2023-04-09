import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Assignment from './Component/Statistics/Assignment';
import Home from './Component/Home/Home';
import CategoryList from './Component/Home/CategoryList/CategoryList';
import FeaturedJob from './Component/Home/FeaturedJob/FeaturedJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <FeaturedJob></FeaturedJob>,
            loader: () => fetch('featured.json'),
          },
        ],
      },

      {
        path: 'statistics',
        element: <Assignment></Assignment>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
