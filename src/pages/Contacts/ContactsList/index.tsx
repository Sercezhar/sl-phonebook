import Modal from '@/components/ui/Modal';
import { useContactsStatus } from '@/hooks/useContactsStatus';
import CreateContactModal from '@/pages/Contacts/ContactsList/modals/CreateContactModal';
import EditContactModal from '@/pages/Contacts/ContactsList/modals/EditContactModal';
import {
  deleteContact,
  getContacts,
} from '@/redux/contacts/contactsOperations';
import { contactsSelector } from '@/redux/contacts/contactsSelectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ContactAttributes } from '@/types/contact';
import { useEffect, useMemo, useState } from 'react';
import ContactsItem from './ContactsItem';
import ContactsItemSkeleton from './ContactsItemSkeleton';
import CreateContactButton from './CreateContactButton';
import Notification from './Notification';

interface ContactsListProps {
  filter: string;
}

function ContactsList({ filter }: ContactsListProps) {
  const [clickedContact, setClickedContact] =
    useState<ContactAttributes | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const contacts: ContactAttributes[] = useAppSelector(contactsSelector);
  const { isFetching, isUpdating } = useContactsStatus();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, contacts]);

  function handleSetClickedContact(contact: ContactAttributes) {
    setClickedContact(prev =>
      prev && prev.id === contact.id ? null : contact
    );
  }

  function handleDeleteContact(id: string | undefined) {
    if (!id) {
      return;
    }

    dispatch(deleteContact(id));
    setIsModalOpen(null);
  }

  function handleModalOnClose() {
    setClickedContact(null);
    setIsModalOpen(null);
  }

  return (
    <div>
      {isFetching ? (
        <ul>
          {[...Array(6).keys()].map(i => (
            <ContactsItemSkeleton key={i} />
          ))}
        </ul>
      ) : contacts.length === 0 ? (
        <Notification
          message="The contact list is empty"
          image="bg-contacts-empty"
        />
      ) : filteredContacts.length === 0 ? (
        <Notification
          message="No contacts found"
          image="bg-contacts-not-found"
        />
      ) : (
        <ul className="h-full lg:h-[350px] lg:overflow-y-auto 2xl:h-[520px]">
          {filteredContacts.map(({ id, name, number }) =>
            isUpdating && clickedContact?.id === id ? (
              <ContactsItemSkeleton key={id} />
            ) : (
              <ContactsItem
                key={id}
                id={id}
                name={name}
                number={number}
                isMenuVisible={clickedContact?.id === id}
                toggleMenu={() => handleSetClickedContact({ id, name, number })}
                setIsModalOpen={setIsModalOpen}
              />
            )
          )}
        </ul>
      )}

      <Modal
        isModalOpen={isModalOpen === 'delete'}
        onClose={() => handleModalOnClose()}
        onConfirm={() => handleDeleteContact(clickedContact!.id)}
      />
      <EditContactModal
        isModalOpen={isModalOpen === 'edit'}
        contact={clickedContact}
        onClose={() => handleModalOnClose()}
        closeModal={() => setIsModalOpen(null)}
        closeActions={() => setClickedContact(null)}
      />
      <CreateContactModal
        isModalOpen={isModalOpen === 'create'}
        onClose={() => handleModalOnClose()}
      />

      <CreateContactButton openModal={() => setIsModalOpen('create')} />
    </div>
  );
}

export default ContactsList;
