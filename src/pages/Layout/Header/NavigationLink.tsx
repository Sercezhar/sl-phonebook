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
          'relative flex items-center py-4 text-3xl font-semibold transition-colors before:absolute before:left-1/2 before:top-1/2 before:h-[60%] before:w-[130%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded before:bg-white before:opacity-0 before:transition-opacity before:content-[""] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-white after:content-[""] hover:text-sky-400 hover:before:opacity-100 lg:text-base lg:font-medium',
          isActive
            ? 'text-sky-400 after:block max-lg:fill-sky-400 lg:text-white'
            : 'text-gray-700 after:hidden max-lg:fill-gray-500 lg:text-white'
        )
      }
      onClick={closeMenu}
    >
      <span className="z-10">{children}</span>
    </NavLink>
  );
}

export default NavigationLink;
