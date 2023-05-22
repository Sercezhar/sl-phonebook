import { useAppDispatch, useAppSelector } from '@/redux/constants';
import {
  createContact,
  deleteContact,
  getContacts,
  editContact,
} from '@/redux/contacts/contactsOperations';
import { NewContactAttributes, ContactAttributes } from '@/types';
import { contactsSelector } from '@/redux/contacts/contactsSelectors';

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
