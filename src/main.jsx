import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Statistics from './Component/Statistics/Statistics';
import Home from './Component/Home/Home';

import FeaturedJob from './Component/Home/FeaturedJob/FeaturedJob';
import Error from './Component/Error/Error';
import Blog from './Component/Blog/Blog';

import JobDetails from './Component/JobDetails/JobDetails';
import AppliedJob from './Component/AppliedJob/AppliedJob';

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
            loader: () => fetch('/featured.json'),
          },
        ],
      },

      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: '/job/:jobId',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('/featured.json'),
      },
    ],
  },

  {
    path: '*',
    element: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
