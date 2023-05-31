import { NavigationProps } from '@/types';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import NavigationLink from './NavigationLink';

function PrimaryNav({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col lg:flex-row lg:gap-x-6">
        <li>
          <NavigationLink to="/" closeMenu={closeMenu}>
            <HiHome size={26} className="mr-3 fill-inherit lg:hidden" />
            Home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="contacts" closeMenu={closeMenu}>
            <HiUserGroup size={26} className="mr-3 fill-inherit lg:hidden" />
            Contacts
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
