import Loader from '@/components/Loader';
import EditContactModal from '@/components/ui/modals/EditContactModal';
import Modal from '@/components/ui/modals/Modal';
import { useContacts } from '@/hooks/useContacts';
import { filterSelector } from '@/redux/filter/filterSelectors';
import { ContactAttributes } from '@/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';

function ContactsList() {
  const { contacts, isLoading, getContacts, deleteContact } = useContacts();

  useEffect(() => {
    getContacts();
  }, []);

  const [clickedContact, setClickedContact] =
    useState<ContactAttributes | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

  const filter = useSelector(filterSelector);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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

  return (
    <div className="relative">
      {isLoading ? (
        <div className="relative h-[300px]">
          <Loader />
        </div>
      ) : (
        <ul className="h-[350px] overflow-y-auto">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <ContactsItem
                key={id}
                id={id}
                name={name}
                number={number}
                isMenuVisible={clickedContact?.id === id}
                toggleMenu={() => handleSetClickedContact({ id, name, number })}
                setIsModalOpen={setIsModalOpen}
              />
            ))
          ) : (
            <li className="font-medium p-4 text-lg text-center text-gray-500">
              No contacts found
            </li>
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
      />
    </div>
  );
}

export default ContactsList;
