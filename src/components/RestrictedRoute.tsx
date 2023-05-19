import { useAuth } from '@/hooks/useAuth';
import { ConfidentialRouteProps } from '@/types';
import { Navigate } from 'react-router-dom';

function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}: ConfidentialRouteProps) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}

export default RestrictedRoute;
