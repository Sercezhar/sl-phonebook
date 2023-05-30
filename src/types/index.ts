import { LazyExoticComponent } from 'react';

export interface ConfidentialRouteProps {
  component: LazyExoticComponent<() => JSX.Element>;
  redirectTo?: string;
}

export interface NavigationProps {
  closeMenu?: () => void;
}
