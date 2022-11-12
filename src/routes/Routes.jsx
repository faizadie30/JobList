import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JobList from '../features/Job/JobList';

function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <JobList />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
