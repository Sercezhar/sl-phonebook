import PrivateRoute from '@/components/PrivateRoute';
import RestrictedRoute from '@/components/RestrictedRoute';
import ErrorPage from '@/pages/ErrorPage';
import Layout from '@/pages/Layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Homepage = lazy(() => import('@/pages/Homepage'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const LogIn = lazy(() => import('@/pages/LogIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));

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
          element: <PrivateRoute component={Contacts} redirectTo="/login" />,
        },
        {
          path: 'login',
          element: <RestrictedRoute component={LogIn} redirectTo="/contacts" />,
        },
        {
          path: 'signup',
          element: (
            <RestrictedRoute component={SignUp} redirectTo="/contacts" />
          ),
        },
      ],
    },
  ],
  { basename: '/' }
);
