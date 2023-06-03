import { ContactAttributes } from './contact';

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
