import classNames from 'classnames';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavigationLinkProps {
  to: string;
  closeMenu?: () => void;
  children: ReactNode;
}

function NavigationLink({ to, closeMenu, children }: NavigationLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(
          'relative flex items-center py-4 font-semibold lg:font-medium text-3xl lg:text-base after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white',
          isActive
            ? 'after:block text-sky-400 lg:text-white max-lg:fill-sky-400'
            : 'after:hidden text-gray-700 lg:text-white max-lg:fill-gray-500'
        )
      }
      onClick={closeMenu}
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
