import CreateContactButton from '@/components/ui/buttons/CreateContactButton';
import CreateContactModal from '@/components/ui/modals/CreateContactModal';
import EditContactModal from '@/components/ui/modals/EditContactModal';
import Modal from '@/components/ui/modals/Modal';
import { useContacts } from '@/hooks/useContacts';
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

  const { contacts, isLoading, getContacts, deleteContact } = useContacts();

  useEffect(() => {
    getContacts();
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

    deleteContact(id);
    setIsModalOpen(null);
  }

  function handleModalOnClose() {
    setClickedContact(null);
    setIsModalOpen(null);
  }

  if (isLoading) {
    return <ContactsItemSkeleton />;
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
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={number}
            isMenuVisible={clickedContact?.id === id}
            toggleMenu={() => handleSetClickedContact({ id, name, number })}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
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
