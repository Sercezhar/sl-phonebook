import Loader from '@/components/Loader';
import { useContactsStatus } from '@/hooks/useContactsStatus';
import ContactsItemActions from './ContactsItemActions';

interface ContactItemProps {
  id: string;
  name: string;
  number: string;
  isMenuVisible: boolean;
  toggleMenu: () => void;
  setIsModalOpen: (modalType: string) => void;
}

function ContactsItem({
  id,
  name,
  number,
  isMenuVisible,
  toggleMenu,
  setIsModalOpen,
}: ContactItemProps) {
  const { isDeleting } = useContactsStatus();

  return (
    <li className="grid grid-cols-[50px_auto_40px] border-b py-2 text-sm font-medium last:border-b-0">
      <span className="pointer-events-none flex h-[40px] w-[40px] select-none items-center justify-center rounded-full border-2 border-sky-400 bg-sky-50 text-xl capitalize text-sky-400">
        {name[0]}
      </span>

      <div className="flex flex-col overflow-hidden whitespace-nowrap">
        <p className="overflow-hidden text-ellipsis text-gray-600">{name}</p>
        <p className="overflow-hidden text-ellipsis">{number}</p>
      </div>

      <div className="flex items-center justify-center">
        {isDeleting && isMenuVisible ? (
          <Loader
            position="static"
            background="none"
            size="1.5rem"
            borderWidth="4px"
          />
        ) : (
          <ContactsItemActions
            id={id}
            isMenuVisible={isMenuVisible}
            toggleMenu={toggleMenu}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </li>
  );
}

export default ContactsItem;
