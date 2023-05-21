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

  const contacts = useAppSelector(contactsSelector);

  const handleGetContacts = () => dispatch(getContacts());
  const handleCreateContact = (contact: NewContactAttributes) =>
    dispatch(createContact(contact));
  const handleDeleteContact = (id: string) => dispatch(deleteContact(id));
  const handleEditContact = (data: ContactAttributes) =>
    dispatch(editContact(data));

  return {
    contacts,
    getContacts: handleGetContacts,
    createContact: handleCreateContact,
    deleteContact: handleDeleteContact,
    editContact: handleEditContact,
  };
}
