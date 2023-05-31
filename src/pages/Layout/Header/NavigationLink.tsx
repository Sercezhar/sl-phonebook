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
          'relative flex items-center py-4 text-3xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-white after:content-[""] lg:text-base lg:font-medium',
          isActive
            ? 'text-sky-400 after:block max-lg:fill-sky-400 lg:text-white'
            : 'text-gray-700 after:hidden max-lg:fill-gray-500 lg:text-white'
        )
      }
      onClick={closeMenu}
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
