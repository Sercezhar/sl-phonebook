import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <nav aria-label="Authorization navigation">
      <ul className="flex">
        <li>
          <NavLink
            to="login"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 mr-6 font-medium text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white',
                isActive ? 'after:block' : 'after:hidden'
              )
            }
          >
            Sign In
          </NavLink>
        </li>

        <li>
          <NavLink
            to="signup"
            className={({ isActive }) =>
              classNames(
                'relative inline-block py-4 font-medium text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white',
                isActive ? 'after:block' : 'after:hidden'
              )
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
