import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 mr-6 font-medium text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white',
                isActive ? 'after:block' : 'after:hidden'
              )
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 font-medium text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white',
                isActive ? 'after:block' : 'after:hidden'
              )
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
