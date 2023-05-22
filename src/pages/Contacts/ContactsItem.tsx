import ContactsItemActions from './ContactsItemActions';

interface ContactItemProps {
  id: string;
  name: string;
  number: string;
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

function ContactsItem({
  id,
  name,
  number,
  isMenuVisible,
  toggleMenu,
}: ContactItemProps) {
  return (
    <li className="flex items-center justify-between py-1 font-medium text-sm border-b last:border-b-0">
      <div className="flex">
        <span className="flex items-center justify-center mr-2 w-[40px] h-[40px] text-lg text-white capitalize bg-sky-400 rounded-full select-none pointer-events-none">
          {name.slice(0, 1)}
        </span>

        <div className="max-w-[310px] whitespace-nowrap">
          <p className="text-gray-600 text-ellipsis overflow-hidden">{name}</p>
          <p className="text-ellipsis overflow-hidden">{number}</p>
        </div>
      </div>

      <ContactsItemActions
        id={id}
        isMenuVisible={isMenuVisible}
        toggleMenu={toggleMenu}
      />
    </li>
  );
}

export default ContactsItem;
