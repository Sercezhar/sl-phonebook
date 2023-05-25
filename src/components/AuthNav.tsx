import { NavigationProps } from '@/types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function AuthNav({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Authorization navigation">
      <ul className="flex">
        <li>
          <NavLink
            to="login"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 mr-6 font-semibold lg:font-medium text-xl lg:text-base  after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-sky-400 lg:after:bg-white',
                isActive
                  ? 'after:block text-sky-400 lg:text-white'
                  : 'after:hidden text-gray-700 lg:text-white'
              )
            }
            onClick={closeMenu}
          >
            Log in
          </NavLink>
        </li>

        <li>
          <NavLink
            to="signup"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 font-semibold lg:font-medium text-xl lg:text-base  after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-sky-400 lg:after:bg-white',
                isActive
                  ? 'after:block text-sky-400 lg:text-white'
                  : 'after:hidden text-gray-700 lg:text-white'
              )
            }
            onClick={closeMenu}
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
