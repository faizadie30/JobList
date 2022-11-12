import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JobList from '../features/Job/JobList';
import JobDetail from '../features/Job/JobDetail';

function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <JobList />,
    },
    {
      path: '/:jobId',
      element: <JobDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
