import { ContactAttributes } from './contact';
import { UserAttributes } from './user';

export type Status =
  | 'idle'
  | 'fetching'
  | 'creating'
  | 'deleting'
  | 'updating'
  | 'fulfilled'
  | 'rejected';

export interface ContactsState {
  items: ContactAttributes[];
  status: Status;
  error: string | null;
}

export interface authState {
  user: UserAttributes;
  token: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export interface AuthorizedUser {
  user: {
    name: string;
    email: string;
  };
  token: string;
}