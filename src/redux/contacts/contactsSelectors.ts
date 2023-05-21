import { RootState } from '../store';

export function contactsSelector(state: RootState) {
  return [...state.contacts.items].sort((a, b) => a.name.localeCompare(b.name));
}
