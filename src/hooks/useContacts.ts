import {
  createContact,
  deleteContact,
  editContact,
  getContacts,
} from '@/redux/contacts/contactsOperations';
import { contactsSelector } from '@/redux/contacts/contactsSelectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ContactAttributes, NewContactAttributes } from '@/types/contact';

export function useContacts() {
  const dispatch = useAppDispatch();

  const contacts: ContactAttributes[] = useAppSelector(contactsSelector);
  const isLoading: boolean = useAppSelector(state => state.contacts.isLoading);

  const handleGetContacts = () => dispatch(getContacts());
  const handleCreateContact = (contact: NewContactAttributes) =>
    dispatch(createContact(contact));
  const handleDeleteContact = (id: string) => dispatch(deleteContact(id));
  const handleEditContact = (data: ContactAttributes) =>
    dispatch(editContact(data));

  return {
    contacts,
    isLoading,
    getContacts: handleGetContacts,
    createContact: handleCreateContact,
    deleteContact: handleDeleteContact,
    editContact: handleEditContact,
  };
}
