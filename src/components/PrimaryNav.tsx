import { NavigationProps } from '@/types/index';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import NavigationLink from './NavigationLink';

function PrimaryNav({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex lg:gap-x-6 flex-col lg:flex-row">
        <li>
          <NavigationLink to="/" closeMenu={closeMenu}>
            <HiHome size={26} className="lg:hidden mr-2 active" />
            Home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="contacts" closeMenu={closeMenu}>
            <HiUserGroup size={26} className="lg:hidden mr-2 active" />
            Contacts
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
