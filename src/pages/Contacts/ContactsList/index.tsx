import CreateContactButton from '@/components/ui/buttons/CreateContactButton';
import CreateContactModal from '@/components/ui/modals/CreateContactModal';
import EditContactModal from '@/components/ui/modals/EditContactModal';
import Modal from '@/components/ui/modals/Modal';
import { useContactsStatus } from '@/hooks/useContactsStatus';
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

  if (isFetching) {
    const skeletons = [...Array(6).keys()];

    return (
      <ul>
        {skeletons.map(i => (
          <ContactsItemSkeleton key={i} />
        ))}
      </ul>
    );
  }

  if (contacts.length === 0) {
    return <Notification message="The contact list is empty" />;
  }

  if (filteredContacts.length === 0) {
    return <Notification message="No contacts found" />;
  }

  return (
    <div>
      <ul className="h-full lg:h-[350px] lg:overflow-y-auto">
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
