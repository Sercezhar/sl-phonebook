import Layout from '@/pages/Layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Homepage = lazy(() => import('@/pages/Homepage'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const LogIn = lazy(() => import('@/pages/LogIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'contacts',
          element: <Contacts />,
        },
        {
          path: 'login',
          element: <LogIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
      ],
    },
  ],
  { basename: '/' }
);
