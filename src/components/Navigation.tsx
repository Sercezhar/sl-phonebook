import { NavigationProps } from '@/types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function Navigation({ closeMenu }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col lg:flex-row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 mr-6 font-semibold lg:font-medium text-3xl lg:text-base  after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-sky-400 lg:after:bg-white',
                isActive
                  ? 'after:block text-sky-400 lg:text-white'
                  : 'after:hidden text-gray-700 lg:text-white'
              )
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 font-semibold lg:font-medium text-3xl lg:text-base  after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-sky-400 lg:after:bg-white',
                isActive
                  ? 'after:block text-sky-400 lg:text-white'
                  : 'after:hidden text-gray-700 lg:text-white'
              )
            }
            onClick={closeMenu}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
