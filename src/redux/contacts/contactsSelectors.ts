import { RootState } from '../store';

export const contactsSelector = (state: RootState) =>
  [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));
