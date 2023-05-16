import Layout from '@/pages/Layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Homepage = lazy(() => import('@/pages/Homepage'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const SignIn = lazy(() => import('@/pages/SignIn'));
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
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
      ],
    },
  ],
  { basename: '/sl-phonebook/' }
);
