import { useAuth } from '@/hooks/useAuth';
import { ConfidentialRouteProps } from '@/types';
import { Navigate } from 'react-router-dom';

function PrivateRoute({
  component: Component,
  redirectTo = '/',
}: ConfidentialRouteProps) {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect: boolean = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}

export default PrivateRoute;
