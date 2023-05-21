import { useContacts } from '@/hooks/useContacts';
import { useEffect, useState } from 'react';
import ContactsItem from './ContactsItem';

function ContactsList() {
  const [clickedItemId, setClickedItemId] = useState<string | null>(null);
  const { contacts, getContacts } = useContacts();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={number}
            isMenuVisible={clickedItemId === id}
            toggleMenu={() =>
              setClickedItemId(prev => (prev === id ? null : id))
            }
          />
        ))}
    </ul>
  );
}

export default ContactsList;
