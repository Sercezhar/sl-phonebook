import { LazyExoticComponent } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

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

export interface NewContactAttributes {
  name: string;
  number: string;
}

export interface ContactAttributes {
  id: string;
  name: string;
  number: string;
}
