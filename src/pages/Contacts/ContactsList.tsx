import Loader from '@/components/Loader';
import { useContacts } from '@/hooks/useContacts';
import { filterSelector } from '@/redux/filter/filterSelectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';

function ContactsList() {
  const [clickedItemId, setClickedItemId] = useState<string | null>(null);
  const { contacts, isLoading, getContacts } = useContacts();

  const filter = useSelector(filterSelector);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    getContacts();
  }, []);

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
                isMenuVisible={clickedItemId === id}
                toggleMenu={() =>
                  setClickedItemId(prev => (prev === id ? null : id))
                }
              />
            ))
          ) : (
            <li className="font-medium p-4 text-lg text-center text-gray-500">
              No contacts found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default ContactsList;
