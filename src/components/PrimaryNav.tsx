import { NavigationProps } from '@/types';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import NavigationLink from './NavigationLink';

function PrimaryNav({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex lg:gap-x-6 flex-col lg:flex-row">
        <li>
          <NavigationLink to="/" closeMenu={closeMenu}>
            <HiHome size={26} className="lg:hidden mr-3 fill-inherit" />
            Home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="contacts" closeMenu={closeMenu}>
            <HiUserGroup size={26} className="lg:hidden mr-3 fill-inherit" />
            Contacts
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
