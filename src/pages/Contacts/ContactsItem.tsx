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
  return (
    <li className="grid grid-cols-[50px_auto_40px] py-2 font-medium text-sm border-b last:border-b-0">
      <span className="flex items-center justify-center w-[40px] h-[40px] text-xl text-sky-400 capitalize bg-sky-50 border-2 border-sky-400 rounded-full select-none pointer-events-none">
        {name[0]}
      </span>

      <div className="flex flex-col whitespace-nowrap overflow-hidden">
        <p className="text-gray-600 text-ellipsis overflow-hidden">{name}</p>
        <p className="text-ellipsis overflow-hidden">{number}</p>
      </div>

      <div className="flex justify-end">
        <ContactsItemActions
          id={id}
          isMenuVisible={isMenuVisible}
          toggleMenu={toggleMenu}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </li>
  );
}

export default ContactsItem;
