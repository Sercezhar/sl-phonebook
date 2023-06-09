import { NavigationProps } from '@/types';
import { HiIdentification, HiLogin } from 'react-icons/hi';
import NavigationLink from './NavigationLink';

function AuthNav({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Authorization navigation">
      <ul className="flex flex-col lg:flex-row lg:gap-x-6">
        <li>
          <NavigationLink to="login" closeMenu={closeMenu}>
            <HiLogin size={26} className="mr-3 fill-inherit lg:hidden" />
            Log in
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="signup" closeMenu={closeMenu}>
            <HiIdentification
              size={26}
              className="mr-3 fill-inherit lg:hidden"
            />
            Sign up
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
