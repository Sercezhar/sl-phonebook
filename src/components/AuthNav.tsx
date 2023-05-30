import { NavigationProps } from '@/types';
import { HiIdentification, HiLogin } from 'react-icons/hi';
import NavigationLink from './NavigationLink';

function AuthNav({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Authorization navigation">
      <ul className="flex lg:gap-x-6 flex-col lg:flex-row">
        <li>
          <NavigationLink to="login" closeMenu={closeMenu}>
            <HiLogin size={26} className="lg:hidden mr-2 active" />
            Log in
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="signup" closeMenu={closeMenu}>
            <HiIdentification size={26} className="lg:hidden mr-2 active" />
            Sign up
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
