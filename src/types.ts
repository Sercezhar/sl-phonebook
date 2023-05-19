import { LazyExoticComponent } from 'react';

export interface UserAttributes {
  name: string | null;
  email: string | null;
}

export interface LogInAttributes {
  email: string;
  password: string;
}

export interface RegisterAttributes {
  name: string;
  email: string;
  password: string;
}

export interface ConfidentialRouteProps {
  component: LazyExoticComponent<() => JSX.Element>;
  redirectTo?: string;
}
